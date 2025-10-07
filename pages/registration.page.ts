import { expect, type Locator, type Page } from '@playwright/test'
import BasePage from './base.page'
import endpoints from '../constants/endpoints.constants.json'

export class RegistrationPage extends BasePage {
    public loginInput: Locator
    public passwordInput: Locator
    public passwordConfirmationInput: Locator
    public firstnameInput: Locator
    public lastnameInput: Locator
    public emailInput: Locator
    public submitButton: Locator

    constructor(page: Page) {
        super(page);
        this.endpoint = endpoints.registration
        this.loginInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.passwordConfirmationInput = page.locator('#user_password_confirmation')
        this.firstnameInput = page.locator('#user_firstname')
        this.lastnameInput = page.locator('#user_lastname')
        this.emailInput = page.locator('#user_mail')
        this.submitButton = page.locator('input[type="submit"]')
    }

    async newUserRegistration(creds?: {
        login?: string;
        password?: string;
        firstname?: string;
        lastname?: string;
        email?: string}) {
        const {login, password, firstname, lastname, email} = creds ?? {}
        if(login !== undefined) await this.loginInput.fill(login)
        if(password !== undefined) await this.passwordInput.fill(password)
        if(password !== undefined) await this.passwordConfirmationInput.fill(password)
        if(firstname !== undefined) await this.firstnameInput.fill(firstname)
        if(lastname !== undefined) await this.lastnameInput.fill(lastname)
        if(email !== undefined) await this.emailInput.fill(email)
    }

    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}