import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import users from '../../fixtures/users.json' assert { type: 'json' };

users.forEach((user) => {

    test(user.name, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            user.username,
            user.password
        );

        await expect(
            loginPage.getMessage()
        ).toContainText(
            user.expectedMessage
        );

    });

});