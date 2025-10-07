import { expect, type Locator, type Page } from '@playwright/test'
import BasePage from './base.page'
import endpoints from '../constants/endpoints.constants.json'
import {checkLinkRedirect} from "../helpers/checkLinkRedirect.helper";

export class HomePage extends BasePage {
    public masteringRedmineBookLink : Locator
    public redminePluginExtensionBookLink : Locator
    public remineCookbookLink : Locator

    constructor(page: Page) {
        super(page);
        this.endpoint = endpoints.home
        this.masteringRedmineBookLink = page.locator('td:has-text("Mastering Redmine 2nd Edition") >> a.external')
        this.redminePluginExtensionBookLink = page.locator('td:has-text("Redmine Plugin Extension and Development") >> a.external')
        this.remineCookbookLink = page.locator('td:has-text("Redmine Cookbook") >> a.external')
    }

    async verifyBookLink(bookTitle: string, expectedUrl: string): Promise<void> {
        const locator = `td:has-text("${bookTitle}") >> a.external`
        await checkLinkRedirect(locator, expectedUrl, this.page)
    }

    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}