// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/#/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
});





test('TC01 type code  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/01. typecode/Auto_TypeCode_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_TypeCode_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/01. Input Type Code.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_TypeCode_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TypeCode_C1  ' })).toBeHidden();

    //C2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/01. typecode/Auto_TypeCode_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_TypeCode_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/02. No Input Type Code.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'typeCode' is required ข้อมูลบรรทัดที่ 1 column 'typeCode' value must be one of '1,2,3,4,5,6,7,8,91,92,10,111,112,12,13,14,15,16,17,18,19,20,21,23,271,272,283' ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/03. Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TypeCode_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'typeCode' is required ข้อมูลบรรทัดที่ 1 column 'typeCode' value must be one of '1,2,3,4,5,6,7,8,91,92,10,111,112,12,13,14,15,16,17,18,19,20,21,23,271,272,283' Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/04. Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_TypeCode_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TypeCode_C2  ' })).toBeHidden();

    //  C3
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/01. typecode/Auto_TypeCode_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_TypeCode_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/05. Delete Column Type Code.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'typeCode' is required ข้อมูลบรรทัดที่ 1 column 'typeCode' value must be one of '1,2,3,4,5,6,7,8,91,92,10,111,112,12,13,14,15,16,17,18,19,20,21,23,271,272,283' ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/06. Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TypeCode_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'typeCode' is required ข้อมูลบรรทัดที่ 1 column 'typeCode' value must be one of '1,2,3,4,5,6,7,8,91,92,10,111,112,12,13,14,15,16,17,18,19,20,21,23,271,272,283' Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/07. Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_TypeCode_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TypeCode_C3  ' })).toBeHidden();


    //  C4
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/01. typecode/Auto_TypeCode_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TypeCode_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/08. Input TH.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_TypeCode_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TypeCode_C4  ' })).toBeHidden();
    //  C5
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/01. typecode/Auto_TypeCode_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_TypeCode_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/09. Input EN.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_TypeCode_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TypeCode_C5  ' })).toBeHidden();
    //  C6
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/01. typecode/Auto_TypeCode_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_TypeCode_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC01. Type Code/10. Input Special Characters.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_TypeCode_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TypeCode_C6  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});





test('TC02 recive date case 1  ', async ({ page }) => {
    //  C1-1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C1-1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ReceiveDate_C1-1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/01. Case 1-1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/02.Case 1-1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C1-1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/03. Case 1-1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C1-1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C1-1  ' })).toBeHidden();
    //C1 - 2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C1-2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C1-2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/04. Case 1-2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/05. Case 1-2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C1-2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/06. Case 1-2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C1-2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C1-2  ' })).toBeHidden();
    //  C1-3
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C1-3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C1-3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/07. Case 1-3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/08. Case 1-3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C1-3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/09. Case 1-3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C1-3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C1-3  ' })).toBeHidden();
    //  C1-4
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C1-4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C1-4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/10. Case 1-4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/11. Case 1-4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C1-4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/12. Case 1-4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C1-4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C1-4  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC02 recive date case 2  ', async ({ page }) => {
    //  C2-1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C2-1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ReceiveDate_C2-1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/13. Case 2-1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C2-1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C2-1  ' })).toBeHidden();
    // C2-2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C2-2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C2-2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/14. Case 2-2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/15. Case 2-2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C2-2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/16. Case 2-2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C2-2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C2-2  ' })).toBeHidden();
    //  C2-3
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C2-3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C2-3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/17. Case 2-3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/18. Case 2-3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C2-3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/19. Case 2-3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C2-3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C2-3  ' })).toBeHidden();
    //  C2-4
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C2-4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C2-4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/20. Case 2-4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/21. Case 2-4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C2-4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/22. Case 2-4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C2-4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C2-4  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC02 recive date case 3  ', async ({ page }) => {
    //  C2-1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C3-1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ReceiveDate_C3-1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/23. Case 3-1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C3-1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C3-1  ' })).toBeHidden();
    // C2-2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C3-2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C3-2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/24. Case 3-2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/25. Case 3-2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C3-2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/26. Case 3-2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C3-2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C3-2  ' })).toBeHidden();
    //  C2-3
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C3-3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C3-3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/27. Case 3-3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/28. Case 3-3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C3-3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/29. Case 3-3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C3-3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C3-3  ' })).toBeHidden();
    //  C2-4
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C3-4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C3-4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/30. Case 3-4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/31. Case 3-4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C3-4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/32. Case 3-4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C3-4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C3-4  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});



test('TC02 recive date case 4 , 5  ', async ({ page }) => {
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ReceiveDate_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/33. Case 4.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C4  ' })).toBeHidden();

    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/34. Case 5.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('TC02 recive date case 6 - 12  ', async ({ page }) => {
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ReceiveDate_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/35. Case 6.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/36.Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/37. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C6  ' })).toBeHidden();
    //C7
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/38. Case 7.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/39. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/40. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C7  ' })).toBeHidden();
    //  C8
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/41. Case 8.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/42. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/43. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C8  ' })).toBeHidden();
    //  C9
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/44. Case 9.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/45. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/46. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);
    //  C10
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/47. Case 10.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/48. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/49. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);
    //  C11
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/50. Case 11.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/51. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/52. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);
    //  C12
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/02. receivedate/Auto_ReceiveDate_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ReceiveDate_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/53. Case 12.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/54. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ReceiveDate_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC02. Receive Date/55. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ReceiveDate_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ReceiveDate_C12  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC03 inst amount case 1 - 9  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_InstAmount_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/01. Input Contract Amount.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_InstAmount_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C1  ' })).toBeHidden();
    //  C2-1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C2-1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_InstAmount_C2-1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/02. Input 10 Digit Number .png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_InstAmount_C2-1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C2-1  ' })).toBeHidden();
    //  C2-2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C2-2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_InstAmount_C2-2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/03. Input 11 Digit Number.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_InstAmount_C2-2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C2-2  ' })).toBeHidden();
    //  C2-3
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C2-3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_InstAmount_C2-3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/04. Input 12 Digit Number.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' is number overflow");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/05. Case 2-3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C2-3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' is number overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/06. Case 2-3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C2-3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C2-3  ' })).toBeHidden();
    //  C3
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_InstAmount_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/07. Case 3.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11]");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/08. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/09. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C3  ' })).toBeHidden();
    //  C4
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_InstAmount_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/10. Case 4.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11]");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/11. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/12. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C4  ' })).toBeHidden();
    //  C5
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_InstAmount_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/13. Input TH.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/14. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/15. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C5  ' })).toBeHidden();
    //  C6
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_InstAmount_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/16. Input EN.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/17. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/18. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C6  ' })).toBeHidden();
    //  C7
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_InstAmount_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/19. Input Special Characters.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/20. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 6, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/21. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_InstAmount_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/22. Case 8.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_InstAmount_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C8  ' })).toBeHidden();
    //  C9
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_InstAmount_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/23. Case 9 .png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_InstAmount_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});







test('TC03 inst amount case 10 - 16 ', async ({ page }) => {


    //  C10
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_InstAmount_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/24. Case 10.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount'  is digit overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/25. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount'  is digit overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/26. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator12 = await page.getByRole('row', { name: 'Auto_InstAmount_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/27. Case 11.png', mask: [mask_locator12], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_InstAmount_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C11  ' })).toBeHidden();
    //  C12
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator13 = await page.getByRole('row', { name: 'Auto_InstAmount_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/28. Case 12 .png', mask: [mask_locator13], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_InstAmount_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C12  ' })).toBeHidden();
    //  C13
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator14 = await page.getByRole('row', { name: 'Auto_InstAmount_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/29. Case 13.png', mask: [mask_locator14], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' length is overflow ข้อมูลบรรทัดที่ 1 column 'instAmount'  is digit overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/30. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' length is overflow ข้อมูลบรรทัดที่ 1 column 'instAmount'  is digit overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/31. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C13  ' })).toBeHidden();
    //  C14
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator15 = await page.getByRole('row', { name: 'Auto_InstAmount_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/32. Case 14.png', mask: [mask_locator15], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' is number overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/33. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' is number overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/34. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C14  ' })).toBeHidden();
    //  C15
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator16 = await page.getByRole('row', { name: 'Auto_InstAmount_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/35. Case 15 .png', mask: [mask_locator16], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' length is overflow ข้อมูลบรรทัดที่ 1 column 'instAmount' is number overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/36. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' length is overflow ข้อมูลบรรทัดที่ 1 column 'instAmount' is number overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/37. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C15  ' })).toBeHidden();
    //  C16
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/03. instAmount/Auto_InstAmount_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator17 = await page.getByRole('row', { name: 'Auto_InstAmount_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/38. Case 16.png', mask: [mask_locator17], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' length is overflow ข้อมูลบรรทัดที่ 1 column 'instAmount' is number overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/39. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_InstAmount_C16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' length is overflow ข้อมูลบรรทัดที่ 1 column 'instAmount' is number overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC03. Inst Amount/40. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_InstAmount_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_InstAmount_C16  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});


test('TC04 tax payer branch case 1  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case1_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/02. Case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/03. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/04. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/05. Case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/06. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/07. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/08. Case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/09. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/10. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/11. Case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/12. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/13. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/14. Case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/15. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/16. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/17. Case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/18. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/19. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/20. Case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/21. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/22. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/23. Case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/24. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/25. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/26. Case 10.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/27. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/28. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C10  ' })).toBeHidden();
    // C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case1/Auto_Branch_Case1_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Branch_Case1_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/29. Case 11.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/30. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case1_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is equal to 0, therefore taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 1/31. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case1_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case1_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});



test('TC04 tax payer branch case 2  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case2_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/02. Case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/03. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/04. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/05. Case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/06. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/07. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/08. Case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/09. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/10. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/11. Case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/12. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/13. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/14. Case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/15. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/16. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/17. Case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/18. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/19. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/20. Case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/21. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/22. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/23. Case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/24. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/25. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/26. case 20.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/27. case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/28. case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C10  ' })).toBeHidden();
    // C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case2/Auto_Branch_Case2_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Branch_Case2_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/29. case 21.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/30. case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case2_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/case 2/31. case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case2_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case2_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});





test('TC04 tax payer branch case 3  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case3_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/02. Case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/03. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/04. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/05. Case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/06. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/07. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/08. Case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/09. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/10. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/11. Case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/12. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/13. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/14. Case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/15. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/16. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/17. Case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/18. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/19. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/20. Case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/21. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/22. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/23. Case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/24. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/25. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/26. case 20.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/27. case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/28. case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C10  ' })).toBeHidden();
    // C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case3/Auto_Branch_Case3_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Branch_Case3_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/29. case 21.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/30. case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case3_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' value must be one of 'V,S,O' ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 3/31. case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case3_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case3_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});





test('TC04 tax payer branch case 4  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case4_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is more than 0, therefore taxPayerBranchType must be 'V' or 'S'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case4_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is more than 0, therefore taxPayerBranchType must be 'V' or 'S'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case4_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/04. case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case4_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/05. case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case4_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/06. case 1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is more than 0, therefore taxPayerBranchType must be 'V' or 'S'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/07. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case4_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is more than 0, therefore taxPayerBranchType must be 'V' or 'S'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/08. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case4_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/09. case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case4_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/10. case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case4_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/11. case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is more than 0, therefore taxPayerBranchType must be 'V' or 'S'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/12. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case4_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is more than 0, therefore taxPayerBranchType must be 'V' or 'S'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/13. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case4_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/14. case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/15. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case4_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/16. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case4/Auto_Branch_Case4_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case4_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/17. case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/18. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case4_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 4/19. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case4_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case4_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});





test('TC04 tax payer branch case 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case5_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case5_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/04. case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/05. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/06. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case5_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/08. case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/09. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/10. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case5_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/11. case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/12. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/13. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case5_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/14. case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/15. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/16. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case5_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/17. case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/18. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/19. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case5_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/20. case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/21. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/22. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case5_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/23. case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/24. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/25. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case5/Auto_Branch_Case5_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case5_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/26. case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/27. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case5_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 5/28. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case5_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case5_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});






test('TC04 tax payer branch case 6  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case6_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case6_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/04. case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/05. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/06. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case6_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/08. case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/09. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/10. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case6_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/11. case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/12. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/13. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case6_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/14. case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/15. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/16. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case6_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/17. case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/18. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/19. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case6_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/20. case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/21. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/22. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case6_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/23. case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/24. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/25. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case6/Auto_Branch_Case6_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case6_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/26. case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/27. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case6_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 6/28. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case6_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case6_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});









test('TC04 tax payer branch case 7  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case7_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case7_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/04. case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/05. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/06. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case7_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/08. case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/09. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/10. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case7_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/11. case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/12. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/13. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case7_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/14. case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/15. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/16. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case7_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/17. case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/18. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/19. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case7_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/20. case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/21. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/22. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case7_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/23. case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/24. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/25. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case7/Auto_Branch_Case7_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case7_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/26. case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/27. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case7_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 7/28. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case7_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case7_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});




test('TC04 tax payer branch case 8  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case8_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case8_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/04. case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/05. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/06. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case8_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/08. case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/09. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/10. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case8_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/11. case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/12. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/13. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case8_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/14. case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/15. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/16. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case8_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/17. case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/18. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/19. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case8_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/20. case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/21. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/22. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case8_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/23. case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/24. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/25. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case8/Auto_Branch_Case8_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case8_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/26. case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/27. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case8_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 8/28. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case8_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case8_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});




test('TC04 tax payer branch case 9  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case9_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case9_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/04. case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/05. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/06. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case9_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/08. case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/09. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/10. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case9_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/11. case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/12. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/13. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case9_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/14. case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/15. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/16. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case9_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/17. case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/18. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/19. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case9_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/20. case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/21. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/22. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case9_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/23. case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/24. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/25. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case9/Auto_Branch_Case9_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case9_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/26. case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/27. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case9_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 9/28. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case9_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case9_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});





test('TC04 tax payer branch case 10  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Branch_Case10_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/01. case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Branch_Case10_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/04. case 2.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/05. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/06. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Branch_Case10_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/08. case 3.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/09. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/10. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Branch_Case10_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/11. case 4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/12. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/13. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Branch_Case10_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/14. case 5.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/15. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/16. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Branch_Case10_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/17. case 6.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/18. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/19. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Branch_Case10_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/20. case 7.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/21. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/22. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Branch_Case10_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/23. case 8.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/24. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/25. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/04. taxpayerbranch/Case10/Auto_Branch_Case10_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Branch_Case10_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/26. case 9.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/27. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Branch_Case10_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerBrachNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC04. Branch/Case 10/28. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Branch_Case10_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Branch_Case10_C9  ' })).toBeHidden();
    await page.waitForTimeout(1000);

});




test('TC05 Detail1 Type Code 2  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/08. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC2_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/09. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/10. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/11. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC2_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/12. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/13. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/14. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC2_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/15. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/01. Typecode 2/Auto_Detail1_TC2_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC2_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/16. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/17. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC2_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/01. Typecode 2/18. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC2_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC2_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});





test('TC05 Detail1 Type Code 4  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC4_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC4_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC4_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/02. Typecode 4/Auto_Detail1_TC4_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC4_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC4_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/02. Typecode 4/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC4_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC4_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});





test('TC05 Detail1 Type Code 5  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC5_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17]  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC5_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17]  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC5_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/03. Typecode 5/Auto_Detail1_TC5_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC5_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC5_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/03. Typecode 5/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC5_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC5_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});



test('TC05 Detail1 Type Code 6  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC6_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC6_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC6_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/04. Typecode 6/Auto_Detail1_TC6_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC6_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC6_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/04. Typecode 6/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC6_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC6_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC05 Detail1 Type Code 7  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC7_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC7_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC7_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/05. Typecode 7/Auto_Detail1_TC7_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC7_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC7_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/05. Typecode 7/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC7_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC7_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC05 Detail1 Type Code 8  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC8_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC8_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC8_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/06. Typecode 8/Auto_Detail1_TC8_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC8_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC8_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/06. Typecode 8/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC8_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC8_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});






test('TC05 Detail1 Type Code 10  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC10_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC10_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC10_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/07. Typecode 10/Auto_Detail1_TC10_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC10_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC10_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/07. Typecode 10/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC10_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC10_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});





test('TC05 Detail1 Type Code 111  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/08. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC111_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/09. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/10. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/11. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC111_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/12. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/13. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/14. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC111_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/15. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/08. Typecode 111/Auto_Detail1_TC111_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC111_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/16. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/17. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC111_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/08. Typecode 111/18. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC111_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC111_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});






test('TC05 Detail1 Type Code 16  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC16_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18]   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC16_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC16_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/09. Typecode 16/Auto_Detail1_TC16_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC16_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC16_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/09. Typecode 16/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC16_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC16_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC05 Detail1 Type Code 18  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC18_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC18_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC18_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/10. Typecode 18/Auto_Detail1_TC18_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC18_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC18_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/10. Typecode 18/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC18_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC18_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});





test('TC05 Detail1 Type Code 19  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC19_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC19_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC19_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/11. Typecode 19/Auto_Detail1_TC19_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC19_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC19_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/11. Typecode 19/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC19_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC19_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC05 Detail1 Type Code 20  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC20_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC20_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC20_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/12. Typecode 20/Auto_Detail1_TC20_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC20_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC20_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/12. Typecode 20/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC20_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC20_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC05 Detail1 Type Code 21  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC21_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC21_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC21_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/13. Typecode 21/Auto_Detail1_TC21_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC21_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC21_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/13. Typecode 21/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC21_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC21_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});




test('TC05 Detail1 Type Code 271  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC271_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC271_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC271_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/14. Typecode 271/Auto_Detail1_TC271_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC271_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC271_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/14. Typecode 271/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC271_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC271_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});





test('TC05 Detail1 Type Code 272  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC272_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/11. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/12. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC272_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText( "errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,6,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 4, 6, 7, 8, 10, 16, 18, 19, 20, 21, 271, 272, or 283; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/13. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C9  ' })).toBeHidden();
    //  C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/14. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/15. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC272_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/16. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C10  ' })).toBeHidden();
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/05. detail1/15. Typecode 272/Auto_Detail1_TC272_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_Detail1_TC272_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/17. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow   ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/18. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Detail1_TC272_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC05. Detail 1/15. Typecode 272/19. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_Detail1_TC272_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Detail1_TC272_C11  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});

