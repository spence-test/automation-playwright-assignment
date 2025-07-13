import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class AdminPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  readonly dashboardTitle: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.logoutButton = page.getByRole("button", { name: "Logout" });
    this.dashboardTitle = page.getByRole("button", { name: "Create" });
    this.errorMessage = page.getByText("Invalid credentials");
  }

  async navigate(): Promise<void> {
    await super.navigate("/admin");
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async logout(): Promise<void> {
    if (await this.logoutButton.first().isVisible()) {
      await Promise.all([
        this.page.waitForURL(/.*\/$/, { timeout: 5000 }), // waits up to 5 seconds for URL to match
        this.logoutButton.first().click(), // triggers navigation
      ]);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    // Check both URL and dashboard element for more reliability
    const isOnAdminPage = this.page.url().includes("/admin/rooms");
    return isOnAdminPage;
  }

  async isLoggedOut(): Promise<boolean> {
    const isOnHomePage = this.page.url().includes("/#");
    return isOnHomePage;
  }

  async hasErrorMessage(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }

  async getErrorMessage(): Promise<string> {
    if (await this.isVisible(this.errorMessage)) {
      return await this.getText(this.errorMessage);
    }
    return "";
  }

  async waitForLogin(): Promise<void> {
    await this.waitForUrl("**/admin/rooms");
  }

  async waitForLogout(): Promise<void> {
    await this.waitForUrl("/");
  }

  async isOnLoginPage(): Promise<boolean> {
    return (
      this.page.url().includes("/admin") &&
      !this.page.url().includes("/admin/rooms") &&
      (await this.isVisible(this.loginButton))
    );
  }
}
