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
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
    }
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
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2000);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.muted = isMuted;
    }
  }, [isMuted]);

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

  // Thumbnail view with play button
  if (!isPlaying && !isFullscreen) {
    return (
      <div
        className={`relative group cursor-pointer ${className}`}
        onClick={handlePlay}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Thumbnail - use first frame of video */}
        {thumbnail ? (
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={url}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Fullscreen button */}
        <button
          onClick={handleFullscreen}
          className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          aria-label="Open fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>
    );
  }

  // Fullscreen modal
  if (isFullscreen) {
    return (
      <>
        {/* Placeholder to maintain layout */}
        <div className={className}>
          <video
            src={url}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
        </div>

        {/* Fullscreen overlay */}
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
      </>
    );
  }

  // Inline player view (playing)
  return (
    <div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => !isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-cover"
        muted={isMuted}
        playsInline
        onEnded={() => setIsPlaying(false)}
        onClick={() => isPlaying ? handlePause() : handlePlay()}
      />

      {/* Controls overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Center play/pause button */}
        <button
          onClick={() => isPlaying ? handlePause() : handlePlay()}
          className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          )}
        </button>
      </div>

      {/* Bottom controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
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
    </div>
  );
}
