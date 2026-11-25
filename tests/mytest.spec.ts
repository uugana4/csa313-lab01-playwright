import { test, expect, Page } from '@playwright/test';

/**
 * Lab 01 - Playwright UI тест. Сайт: https://www.saucedemo.com
 * Locator: getByRole / getByPlaceholder / getByText / getByTestId.
 * XPath-аас зайлсхийсэн: DOM бүтцээс хамаардаг тул жижиг өөрчлөлтөд хугардаг.
 * Role/text locator нь хэрэглэгчийн харж буйг дагадаг тул тогтвортой.
 */

const USER = 'standard_user';
const PASSWORD = 'secret_sauce';


async function login(page: Page, username: string, password: string) {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}


async function logout(page: Page) {
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByTestId('logout-sidebar-link').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
}



test('1. амжилттай нэвтрэх', async ({ page }) => {
  await login(page, USER, PASSWORD);
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
  await expect(page.getByTestId('inventory-item')).toHaveCount(6);
  await logout(page);
});

test('2. буруу нууц үгээр нэвтрэхэд алдаа гарна', async ({ page }) => {
  await login(page, USER, 'wrong_password');
  const error = page.getByTestId('error');
  await expect(error).toBeVisible();
  await expect(error).toContainText('Username and password do not match');
  await expect(page).not.toHaveURL(/inventory\.html/);
});

test('3. нэвтэрсний дараа бараа сагслах', async ({ page }) => {
  await login(page, USER, PASSWORD);
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
  await expect(page.getByTestId('remove-sauce-labs-backpack')).toBeVisible();
  await page.getByTestId('shopping-cart-link').click();
  await expect(page).toHaveURL(/cart\.html/);
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await logout(page);
});

test('4. түгжигдсэн хэрэглэгч нэвтэрч чадахгүй', async ({ page }) => {
  await login(page, 'locked_out_user', PASSWORD);
  await expect(page.getByTestId('error')).toContainText('locked out');
});
