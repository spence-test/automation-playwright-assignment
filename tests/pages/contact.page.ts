import { Page, Locator } from "@playwright/test";

export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectTextarea: Locator;
  readonly messageTextarea: Locator;
  readonly submitButton: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("#email");
    this.phoneInput = page.locator("#phone");
    this.subjectTextarea = page.locator("#subject");
    this.messageTextarea = page.locator("#description");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.confirmationMessage = page.getByText("Thanks for getting in touch");
  }

  async navigate() {
    await this.page.goto("https://automationintesting.online/#contact");
  }

  async fillContactForm(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.phone);
    await this.subjectTextarea.fill(data.subject);
    await this.messageTextarea.fill(data.subject);
  }

  async submit() {
    await this.submitButton.click();
  }
}
