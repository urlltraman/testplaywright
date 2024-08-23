// @ts-check
const { test, expect } = require('@playwright/test');

test('TC01 Login Success ', async ({ page }) => {
  
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!2345');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.screenshot({ path: 'Output/TS01-Login/TC01 Login Success/01.Login Success.png' });
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS01-Login/TC01 Login Success/02.Login Success.png' });
});

test('TC02 Invalid Username' ,async ({ page }) => {
  
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisakgmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!2345');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  // await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // await expect(page.locator('div').filter({ hasText: /^You are unauthorized$/ }).first()).toHaveText('You are unauthorized');
  await page.screenshot({ path: 'Output/TS01-Login/TC02 Invalid Username/01.Invalid Username.png' });

});


test('TC03 Invalid Username Switch Upper Down' ,async ({ page }) => {
  
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('TEST.GAMEKITTISAK@GMAIL.COM');
  await page.locator('input[name="password"]').fill('ZXcv.!2345');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // await expect(page.getByText('You are unauthorized')).toHaveText('You are unauthorized');
  await page.screenshot({ path: 'Output/TS01-Login/TC03 Invalid Username Switch Upper Down/01.Invalid Username Switch Upper Down.png' });

});




test('TC04 No Username' ,async ({ page }) => {
  
  await page.goto('/login');
  await page.locator('input[name="password"]').fill('ZXcv.!2345');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.getByRole('button', { name: 'Sign In', exact: true }).isDisabled();
  // await expect(page.getByText('Unauthorized, Please retry the sign-in process')).toHaveText('Unauthorized, Please retry the sign-in process');
  await page.screenshot({ path: 'Output/TS01-Login/TC04 No Username/01.No Username.png' });
});



test('TC05 Invalid Password' ,async ({ page }) => {
  
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('qwerty123');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.getByRole('button', { name: 'Sign In', exact: true }).isDisabled();
  // await expect(page.getByText('Unauthorized, Please retry the sign-in process')).toHaveText('Unauthorized, Please retry the sign-in process');
  await page.screenshot({ path: 'Output/TS01-Login/TC05 Invalid Password/01.Invalid Password.png' });
});




test('TC06 Invalid Password Switch Upper Down' ,async ({ page }) => {

  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('zxCV.!234');
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  await page.getByRole('button', { name: 'Sign In', exact: true }).isDisabled();
  // await expect(page.getByText('Unauthorized, Please retry the sign-in process')).toHaveText('Unauthorized, Please retry the sign-in process');
  await page.screenshot({ path: 'Output/TS01-Login/TC06 Invalid Password Switch Upper Dow/01.Invalid Password.png' });
});





test('TC07 No Password' ,async ({ page }) => {
  
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
  await page.getByRole('button', { name: 'Sign In', exact: true }).isDisabled();
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  // await expect(page.getByText('Unauthorized, Please retry the sign-in process')).toHaveText('Unauthorized, Please retry the sign-in process');
  await page.screenshot({ path: 'Output/TS01-Login/TC07 No Password/01.No Password.png' });
});



test('TC08 No Username Password' ,async ({ page }) => {
  
  await page.goto('/login');
  await page.getByRole('button', { name: 'Sign In', exact: true }).isDisabled();
  await page.locator('span').filter({ hasText: 'visibility_off' }).click();
  // await expect(page.getByText('Unauthorized, Please retry the sign-in process')).toHaveText('Unauthorized, Please retry the sign-in process');
  await page.screenshot({ path: 'Output/TS01-Login/TC08 No Username Password/01.No Username Password.png' });
});


test('Re Login' ,async ({ page }) => {
  
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!2345');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByText('logout').click();
  await page.waitForTimeout(1000);
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!2345');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByText('logout').click();
  await page.waitForTimeout(1000);
  await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
  await page.locator('input[name="password"]').fill('P@ssw0rd10');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByText('logout').click();
  await page.waitForTimeout(1000);
});
