import { test, expect } from "@playwright/test";
import { AdminPage } from "../../pages/admin.page";
import { TestData } from "../../fixtures/test-data";

test.describe("Admin Authentication", () => {
  let adminPage: AdminPage;

  test.beforeEach(async ({ page }) => {
    adminPage = new AdminPage(page);
    await adminPage.navigate();
  });

  test("should display login form", async () => {
    await expect(adminPage.usernameInput).toBeVisible();
    await expect(adminPage.passwordInput).toBeVisible();
    await expect(adminPage.loginButton).toBeVisible();
  });

  //Could add Logout
  test("should login with valid credentials", async ({ page }) => {
    await adminPage.login(
      TestData.adminCredentials.username,
      TestData.adminCredentials.password
    );

    // Redirect and Verify Login
    await adminPage.waitForLogin();
    // expect(await adminPage.isLoggedIn()).toBeTruthy();
    await expect(page).toHaveURL(/.*\/admin\/rooms/);

    //Could add Logout Logic...
    // await adminPage.logout();
    // expect(await adminPage.isLoggedOut()).toBeTruthy();
    // await expect(page).toHaveURL(/.*\/$/);
  });

  test("should reject invalid credentials", async () => {
    await adminPage.login(
      TestData.invalidAdminCredentials.username,
      TestData.invalidAdminCredentials.password
    );

    await expect(adminPage.errorMessage).toHaveText("Invalid credentials");
  });
});
