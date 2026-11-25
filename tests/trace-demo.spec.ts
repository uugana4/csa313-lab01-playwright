import { test, expect } from '@playwright/test';

// Алхам 4: Trace viewer туршихад зориулж ЗОРИУД унагасан тест.
// Зөвхөн DEMO_FAIL=1 үед ажиллана, ингэснээр энгийн `npx playwright test` ногоон хэвээр байна.
test('санаатайгаар унагасан assertion (trace demo)', async ({ page }) => {
  test.skip(!process.env.DEMO_FAIL, 'DEMO_FAIL=1 тавьж ажиллуул');

  await page.goto('/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Зориуд буруу: жинхэнэ гарчиг нь "Products".
  await expect(page.getByText('Productz', { exact: true })).toBeVisible({ timeout: 3000 });
});
