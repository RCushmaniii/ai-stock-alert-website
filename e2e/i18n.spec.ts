import { test, expect } from "@playwright/test";

test.describe("Internationalization", () => {
  test("English homepage displays English content", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("h1")).toContainText("Never Miss");
    await expect(page.getByRole("link", { name: /download free/i }).first()).toBeVisible();
  });

  test("Spanish homepage displays Spanish content", async ({ page }) => {
    await page.goto("/es");

    await expect(page.locator("h1")).toContainText("Nunca Pierdas");
    await expect(page.getByRole("link", { name: /descargar gratis/i }).first()).toBeVisible();
  });

  test("can switch language using language switcher", async ({ page }) => {
    await page.goto("/en");

    // Click the ES button to switch to Spanish
    await page.getByRole("button", { name: /cambiar a espa/i }).click();

    // Verify URL changed to Spanish
    await expect(page).toHaveURL(/\/es/);
    await expect(page.locator("h1")).toContainText("Nunca Pierdas");
  });
});
