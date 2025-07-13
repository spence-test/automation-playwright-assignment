import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page";

test.describe("Home Page Tests", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test("navigates to homepage and confirms full page load", async ({
    page,
  }) => {
    await expect(page).toHaveURL(
      process.env.BASE_URL || "https://automationintesting.online/"
    );
  });

  test("displays header and navigation links", async ({ page }) => {
    const navbarNav = page.locator("#navbarNav");
    await expect(navbarNav).toBeVisible();
    await expect(navbarNav.getByRole("link", { name: "Rooms" })).toBeVisible();
    await expect(
      navbarNav.getByRole("link", { name: "Contact" })
    ).toBeVisible();
    await expect(navbarNav.getByRole("link", { name: "Admin" })).toBeVisible();
  });

  test("displays booking section inputs and button", async ({ page }) => {
    const bookingSection = page.locator("#booking");
    await expect(bookingSection).toBeVisible();

    const checkInInput = bookingSection
      .locator("div")
      .filter({ hasText: /^Check In$/ })
      .getByRole("textbox");

    const checkOutInput = bookingSection
      .locator("div")
      .filter({ hasText: /^Check Out$/ })
      .getByRole("textbox");

    const availabilityButton = bookingSection.getByRole("button", {
      name: "Check Availability",
    });

    await expect(checkInInput).toBeVisible();
    await expect(checkOutInput).toBeVisible();
    await expect(availabilityButton).toBeVisible();
  });
});
