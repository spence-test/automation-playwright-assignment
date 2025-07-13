import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly baseUrl: string;

  private static readonly DEFAULT_TIMEOUT = 10000;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = process.env.BASE_URL || "https://automationintesting.online";
  }

  async navigate(path: string = ""): Promise<void> {
    const fullUrl = `${this.baseUrl}${path.startsWith("/") ? path : "/" + path}`;
    if (process.env.DEBUG) {
      console.log(`Navigating to: ${fullUrl}`);
    }

    try {
      await this.page.goto(fullUrl, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });
      await this.waitForPageLoad();
    } catch (error) {
      console.error(`Failed to navigate to ${fullUrl}:`, error);
      throw error;
    }
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("networkidle", { timeout: 15000 });
  }

  async click(locator: Locator, options = {}): Promise<void> {
    await locator.waitFor({
      state: "visible",
      timeout: BasePage.DEFAULT_TIMEOUT,
    });
    await locator.click(options);
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.waitFor({
      state: "visible",
      timeout: BasePage.DEFAULT_TIMEOUT,
    });
    await locator.fill(""); // Clear first
    await locator.fill(value);
  }

  async scrollTo(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  async waitForElement(
    locator: Locator,
    timeout: number = BasePage.DEFAULT_TIMEOUT
  ): Promise<void> {
    await locator.waitFor({ timeout });
  }

  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectText(
    locator: Locator,
    expectedText: string | RegExp
  ): Promise<void> {
    await expect(locator).toHaveText(expectedText);
  }

  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `screenshots/${name}-${Date.now()}.png`,
      fullPage: true,
    });
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async isVisible(locator: Locator): Promise<boolean> {
    try {
      return await locator.isVisible({ timeout: 5000 });
    } catch {
      return false;
    }
  }

  async waitForUrl(expected: string | RegExp, timeout = 10000): Promise<void> {
    await this.page.waitForURL(expected, { timeout });
  }

  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent()) ?? "";
  }
}
