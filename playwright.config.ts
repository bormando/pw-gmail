import {defineConfig} from '@playwright/test'
import 'dotenv/config'

export default defineConfig({
  globalSetup: require.resolve('./global-setup'),
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 15000,
  },
  reporter: 'html',
  use: {
    baseURL: 'https://subscriptions.cbc.ca',
    browserName: 'chromium',
    userAgent: 'Chrome/999.0.0.0',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
})
