import { test, expect } from '@playwright/test';

test('My first testS', async ({ page }) => {
  await page.goto('https://www.accessa.ng/sign-in');

  await expect(page).toHaveTitle('ACCESSA | Fitness, Payments & Everyday Living');
});