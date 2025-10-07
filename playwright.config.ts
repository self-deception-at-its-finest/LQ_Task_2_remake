import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();


export default defineConfig({
    testDir: './tests',
    globalTimeout: 60 * 60 * 1000,
    timeout: 2 * 60 * 1000,
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 5 : 5,
    reporter: 'html',
    use: {
        baseURL: 'https://www.redmine.org',
        trace: 'on-first-retry',
        headless: true,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'], viewport: { width: 1920, height: 1080 } },
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'], viewport: { width: 1920, height: 1080 } },
        }
    ]
});
