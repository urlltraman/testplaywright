import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Runs Uat

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

  });






// test('TC06 Detail2 Type Code 6 1 - 5  ', async ({ page }) => {
//     //  C1
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C1.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C1' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C1 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C1  ' })).toBeHidden();
//     //  C2
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C2.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C2' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C2 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C2  ' })).toBeHidden();
//     //  C3
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C3.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C3' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C3 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C3  ' })).toBeHidden();
//     //  C4
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C4.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C4' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C4 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C4  ' })).toBeHidden();
//     //  C5
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C5.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C5' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C5 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C5  ' })).toBeHidden();
//     await page.waitForTimeout(1500);
// });





// test('TC06 Detail2 Type Code 6 6 - 11  ', async ({ page }) => {
//     //  C6
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C6.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C6' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C6 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C6  ' })).toBeHidden();
//     //  C7
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C7.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C7' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C7 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C7  ' })).toBeHidden();
//     //  C8
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C8.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C8' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click()
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
//     await expect.soft(page.getByLabel('Message')).toBeVisible();
//     await expect.soft(page.getByLabel('Message'))
//         .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/09. Case 8 Click Status Error Msg.png' });
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.getByText('Auto_Detail2_TC6_C8').first().click();
//     await expect.soft(page.locator('.card-error')).toBeVisible();
//     await expect.soft(page.locator('.card-error'))
//         .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/10. Case 8 Error Msg.png' });
//     await page.locator('a').filter({ hasText: 'Batch' }).click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C8 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C8  ' })).toBeHidden();
//     //  C9
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C9.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C9' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click()
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
//     await expect.soft(page.getByLabel('Message')).toBeVisible();
//     await expect.soft(page.getByLabel('Message'))
//         .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/12. Case 9 Click Status Error Msg.png' });
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.getByText('Auto_Detail2_TC6_C9').first().click();
//     await expect.soft(page.locator('.card-error')).toBeVisible();
//     await expect.soft(page.locator('.card-error'))
//         .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/13. Case 9 Error Msg.png' });
//     await page.locator('a').filter({ hasText: 'Batch' }).click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C9 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C9  ' })).toBeHidden();
//     //  C10
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C10.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C10' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click()
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
//     await expect.soft(page.getByLabel('Message')).toBeVisible();
//     await expect.soft(page.getByLabel('Message'))
//         .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/15. Case 10 Click Status Error Msg.png' });
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.getByText('Auto_Detail2_TC6_C10').first().click();
//     await expect.soft(page.locator('.card-error')).toBeVisible();
//     await expect.soft(page.locator('.card-error'))
//         .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/16. Case 10 Error Msg.png' });
//     await page.locator('a').filter({ hasText: 'Batch' }).click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C10 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C10  ' })).toBeHidden();
//     //  C11
//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 6/Auto_Detail2_TC6_C11.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();
//     await page.getByLabel('Upload Success').click();
//     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.reload();
//     await page.waitForTimeout(1500);
//     await page.waitForURL('/batch');
//     let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail2_TC6_C11' }).getByRole('cell').first();
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Search' }).first().click()
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
//     await expect.soft(page.getByLabel('Message')).toBeVisible();
//     await expect.soft(page.getByLabel('Message'))
//         .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/18. Case 11 Click Status Error Msg.png' });
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.getByText('Auto_Detail2_TC6_C11').first().click();
//     await expect.soft(page.locator('.card-error')).toBeVisible();
//     await expect.soft(page.locator('.card-error'))
//         .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 6/19. Case 11 Error Msg.png' });
//     await page.locator('a').filter({ hasText: 'Batch' }).click();
//     await page.getByRole('row', { name: 'Auto_Detail2_TC6_C11 ' }).first().getByText('delete').click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC6_C11  ' })).toBeHidden();
//     await page.waitForTimeout(1000);


// });






test('TC06 Detail2 Type Code 8 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);



});






test('TC06 Detail2 Type Code 8 6 - 11  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC8_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC8_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC8_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/01. Typecode 8/Auto_Detail2_TC8_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail2_TC8_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC8_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/01. Typecode 8/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC8_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC8_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});





test('TC06 Detail2 Type Code 18 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);

});





test('TC06 Detail2 Type Code 18 6 - 11  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC18_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC18_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC18_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/02. Typecode 18/Auto_Detail2_TC18_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail2_TC18_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC18_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/02. Typecode 18/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC18_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC18_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});





test('TC06 Detail2 Type Code 271 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC06 Detail2 Type Code 271 6 - 11  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC271_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC271_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC271_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/03. Typecode 271/Auto_Detail2_TC271_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail2_TC271_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC271_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/03. Typecode 271/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC271_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC271_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC06 Detail2 Type Code 272 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);



});




test('TC06 Detail2 Type Code 272 6 - 11  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC272_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC272_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' typeCode is equal to  8, 18, 271, or 272; therefore, detail2 must not be empty. [R19.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC272_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/04. Typecode 272/Auto_Detail2_TC272_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail2_TC272_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail2_TC272_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail2' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/04. Typecode 272/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC272_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC272_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});



test('TC06 Detail2 Type Code 4 , 5 , 7 , 17 1 - 2 ', async ({ page }) => {
    //  TC 4 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/Auto_Detail2_TC4_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail2_TC4_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/06. Typecode 4,5,7,17/01.TC4 Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC4_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC4_C1  ' })).toBeHidden();
    //  TC 4 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/Auto_Detail2_TC4_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail2_TC4_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/06. Typecode 4,5,7,17/02.TC4 Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC4_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC4_C2  ' })).toBeHidden();
    //  TC 5 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/Auto_Detail2_TC5_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail2_TC5_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/06. Typecode 4,5,7,17/03.TC5 Case 1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC5_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC5_C1  ' })).toBeHidden();
    //  TC 5 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/Auto_Detail2_TC5_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail2_TC5_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/06. Typecode 4,5,7,17/04.TC5 Case 2.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC5_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC5_C2  ' })).toBeHidden();
    //  TC 7 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/Auto_Detail2_TC7_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail2_TC7_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/06. Typecode 4,5,7,17/05.TC7 Case 1.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC7_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC7_C1  ' })).toBeHidden();
    //  TC 7 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/Auto_Detail2_TC7_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail2_TC7_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/06. Typecode 4,5,7,17/06.TC7 Case 2.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC7_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC7_C2  ' })).toBeHidden();
    //  TC 17 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/Auto_Detail2_TC17_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail2_TC17_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/06. Typecode 4,5,7,17/07.TC17 Case 1.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC17_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC17_C1  ' })).toBeHidden();
    //  TC 17 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/06. detail2/Auto_Detail2_TC17_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail2_TC17_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC06. Detail 2/06. Typecode 4,5,7,17/08.TC17 Case 2.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail2_TC17_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail2_TC17_C2  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});






test('TC07 Detail3 Type Code 18 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});




test('TC07 Detail3 Type Code 18 6 - 11  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC18_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC18_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC18_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/01. Typecode 18/Auto_Detail3_TC18_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail3_TC18_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC18_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/01. Typecode 18/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC18_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC18_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC07 Detail3 Type Code 271 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});




test('TC07 Detail3 Type Code 271 6 - 11  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC271_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC271_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC271_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/02. Typecode 271/Auto_Detail3_TC271_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail3_TC271_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC271_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/02. Typecode 271/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC271_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC271_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});






test('TC07 Detail3 Type Code 272 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);





});






test('TC07 Detail3 Type Code 272 6 - 11  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC272_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC272_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' typeCode is equal to 18, 271, or 272; therefore, detail3 must not be empty. [R19.2] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC272_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/03. Typecode 272/Auto_Detail3_TC272_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail3_TC272_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail3_TC272_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail3' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/03. Typecode 272/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC272_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC272_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});



test('TC07 Detail3 Type Code 4 , 5 , 7 , 8 , 17  ', async ({ page }) => {
    //  TC4 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC4_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail3_TC4_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/01.TC4 Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC4_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC4_C1  ' })).toBeHidden();
    //  TC4 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC4_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail3_TC4_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/02.TC4 Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC4_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC4_C2  ' })).toBeHidden();
    //  TC5 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC5_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail3_TC5_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/03.TC5 Case 1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC5_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC5_C1  ' })).toBeHidden();
    //  TC5 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC5_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail3_TC5_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/04.TC5 Case 2.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC5_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC5_C2  ' })).toBeHidden();
    //  TC7 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC7_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail3_TC7_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/05.TC7 Case 1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC7_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC7_C1  ' })).toBeHidden();
    //  TC7 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC7_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail3_TC7_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/06.TC7 Case 2.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC7_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC7_C2  ' })).toBeHidden();
    //  TC8 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC8_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail3_TC8_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/07.TC8 Case 1.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC8_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC8_C1  ' })).toBeHidden();
    //  TC8 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC8_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail3_TC8_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/09.TC17 Case 2.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail3_TC8_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC8_C2  ' })).toBeHidden();
     //  TC17 C1
     await page.waitForURL('/batch');
     await page.getByRole('button', { name: 'Upload' }).first().click();
     await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC17_C1.xlsx');
     await page.getByRole('button', { name: 'Upload' }).click();
     await page.getByLabel('Upload Success').click();
     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
     await page.getByRole('button', { name: 'Close' }).click();
     await page.reload();
     await page.waitForTimeout(1500);
     await page.waitForURL('/batch');
     let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail3_TC17_C1' }).getByRole('cell').first();
     await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/10.TC17 Case 1.png', mask: [mask_locator9], maskColor: '#00FF00' });
     await page.waitForTimeout(1500);
     await page.getByRole('button', { name: 'Search' }).first().click();
     await page.getByRole('row', { name: 'Auto_Detail3_TC17_C1 ' }).first().getByText('delete').click();
     await page.getByRole('button', { name: 'Confirm' }).click();
     await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC17_C1  ' })).toBeHidden();
     //  TC17 C2
     await page.waitForURL('/batch');
     await page.getByRole('button', { name: 'Upload' }).first().click();
     await page.locator('#file').setInputFiles('Data Files/Input Validation/07. detail3/Auto_Detail3_TC17_C2.xlsx');
     await page.getByRole('button', { name: 'Upload' }).click();
     await page.getByLabel('Upload Success').click();
     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
     await page.getByRole('button', { name: 'Close' }).click();
     await page.reload();
     await page.waitForTimeout(1500);
     await page.waitForURL('/batch');
     let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail3_TC17_C2' }).getByRole('cell').first();
     await page.screenshot({ path: 'Output/TS11-Input Validation/TC07. Detail 3/04. Typecode 4,5,7,8,17/08.TC8 Case 2.png', mask: [mask_locator10], maskColor: '#00FF00' });
     await page.waitForTimeout(1500);
     await page.getByRole('button', { name: 'Search' }).first().click();
     await page.getByRole('row', { name: 'Auto_Detail3_TC17_C2 ' }).first().getByText('delete').click();
     await page.getByRole('button', { name: 'Confirm' }).click();
     await expect.soft(page.getByRole('row', { name: 'Auto_Detail3_TC17_C2  ' })).toBeHidden();
    await page.waitForTimeout(1500);





});


test('TC08 Select Type 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_SelectType_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_SelectType_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_SelectType_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_SelectType_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_SelectType_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    // await expect.soft(page.getByLabel('Message')).toBeVisible();
    // await expect.soft(page.getByLabel('Message'))
    //     .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'sendFormType' is required  ");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/04. Case 3 Click Status Error Msg.png' });
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.getByText('Auto_SelectType_C3').first().click();
    // await expect.soft(page.locator('.card-error')).toBeVisible();
    // await expect.soft(page.locator('.card-error'))
    //     .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'sendFormType' is required Import FixesExport FixesEdit");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/05. Case 3 Error Msg.png' });
    // await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_SelectType_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    // await expect.soft(page.getByLabel('Message')).toBeVisible();
    // await expect.soft(page.getByLabel('Message'))
    //     .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'sendFormType' is required  ");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/07. Case 4 Click Status Error Msg.png' });
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.getByText('Auto_SelectType_C4').first().click();
    // await expect.soft(page.locator('.card-error')).toBeVisible();
    // await expect.soft(page.locator('.card-error'))
    //     .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'sendFormType' is required Import FixesExport FixesEdit");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/08. Case 4 Error Msg.png' });
    // await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_SelectType_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    // await expect.soft(page.getByLabel('Message')).toBeVisible();
    // await expect.soft(page.getByLabel('Message'))
    //     .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'sendFormType' is required  ");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/10. Case 5 Click Status Error Msg.png' });
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.getByText('Auto_SelectType_C5').first().click();
    // await expect.soft(page.locator('.card-error')).toBeVisible();
    // await expect.soft(page.locator('.card-error'))
    //     .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'sendFormType' is required Import FixesExport FixesEdit");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/11. Case 5 Error Msg.png' });
    // await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);





});




test('TC08 Select Type 6 - 10  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_SelectType_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/07. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/08. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_SelectType_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/09. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' invalid special character  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/10. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' invalid special character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/11. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_SelectType_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/12. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' is required  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/13. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' is required Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/14. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_SelectType_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/15. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' is required ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/16. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' is required Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/17. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_SelectType_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/18. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/19. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/20. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});






test('TC08 Select Type 11 - 15  ', async ({ page }) => {

    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_SelectType_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/21. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/22. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/23. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C11  ' })).toBeHidden();
    //  C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator12 = await page.getByRole('row', { name: 'Auto_SelectType_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/24. Case 12.png', mask: [mask_locator12], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/25. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/26. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C12  ' })).toBeHidden();
    //  C13
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator13 = await page.getByRole('row', { name: 'Auto_SelectType_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/27. Case 13.png', mask: [mask_locator13], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/28. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/29. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C13  ' })).toBeHidden();
    //  C14
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator14 = await page.getByRole('row', { name: 'Auto_SelectType_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/30. Case 14.png', mask: [mask_locator14], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/31. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/32. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C14  ' })).toBeHidden();
    //  C15
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator15 = await page.getByRole('row', { name: 'Auto_SelectType_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/33. Case 15.png', mask: [mask_locator15], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/34. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/35. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C15  ' })).toBeHidden();
    await page.waitForTimeout(1500);





});






test('TC08 Select Type 16 - 19  ', async ({ page }) => {
    //  C16
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator16 = await page.getByRole('row', { name: 'Auto_SelectType_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/36. Case 16.png', mask: [mask_locator16], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/37. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/38. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C16  ' })).toBeHidden();
    //  C17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator17 = await page.getByRole('row', { name: 'Auto_SelectType_C17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/39. Case 17.png', mask: [mask_locator17], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/40. Case 17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/41. Case 17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C17  ' })).toBeHidden();
    //  C18
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator18 = await page.getByRole('row', { name: 'Auto_SelectType_C18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/42. Case 18.png', mask: [mask_locator18], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/43. Case 18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/44. Case 18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C18  ' })).toBeHidden();
    //  C19
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator19 = await page.getByRole('row', { name: 'Auto_SelectType_C19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/45. Case 19.png', mask: [mask_locator19], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/46. Case 19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/47. Case 19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C19  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC08 Select Type 20 - 24  ', async ({ page }) => {
    //  C20
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator16 = await page.getByRole('row', { name: 'Auto_SelectType_C20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/48. Case 20.png', mask: [mask_locator16], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    // await expect.soft(page.getByLabel('Message')).toBeVisible();
    // await expect.soft(page.getByLabel('Message'))
    //     .toHaveText("Messageข้อมูลบรรทัดที่  2 column 'selectType' must be the same for all rows in the same batch ");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/54. Case 20 Click Status Error Msg.png' });
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.getByText('Auto_SelectType_C20').first().click();
    // await expect.soft(page.locator('.card-error')).toBeVisible();
    // await expect.soft(page.locator('.card-error'))
    //     .toHaveText("errorInput Errorข้อมูลบรรทัดที่  2 column 'selectType' must be the same for all rows in the same batch Import FixesExport FixesEdit");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/55. Case 20 Error Msg.png' });
    // await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C20  ' })).toBeHidden();
    //  C21
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator17 = await page.getByRole('row', { name: 'Auto_SelectType_C21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/49. Case 21.png', mask: [mask_locator17], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    // await expect.soft(page.getByLabel('Message')).toBeVisible();
    // await expect.soft(page.getByLabel('Message'))
    //     .toHaveText("Messageข้อมูลบรรทัดที่  2 column 'selectType' must be the same for all rows in the same batch ");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/57. Case 21 Click Status Error Msg.png' });
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.getByText('Auto_SelectType_C21').first().click();
    // await expect.soft(page.locator('.card-error')).toBeVisible();
    // await expect.soft(page.locator('.card-error'))
    //     .toHaveText("errorInput Errorข้อมูลบรรทัดที่  2 column 'selectType' must be the same for all rows in the same batch Import FixesExport FixesEdit");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/58. Case 21 Error Msg.png' });
    // await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C21  ' })).toBeHidden();
    //  C22
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C22.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator18 = await page.getByRole('row', { name: 'Auto_SelectType_C22' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/50. Case 22.png', mask: [mask_locator18], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    // await expect.soft(page.getByLabel('Message')).toBeVisible();
    // await expect.soft(page.getByLabel('Message'))
    //     .toHaveText("Messageข้อมูลบรรทัดที่  3 column 'selectType' must be the same for all rows in the same batch ");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/60. Case 22 Click Status Error Msg.png' });
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.getByText('Auto_SelectType_C22').first().click();
    // await expect.soft(page.locator('.card-error')).toBeVisible();
    // await expect.soft(page.locator('.card-error'))
    //     .toHaveText("errorInput Errorข้อมูลบรรทัดที่  3 column 'selectType' must be the same for all rows in the same batch Import FixesExport FixesEdit");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/61. Case 22 Error Msg.png' });
    // await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C22 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C22  ' })).toBeHidden();
    //  C23
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C23.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator19 = await page.getByRole('row', { name: 'Auto_SelectType_C23' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/51. Case 23.png', mask: [mask_locator19], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    // await expect.soft(page.getByLabel('Message')).toBeVisible();
    // await expect.soft(page.getByLabel('Message'))
    //     .toHaveText("Messageข้อมูลบรรทัดที่  2 column 'selectType' must be the same for all rows in the same batch ข้อมูลบรรทัดที่  3 column 'selectType' must be the same for all rows in the same batch ");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/63. Case 23 Click Status Error Msg.png' });
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.getByText('Auto_SelectType_C23').first().click();
    // await expect.soft(page.locator('.card-error')).toBeVisible();
    // await expect.soft(page.locator('.card-error'))
    //     .toHaveText("errorInput Errorข้อมูลบรรทัดที่  2 column 'selectType' must be the same for all rows in the same batch ข้อมูลบรรทัดที่  3 column 'selectType' must be the same for all rows in the same batch Import FixesExport FixesEdit");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/64. Case 23 Error Msg.png' });
    // await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C23 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C23  ' })).toBeHidden();
    //  C24
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/08. selecttype/Auto_SelectType_C24.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_SelectType_C24' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/52. Case 24.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'dupNumber' selectType is 0; therefore, dupNumber must be equal to 0. (E07370) ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' dupNumber is more than 0; therefore dupDutyAmount must be more than 0. [R54] ข้อมูลบรรทัดที่ 1 column 'selectType' dupNumber is more than 0; therefore selectType must be equal to 1. [R54] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/53. Case 24 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_SelectType_C24').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'dupNumber' selectType is 0; therefore, dupNumber must be equal to 0. (E07370) ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' dupNumber is more than 0; therefore dupDutyAmount must be more than 0. [R54] ข้อมูลบรรทัดที่ 1 column 'selectType' dupNumber is more than 0; therefore selectType must be equal to 1. [R54] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC08. Select Type/54. Case 24 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_SelectType_C24 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SelectType_C24  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});


test('TC09 Contract No Case 1 1 - 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '!@#$%^&*()' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/05. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case1_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '!@#$%^&*()' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/06. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/07. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);





});




test('TC09 Contract No Case 1 6 - 12  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/08. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/09. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/10. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' is required ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/11. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case1_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' is required Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/12. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/13. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' is required ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/14. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case1_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' is required Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/15. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/16. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' length is overflow  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/17. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case1_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/18. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/19. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' length is overflow  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/20. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case1_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/21. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C11  ' })).toBeHidden();
    //  C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator12 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/22. Case 12.png', mask: [mask_locator12], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' 'al66k9ask' is Exist.  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/23. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case1_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' 'al66k9ask' is Exist.  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/24. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C12  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC09 Contract No Case 1 13 - 14  ', async ({ page }) => {
    //  C13
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/25. Case 13.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C13  ' })).toBeHidden();
    //  C14
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/26. Case 14.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C14  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC09 Contract No Case 2  1 - 5  ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C5  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});



test('TC09 Contract No Case 2  6 - 10  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/09. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/10. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '+' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/11. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '+' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/12. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});






test('TC09 Contract No Case 2  11 - 15  ', async ({ page }) => {
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/01. Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '=' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/02. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '=' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/03. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C11  ' })).toBeHidden();
    //  C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/04. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '{' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/05. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '{' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/06. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C12  ' })).toBeHidden();
    //  C13
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/07. Case 13.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '}' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/08. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '}' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/09. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C13  ' })).toBeHidden();
    //  C14
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/10. Case 14.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '|' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/11. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '|' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/12. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C14  ' })).toBeHidden();
    //  C15
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/13. Case 15.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' ':' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/14. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' ':' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/15. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C15  ' })).toBeHidden();
    await page.waitForTimeout(1500);





});






test('TC09 Contract No Case 2  16 - 20  ', async ({ page }) => {
    //  C16
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/16. Case 16.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' ';' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/17. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' ';' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/18. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C16  ' })).toBeHidden();
    //  C17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/19. Case 17.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '\"' invalid special character.");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/20. Case 17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '\"' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/21. Case 17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C17  ' })).toBeHidden();
    //  C18
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/22. Case 25.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' ''' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/23. Case 25 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' ''' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/24. Case 25 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C18  ' })).toBeHidden();
    //  C19
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/25. Case 19.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' ',' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/26. Case 19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' ',' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/27. Case 19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C19  ' })).toBeHidden();
    //  C20
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/28. Case 20.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '?' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/29. Case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '?' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/30. Case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C20  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});


test('TC09 Contract No Case 2  21 - 25  ', async ({ page }) => {
    //  C21
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/01. Case 21.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '!' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/02. Case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '!' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/03. Case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C21  ' })).toBeHidden();
    //  C22
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C22.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C22' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/04. Case 22.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '@' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/05. Case 22 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C22').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '@' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/06. Case 22 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C22 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C22  ' })).toBeHidden();
    //  C23
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C23.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C23' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/07. Case 23.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '#' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/08. Case 23 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C23').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '#' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/09. Case 23 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C23 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C23  ' })).toBeHidden();
    //  C24
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C24.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C24' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/10. Case 24.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '$' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/11. Case 24 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C24').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '$' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/12. Case 24 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C24 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C24  ' })).toBeHidden();
    //  C25
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C25.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C25' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/13. Case 25.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '%' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/14. Case 25 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C25').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '%' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/15. Case 25 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C25 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C25  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});


test('TC09 Contract No Case 2  26 - 31  ', async ({ page }) => {
    //  C26
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C26.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C26' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/16. Case 26.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '^' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/17. Case 26 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C26').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '^' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/18. Case 26 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C26 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C26  ' })).toBeHidden();
    //  C27
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C27.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C27' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/19. Case 27.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '&' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/20. Case 27 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C27').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '&' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/21. Case 27 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C27 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C27  ' })).toBeHidden();
    //  C28
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C28.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C28' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/22. Case 28.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '*' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/23. Case 28 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C28').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '*' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/24. Case 28 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C28 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C28  ' })).toBeHidden();
    //  C29
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C29.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C29' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/25. Case 29.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '(' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/26. Case 29 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C29').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '(' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/27. Case 29 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C29 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C29  ' })).toBeHidden();
    //  C30
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C30.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C30' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/28. Case 30.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' ')' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/29. Case 30 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C30').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' ')' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/30. Case 30 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C30 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C30  ' })).toBeHidden();
    // C31
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C31.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C31' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/31. Case 31.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '฿' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/32. Case 31 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C31').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '฿' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/33. Case 31 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C31 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C31  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});


test('TC10 Creation Date  1 - 5  ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_CreationDate_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_CreationDate_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/03. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/04. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C2  ' })).toBeHidden();
    //  C3  
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_CreationDate_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/05. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/06. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/07. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_CreationDate_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/08. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/09. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/10. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_CreationDate_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/11. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1]");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/12. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/13. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C5  ' })).toBeHidden();
    await page.waitForTimeout(1000);



});


test('TC10 Creation Date  6 - 10  ', async ({ page }) => {
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_CreationDate_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/14. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1]");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/15. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/16. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_CreationDate_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/17. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/18. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/19. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_CreationDate_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/20. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/21. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/22. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_CreationDate_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/23. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/24. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/25. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_CreationDate_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/10. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/11. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/12. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC10 Creation Date  11 - 14  ', async ({ page }) => {
    //  C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_CreationDate_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/29. Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/30. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/31. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C11  ' })).toBeHidden();
    //  C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_CreationDate_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/32. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/33. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/34. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C12  ' })).toBeHidden();
    //  C13
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_CreationDate_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/35. Case 13.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/36. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/37. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C13  ' })).toBeHidden();
    //  C14
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_CreationDate_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/38. Case 14.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/39. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/40. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C14  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC10 Creation Date  15 - 18  ', async ({ page }) => {
    //  C15
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_CreationDate_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/41. Case 15.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/42. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/43. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C15  ' })).toBeHidden();
    //  C16
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_CreationDate_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/44. Case 16.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/45. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/46. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C16  ' })).toBeHidden();
    //  C17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_CreationDate_C17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/47. Case 17.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/48. Case 17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/49. Case 17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C17  ' })).toBeHidden();
    //  C18
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_CreationDate_C18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/50. Case 18.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/51. Case 18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/52. Case 18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C18  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});


test('TC10 Creation Date  19 - 22  ', async ({ page }) => {

    //  C19
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_CreationDate_C19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/53. Case 19.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/54. Case 19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/55. Case 19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C19  ' })).toBeHidden();
    //  C20
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_CreationDate_C20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/56. Case 20.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/57. Case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/58. Case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C20  ' })).toBeHidden();
    //  C21
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_CreationDate_C21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/59. Case 21.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/60. Case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/61. Case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C21  ' })).toBeHidden();
    //  C22
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C22.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_CreationDate_C22' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/62. Case 22.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click()
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/63. Case 22 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C22').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/64. Case 22 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C22 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C22  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});
