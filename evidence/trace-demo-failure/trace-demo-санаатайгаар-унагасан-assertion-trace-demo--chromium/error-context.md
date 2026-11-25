# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trace-demo.spec.ts >> санаатайгаар унагасан assertion (trace demo)
- Location: tests/trace-demo.spec.ts:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Productz', { exact: true })
Expected: visible
Timeout: 3000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Productz', { exact: true }) with timeout 3000ms
  - waiting for getByText('Productz', { exact: true })

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, empty"
  - text: Products Name (A to Z)
  - combobox "Sort products":
    - option "Name (A to Z)" [selected]
    - option "Name (Z to A)"
    - option "Price (low to high)"
    - option "Price (high to low)"
- main:
  - button "View details for Sauce Labs Backpack":
    - img "Sauce Labs Backpack"
  - button "View details for Sauce Labs Backpack": Sauce Labs Backpack
  - text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
  - button "Add to cart"
  - button "View details for Sauce Labs Bike Light":
    - img "Sauce Labs Bike Light"
  - button "View details for Sauce Labs Bike Light": Sauce Labs Bike Light
  - text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
  - button "Add to cart"
  - button "View details for Sauce Labs Bolt T-Shirt":
    - img "Sauce Labs Bolt T-Shirt"
  - button "View details for Sauce Labs Bolt T-Shirt": Sauce Labs Bolt T-Shirt
  - text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
  - button "Add to cart"
  - button "View details for Sauce Labs Fleece Jacket":
    - img "Sauce Labs Fleece Jacket"
  - button "View details for Sauce Labs Fleece Jacket": Sauce Labs Fleece Jacket
  - text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
  - button "Add to cart"
  - button "View details for Sauce Labs Onesie":
    - img "Sauce Labs Onesie"
  - button "View details for Sauce Labs Onesie": Sauce Labs Onesie
  - text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
  - button "Add to cart"
  - button "View details for Test.allTheThings() T-Shirt (Red)":
    - img "Test.allTheThings() T-Shirt (Red)"
  - button "View details for Test.allTheThings() T-Shirt (Red)": Test.allTheThings() T-Shirt (Red)
  - text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
  - button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "X":
        - /url: https://x.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // Алхам 4: Trace viewer туршихад зориулж ЗОРИУД унагасан тест.
  4  | // Зөвхөн DEMO_FAIL=1 үед ажиллана, ингэснээр энгийн `npx playwright test` ногоон хэвээр байна.
  5  | test('санаатайгаар унагасан assertion (trace demo)', async ({ page }) => {
  6  |   test.skip(!process.env.DEMO_FAIL, 'DEMO_FAIL=1 тавьж ажиллуул');
  7  | 
  8  |   await page.goto('/');
  9  |   await page.getByPlaceholder('Username').fill('standard_user');
  10 |   await page.getByPlaceholder('Password').fill('secret_sauce');
  11 |   await page.getByRole('button', { name: 'Login' }).click();
  12 | 
  13 |   // Зориуд буруу: жинхэнэ гарчиг нь "Products".
> 14 |   await expect(page.getByText('Productz', { exact: true })).toBeVisible({ timeout: 3000 });
     |                                                             ^ Error: expect(locator).toBeVisible() failed
  15 | });
  16 | 
```