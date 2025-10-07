import { expect, test} from '../fixtures/fixtures'
import externalLinks from '../constants/externalLinks.constants.json'


test.describe('Redmine Books links', () => {
    test('Verify that "Buy" links on the Redmine Books page lead to correct resources', async ({ homePage, page }) => {
        await homePage.open()

        await homePage.verifyBookLink(
            'Mastering Redmine 2nd Edition',
            externalLinks.masteringRedmine2Edition
        )

        await homePage.verifyBookLink(
            'Redmine Plugin Extension and Development',
            externalLinks.redminePluginExtensionAndDevelopment
        )

        await homePage.verifyBookLink(
            'Redmine Cookbook',
            externalLinks.redmineCookbook
        )
    })
})

