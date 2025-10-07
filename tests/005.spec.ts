import { expect, test} from '../fixtures/fixtures'
import {HeaderComponent} from "../components/header.component"
import {faker} from "@faker-js/faker"
import successMessages from "../constants/successMessages.constants.json"
import endpoints from '../constants/endpoints.constants.json'


test.describe('Account', () => {
    test('Update User Account Information', async ({ loginPage, myAccountPage, page }) => {
        const headerComponent = new HeaderComponent(page)

        await loginPage.open()
        await expect(page).toHaveURL(endpoints.login)
        await loginPage.login({username: process.env.TEST_USER_LOGIN, password: process.env.TEST_USER_PASSWORD})
        await expect(page).toHaveURL(endpoints.myPage)

        await headerComponent.navigateToMyAccount()
        await expect(page).toHaveURL(endpoints.myAccount)

        const testData = {
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            email: faker.internet.email()
        }

        await myAccountPage.firstnameInput.fill(testData.firstname)
        await myAccountPage.lastnameInput.fill(testData.lastname)
        await myAccountPage.emailInput.fill(testData.email)
        await myAccountPage.saveButton.click()

        await expect(myAccountPage.accountUpdateSuccessfulMsg).toBeVisible()
        await expect(myAccountPage.accountUpdateSuccessfulMsg).toHaveText(successMessages.successfulAccountUpdate)

        await headerComponent.signOut()
        await loginPage.open()
        await loginPage.login({username: process.env.TEST_USER_LOGIN, password: process.env.TEST_USER_PASSWORD})

        await headerComponent.navigateToMyAccount()
        await expect(myAccountPage.firstnameInput).toHaveValue(testData.firstname)
        await expect(myAccountPage.lastnameInput).toHaveValue(testData.lastname)
        await expect(myAccountPage.emailInput).toHaveValue(testData.email)
    })
})
