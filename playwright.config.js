// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: 'list',
  use: {
    // BASE_URL lets you point the suite elsewhere; defaults to the real Sauce Demo site.
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    // Sauce Demo marks its elements with data-test attributes.
    testIdAttribute: 'data-test',
    headless: true,
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
