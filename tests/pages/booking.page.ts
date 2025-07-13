import { Page, Locator, expect } from "@playwright/test";

export class BookingPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly checkAvailabilityButton: Locator;
  readonly rooms: Locator;
  readonly bookNowLink: Locator;
  readonly reserveNowButton: Locator;
  readonly bookingConfirmation: Locator;
  readonly finalConfirmation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByRole("textbox", { name: "Firstname" });
    this.lastName = page.getByRole("textbox", { name: "Lastname" });
    this.email = page.getByRole("textbox", { name: "Email" });
    this.phone = page.getByRole("textbox", { name: "Phone" });
    this.checkAvailabilityButton = page.getByRole("button", {
      name: "Check Availability",
    });
    this.rooms = page.locator("#rooms");
    this.bookNowLink = this.rooms
      .first()
      .locator("a", { hasText: "Book now" })
      .first();
    this.reserveNowButton = page.getByRole("button", { name: "Reserve Now" });
    this.bookingConfirmation = page.getByText("Book This Room");
    this.finalConfirmation = page.getByText("Booking Confirmed");
  }

  async navigate() {
    await this.page.goto("https://automationintesting.online/");
    // Wait for page to load completely
    await this.page.waitForLoadState("networkidle");
  }

  async navigateToBookingSection() {
    await this.page.goto("https://automationintesting.online/#booking");
    await this.page.waitForLoadState("networkidle");
  }

  async fillGuestDetails() {
    // Wait for form to be visible
    await expect(this.firstName).toBeVisible();

    await this.firstName.fill("Automation");
    await this.lastName.fill("Tester");
    await this.email.fill("test@automation.com");
    await this.phone.fill("01234567890");

    // Click Reserve Now after filling details
    await this.reserveNowButton.click();
  }

  async checkAvailability() {
    await expect(this.checkAvailabilityButton).toBeVisible();
    await this.checkAvailabilityButton.click();
    // Wait for rooms to load
    await expect(this.bookNowLink).toBeVisible({ timeout: 10000 });
  }

  async selectFirstAvailableRoom() {
    // Click book now for first available room
    await this.bookNowLink.click();
    await this.page.waitForLoadState("networkidle");
  }

  async bookFirstAvailableRoom() {
    await this.selectFirstAvailableRoom();
    await expect(this.bookingConfirmation).toHaveText("Book This Room");
    await this.reserveNowButton.click();
  }

  async completeBookingFlow() {
    await this.checkAvailability();
    await this.selectFirstAvailableRoom();
    await expect(this.bookingConfirmation).toHaveText("Book This Room");
    await this.reserveNowButton.click();
    await this.fillGuestDetails();
    await expect(this.finalConfirmation).toContainText("Booking Confirmed");
  }
}
