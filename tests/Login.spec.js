
const { test, expect } = require('@playwright/test');

test('user can log in successfully', async ({ page }) => {
  // Open the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter valid credentials
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  // Click the Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify the success message
  await expect(page.locator('#flash'))
    .toContainText('You logged into a secure area!');

  console.log('Login test passed!');
});