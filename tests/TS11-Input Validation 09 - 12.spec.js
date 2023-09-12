// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/#/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
});





test('TC09 Contract No Case 1  ', async ({ page }) => {
    //  C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '!@#$%^&*()' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/05. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case1_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '!@#$%^&*()' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/06. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/07. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/08. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/09. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case1_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/13. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/16. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case1/Auto_ContractNo_Case1_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_ContractNo_Case1_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/01. Case1/19. Case 11.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForTimeout(1000);
});



test('TC09 Contract No Case 2  01 - 10  ', async ({ page }) => {
    // C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C5  ' })).toBeHidden();
    await page.waitForTimeout(1000);
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/09. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/10. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '+' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/11. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '+' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/01 - 10/12. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});






test('TC09 Contract No Case 2  11 - 20  ', async ({ page }) => {
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/01. Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '=' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/02. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '=' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/03. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C11  ' })).toBeHidden();
    //  C12
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/04. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/05. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/06. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C12  ' })).toBeHidden();
    //  C13
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/07. Case 13.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/08. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/09. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C13  ' })).toBeHidden();
    //  C14
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/10. Case 14.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/13. Case 15.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' ':' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/14. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' ':' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/15. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C15  ' })).toBeHidden();
    //  C16
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/16. Case 16.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' ';' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/17. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' ';' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/18. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C16  ' })).toBeHidden();
    //  C17
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/19. Case 17.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/20. Case 17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/21. Case 17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C17  ' })).toBeHidden();
    //  C18
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/22. Case 25.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/23. Case 25 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/24. Case 25 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C18  ' })).toBeHidden();

    //  C19
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/25. Case 19.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/28. Case 20.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '?' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/29. Case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '?' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/11 - 20/30. Case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C20  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});


test('TC09 Contract No Case 2  21 - 30  ', async ({ page }) => {
    //  C21
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/01. Case 21.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '!' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/02. Case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '!' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/03. Case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C21  ' })).toBeHidden();
    //  C22
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C22.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C22' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/04. Case 22.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C23.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C23' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/07. Case 23.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '#' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/08. Case 23 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C23').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '#' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/09. Case 23 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C23 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C23  ' })).toBeHidden();
    //  C24
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C24.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C24' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/10. Case 24.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '$' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/11. Case 24 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C24').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '$' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/12. Case 24 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C24 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C24  ' })).toBeHidden();
    //  C25
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C25.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C25' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/13. Case 25.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    //  C26
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C26.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C26' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/16. Case 26.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '^' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/17. Case 26 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C26').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '^' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/18. Case 26 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C26 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C26  ' })).toBeHidden();
    //  C27
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C27.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C27' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/19. Case 27.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C28.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C28' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/22. Case 28.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '*' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/23. Case 28 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C28').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '*' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/24. Case 28 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C28 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C28  ' })).toBeHidden();
    //  C29
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C29.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C29' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/25. Case 29.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C30.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C30' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/28. Case 30.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/09. contractno/Case2/Auto_ContractNo_Case2_C31.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator11 = await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C31' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/31. Case 31.png', mask: [mask_locator11], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/32. Case 31 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ContractNo_Case2_C31').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC09. Contract No/02. Case2/21 - 31/33. Case 31 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ContractNo_Case2_C31 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ContractNo_Case2_C31  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});


test('TC10 Creation Date  01 - 10  ', async ({ page }) => {
    // C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_CreationDate_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_CreationDate_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_CreationDate_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_CreationDate_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/05. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/06. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/07. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_CreationDate_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/08. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/09. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/10. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_CreationDate_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/11. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
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
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_CreationDate_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/14. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_CreationDate_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/17. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_CreationDate_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/20. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_CreationDate_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/23. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_CreationDate_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/10. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_CreationDate_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/29. Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_CreationDate_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/32. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_CreationDate_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/35. Case 13.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
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
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_CreationDate_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/38. Case 14.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/39. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/40. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C14  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC10 Creation Date  15 - 21  ', async ({ page }) => {
    //  C15
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_CreationDate_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/41. Case 15.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/42. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/43. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C15  ' })).toBeHidden();
    //  C16
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_CreationDate_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/44. Case 16.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/45. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/46. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C16  ' })).toBeHidden();
    //  C17
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_CreationDate_C17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/47. Case 17.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/48. Case 17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/49. Case 17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C17  ' })).toBeHidden();
    //  C18
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_CreationDate_C18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/50. Case 18.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/51. Case 18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/52. Case 18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C18  ' })).toBeHidden();
    //  C19
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_CreationDate_C19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/53. Case 19.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/54. Case 19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/55. Case 19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C19  ' })).toBeHidden();
    //  C20
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_CreationDate_C20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/56. Case 20.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/57. Case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/58. Case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C20  ' })).toBeHidden();
    //  C21
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/10. creationdate/Auto_CreationDate_C21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_CreationDate_C21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/59. Case 21.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/60. Case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_CreationDate_C21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC10. Creation Date/61. Case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_CreationDate_C21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_CreationDate_C21  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});


test('TC11 Effective Date  01 - 10  ', async ({ page }) => {
    // C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_EffectiveDate_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C2  ' })).toBeHidden();
    //  C3  
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8]");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/05. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/06. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/07. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/08. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/09. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C5  ' })).toBeHidden();
    await page.waitForTimeout(1000);
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/10. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/11. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/12. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/13. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/14. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/15. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/16. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/17. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/18. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/19. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/20. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/21. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/22. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/23. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/24. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});






test('TC11 Effective Date  11 - 20  ', async ({ page }) => {
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_EffectiveDate_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/25. Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/26. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8]  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/27. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C11  ' })).toBeHidden();
    //  C12
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/28. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/29. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/30. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C12  ' })).toBeHidden();
    //  C13
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/31. Case 13.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/32. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/33. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C13  ' })).toBeHidden();
    //  C14
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/34. Case 14.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/35. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/36. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C14  ' })).toBeHidden();
    //  C15
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/37. Case 15.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/38. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/39. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C15  ' })).toBeHidden();
    //  C16
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/40. Case 16.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/41. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8]  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/42. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C16  ' })).toBeHidden();
    //  C17
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/43. Case 17.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/44. Case 17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/45. Case 17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C17  ' })).toBeHidden();
    //  C18
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/46. Case 18.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/47. Case 18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/48. Case 18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C18  ' })).toBeHidden();
    //  C19
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/49. Case 19.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/50. Case 19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/51. Case 19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C19  ' })).toBeHidden();
    //  C20
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/52. Case 20.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/53. Case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/54. Case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C20  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC11 Effective Date  21 - 23  ', async ({ page }) => {
    
    //  C21
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/55. Case 21.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/56. Case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/57. Case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C21  ' })).toBeHidden();
    
    //  C22
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C22.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C22' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/58. Case 22.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/59. Case 22 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C22').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/60. Case 22 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C22 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C22  ' })).toBeHidden();
    
    //  C23
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/11. effectivedate/Auto_EffectiveDate_C23.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_EffectiveDate_C23' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/61. Case 23.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date format");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/62. Case 23 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EffectiveDate_C23').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatImport FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/63. Case 23 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_EffectiveDate_C23 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EffectiveDate_C23  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});




test('TC12 Expire Date  01 - 10  ', async ({ page }) => {
    // C1
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ExpireDate_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ExpireDate_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ExpireDate_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ExpireDate_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C2  ' })).toBeHidden();
    //  C3  
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ExpireDate_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.getByRole('row', { name: 'Auto_ExpireDate_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ExpireDate_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Auto_ExpireDate_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C4  ' })).toBeHidden();
    //  C5
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ExpireDate_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/06. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/07. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C5  ' })).toBeHidden();
    await page.waitForTimeout(1000);
    //  C6
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ExpireDate_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/08. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/09. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/10. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ExpireDate_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/11. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/12 Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/13. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ExpireDate_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/14. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/15. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/16. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C8  ' })).toBeHidden();
    //  C9
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ExpireDate_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/17. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/18. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/19. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ExpireDate_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/20. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/21. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC12. Expire Date/22. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C10  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



test('TC12 Expire Date  11 - 20  ', async ({ page }) => {
    //  C11
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_ExpireDate_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/23. Case 11.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8]  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/24. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8]  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/25. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C11  ' })).toBeHidden();
    //  C12
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ExpireDate_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/26. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' typeCode is equal to 1, 6, 10, 12, 13, 14, 15, 16, 19, 111, 112, 271, or 272; therefore, expireDate must not be empty. [R50] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/27. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' typeCode is equal to 1, 6, 10, 12, 13, 14, 15, 16, 19, 111, 112, 271, or 272; therefore, expireDate must not be empty. [R50] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/28. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C12  ' })).toBeHidden();
    //  C13
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ExpireDate_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/29. Case 13.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' typeCode is equal to 1, 6, 10, 12, 13, 14, 15, 16, 19, 111, 112, 271, or 272; therefore, expireDate must not be empty. [R50] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/30. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' typeCode is equal to 1, 6, 10, 12, 13, 14, 15, 16, 19, 111, 112, 271, or 272; therefore, expireDate must not be empty. [R50] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/31. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C13  ' })).toBeHidden();
    //  C14
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ExpireDate_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/32. Case 14.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/33. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/34. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C14  ' })).toBeHidden();
    //  C15
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ExpireDate_C15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/35. Case 15.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/36. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' length is overflow ข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/37. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C15  ' })).toBeHidden();
    //  C16
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_ExpireDate_C16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/38. Case 16.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/39. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/40. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C16  ' })).toBeHidden();
    //  C17
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_ExpireDate_C17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/41. Case 17.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/42. Case 17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/43. Case 17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C17  ' })).toBeHidden();
    //  C18
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_ExpireDate_C18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/44. Case 18.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/45. Case 18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/46. Case 18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C18  ' })).toBeHidden();
    //  C19
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_ExpireDate_C19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/47. Case 19.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/48. Case 19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/49. Case 19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C19  ' })).toBeHidden();
    //  C20
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_ExpireDate_C20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/50. Case 20.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/51. Case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/52. Case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C20  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});






test('TC12 Expire Date  21 - 23  ', async ({ page }) => {
    //  C21
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ExpireDate_C21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/53. Case 21.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/54. Case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/55. Case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C21  ' })).toBeHidden();
    //  C22
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C22.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ExpireDate_C22' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/56. Case 22.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/57. Case 22 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C22').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/58. Case 22 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C22 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C22  ' })).toBeHidden();
    //  C23
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/12. expiredate/Auto_ExpireDate_C23.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ExpireDate_C23' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/59. Case 23.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/60. Case 23 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ExpireDate_C23').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate is not empty; therefore, expireDate must not be before effectiveDate. [R7] ข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC11. Effective Date/61. Case 23 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ExpireDate_C23 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ExpireDate_C23  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});



