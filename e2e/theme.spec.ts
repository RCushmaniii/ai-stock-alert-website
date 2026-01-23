import { test, expect } from "@playwright/test";

test.describe("Theme Switching", () => {
  test("can toggle between light and dark themes", async ({ page }) => {
    await page.goto("/en");

    // Wait for hydration
    await page.waitForTimeout(500);

    const themeButton = page.getByRole("button", { name: /switch to (light|dark) mode/i });
    await expect(themeButton).toBeVisible();

    // Get initial theme state
    const html = page.locator("html");
    const initialClass = await html.getAttribute("class");
    const isDarkInitially = initialClass?.includes("dark");

    // Click theme toggle
    await themeButton.click();
    await page.waitForTimeout(300);

    // Verify theme changed
    const newClass = await html.getAttribute("class");
    if (isDarkInitially) {
      expect(newClass).not.toContain("dark");
    } else {
      expect(newClass).toContain("dark");
    }

    // Toggle back
    await themeButton.click();
    await page.waitForTimeout(300);

    const finalClass = await html.getAttribute("class");
    expect(finalClass?.includes("dark")).toBe(isDarkInitially);
  });
});
