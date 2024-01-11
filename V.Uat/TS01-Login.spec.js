// @ts-check
const { test, expect } = require('@playwright/test');

test('TC01 Login Success ', async ({ page }) => {
  
  await page.goto('/auth/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.screenshot({ path: 'Output/TS01-Login/TC01 Login Success/01.Login Success.png', fullPage: true });
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS01-Login/TC01 Login Success/02.Login Success.png', fullPage: true });
});

test('TC02 Invalid Username' ,async ({ page }) => {
  
  await page.goto('/auth/login');
  await page.locator('input[name="email"]').fill('test.gamekittisakgmail.com');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  // await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // await expect(page.locator('div').filter({ hasText: /^You are unauthorized$/ }).first()).toHaveText('You are unauthorized');
  await page.screenshot({ path: 'Output/TS01-Login/TC02 Invalid Username/01.Invalid Username.png', fullPage: true });

});


test('TC03 Invalid Username Switch Upper Down' ,async ({ page }) => {
  
  await page.goto('/auth/login');
  await page.locator('input[name="email"]').fill('TEST.GAMEKITTISAK@GMAIL.COM');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByText('errorERROR, You are unauthorized')).toHaveText('errorERROR, You are unauthorized');
  await page.screenshot({ path: 'Output/TS01-Login/TC03 Invalid Username Switch Upper Down/01.Invalid Username Switch Upper Down.png', fullPage: true });

});




test('TC04 No Username' ,async ({ page }) => {
  
  await page.goto('/auth/login');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByText('errorERROR, You are unauthorized')).toHaveText('errorERROR, You are unauthorized');
  await page.screenshot({ path: 'Output/TS01-Login/TC04 No Username/01.No Username.png', fullPage: true });
});



test('TC05 Invalid Password' ,async ({ page }) => {
  
  await page.goto('/auth/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('qwerty123');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByText('errorERROR, You are unauthorized')).toHaveText('errorERROR, You are unauthorized (1)');
  await page.screenshot({ path: 'Output/TS01-Login/TC05 Invalid Password/01.Invalid Password.png', fullPage: true });
});




test('TC06 Invalid Password Switch Upper Down' ,async ({ page }) => {

  await page.goto('/auth/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('zxCV.!234');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByText('errorERROR, You are unauthorized')).toHaveText('errorERROR, You are unauthorized (2)');
  await page.screenshot({ path: 'Output/TS01-Login/TC06 Invalid Password Switch Upper Dow/01.Invalid Password.png', fullPage: true });
});





test('TC07 No Password' ,async ({ page }) => {
  
  await page.goto('/auth/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await expect(page.getByText('errorERROR, You are unauthorized')).toHaveText('errorERROR, You are unauthorized (1)');
  await page.screenshot({ path: 'Output/TS01-Login/TC07 No Password/01.No Password.png', fullPage: true });
});



test('TC08 No Username Password' ,async ({ page }) => {
  
  await page.goto('/auth/login');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await expect(page.getByText('errorERROR, You are unauthorized')).toHaveText('errorERROR, You are unauthorized');
  await page.screenshot({ path: 'Output/TS01-Login/TC08 No Username Password/01.No Username Password.png', fullPage: true });
});


test('Re Login' ,async ({ page }) => {
  
  await page.goto('/auth/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByText('logout').click();
  await page.waitForTimeout(1000);
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByText('logout').click();
  await page.waitForTimeout(1000);
  await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByText('logout').click();
  await page.waitForTimeout(1000);
});
