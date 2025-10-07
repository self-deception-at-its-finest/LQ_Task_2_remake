import { expect, test} from '../fixtures/fixtures'
import endpoints from '../constants/endpoints.constants.json'


test.describe('Login', () => {
    test('Login with Valid Credentials', async ({ loginPage, page }) => {
        await loginPage.open()
        await expect(page).toHaveURL(endpoints.login)
        await loginPage.login({username: process.env.TEST_USER_LOGIN, password: process.env.TEST_USER_PASSWORD})
        await expect(page).toHaveURL(endpoints.myPage)
    })
})

