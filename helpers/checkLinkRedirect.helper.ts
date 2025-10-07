import {expect, Locator, Page} from '@playwright/test'


export async function checkLinkRedirect(linkLocator: string, expectedUrl: string, page: Page): Promise<void> {
    const elem = page.locator(linkLocator)
    await elem.click()
    await expect(page).toHaveURL(expectedUrl)
    await page.goBack()
}