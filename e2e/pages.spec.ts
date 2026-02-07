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
    await expect(page.getByRole("heading", { name: /digitally signed/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /virus scanned/i })).toBeVisible();
  });
});

test.describe("Pricing Page", () => {
  test("displays all pricing tiers", async ({ page }) => {
    await page.goto("/en/pricing");

    // Check for pricing card headings (use exact match to avoid FAQ matches)
    await expect(page.getByRole("heading", { name: "Free", exact: true }).first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "Premium", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pro", exact: true })).toBeVisible();
    await expect(page.getByText("$0").first()).toBeVisible();
    await expect(page.getByText("$9.99").first()).toBeVisible();
    await expect(page.getByText("$24.99").first()).toBeVisible();
  });
});

test.describe("Contact Page", () => {
  test("displays contact form", async ({ page }) => {
    await page.goto("/en/contact");

    // Use more specific selectors for form fields
    await expect(page.getByRole("textbox", { name: /your name/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /email address/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /message/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
  });
});
