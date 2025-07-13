## 🧪 Test Plan

This test plan defines the scope, critical user flows, test structure, and tool justification for automated testing of the **Automation In Testing** application using Playwright.

---

## ✅ Scope

The scope of this test suite is to **automatically verify the core functionality** of the web application from the user’s and admin's perspectives:

### In Scope:

- Authentication (admin login/logout)
- Booking a room
- Validating forms (booking and contact)
- Viewing rooms and availability
- Navigating the homepage and main links

### Out of Scope:

- API backend testing (covered by integration or unit tests)
- Visual UI regressions (currently not implemented)
- Mobile or responsive layout tests (planned future enhancement)

---

## 🔀 Critical User Flows Covered

| Flow                        | Tests             | Description                                                         |
| --------------------------- | ----------------- | ------------------------------------------------------------------- |
| **Admin Login/Logout**      | `admin.spec.ts`   | Valid credentials log the user in, logout returns to base URL       |
| **Room Availability Check** | `room.spec.ts`    | Users can view room cards and check if rooms are available          |
| **Booking Submission**      | `booking.spec.ts` | User fills booking form with valid/invalid data and submits         |
| **Contact Submission**      | `contact.spec.ts` | User sends a message via the contact form with all fields validated |
| **Homepage Navigation**     | `home.spec.ts`    | Navbar links function properly; booking CTA visible on load         |

These flows are considered **critical to both business operation and user experience**, and are **run as smoke tests on every deploy.**

---

## 🧹 Tool Choice Justification

### 🎯 Why Playwright?

| Criteria                  | Justification                                                                |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Speed & Reliability**   | Playwright tests run fast, are auto-waiting, and support parallel execution. |
| **Cross-browser Support** | Can test in Chromium, Firefox, and WebKit (if needed).                       |
| **Rich Debugging**        | Built-in tracing, screenshots, and video for failed tests.                   |
| **Modern JavaScript API** | Native TypeScript support and async/await syntax.                            |
| **Headless/CI Ready**     | Integrates well into CI pipelines (GitHub Actions, GitLab CI, etc.).         |
| **POM-Friendly**          | Works well with the Page Object Model used in this project.                  |

### 🎯 Supporting Tools

- **TypeScript**: Strong typing for maintainable test code
- **Dotenv**: Manages environment-specific settings (e.g., login creds)
- **VS Code**: Standard editor for dev & test
- **GitHub Actions** (optional): For CI test automation

---
