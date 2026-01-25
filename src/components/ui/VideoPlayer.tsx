"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Maximize2, X, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  url: string;
  thumbnail?: string;
  className?: string;
}

export function VideoPlayer({ url, thumbnail, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((err) => {
        console.error("Video play failed:", err);
      });
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setIsFullscreen(true);
      // Sync time to fullscreen video after render
      setTimeout(() => {
        if (fullscreenVideoRef.current) {
          fullscreenVideoRef.current.currentTime = currentTime;
          fullscreenVideoRef.current.play();
        }
      }, 100);
    }
  };

  const handleCloseFullscreen = () => {
    if (fullscreenVideoRef.current && videoRef.current) {
      const currentTime = fullscreenVideoRef.current.currentTime;
      videoRef.current.currentTime = currentTime;
    }
    setIsFullscreen(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  // Sync muted state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  // Handle escape key for fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        handleCloseFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
      {/* Main player */}
      <div
        className={`relative group cursor-pointer ${className}`}
        onClick={togglePlayPause}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* Video element - always present */}
        <video
          ref={videoRef}
          src={url}
          poster={thumbnail}
          className="w-full h-full object-cover"
          muted={isMuted}
          playsInline
          preload="auto"
          onEnded={() => {
            setIsPlaying(false);
            setHasStarted(false);
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Play button overlay - show when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Controls overlay - show on hover or when paused */}
        {hasStarted && (showControls || !isPlaying) && (
          <>
            {/* Center play/pause */}
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
                  <Pause className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </div>
            )}

            {/* Bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleFullscreen}
                  className="p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        )}

        {/* Fullscreen button on thumbnail (before first play) */}
        {!hasStarted && (
          <button
            onClick={handleFullscreen}
            className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            aria-label="Open fullscreen"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={handleCloseFullscreen}
        >
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-6xl mx-4" onClick={(e) => e.stopPropagation()}>
            <video
              ref={fullscreenVideoRef}
              src={url}
              className="w-full rounded-lg"
              controls
              autoPlay
              muted={isMuted}
              playsInline
              onEnded={handleCloseFullscreen}
            />
          </div>
        </div>
      )}
    </>
  );
}
