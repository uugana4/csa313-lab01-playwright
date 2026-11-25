import { defineConfig, devices } from '@playwright/test';

// Lab 01 тохиргоо: trace ба video үргэлж асаалттай, HTML report үүсгэнэ.
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    testIdAttribute: 'data-test', // saucedemo data-test атрибут ашигладаг
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
