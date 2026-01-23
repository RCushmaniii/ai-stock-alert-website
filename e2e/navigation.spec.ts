import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads and displays hero section", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("h1")).toContainText("Stock Alert");
    await expect(page.getByRole("link", { name: /download/i }).first()).toBeVisible();
  });

  test("can navigate to all main pages", async ({ page }) => {
    await page.goto("/en");

    // Navigate to Features
    await page.getByRole("link", { name: "Features" }).first().click();
    await expect(page).toHaveURL(/\/en\/features/);
    await expect(page.locator("h1")).toBeVisible();

    // Navigate to Download
    await page.getByRole("link", { name: "Download" }).first().click();
    await expect(page).toHaveURL(/\/en\/download/);
    await expect(page.locator("h1")).toBeVisible();

    // Navigate to Pricing
    await page.getByRole("link", { name: "Pricing" }).first().click();
    await expect(page).toHaveURL(/\/en\/pricing/);
    await expect(page.locator("h1")).toBeVisible();

    // Navigate to Contact
    await page.getByRole("link", { name: "Contact" }).first().click();
    await expect(page).toHaveURL(/\/en\/contact/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("logo navigates to homepage", async ({ page }) => {
    await page.goto("/en/features");

    await page.getByRole("link", { name: /stockalert/i }).first().click();
    await expect(page).toHaveURL(/\/en$/);
  });
});
