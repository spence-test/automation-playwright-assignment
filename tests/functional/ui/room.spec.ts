import { test, expect } from "@playwright/test";
import { AdminPage } from "../../pages/admin.page";
import { RoomsPage } from "../../pages/room.page";
import { TestData } from "../../fixtures/test-data";

test.describe("Room Management", () => {
  let adminPage: AdminPage;
  let roomsPage: RoomsPage;

  test.beforeEach(async ({ page }) => {
    adminPage = new AdminPage(page);
    roomsPage = new RoomsPage(page);

    await adminPage.navigate();
    await adminPage.login(
      TestData.adminCredentials.username,
      TestData.adminCredentials.password
    );
    await adminPage.waitForLogin();
  });

  test("should display room creation form", async () => {
    await expect(roomsPage.createButton).toBeVisible();
    await expect(roomsPage.roomNameInput).toBeVisible();
    await expect(roomsPage.roomTypeSelect).toBeVisible();
    await expect(roomsPage.accessibleSelect).toBeVisible();
    await expect(roomsPage.roomPriceInput).toBeVisible();
  });

  test("should create a single room successfully", async () => {
    const roomData = {
      name: "123",
      type: "Single",
      accessible: true,
      price: "100",
      features: ["WiFi", "TV"],
    };

    await roomsPage.createRoom(roomData);

    // Wait for room to be created and visible
    await expect(roomsPage.page.getByText(roomData.name)).toBeVisible();
  });
});
