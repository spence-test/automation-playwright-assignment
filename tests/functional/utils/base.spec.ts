import { test, expect } from "@playwright/test";
import { BasePage } from "../../pages/base.page";

test.describe("BasePage Utility Method Tests", () => {
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await basePage.navigate("/");
  });

  test("navigates to homepage and verifies page load", async ({ page }) => {
    const baseUrl =
      process.env.BASE_URL || "https://automationintesting.online/";
    await expect(page).toHaveURL(baseUrl);
  });

  test("navigates to admin path and confirms correct URL", async () => {
    await basePage.navigate("/admin");
    const url = await basePage.getCurrentUrl();
    expect(url).toContain("/admin");
  });
});
