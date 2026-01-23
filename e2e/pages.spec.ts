import { test, expect } from "@playwright/test";

test.describe("Page Rendering", () => {
  const pages = [
    { path: "/en", title: "Home" },
    { path: "/en/features", title: "Features" },
    { path: "/en/download", title: "Download" },
    { path: "/en/pricing", title: "Pricing" },
    { path: "/en/contact", title: "Contact" },
    { path: "/es", title: "Home (Spanish)" },
    { path: "/es/features", title: "Features (Spanish)" },
    { path: "/es/download", title: "Download (Spanish)" },
    { path: "/es/pricing", title: "Pricing (Spanish)" },
    { path: "/es/contact", title: "Contact (Spanish)" },
  ];

  for (const { path, title } of pages) {
    test(`${title} page renders without errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));

      await page.goto(path);

      // Verify page has content
      await expect(page.locator("header")).toBeVisible();
      await expect(page.locator("main, section").first()).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();

      // Verify no JavaScript errors
      expect(errors).toHaveLength(0);
    });
  }
});

test.describe("Download Page", () => {
  test("displays download button and security card", async ({ page }) => {
    await page.goto("/en/download");

    // Check download button exists
    await expect(page.getByRole("link", { name: /download for windows/i })).toBeVisible();

    // Check security card exists
    await expect(page.getByText(/safe.*secure/i)).toBeVisible();
    await expect(page.getByText(/digitally signed/i)).toBeVisible();
    await expect(page.getByText(/virus scanned/i)).toBeVisible();
  });
});

test.describe("Pricing Page", () => {
  test("displays all pricing tiers", async ({ page }) => {
    await page.goto("/en/pricing");

    await expect(page.getByText("Free")).toBeVisible();
    await expect(page.getByText("Premium")).toBeVisible();
    await expect(page.getByText("Pro")).toBeVisible();
    await expect(page.getByText("$0")).toBeVisible();
    await expect(page.getByText("$9.99")).toBeVisible();
    await expect(page.getByText("$24.99")).toBeVisible();
  });
});

test.describe("Contact Page", () => {
  test("displays contact form", async ({ page }) => {
    await page.goto("/en/contact");

    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /send/i })).toBeVisible();
  });
});
