import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    headless: false,
    viewport: null,

    launchOptions: {
      slowMo: 1000,
      args: [
        '--start-maximized',
        '--force-device-scale-factor=0.80',
        '--high-dpi-support=0.80'
      ],
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        deviceScaleFactor: undefined,
      },
    },
  ],
});