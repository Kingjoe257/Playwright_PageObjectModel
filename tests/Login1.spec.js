import { test, expect } from '@playwright/test';
import { LoginPage } from './Pages/logins.js';

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.Login(
        'josephfoever@web-library.net',
        'Joy1234$'
    );

    // Verify successful navigation
    await expect(page).toHaveURL(/dashboard/);
});
 
