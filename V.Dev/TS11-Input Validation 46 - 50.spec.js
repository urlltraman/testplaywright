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
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});



test('TC46 UserID 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/46. userid/Auto_UserID_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_UserID_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC46. UserID/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_UserID_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_UserID_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/46. userid/Auto_UserID_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_UserID_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC46. UserID/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_UserID_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_UserID_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/46. userid/Auto_UserID_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_UserID_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC46. UserID/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_UserID_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_UserID_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/46. userid/Auto_UserID_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_UserID_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC46. UserID/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_UserID_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_UserID_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});






test('TC47 Overdue Flag  1 - 6 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_OverdueFlag_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_OverdueFlag_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_OverdueFlag_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_OverdueFlag_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/05. Case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_OverdueFlag_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_OverdueFlag_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C6  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('TC47 Overdue Flag  7 - 10 ', async ({ page }) => {
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/07. Case 7.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/08. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_OverdueFlag_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/09. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();

    await page.getByRole('row', { name: 'Auto_OverdueFlag_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/10. Case 8.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/11. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_OverdueFlag_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/12. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();

    await page.getByRole('row', { name: 'Auto_OverdueFlag_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/13. Case 9.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/14. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_OverdueFlag_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/15. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();

    await page.getByRole('row', { name: 'Auto_OverdueFlag_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/16. Case 10.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_OverdueFlag_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C10  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});




test('TC47 Overdue Flag  11 - 12 ', async ({ page }) => {
    // C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/17. Case 11.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_OverdueFlag_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();

    await page.getByRole('row', { name: 'Auto_OverdueFlag_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C11  ' })).toBeHidden();
    // C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/47. overdueflag/Auto_OverdueFlag_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_OverdueFlag_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/20. Case 12.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/21. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_OverdueFlag_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC47. Overdue Flag/22. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();

    await page.getByRole('row', { name: 'Auto_OverdueFlag_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_OverdueFlag_C12  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('TC48 Contract Party Lastname  1 - 6 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/05. Case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C6  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC48 Contract Party Lastname  7 - 10 ', async ({ page }) => {
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/07. Case 7.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/08. Case 8.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/09. Case 9.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractPartyLastName' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/10. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractPartyLastName_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractPartyLastName' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/11. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/48. contractpartylastname/Auto_ContractPartyLastName_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/12. Case 10.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractPartyLastName' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/13. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractPartyLastName_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractPartyLastName' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC48. Contract Party Last Name/14. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractPartyLastName_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractPartyLastName_C10  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('TC49 Detail4  1 - 5 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Detail4_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail4_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail4_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail4_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail4_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('TC49 Detail4  6 - 10 ', async ({ page }) => {
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Detail4_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/06. Case 6.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail4_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/07. Case 7.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail4_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/08. Case 8.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail4_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/09. Case 9.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail4_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/10. Case 10.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C10  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('TC49 Detail4  11 - 12 ', async ({ page }) => {
    // C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Detail4_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/11. Case 11.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail4_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C11  ' })).toBeHidden();
    // C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/49. detail4/Auto_Detail4_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail4_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/12. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail4' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/13. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail4_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail4' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail4/14. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail4_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail4_C12  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC50 Detail5,6  1 - 2 ', async ({ page }) => {
    // D5 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/50. detail5,6,7,8/Auto_Detail5_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Detail5_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/01.Detail5 Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail5_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail5_C1  ' })).toBeHidden();
    // D5 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/50. detail5,6,7,8/Auto_Detail5_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail5_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/02.Detail5 Case 02.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail5' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/03.Detail5 Case 02 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail5_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail5' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/04.Detail5 Case 02 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail5_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail5_C2  ' })).toBeHidden();
    // D6 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/50. detail5,6,7,8/Auto_Detail6_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail6_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/05.Detail6 Case 1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail6_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail6_C1  ' })).toBeHidden();
    // D6 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/50. detail5,6,7,8/Auto_Detail6_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail6_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/06.Detail6 Case 02.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail6' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/07.Detail6 Case 02 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail6_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail6' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/08.Detail6 Case 02 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail6_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail6_C2  ' })).toBeHidden();
    await page.waitForTimeout(1500);




    

});





test('TC50 Detail7,8  1 - 2 ', async ({ page }) => {
     // D7 C1
     await page.waitForURL('/batch');
     await page.getByRole('button', { name: 'Upload' }).first().click();
     await page.locator('#file').setInputFiles('Data Files/Input Validation/50. detail5,6,7,8/Auto_Detail7_C1.xlsx');
     await page.getByRole('button', { name: 'Upload' }).click();
     await page.getByLabel('Upload Success').click();
     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
     await page.getByRole('button', { name: 'Close' }).click();
     await page.reload();
     await page.waitForTimeout(2500);
     await page.waitForURL('/batch');
     await page.getByRole('button', { name: 'Search' }).first().click();
     await page.waitForTimeout(1500);
     let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail7_C1' }).getByRole('cell').first();
     await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/09.Detail7 Case 1.png', mask: [mask_locator5], maskColor: '#00FF00' });
     await page.waitForTimeout(1500);
     await page.getByRole('button', { name: 'Search' }).first().click();
     await page.getByRole('row', { name: 'Auto_Detail7_C1 ' }).first().getByText('delete').click();
     await page.getByRole('button', { name: 'Confirm' }).click();
     await expect.soft(page.getByRole('row', { name: 'Auto_Detail7_C1  ' })).toBeHidden();
     // D7 C2
     await page.waitForURL('/batch');
     await page.getByRole('button', { name: 'Upload' }).first().click();
     await page.locator('#file').setInputFiles('Data Files/Input Validation/50. detail5,6,7,8/Auto_Detail7_C2.xlsx');
     await page.getByRole('button', { name: 'Upload' }).click();
     await page.getByLabel('Upload Success').click();
     await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
     await page.getByRole('button', { name: 'Close' }).click();
     await page.reload();
     await page.waitForTimeout(2500);
     await page.waitForURL('/batch');
     let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail7_C2' }).getByRole('cell').first();
     await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/10.Detail7 Case 02.png', mask: [mask_locator6], maskColor: '#00FF00' });
     await page.waitForTimeout(1500);
     await page.getByRole('button', { name: 'Search' }).first().click();
     await page.waitForTimeout(500);
     await page.reload();
     await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
     await expect.soft(page.getByLabel('Message')).toBeVisible();
     await expect.soft(page.getByLabel('Message'))
         .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail7' length is overflow ");
     await page.waitForTimeout(500);
     await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/11.Detail7 Case 02 Click Status Error Msg.png' });
     await page.waitForTimeout(500);
     await page.reload();
     await page.getByText('Auto_Detail7_C2').first().click();
     await expect.soft(page.locator('.card-error')).toBeVisible();
     await expect.soft(page.locator('.card-error'))
         .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail7' length is overflow Import FixesExport FixesEdit");
     await page.waitForTimeout(500);
     await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/12.Detail7 Case 02 Error Msg.png' });
     await page.locator('a').filter({ hasText: 'Batch' }).click();
     await page.getByRole('row', { name: 'Auto_Detail7_C2 ' }).first().getByText('delete').click();
     await page.getByRole('button', { name: 'Confirm' }).click();
     await expect.soft(page.getByRole('row', { name: 'Auto_Detail7_C2  ' })).toBeHidden();
     // D8 C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/50. detail5,6,7,8/Auto_Detail8_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail8_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/13.Detail7 Case 1.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Detail8_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail8_C1  ' })).toBeHidden();
    // D8 C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/50. detail5,6,7,8/Auto_Detail8_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail8_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/14.Detail7 Case 02.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail8' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/15.Detail7 Case 02 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail8_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail8' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC49. Detail5,6,7,8/16.Detail7 Case 02 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail8_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail8_C2  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});