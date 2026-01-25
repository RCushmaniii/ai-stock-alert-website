import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads and displays hero section", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("h1")).toContainText("Stock alerts");
    await expect(page.getByRole("link", { name: /download/i }).first()).toBeVisible();
  });

  test("can navigate to all main pages", async ({ page }) => {
    await page.goto("/en");

    // Navigate to Features using nav link
    await page.locator("nav").getByRole("link", { name: "Features" }).click();
    await expect(page).toHaveURL(/\/en\/features/);
    await expect(page.locator("h1")).toBeVisible();

    // Navigate to Download using nav link
    await page.locator("nav").getByRole("link", { name: "Download" }).click();
    await expect(page).toHaveURL(/\/en\/download/);
    await expect(page.locator("h1")).toBeVisible();

    // Navigate to Pricing using nav link
    await page.locator("nav").getByRole("link", { name: "Pricing" }).click();
    await expect(page).toHaveURL(/\/en\/pricing/);
    await expect(page.locator("h1")).toBeVisible();

    // Navigate to Contact using nav link
    await page.locator("nav").getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/en\/contact/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("logo navigates to homepage", async ({ page }) => {
    await page.goto("/en/features");

    await page.getByRole("link", { name: /stockalert/i }).first().click();
    await expect(page).toHaveURL(/\/en$/);
  });
});
