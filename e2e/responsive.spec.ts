import { test, expect } from "@playwright/test";

test.describe("Responsive Design", () => {
  test("mobile menu toggles correctly", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/en");

    // Desktop nav should be hidden
    const desktopNav = page.locator("nav.hidden.md\\:flex");
    await expect(desktopNav).toBeHidden();

    // Mobile menu button should be visible
    const menuButton = page.getByRole("button", { name: /toggle menu/i });
    await expect(menuButton).toBeVisible();

    // Click to open menu
    await menuButton.click();

    // Mobile nav links should now be visible
    await expect(page.getByRole("link", { name: "Features" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Download" }).first()).toBeVisible();

    // Click to close menu
    await menuButton.click();
  });

  test("hero section adapts to mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/en");

    // Hero should still be visible and properly laid out
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByRole("link", { name: /download free/i }).first()).toBeVisible();
  });

  test("pricing cards stack on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/en/pricing");

    // All pricing cards should be visible
    await expect(page.getByText("Free").first()).toBeVisible();
    await expect(page.getByText("Premium").first()).toBeVisible();
    await expect(page.getByText("Pro").first()).toBeVisible();
  });
});
