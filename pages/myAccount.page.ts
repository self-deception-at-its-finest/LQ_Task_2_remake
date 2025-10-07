import { expect, type Locator, type Page } from '@playwright/test'
import BasePage from './base.page'
import endpoints from '../constants/endpoints.constants.json'


export class MyAccountPage extends BasePage {
    public firstnameInput: Locator
    public lastnameInput: Locator
    public emailInput: Locator
    public saveButton:  Locator
    public accountUpdateSuccessfulMsg: Locator

    constructor(page: Page) {
        super(page)
        this.endpoint = endpoints.myAccount
        this.firstnameInput = page.locator('#user_firstname')
        this.lastnameInput = page.locator('#user_lastname')
        this.emailInput = page.locator('#user_mail')
        this.saveButton = page.locator('.mobile-hide input[type="submit"][value="Save"]')
        this.accountUpdateSuccessfulMsg = page.locator('#flash_notice.flash.notice')
    }

    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}