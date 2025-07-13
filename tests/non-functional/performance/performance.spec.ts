import { test, expect } from "@playwright/test";

test("homepage should load under 5 seconds", async ({ page }) => {
  const start = Date.now();
  await page.goto("https://automationintesting.online");
  const duration = Date.now() - start;

  expect(duration).toBeLessThan(5000);
});
