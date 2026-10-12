// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/docs\/intro/);

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await context.tracing.stop({ path: 'test1_trace.zip' });
});
