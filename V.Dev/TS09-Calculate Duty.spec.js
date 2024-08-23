import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     // Runs Uat

//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
//     await page.locator('input[name="password"]').fill('ZXcv.!234');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     // await page.getByRole('button', { name: 'Accept' }).click();

//   });



test.beforeEach(async ({ page }) => {
    // Runs Dev

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});


test('TC01 C1 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C2 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C3 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C4 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C5 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C6 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C7 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C8 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C9 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C10 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C11 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);

});




test('TC01 C12 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC01 C13 TypeCode 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 1/Auto_GeStamp_TSCD_TC1_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC1_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC01 Type Code 1/26.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC1_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});






test('TC02 C1 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C2 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C3 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C4 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C5 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C6 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C7 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C8 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C9 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C10 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C11 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C12 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC02 C13 TypeCode 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 2/Auto_GeStamp_TSCD_TC2_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC2_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC02 Type Code 2/26.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC2_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC03 C1 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C2 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C3 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C4 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C5 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C6 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C7 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C8 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C9 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C10 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C11 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C12 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC03 C13 TypeCode 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 3/Auto_GeStamp_TSCD_TC3_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC3_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC03 Type Code 3/26.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC3_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});






test('TC04 C1 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C2 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C3 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C4 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C5 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C6 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C7 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C8 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C9 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C10 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C11 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C12 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC04 C13 TypeCode 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 4/Auto_GeStamp_TSCD_TC4_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC4_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC04 Type Code 4/26.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC4_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC05 C1 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C2 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C3 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C4 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C5 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C6 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C7 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C8 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C9 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C10 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C11 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C12 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C13 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/26.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC05 C14 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/27.Case 14.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C14 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('9,999.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/28.Stamp Duty Amount Case 14.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C14  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC05 C15 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/29.Case 15.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C15 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('9,999.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/30.Stamp Duty Amount Case 15.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C15  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC05 C16 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/31.Case 16.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C16 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('9,999.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/32.Stamp Duty Amount Case 16.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C16  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC05 C17 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/33.Case 17.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C17 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('9,999.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/34.Stamp Duty Amount Case 17.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C17  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC05 C18 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/35.Case 18.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C18 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10,000.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/36.Stamp Duty Amount Case 18.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C18  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC05 C19 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/37.Case 19.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C19 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10,000.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/38.Stamp Duty Amount Case 19.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C19  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC05 C20 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/39.Case 20.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C20 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10,000.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/40.Stamp Duty Amount Case 20.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C20  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC05 C21 TypeCode 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 5/Auto_GeStamp_TSCD_TC5_C21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/41.Case 21.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC5_C21 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10,000.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC05 Type Code 5/42.Stamp Duty Amount Case 21.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC5_C21  ' })).toBeHidden();
    await page.waitForTimeout(500);
});


test('TC06 C1 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC06 C2 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC06 C3 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC06 C4 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC06 C5 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC06 C6 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC06 C7 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC06 C8 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC06 C9 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC06 C10 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC06 C11 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC06 C12 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC06 C13 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC06 C14 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/27.Case 14.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C14 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/28.Stamp Duty Amount Case 14.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C14  ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC06 C15 TypeCode 6 Action Type 1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 1/Auto_GeStamp_TSCD_TC6_AT1_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/29.Case 15.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT1_C15 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC06 Type Code 6 Action Type 1/30.Stamp Duty Amount Case 15.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT1_C15  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C1 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C2 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C3 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C4 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C5 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C6 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C7 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C8 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('19.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C9 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('19.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C10 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('19.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C11 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('19.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C12 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C13 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});








test('TC07 C14 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/27.Case 14.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C14 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/28.Stamp Duty Amount Case 14.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C14  ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC07 C15 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/29.Case 15.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C15 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/30.Stamp Duty Amount Case 15.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C15  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC07 C16 TypeCode 6 Action Type 2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 2/Auto_GeStamp_TSCD_TC6_AT2_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/31.Case 16.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT2_C16 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC07 Type Code 6 Action Type 2/32.Stamp Duty Amount Case 16.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT2_C16  ' })).toBeHidden();
    await page.waitForTimeout(500);
});






test('TC08 C1 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C2 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C3 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C4 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C5 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C6 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C7 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C8 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C9 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C10 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C11 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C12 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC08 C13 TypeCode 6 Action Type 3   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 3/Auto_GeStamp_TSCD_TC6_AT3_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT3_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC08 Type Code 6 Action Type 3/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT3_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC09 C1 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C2 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C3 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C4 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C4  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C5 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C5  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C6 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C6  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C7 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C7  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C8 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C8  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C9 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C9  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C10 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C10  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C11 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C11  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C12 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C12  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC09 C13 TypeCode 6 Action Type 4   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 4/Auto_GeStamp_TSCD_TC6_AT4_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT4_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC09 Type Code 6 Action Type 4/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT4_C13  ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC10 C1 TypeCode 6 Action Type 5   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 6/Action Type 5/Auto_GeStamp_TSCD_TC6_AT5_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT5_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC10 Type Code 6 Action Type 5/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC6_AT5_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC10 Type Code 6 Action Type 5/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT5_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC6_AT5_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC11 C1 TypeCode 7   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 7/Auto_GeStamp_TSCD_TC7_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC11 TypeCode 7/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC7_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC11 TypeCode 7/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC11 C2 TypeCode 7   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 7/Auto_GeStamp_TSCD_TC7_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC11 TypeCode 7/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC7_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('30.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC11 TypeCode 7/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC11 C3 TypeCode 7   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 7/Auto_GeStamp_TSCD_TC7_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC11 TypeCode 7/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC7_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('30.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC11 TypeCode 7/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC7_C3  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC12 C1 TypeCode 8   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 8/Auto_GeStamp_TSCD_TC8_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC8_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC12 TypeCode 8/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC8_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC12 TypeCode 8/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC8_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC8_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC12 C2 TypeCode 8   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 8/Auto_GeStamp_TSCD_TC8_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC8_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC12 TypeCode 8/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC8_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('100.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC12 TypeCode 8/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC8_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC8_C2  ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC13 C1 TypeCode 9.1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 9.1/Auto_GeStamp_TSCD_TC91.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC91' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC13 TypeCode 9.1/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC91 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC13 TypeCode 9.1/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC91 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC91 ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC14 C1 TypeCode 9.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 9.2/Auto_GeStamp_TSCD_TC92.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC92' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC14 TypeCode 9.2/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC92 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC14 TypeCode 9.2/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC92 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC92 ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC15 C1 TypeCode 10   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 10/Auto_GeStamp_TSCD_TC10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC15 TypeCode 10/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC15 TypeCode 10/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC10 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC16 C1 TypeCode 11.1   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.1/Auto_GeStamp_TSCD_TC111.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC111' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC16 TypeCode 11.1/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC111 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('5.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC16 TypeCode 11.1/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC111 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC111 ' })).toBeHidden();
    await page.waitForTimeout(500);
});








test('TC17 C1 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C1 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C2 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C2 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C3 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C3 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C4 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C4 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C5 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C5 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C6 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C6 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C7 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C7 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C8 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C8 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C9 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C9 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C10 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C10 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C11 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C11 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C12 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C12 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC17 C13 TypeCode 11.2   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 11.2/Auto_GeStamp_TSCD_TC112_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC112_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC17 Type Code 11.2/26.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC112_C13 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC18 C1 TypeCode 12   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 12/Auto_GeStamp_TSCD_TC12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC18 TypeCode 12/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC18 TypeCode 12/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC12 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC19 C1 TypeCode 13   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 13/Auto_GeStamp_TSCD_TC13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC19 TypeCode 13/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('5.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC19 TypeCode 13/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC12 ' })).toBeHidden();
    await page.waitForTimeout(500);
});






test('TC20 C1 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C1 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC20 C2 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C2 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC20 C3 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C3 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC20 C4 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C4 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC20 C5 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('20.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C5 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC20 C6 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('30.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C6 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC20 C7 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('30.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C7 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC20 C8 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('30.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C8 ' })).toBeHidden();
    await page.waitForTimeout(500);
});


test('TC20 C9 TypeCode 14   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 14/Auto_GeStamp_TSCD_TC14_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC14_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('30.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC20 Type Code 14/18.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC14_C9 ' })).toBeHidden();
    await page.waitForTimeout(500);
});


test('TC21 C1 TypeCode 15   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 15/Auto_GeStamp_TSCD_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC21 TypeCode 15/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC15 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC21 TypeCode 15/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC15 ' })).toBeHidden();
    await page.waitForTimeout(500);

});



test('TC22 C1 TypeCode 16   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 16/Auto_GeStamp_TSCD_TC16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC22 TypeCode 16/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC16 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC22 TypeCode 16/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC16 ' })).toBeHidden();
    await page.waitForTimeout(500);
});







test('TC23 C1 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C1 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C2 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C2 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C3 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C3 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C4 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C4 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C5 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C5 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C6 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C6 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C7 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C7 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C8 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('5.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C8 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C9 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('5.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C9 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C10 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('5.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C10 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C11 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('5.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C11 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C12 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('5.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C12 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC23 C13 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C13 ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC23 C14 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/27.Case 14.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C14 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/28.Stamp Duty Amount Case 14.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C14 ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC23 C15 TypeCode 17   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 17/Auto_GeStamp_TSCD_TC17_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/29.Case 15.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC17_C15 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC23 Type Code 17/30.Stamp Duty Amount Case 15.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC17_C15 ' })).toBeHidden();
    await page.waitForTimeout(500);
});







test('TC24 C1 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C1 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C2 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C2 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C3 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/05.Case 03.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C3 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/06.Stamp Duty Amount Case 03.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C3 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C4 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/07.Case 04.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C4 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('0.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/08.Stamp Duty Amount Case 04.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C4 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C5 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/09.Case 05.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C5 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/10.Stamp Duty Amount Case 05.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C5 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C6 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/11.Case 06.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C6 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/12.Stamp Duty Amount Case 06.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C6 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C7 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/13.Case 07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C7 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/14.Stamp Duty Amount Case 07.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C7 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C8 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/15.Case 08.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C8 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/16.Stamp Duty Amount Case 08.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C8 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C9 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/17.Case 09.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C9 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/18.Stamp Duty Amount Case 09.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C9 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C10 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/19.Case 10.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C10 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/20.Stamp Duty Amount Case 10.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C10 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C11 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/21.Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C11 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('2.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/22.Stamp Duty Amount Case 11.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C11 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C12 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/23.Case 12.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C12 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/24.Stamp Duty Amount Case 12.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C12 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC24 C13 TypeCode 18   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 18/Auto_GeStamp_TSCD_TC18_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/25.Case 13.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC18_C13 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('3.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC24 Type Code 18/26.Stamp Duty Amount Case 13.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC18_C13 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC25 C1 TypeCode 19   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 19/Auto_GeStamp_TSCD_TC19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC25 TypeCode 19/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC19 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC25 TypeCode 19/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC19 ' })).toBeHidden();
    await page.waitForTimeout(500);
    await page.waitForTimeout(1000);
});





test('TC26 C1 TypeCode 20   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 20/Auto_GeStamp_TSCD_TC20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC26 TypeCode 20/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC20 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('1.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC26 TypeCode 20/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC20 ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC27 C1 TypeCode 21   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 21/Auto_GeStamp_TSCD_TC21_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC21_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC27 Type Code 21/01.Case 01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC21_C1 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('10.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC27 Type Code 21/02.Stamp Duty Amount Case 01.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC21_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC21_C1 ' })).toBeHidden();
    await page.waitForTimeout(500);
});




test('TC27 C2 TypeCode 21   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 21/Auto_GeStamp_TSCD_TC21_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC21_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC27 Type Code 21/03.Case 02.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC21_C2 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('30.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC27 Type Code 21/04.Stamp Duty Amount Case 02.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC21_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC21_C2 ' })).toBeHidden();
    await page.waitForTimeout(500);
});



test('TC28 C1 TypeCode 271   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 271/Auto_GeStamp_TSCD_TC271.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC271' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC28 TypeCode 271/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC271 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('100.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC28 TypeCode 271/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC271 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC271 ' })).toBeHidden();
    await page.waitForTimeout(500);
});





test('TC29 C1 TypeCode 272   ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Calculate Duty/TypeCode 272/Auto_GeStamp_TSCD_TC272.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC272' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC29 TypeCode 272/01.Upload 1 Copy.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GeStamp_TSCD_TC272 ').first().click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Stamp Duty Amount/ }).getByRole('paragraph')).toHaveText('50.00');
    await page.screenshot({ path: 'Output/TS09-Calulate Duty/TC29 TypeCode 272/02.Stamp Duty Amount.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC272 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TSCD_TC272 ' })).toBeHidden();
    await page.waitForTimeout(500);
});
