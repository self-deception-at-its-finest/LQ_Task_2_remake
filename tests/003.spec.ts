import { expect, test} from '../fixtures/fixtures'
import { faker } from '@faker-js/faker';
import errorMessages from '../constants/errors.constants.json'
import endpoints from '../constants/endpoints.constants.json'

test.describe('Login', () => {
    test('Login with invalid password', async ({ loginPage, page }) => {
        await loginPage.open()
        await expect(page).toHaveURL(endpoints.login)

        await loginPage.login({username: process.env.TEST_USER_LOGIN, password: faker.internet.password()})
        await expect(page).toHaveURL(endpoints.login)

        await expect(loginPage.errorMessage).toBeVisible()
        await expect(loginPage.errorMessage).toHaveText(errorMessages.loginErrorMessage)

    })
})

