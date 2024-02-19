// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
});




test('TC13 C1 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C1  ' }).isDisabled();
});




test('TC13 C2 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C2  ' }).isDisabled();
});




test('TC13 C3 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C3  ' }).isDisabled();
});




test('TC13 C4 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C4  ' }).isDisabled();
});




test('TC13 C5 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C5  ' }).isDisabled();
});




test('TC13 C6 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C6  ' }).isDisabled();
});




test('TC13 C7 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C7  ' }).isDisabled();
});




test('TC13 C8 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C8  ' }).isDisabled();
});




test('TC13 C9 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C9  ' }).isDisabled();
});




test('TC13 C10 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C10  ' }).isDisabled();
});




test('TC13 C11 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C11  ' }).isDisabled();
});




test('TC13 C12 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C12  ' }).isDisabled();
});




test('TC13 C13 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC112_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC13 Type Code 11.2/26.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C13  ' }).isDisabled();
});









test('TC26 C1 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C1  ' }).isDisabled();
});




test('TC26 C2 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C2  ' }).isDisabled();
});




test('TC26 C3 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C3  ' }).isDisabled();
});




test('TC26 C4 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C4  ' }).isDisabled();
});




test('TC26 C5 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C5  ' }).isDisabled();
});




test('TC26 C6 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C6  ' }).isDisabled();
});




test('TC26 C7 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C7  ' }).isDisabled();
});




test('TC26 C8 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C8  ' }).isDisabled();
});




test('TC26 C9 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C9  ' }).isDisabled();
});




test('TC26 C10 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C10  ' }).isDisabled();
});




test('TC26 C11 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C11  ' }).isDisabled();
});




test('TC26 C12 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C12  ' }).isDisabled();
});




test('TC26 C13 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC18_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC26 Type Code 6 Action Type 1/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C13  ' }).isDisabled();
});








test('TC27 C1 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C1  ' }).isDisabled();
});




test('TC27 C2 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C2  ' }).isDisabled();
});




test('TC27 C3 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C3  ' }).isDisabled();
});




test('TC27 C4 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C4  ' }).isDisabled();
});




test('TC27 C5 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C5  ' }).isDisabled();
});




test('TC27 C6 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C6  ' }).isDisabled();
});




test('TC27 C7 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C7  ' }).isDisabled();
});




test('TC27 C8 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC27 Type Code 6 Action Type 1/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C8  ' }).isDisabled();
});




test('TC28 C1 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C1  ' }).isDisabled();
});




test('TC28 C2 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C2  ' }).isDisabled();
});




test('TC28 C3 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C3  ' }).isDisabled();
});




test('TC28 C4 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C4  ' }).isDisabled();
});




test('TC28 C5 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C5  ' }).isDisabled();
});




test('TC28 C6 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C6  ' }).isDisabled();
});




test('TC28 C7 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C7  ' }).isDisabled();
});




test('TC28 C8 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('19.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C8  ' }).isDisabled();
});




test('TC28 C9 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('19.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C9  ' }).isDisabled();
});




test('TC28 C10 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('19.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C10  ' }).isDisabled();
});




test('TC28 C11 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('19.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C11  ' }).isDisabled();
});




test('TC28 C12 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C12  ' }).isDisabled();
});




test('TC28 C13 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C13  ' }).isDisabled();
});








test('TC28 C14 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/27.Case 14.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C14 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/28.Stamp Duty Amount Case 14.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C14  ' }).isDisabled();
});





test('TC28 C15 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/29.Case 15.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C15 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC28 Type Code 6 Action Type 2/30.Stamp Duty Amount Case 15.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C15  ' }).isDisabled();
});




test('TC29 C1 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C1  ' }).isDisabled();
});




test('TC29 C2 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C2  ' }).isDisabled();
});




test('TC29 C3 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C3  ' }).isDisabled();
});




test('TC29 C4 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C4  ' }).isDisabled();
});




test('TC29 C5 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C5  ' }).isDisabled();
});




test('TC29 C6 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C6  ' }).isDisabled();
});




test('TC29 C7 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C7  ' }).isDisabled();
});




test('TC29 C8 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C8  ' }).isDisabled();
});




test('TC29 C9 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C9  ' }).isDisabled();
});




test('TC29 C10 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C10  ' }).isDisabled();
});




test('TC29 C11 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C11  ' }).isDisabled();
});




test('TC29 C12 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C12  ' }).isDisabled();
});




test('TC29 C13 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC29 Type Code 6 Action Type 3/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C13  ' }).isDisabled();
});







test('TC30 C1 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C1  ' }).isDisabled();
});




test('TC30 C2 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C2  ' }).isDisabled();
});




test('TC30 C3 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C3  ' }).isDisabled();
});




test('TC30 C4 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C4  ' }).isDisabled();
});




test('TC30 C5 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C5  ' }).isDisabled();
});




test('TC30 C6 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C6  ' }).isDisabled();
});




test('TC30 C7 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C7  ' }).isDisabled();
});




test('TC30 C8 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C8  ' }).isDisabled();
});




test('TC30 C9 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C9  ' }).isDisabled();
});




test('TC30 C10 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C10  ' }).isDisabled();
});




test('TC30 C11 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C11  ' }).isDisabled();
});




test('TC30 C12 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C12  ' }).isDisabled();
});




test('TC30 C13 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC30 Type Code 6 Action Type 4/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C13  ' }).isDisabled();
});









test('TC31 C1 TypeCode 6 Action Type 5   ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 5/Auto_GeStamp_TSCD_TC6_AT5_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT5_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC25 TypeCode 272/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT5_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/Cal Duty Amount/TC25 TypeCode 272/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT5_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT5_C1  ' }).isDisabled();
});
