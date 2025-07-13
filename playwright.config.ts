import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
import path from "path";

// Load environment-specific .env file
const ENV = process.env.ENV || "development";
dotenv.config({ path: path.resolve(__dirname, `.env.${ENV}`) });

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  retries: 0,
  reporter: [
    ["html"],
    ["json", { outputFile: "test-results/results.json" }],
    ["junit", { outputFile: "test-results/results.xml" }],
    ["line"],
    ["allure-playwright"],
  ],
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    // {
    //   name: "firefox",
    //   use: { browserName: "firefox" },
    // },
    // {
    //   name: "webkit",
    //   use: { browserName: "webkit" },
    // },
  ],
});
