import { Page, Locator } from '@playwright/test'

export class HeaderComponent {
    public page: Page

    // Navigation elements
    public homeLink: Locator
    public myPageLink: Locator
    public projectsLink: Locator
    public helpLink: Locator

    // User account elements
    public loggedUser: Locator
    public myAccountLink: Locator
    public signOutLink: Locator

    constructor(page: Page) {
        this.page = page

        // Navigation
        this.homeLink = page.locator('a.home[href="/"]')
        this.myPageLink = page.locator('a.my-page[href="/my/page"]')
        this.projectsLink = page.locator('a.projects[href="/projects"]')
        this.helpLink = page.locator('a[href="/help"]')

        // Account
        this.loggedUser = page.locator('#Loggedas a.user.active')
        this.myAccountLink = page.locator('a.my-account[href="/my/account"]')
        this.signOutLink = page.locator('a.logout[href="/logout"]')
    }

    async navigateToMyAccount(): Promise<void> {
        await this.myAccountLink.click();
    }

    async signOut(): Promise<void> {
        await this.signOutLink.click();
    }

}