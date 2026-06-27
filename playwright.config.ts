// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, 
    viewport: null, // Keeps the window maximized

    launchOptions: {
      slowMo: 1000,
      args: [
        '--start-maximized',
        '--force-device-scale-factor=0.80', // 👇 Forces the entire browser interface down to 80% zoom
        '--high-dpi-support=0.80'            // 👇 Supports the scale factor modification on high-res displays
      ], 
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        deviceScaleFactor: undefined, // Allows the custom scale factor args to take priority
      },
    },
  ],
});