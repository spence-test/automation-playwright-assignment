import { test, expect } from "@playwright/test";
import { BookingPage } from "../../pages/booking.page";

test.describe("Room Booking Tests", () => {
  let bookingPage: BookingPage;

  test.beforeEach(async ({ page }) => {
    bookingPage = new BookingPage(page);
    await bookingPage.navigate();
  });

  test("should complete full booking flow with default dates", async ({
    page,
  }) => {
    // Step 1: Check room availability with default dates
    await bookingPage.checkAvailability();

    // Step 2: Select and book first available room
    await bookingPage.selectFirstAvailableRoom();

    // Step 3: Verify we're on booking page showing "Book This Room"
    await expect(bookingPage.bookingConfirmation).toBeVisible();

    // Step 4: Click Reserve Now button
    await bookingPage.reserveNowButton.click();

    // Step 5: Fill guest details on the next page
    await bookingPage.fillGuestDetails();

    // Step 6: Complete booking and verify confirmation
    await expect(bookingPage.finalConfirmation).toBeVisible();
  });
});
