import {test, expect} from '@playwright/test';

test('selector test', async ({page}) => {
  await page.goto('https://www.accessa.ng/sign-in')
  await page.pause()
  await page.click('id=email-address')
  await page.fill('id=email-address', 'test@example.com')
  await page.fill('xpath=//input[@id="password"]', 'password123')
});