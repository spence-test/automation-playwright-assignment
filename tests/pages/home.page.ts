import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    // this.hotelName = page.locator("h1");
    // this.contactForm = page.locator("form");
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.phoneInput = page.locator('input[name="phone"]');
    this.subjectInput = page.locator('input[name="subject"]');
    this.messageInput = page.locator('textarea[name="message"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator(".alert-success");
    this.errorMessage = page.locator(".alert-error");
  }

  async fillContactForm(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) {
    await this.fill(this.nameInput, data.name);
    await this.fill(this.emailInput, data.email);
    await this.fill(this.phoneInput, data.phone);
    await this.fill(this.subjectInput, data.subject);
    await this.fill(this.messageInput, data.message);
  }

  async submitContactForm() {
    await this.click(this.submitButton);
  }
}
