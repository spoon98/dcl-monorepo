import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(
    await page
      .getByRole('heading')
      .filter({ hasText: 'Welcome' })
      .first()
      .innerText()
  ).toContain('Welcome');
  // await page.locator('h1').filter({ hasText: 'Welcome' }).innerText()
  // ).toContain('Welcome');
});
