// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
});



test('TC23 C15 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC23 Type Code 17/29.Case 15.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC17_C15 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC23 Type Code 17/30.Stamp Duty Amount Case 15.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C15 ' })).toBeHidden();
});

