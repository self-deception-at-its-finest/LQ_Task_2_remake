import {test as base} from '@playwright/test'
import {RegistrationPage} from "../pages/registration.page"
import {LoginPage} from "../pages/login.page"
import {HomePage} from "../pages/home.page"
import {MyAccountPage} from "../pages/myAccount.page";


export const test = base.extend<{
    registrationPage: RegistrationPage
    loginPage: LoginPage
    homePage: HomePage
    myAccountPage: MyAccountPage
}>({
    registrationPage: async({ page }, use) => {
        await use(new RegistrationPage(page))
    },
    loginPage: async({ page }, use) => {
        await use(new LoginPage(page))
    },
    homePage: async({ page }, use) => {
        await use(new HomePage(page))
    },
    myAccountPage: async({ page }, use) => {
        await use(new MyAccountPage(page))
    }
});

export {expect, type Page, type Download, type Locator, type TestInfo} from '@playwright/test'