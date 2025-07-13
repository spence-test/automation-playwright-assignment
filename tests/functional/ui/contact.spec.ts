import { test, expect } from "@playwright/test";
import { ContactPage } from "../../pages/contact.page";
import { TestData } from "../../fixtures/test-data";

test.describe("Contact Page Tests", () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
  });

  test("should display contact form fields", async () => {
    await expect(contactPage.nameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.phoneInput).toBeVisible();
    await expect(contactPage.subjectTextarea).toBeVisible();
    await expect(contactPage.messageTextarea).toBeVisible();
    await expect(contactPage.submitButton).toBeVisible();
  });

  test("should submit contact form successfully", async ({ page }) => {
    await page.goto("https://automationintesting.online/#contact");

    await page.fill("#name", TestData.contactForm.name);
    await page.fill("#email", TestData.contactForm.email);
    await page.fill("#phone", TestData.contactForm.phone);
    await page.fill("#subject", TestData.contactForm.subject);
    await page.fill("#description", TestData.contactForm.message);

    await page.getByRole("button", { name: "Submit" }).click();

    await expect(page.getByText("Thanks for getting in touch")).toBeVisible();
  });
});
