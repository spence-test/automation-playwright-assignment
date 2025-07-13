import { test, expect } from "@playwright/test";
//Visual Testing

//Issue - Page isn't fully loading to compare
/* test("Homepage should visually match", async ({ page }) => {
  await page.goto("https://automationintesting.online");
  await page.waitForTimeout(5000);
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    "homepage.png"
  );
}); */

test("Navbar visual snapshot", async ({ page }) => {
  await page.goto("https://automationintesting.online");
  const navbar = page.locator("#navbarNav");

  // Take a screenshot of the navbar and compare to snapshot (creates navbar-[browser].png)
  await expect(navbar).toHaveScreenshot("navbar.png");
});
