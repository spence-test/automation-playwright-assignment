import { test, expect } from "@playwright/test";

test.describe("Browser Compatibility", () => {
  test("Homepage should load correctly across browsers", async ({
    page,
    browserName,
  }) => {
    await page.goto("https://automationintesting.online");
    const title = await page.title();

    await expect(page.locator("#navbarNav")).toBeVisible();
    await expect(page.locator("#booking")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });
});
