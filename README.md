# 🎭 Playwright Automation Framework for AutomationInTesting.online

## 🧭 Overview

This project is a automation test framework built using **Playwright** and **TypeScript**. It demonstrates how to effectively automate and validate critical functionality of the [Automation in Testing](https://automationintesting.online/) website, including the booking flow and contact form, using a Page Object Model (POM) architecture.

---

## 🚀 Features

- 🔒 Type-safe codebase powered by TypeScript
- 📄 Page Object Model for clear separation of concerns
- 📸 Screenshot capture for both passed and failed tests
- 🧪 Data-driven testing using structured test data
- 🧾 Custom reporting via Playwright's HTML Reporter
- 🧩 Modular utilities and reusable test fixtures
- 🔄 CI/CD-ready with GitHub Actions
- 🌐 Cross-browser support (Chromium, Firefox, WebKit)

---

## 📁 Project Structure

````


---

## 🛠️ Prerequisites
- **Node.js** v14 or later
- **npm** v6 or later

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/playwright-automationintesting.git
   cd playwright-automationintesting
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## 🧪 Running Tests

### Run all tests:

```bash
npm test
```

### Run tests in headed (visible) mode:

```bash
npm run test:headed
```

### Run tests in debug mode:

```bash
npm run test:debug
```

### Generate and view HTML report:

```bash
npm run report
```

---

## 🔄 CI/CD Integration

The framework includes a pre-configured GitHub Actions workflow:

- Executes tests on every push or pull request to `main` or `master`
- Generates HTML test reports
- Can be extended to upload artifacts, notify on failures, etc.

---

## 🧩 Key Components

### `BasePage.ts`

Provides shared methods for interacting with elements, navigation, logging, and screenshots.

### `HomePage.ts`

Encapsulates interaction with the landing page, especially the **Contact Form**.

### `BookingPage.ts`

Handles logic for creating and validating **room bookings**.

### `TestReporter.ts`

Enhances test tracking with result logs, metrics, and test summary generation.

---

## 📊 Data-Driven Testing

Test inputs (e.g. contact form fields, booking data) are stored in `tests/data/`, allowing scalable and reusable test scenarios.

---

## 🧱 Extending the Framework

1. Add new page object files in `tests/pages/`
2. Add matching test data in `tests/data/`
3. Create new `.spec.ts` test files in `tests/`
4. Update fixtures or utilities as needed

---

## 🧠 Best Practices Followed

- Page Object Model for maintainability
- Type-safe implementation with TypeScript
- Clear directory structure and documentation
- Reusable test fixtures and utilities
- Integrated CI/CD pipeline
- Cross-browser testing and test isolation

---

## 📬 Contact

For questions or contributions, feel free to open an issue or pull request on the [GitHub repository](https://github.com/YOUR_USERNAME/playwright-automationintesting).

---
