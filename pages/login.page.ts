import { expect, type Locator, type Page } from '@playwright/test'
import BasePage from './base.page'
import endpoints from '../constants/endpoints.constants.json'


export class LoginPage extends BasePage {
    public loginInput: Locator
    public passwordInput: Locator
    public submitButton: Locator
    public successfulAccountCreationMessage: Locator
    public errorMessage: Locator

    constructor(page: Page) {
        super(page);
        this.endpoint = endpoints.login
        this.loginInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.submitButton = page.locator('#login-submit')
        this.successfulAccountCreationMessage = page.locator('#flash_notice')
        this.errorMessage = page.locator('#flash_error')
    }

    async login(creds?: {username?: string; password?: string}) {
        const {username, password,} = creds ?? {}
        if(username !== undefined) await this.loginInput.fill(username)
        if(password !== undefined) await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}