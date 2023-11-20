
// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('https://app.gestampduty.com/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();
});







test('TC31 District 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/31. district/Auto_District_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_District_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_District_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_District_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/31. district/Auto_District_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_District_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_District_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_District_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/31. district/Auto_District_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_District_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_District_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_District_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/31. district/Auto_District_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_District_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_District_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_District_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);





});







test('TC31 District 5 - 8 ', async ({ page }) => {
    // C5
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/31. district/Auto_District_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_District_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_District_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_District_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/31. district/Auto_District_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_District_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' invalid character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/07. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_District_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' invalid character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/08. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_District_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_District_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/31. district/Auto_District_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_District_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/09. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' invalid character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/10. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_District_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' invalid character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/11. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_District_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_District_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/31. district/Auto_District_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_District_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/12. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/13. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_District_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC31. District/14. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_District_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_District_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC32 Province 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/32. province/Auto_Province_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Province_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Province_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Province_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/32. province/Auto_Province_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Province_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Province_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Province_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/32. province/Auto_Province_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Province_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Province_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Province_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/32. province/Auto_Province_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Province_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Province_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Province_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);



});



test('TC32 Province 5 - 8 ', async ({ page }) => {
    // C5
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/32. province/Auto_Province_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Province_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Province_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Province_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/32. province/Auto_Province_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Province_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' invalid character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/07. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Province_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' invalid character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/08. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Province_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Province_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/32. province/Auto_Province_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Province_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/09. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' invalid character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/10. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Province_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' invalid character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/11. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Province_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Province_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/32. province/Auto_Province_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Province_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/12. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/13. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Province_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC32. Province/14. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Province_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Province_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});






test('TC33 Post Code 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/33. postcode/Auto_PostCode_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_PostCode_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_PostCode_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_PostCode_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/33. postcode/Auto_PostCode_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_PostCode_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_PostCode_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_PostCode_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/33. postcode/Auto_PostCode_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_PostCode_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_PostCode_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_PostCode_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/33. postcode/Auto_PostCode_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_PostCode_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'postCode' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/05. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_PostCode_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'postCode' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/06. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_PostCode_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_PostCode_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});






test('TC33 Post Code 5 - 8 ', async ({ page }) => {
    // C5
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/33. postcode/Auto_PostCode_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_PostCode_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/07. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'postCode' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/08. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_PostCode_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'postCode' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/09. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_PostCode_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_PostCode_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/33. postcode/Auto_PostCode_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_PostCode_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/10. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'postCode' invalid postcode format. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/11. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_PostCode_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'postCode' invalid postcode format. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/12. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_PostCode_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_PostCode_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/33. postcode/Auto_PostCode_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_PostCode_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/13. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'postCode' invalid postcode format. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/14. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_PostCode_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'postCode' invalid postcode format. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/15. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_PostCode_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_PostCode_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/33. postcode/Auto_PostCode_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_PostCode_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/16. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'postCode' invalid postcode format. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/17. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_PostCode_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'postCode' invalid postcode format. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC33. Post Code/18. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_PostCode_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_PostCode_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});




test('TC34 Total Party 1 - 5 ', async ({ page }) => {
    // C1
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_TotalParty_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_TotalParty_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TotalParty_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_TotalParty_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_TotalParty_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});




test('TC34 Total Party 6 - 10 ', async ({ page }) => {
    // C6
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_TotalParty_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_TotalParty_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_TotalParty_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_TotalParty_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/09. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'totalParty' is required ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/10. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TotalParty_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'totalParty' is required ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/11. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_TotalParty_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/12. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'totalParty' is required ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/13. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TotalParty_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'totalParty' is required Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/14. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC34 Total Party 11 - 13 ', async ({ page }) => {
    // C11
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_TotalParty_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/15. Case 11.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'totalParty' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/16. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TotalParty_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'totalParty' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/17. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C11  ' })).toBeHidden();
    // C12
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_TotalParty_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/18. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'totalParty' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/19. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TotalParty_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'totalParty' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/20. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C12  ' })).toBeHidden();
    // C13
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/34. totalparty/Auto_TotalParty_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TotalParty_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/21. Case 13.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'totalParty' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/22. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TotalParty_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'totalParty' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC34. Total Party/23. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_TotalParty_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TotalParty_C13  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC35 Foreign Type 1 - 5 ', async ({ page }) => {
    // C1
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ForeignType_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ForeignType_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ForeignType_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ForeignType_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ForeignType_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/06. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ForeignType_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/07. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});



test('TC35 Foreign Type 6 - 11 ', async ({ page }) => {
    // C6
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ForeignType_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/08. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/09. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ForeignType_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/10. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ForeignType_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/11. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/12. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ForeignType_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/13. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ForeignType_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/14. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/15. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ForeignType_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/16. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ForeignType_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/17. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/18. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ForeignType_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/19. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_ForeignType_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/20. Case 10.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/21. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ForeignType_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/22. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C10  ' })).toBeHidden();
    // C11
    await page.waitForURL('https://app.gestampduty.com/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/35. foreigntype/Auto_ForeignType_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://app.gestampduty.com/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ForeignType_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/23. Case 11.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/24. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ForeignType_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC35. Foreign Type/25. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ForeignType_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ForeignType_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});
