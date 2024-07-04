import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Runs Uat

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});



// test.beforeEach(async ({ page }) => {
//   // Runs Dev

//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//   await page.locator('input[name="password"]').fill('P@ssw0rd');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   // await page.getByRole('button', { name: 'Accept' }).click();

// });


test('GSD-63 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-63/Auto_GSD-63.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-63' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-63/01. GSD-63.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' 'Auto37_5' is Exist. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-63/02. GSD-63 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-63').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' 'Auto37_5' is Exist. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-63/03. GSD-63 Error Msg.png' });
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-63/Auto_GSD-63_ImportFix.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-63/04. GSD-63 Import Fix.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-63 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-63  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-65 ', async ({ page }) => {



    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-65/Auto_GSD-65_Error.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-65_Error' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-65/01. GSD-65.png.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GSD-65_Error ').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-65/Auto_GSD-65.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-65' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-65/02.Import Batch Success.png', mask: [mask_locator1], maskColor: '#00FF01' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: ' Auto_GSD-65_Error ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-65_Error  ' })).toBeHidden();
    await page.waitForTimeout(1000);




});




test('GSD-69 ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-69/Auto_GSD-69.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-69' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-69/01.Batch Error.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_GSD-69').first().click();
    await page.waitForTimeout(1500);
    await page.getByRole('cell', { name: 'Date', exact: true }).hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-69/02.Column Date.png' });
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.getByRole('cell', { name: 'date', exact: true }).hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-69/03.Edit Column Date.png' });
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-69' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-69 ' })).toBeHidden();
    await page.waitForTimeout(1000);



});







test('GSD-71 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Event Log' }).click();
    await page.locator('div').filter({ hasText: /^Log typeAll$/ }).nth(1).click();
    await page.getByRole('option', { name: 'ERROR' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-71/01. Error Logs.png' });


});

// test('GSD-79 ', async ({ page }) => {

//     await page.locator('a').filter({ hasText: 'settings' }).click()
//     await page.getByRole('link', { name: 'Permission' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('cell', { name: 'BatchView' }).hover();
//     await page.getByRole('row', { name: 'BatchView' }).getByRole('button').click();
//     await page.getByRole('listbox').getByText('Viewer').click();
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2500);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-79/01. Permission.png' });
//     await page.getByText('logout').click();
//     await page.waitForTimeout(2500);
//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('test.gamekittisak6@gmail.com');
//     await page.locator('input[name="password"]').fill('ZXcv.!234');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(2500);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-79/02. Viewer Can Not Delete Batch.png' });
//     await page.getByText('logout').click();
//     await page.waitForTimeout(2000);
//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//     await page.locator('input[name="password"]').fill('P@ssw0rd');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.locator('a').filter({ hasText: 'settings' }).click()
//     await page.getByRole('link', { name: 'Permission' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('cell', { name: 'BatchView' }).hover();
//     await page.getByRole('row', { name: 'BatchView' }).getByRole('button').click();
//     await page.getByRole('listbox').getByText('Viewer').click();
//     await page.waitForTimeout(500);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(500);

// });


test('GSD-81 ', async ({ page }) => {

    await page.locator('a').filter({ hasText: 'settings' }).click()
    await page.getByRole('link', { name: 'Permission' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'BatchView' }).hover();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-81/01. Permission.png' });
    await page.getByText('logout').click();
    await page.waitForTimeout(2000);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak6@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await expect(page.locator('div').filter({ hasText: /^You are unauthorized$/ }).first()).toHaveText('You are unauthorized');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-81/02. Validate Permission.png' });
    await page.waitForTimeout(500);

});




test('GSD-97 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-97/Auto_GSD-97.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-97' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-97/01. GSD-97.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-97').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.getByRole('cell', { name: 'relateInstInfoId' }).hover();
    await expect(page.locator('[id="\\30 _58"]')).toBeVisible();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-97/02. Validate relateInstInfoId No Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-97 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-97  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-98 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-98/Auto_GSD-98.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-98' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-98/01. GSD-98.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.getByText('Auto_GSD-98').first().click();
    await page.getByRole('cell', { name: '3', exact: true }).locator('a').click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('heading', { name: 'Relate Party' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate Party Id' })).toHaveText('Relate Party Id')
    await expect.soft(page.getByRole('cell', { name: 'Relate Party Title' })).toHaveText('Relate Party Title')
    await expect.soft(page.getByRole('cell', { name: 'Relate Party Name' })).toHaveText('Relate Party Name')
    await expect.soft(page.getByRole('cell', { name: 'Relate Party SurName' })).toHaveText('Relate Party SurName')
    await expect.soft(page.getByRole('cell', { name: 'Relate Party Branch No' })).toHaveText('Relate Party Branch No')
    await expect.soft(page.getByRole('cell', { name: 'Relate Party Branch Type' })).toHaveText('Relate Party Branch Type')
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('cell', { name: '4175657774436' })).toHaveText('4175657774436');
    await expect.soft(page.getByRole('cell', { name: '6552973857451' })).toHaveText('6552973857451');
    await expect.soft(page.getByRole('cell', { name: 'นาย' })).toHaveText('นาย');
    await expect.soft(page.getByRole('cell', { name: 'Mr' })).toHaveText('Mr');
    await expect.soft(page.getByRole('cell', { name: 'ทดสอบ' })).toHaveText('ทดสอบ');
    await expect.soft(page.getByRole('cell', { name: 'Test' })).toHaveText('Test');
    await expect.soft(page.getByRole('cell', { name: 'อัตโนมัติ' })).toHaveText('อัตโนมัติ');
    await expect.soft(page.getByRole('cell', { name: 'Automated' })).toHaveText('Automated');
    await expect.soft(page.getByRole('cell', { name: '0' })).toHaveText('0');
    await expect.soft(page.getByRole('cell', { name: '1573' })).toHaveText('1573');
    await expect.soft(page.getByRole('cell', { name: 'O', exact: true })).toHaveText('O');
    await expect.soft(page.getByRole('cell', { name: 'V' })).toHaveText('V');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-98/02. Relate Party 1.png' });
    // await page.getByRole('cell', { name: 'V' }).hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-98/03. Relate Party 2.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-98 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-98  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-100 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-100/Auto_GSD-100.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-100' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-100/01. GSD-100.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'sendFormType' is required ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-100/02. GSD-100 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-100').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'sendFormType' is required Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-100/03. GSD-100 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-100 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-100  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-101 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-101/Auto_GSD-101.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-101' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-101/01. GSD-101.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-101/02. GSD-101 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-101').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'foreignType' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-101/03. GSD-101 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-101 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-101  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-102 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-102/Auto_GSD-102.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-102' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-102/01. GSD-102.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'countryId' invalid countryId ข้อมูลบรรทัดที่ 1 column 'contractPartyId' countryId is not “TH” (Thailand) and the contract party does not have the tax id; therefore, contractPartyId must be “0000000000000”. [R15] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-102/02. GSD-102 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-102').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'countryId' invalid countryId ข้อมูลบรรทัดที่ 1 column 'contractPartyId' countryId is not “TH” (Thailand) and the contract party does not have the tax id; therefore, contractPartyId must be “0000000000000”. [R15] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-102/03. GSD-102 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-102 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-102  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-103 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-103/Auto_GSD-103.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-103' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-103/01. GSD-103.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-103').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'Contract Party Tax ID' }).hover()
    await expect.soft(page.getByRole('cell', { name: '17*****82' })).toHaveText('17*****82');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-103/02. Contract Party Tax ID Not Equal 0.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-103 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-103  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-104 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-104/Auto_GSD-104.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-104' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-104/01. GSD-104.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'dupNumber' is negative value ข้อมูลบรรทัดที่ 1 column 'dupNumber' selectType is 0; therefore, dupNumber must be equal to 0. (E07370) ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-104/02. GSD-104 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-104').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'dupNumber' is negative value ข้อมูลบรรทัดที่ 1 column 'dupNumber' selectType is 0; therefore, dupNumber must be equal to 0. (E07370) Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-104/03. GSD-104 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-104 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-104  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-105 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-105/Auto_GSD-105.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-105' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-105/01. GSD-105.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'amount4' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount4' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-105/02. GSD-105 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-105').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'amount4' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount4' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-105/03. GSD-105 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-105 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-105  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-106_CrDate ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_CrDate.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_CrDate' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/01. CreationDate/01. GSD-106_CrDate.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/01. CreationDate/02. GSD-106_CrDate Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_CrDate').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'creationDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'creationDate' creationDate must not more than 30 days in advance. [E07219] ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/01. CreationDate/03. GSD-106_CrDate Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_CrDate ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_CrDate  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_Detail1-8 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Detail1-8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Detail1-8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/02. Detail1-8/01. GSD-106_Detail1-8.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail2' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail3' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail4' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail5' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail6' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail7' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail8' invalid special character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/02. Detail1-8/02. GSD-106_Detail1-8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Detail1-8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail2' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail3' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail4' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail5' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail6' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail7' invalid special character ข้อมูลบรรทัดที่ 1 column 'detail8' invalid special character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/02. Detail1-8/03. GSD-106_Detail1-8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Detail1-8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Detail1-8  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-106_ExEfDate ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ExEfDate.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ExEfDate' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/03. ExpireEffective/01. GSD-106_ExEfDate.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'effectiveDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/03. ExpireEffective/02. GSD-106_ExEfDate Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ExEfDate').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'effectiveDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'effectiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'expireDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'expireDate' expireDate must not be before effectiveDate. [R8] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/03. ExpireEffective/03. GSD-106_ExEfDate Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ExEfDate ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ExEfDate  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});







test('GSD-106_Contractno ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Contractno.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Contractno' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/04. Contractno/01. GSD-106_Contractno.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '!@#$%^&*()' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/04. Contractno/02. GSD-106_Contractno Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Contractno').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo' '!@#$%^&*()' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/04. Contractno/03. GSD-106_Contractno Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Contractno ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Contractno  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-106_ContractParty ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ContractParty.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ContractParty' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/05. ContractParty/01. GSD-106_ContractParty.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractPartyId' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'contractPartyTitleName' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyFirstName' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyLastName' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchNo' is an invalid number ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchType' invalid special character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/05. ContractParty/02. GSD-106_ContractParty Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ContractParty').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractPartyId' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'contractPartyTitleName' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyFirstName' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyLastName' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchNo' length is overflow ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchNo' is an invalid number ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchType' length is overflow ข้อมูลบรรทัดที่ 1 column 'contractPartyBranchType' invalid special character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/05. ContractParty/03. GSD-106_ContractParty Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ContractParty ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ContractParty  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_Number ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Number.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Number' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/06. Number/01. GSD-106_Number.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'dupNumber' length is overflow ข้อมูลบรรทัดที่ 1 column 'dupNumber' invalid special character ข้อมูลบรรทัดที่ 1 column 'dupNumber' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' invalid special character ข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' invalid special character ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'dupNumber' selectType is 0; therefore, dupNumber must be equal to 0. (E07370) ข้อมูลบรรทัดที่ 1 column 'issueNumber' typeCode is one of 1,2,3,4,5,6,7,8,10,14,16,18,19,20,21,271,272,92 ; therefore, issueNumber must be empty ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/06. Number/02. GSD-106_Number Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Number').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'dupNumber' length is overflow ข้อมูลบรรทัดที่ 1 column 'dupNumber' invalid special character ข้อมูลบรรทัดที่ 1 column 'dupNumber' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' invalid special character ข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' invalid special character ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'dupNumber' selectType is 0; therefore, dupNumber must be equal to 0. (E07370) ข้อมูลบรรทัดที่ 1 column 'issueNumber' typeCode is one of 1,2,3,4,5,6,7,8,10,14,16,18,19,20,21,271,272,92 ; therefore, issueNumber must be empty ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/06. Number/03. GSD-106_Number Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Number ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Number  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-106_ReceiveDate ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ReceiveDate.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ReceiveDate' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/07. ReceiveDate/01. GSD-106_ReceiveDate.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/07. ReceiveDate/02. GSD-106_ReceiveDate Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ReceiveDate').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/07. ReceiveDate/03. GSD-106_ReceiveDate Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ReceiveDate ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ReceiveDate  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-106_Type ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Type.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Type' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/08. Type/01. GSD-106_Type.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'selectType' invalid special character ข้อมูลบรรทัดที่ 1 column 'typeCode' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo'  'asdkjk5j' is not exist in os9 new entry or os4 paper stamp. ข้อมูลบรรทัดที่ 1 column 'sendFormType' invalid special character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/08. Type/02. GSD-106_Type Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Type').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'selectType' invalid special character ข้อมูลบรรทัดที่ 1 column 'typeCode' invalid special character ข้อมูลบรรทัดที่ 1 column 'contractNo'  'asdkjk5j' is not exist in os9 new entry or os4 paper stamp. ข้อมูลบรรทัดที่ 1 column 'sendFormType' invalid special character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/08. Type/03. GSD-106_Type Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Type ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Type  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_Tax ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Tax.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Tax' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/09. Tax/01. GSD-106_Tax.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerId' invalid special character ข้อมูลบรรทัดที่ 1 column 'taxPayerId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' invalid special character ข้อมูลบรรทัดที่ 1 column 'taxPayerRelationship' invalid special character ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/09. Tax/02. GSD-106_Tax Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Tax').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerId' invalid special character ข้อมูลบรรทัดที่ 1 column 'taxPayerId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' invalid special character ข้อมูลบรรทัดที่ 1 column 'taxPayerRelationship' invalid special character ข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/09. Tax/03. GSD-106_Tax Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Tax ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Tax  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-106_Address1 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Address1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Address1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/10. Address/01. GSD-106_Address1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'buildingName' invalid special character ข้อมูลบรรทัดที่ 1 column 'roomNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'floorNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'villageName' invalid special character ข้อมูลบรรทัดที่ 1 column 'buildingNumber' invalid special character ข้อมูลบรรทัดที่ 1 column 'moo' invalid special character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/10. Address/02. GSD-106_Address1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Address1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'buildingName' invalid special character ข้อมูลบรรทัดที่ 1 column 'roomNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'floorNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'villageName' invalid special character ข้อมูลบรรทัดที่ 1 column 'buildingNumber' invalid special character ข้อมูลบรรทัดที่ 1 column 'moo' invalid special character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/10. Address/03. GSD-106_Address1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Address1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Address1  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_Address2 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Address2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Address2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/10. Address/04. GSD-106_Address2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'postCode' length is overflow ข้อมูลบรรทัดที่ 1 column 'postCode' invalid special character ข้อมูลบรรทัดที่ 1 column 'postCode' invalid postcode format. ข้อมูลบรรทัดที่ 1 column 'subdistrict' invalid special character ข้อมูลบรรทัดที่ 1 column 'district' invalid special character ข้อมูลบรรทัดที่ 1 column 'province' invalid special character ข้อมูลบรรทัดที่ 1 column 'soiName' invalid special character ข้อมูลบรรทัดที่ 1 column 'junctionName' invalid special character ข้อมูลบรรทัดที่ 1 column 'streetName' invalid special character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/10. Address/05. GSD-106_Address2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Address2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'postCode' length is overflow ข้อมูลบรรทัดที่ 1 column 'postCode' invalid special character ข้อมูลบรรทัดที่ 1 column 'postCode' invalid postcode format. ข้อมูลบรรทัดที่ 1 column 'subdistrict' invalid special character ข้อมูลบรรทัดที่ 1 column 'district' invalid special character ข้อมูลบรรทัดที่ 1 column 'province' invalid special character ข้อมูลบรรทัดที่ 1 column 'soiName' invalid special character ข้อมูลบรรทัดที่ 1 column 'junctionName' invalid special character ข้อมูลบรรทัดที่ 1 column 'streetName' invalid special character Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/10. Address/06. GSD-106_Address2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Address2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Address2  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-106_Amount ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Amount.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Amount' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/11. Amount/01. GSD-106_Amount.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'amount1' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount1' is an invalid number ข้อมูลบรรทัดที่ 1 column 'amount2' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount2' is an invalid number ข้อมูลบรรทัดที่ 1 column 'amount3' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount3' is an invalid number ข้อมูลบรรทัดที่ 1 column 'amount4' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount4' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/11. Amount/02. GSD-106_Amount Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Amount').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'amount1' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount1' is an invalid number ข้อมูลบรรทัดที่ 1 column 'amount2' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount2' is an invalid number ข้อมูลบรรทัดที่ 1 column 'amount3' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount3' is an invalid number ข้อมูลบรรทัดที่ 1 column 'amount4' invalid special character ข้อมูลบรรทัดที่ 1 column 'amount4' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/11. Amount/03. GSD-106_Amount Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Amount ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Amount  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-106_Country ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_Country.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_Country' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/12. Country/01. GSD-106_Country.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'totalParty' invalid special character ข้อมูลบรรทัดที่ 1 column 'totalParty' is an invalid number ข้อมูลบรรทัดที่ 1 column 'countryId' invalid special character ข้อมูลบรรทัดที่ 1 column 'countryId' invalid countryId ข้อมูลบรรทัดที่ 1 column 'relateParty' invalid totalParty ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. ข้อมูลบรรทัดที่ 1 column 'contractPartyId' countryId is not “TH” (Thailand) and the contract party does not have the tax id; therefore, contractPartyId must be “0000000000000”. [R15] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/12. Country/02. GSD-106_Country Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_Country').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'totalParty' invalid special character ข้อมูลบรรทัดที่ 1 column 'totalParty' is an invalid number ข้อมูลบรรทัดที่ 1 column 'countryId' invalid special character ข้อมูลบรรทัดที่ 1 column 'countryId' invalid countryId ข้อมูลบรรทัดที่ 1 column 'relateParty' invalid totalParty ข้อมูลบรรทัดที่ 1 column 'relateParty' totalParty must be integer. ข้อมูลบรรทัดที่ 1 column 'contractPartyId' countryId is not “TH” (Thailand) and the contract party does not have the tax id; therefore, contractPartyId must be “0000000000000”. [R15] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/12. Country/03. GSD-106_Country Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_Country ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_Country  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_RelateParty ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_RelateParty.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_RelateParty' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/13. Relate Party/01. GSD-106_Country.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'relateParty' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyId' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'relatePartyTitleName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartySurName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyBranchNo' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relatePartyBranchType' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateParty' relatePartyBranchType value must be one of 'V,S,O' ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/13. Relate Party/02. GSD-106_Country Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_RelateParty').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'relateParty' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyId' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'relatePartyTitleName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartySurName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyBranchNo' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relatePartyBranchType' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateParty' relatePartyBranchType value must be one of 'V,S,O' Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/13. Relate Party/03. GSD-106_Country Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_RelateParty ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_RelateParty  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_RelateContract ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_RelateContract.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_RelateContract' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/14. Relate Contract/01. GSD-106_RelateContract.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'relateContract' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractId' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'relateContractTitleName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractSurname' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractBranchNo' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relateContractBranchType' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContract' relateContractBranchType value must be one of 'V,S,O' ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/14. Relate Contract/02. GSD-106_RelateContract Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_RelateContract').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'relateContract' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractId' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'relateContractTitleName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractName' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractSurname' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContractBranchNo' is an invalid number ข้อมูลบรรทัดที่ 1 column 'relateContractBranchType' invalid special character ข้อมูลบรรทัดที่ 1 column 'relateContract' relateContractBranchType value must be one of 'V,S,O' Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/14. Relate Contract/03. GSD-106_RelateContract Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_RelateContract ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_RelateContract  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-106_ArrayDetail1 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ArrayDetail1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/01. GSD-106_ArrayDetail1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' invalid special character ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/02. GSD-106_ArrayDetail1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ArrayDetail1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' invalid special character  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/03. GSD-106_ArrayDetail1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail1  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_ArrayDetail2 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ArrayDetail2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/04. GSD-106_ArrayDetail2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' typeCode is equal to 1 and attType is equal to 2 therefore, attActionType1 must be one of (1,2,3,4) [R56] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/05. GSD-106_ArrayDetail2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ArrayDetail2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' typeCode is equal to 1 and attType is equal to 2 therefore, attActionType1 must be one of (1,2,3,4) [R56]  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/06. GSD-106_ArrayDetail2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail2  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_ArrayDetail3 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ArrayDetail3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/07. GSD-106_ArrayDetail3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' invalid special character ข้อมูลบรรทัดที่ 1 column 'arrayDetail' typeCode is equal to 1 and attType is equal to 2 and attActionType1 is equal to 1 or 2 therefore, attNumber1 and attAmount1 must be more than 0 [R56] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/08. GSD-106_ArrayDetail3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ArrayDetail3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' invalid special character ข้อมูลบรรทัดที่ 1 column 'arrayDetail' typeCode is equal to 1 and attType is equal to 2 and attActionType1 is equal to 1 or 2 therefore, attNumber1 and attAmount1 must be more than 0 [R56] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/09. GSD-106_ArrayDetail3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail3  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_ArrayDetail4 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ArrayDetail4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/10. GSD-106_ArrayDetail4.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' invalid special character ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/11. GSD-106_ArrayDetail4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ArrayDetail4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' invalid special character ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/12. GSD-106_ArrayDetail4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail4  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-106_ArrayDetail5 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ArrayDetail5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/13. GSD-106_ArrayDetail5.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' invalid special character ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/14. GSD-106_ArrayDetail5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ArrayDetail5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' invalid special character ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/15. GSD-106_ArrayDetail5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail5  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-106_ArrayDetail6 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-106/Auto_GSD-106_ArrayDetail6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/16. GSD-106_ArrayDetail6.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' typeCode is equal to 1 and attType is equal to 2 and attActionType1 is equal to 1 or 2 therefore, attNumber1 and attAmount1 must be more than 0 [R56] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 + attAmount2) must be equal to attAmount3 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/17. GSD-106_ArrayDetail6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-106_ArrayDetail6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' typeCode is equal to 1 and attType is equal to 2 and attActionType1 is equal to 1 or 2 therefore, attNumber1 and attAmount1 must be more than 0 [R56] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 + attAmount2) must be equal to attAmount3  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-106/15. Array Detail/18. GSD-106_ArrayDetail6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-106_ArrayDetail6  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-107 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-107/Auto_GSD-107.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-107' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-107/01. GSD-107.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'relateParty' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyId' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'relateParty' invalid totalParty  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-107/02. GSD-107 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-107').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'relateParty' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyId' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'relateParty' invalid totalParty  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-107/03. GSD-107 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-107 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-107  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-108 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-108/Auto_GSD-108.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-108' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-108/01. GSD-108.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'issueNumber' typeCode is one of 1,2,3,4,5,6,7,8,10,14,16,18,19,20,21,271,272,92 ; therefore, issueNumber must be empty ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-108/02. GSD-108 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-108').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'issueNumber' typeCode is one of 1,2,3,4,5,6,7,8,10,14,16,18,19,20,21,271,272,92 ; therefore, issueNumber must be empty Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-108/03. GSD-108 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-108 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-108  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-109_TC7 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/01. TC7/01. GSD-109_TC7.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/01. TC7/02. GSD-109_TC7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/01. TC7/03. GSD-109_TC7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC7  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});







test('GSD-109_TC11.1 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC11.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC11.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/02. TC11.1/01. GSD-109_TC11.1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 11.1; therefore, actionType must be equal to 1,2 or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/02. TC11.1/02. GSD-109_TC11.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC11.1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 11.1; therefore, actionType must be equal to 1,2 or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/02. TC11.1/03. GSD-109_TC11.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC11.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC11.1  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-109_TC14 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/03. TC14/01. GSD-109_TC14.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/03. TC14/02. GSD-109_TC14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/03. TC14/03. GSD-109_TC14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC14  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-109_TC15 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/04. TC15/01. GSD-109_TC15.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/04. TC15/02. GSD-109_TC15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/04. TC15/03. GSD-109_TC15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC15  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-109_TC18 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/05. TC18/01. GSD-109_TC18.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/05. TC18/02. GSD-109_TC18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/05. TC18/03. GSD-109_TC18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC18  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-109_TC21 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/06. TC21/01. GSD-109_TC21.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/06. TC21/02. GSD-109_TC21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/06. TC21/03. GSD-109_TC21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC21  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-109_TC27.1 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC27.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC27.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/07. TC27.1/01. GSD-109_TC27.1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/07. TC27.1/02. GSD-109_TC27.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC27.1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/07. TC27.1/03. GSD-109_TC27.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC27.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC27.1  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-109_TC27.2 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC27.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC27.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/08. TC27.2/01. GSD-109_TC27.2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/08. TC27.2/02. GSD-109_TC27.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC27.2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109/08. TC27.2/03. GSD-109_TC27.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC27.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC27.2  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-110 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-110/Auto_GSD-110.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-110' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-110/01. GSD-110.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType1' typeCode is one of 2, 111; therefore, actionType1 must be equal to 1, 2, or 3. [R55] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-110/02. GSD-110 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-110').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType1' typeCode is one of 2, 111; therefore, actionType1 must be equal to 1, 2, or 3. [R55] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-110/03. GSD-110 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-110 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-110  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-115 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-115/Auto_GSD-115.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-115' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-115/01. GSD-115.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-115/02. GSD-115 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-115').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-115/03. GSD-115 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-115 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-115  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-116 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-116/Auto_GSD-116.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-116' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-116/01. GSD-116.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-116 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-116  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-120 ', async ({ page }) => {
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('/paperstamp');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-120/Auto_GSD-120.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(5000);
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await expect.soft(page.getByText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 1 row(s) ,Error: 0 row(s) Error Message')).toHaveText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 1 row(s) ,Error: 0 row(s) Error Message');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-120/01.Upload Duplicate.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1000);

});




test('GSD-121 ', async ({ page }) => {
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('/paperstamp');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-121/Auto_GSD-121.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(1000);

    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await expect.soft(page.getByText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s)  Error Message   Row number 1 |ContractNo is containt reserve word')).toHaveText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s)  Error Message   Row number 1 |ContractNo is containt reserve word ');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-121/01.Upload Error.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);

});




test('GSD-123  ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-123/Auto_GSD-123.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-123' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-123/01.Batch Error.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_GSD-123 ').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await expect(page.getByText('length is overflow is an invalid number')).toHaveText("length is overflow is an invalid number");
    await page.locator('[id="\\30 _4"]').fill('10000');
    await page.getByRole('button', { name: 'Validate' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-123' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-123/02.Edit Batch Success.png', mask: [mask_locator1], maskColor: '#00FF01' });
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-123 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-123  ' })).toBeHidden();
    await page.waitForTimeout(1000);



});


test('GSD-124 C1 - C5 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-124/Auto_GSD-124_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-124_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '{' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-124_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '{' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-124_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-124_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-124/Auto_GSD-124_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_GSD-124_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/04. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '}' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/05. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-124_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '}' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/06. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-124_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-124_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-124/Auto_GSD-124_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-124_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/07. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '“A\"' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/08. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-124_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '“A\"' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/09. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-124_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-124_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-124/Auto_GSD-124_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_GSD-124_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/10. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' ''' invalid special character.");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/11. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-124_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' ''' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/12. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-124_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-124_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-124/Auto_GSD-124_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_GSD-124_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/13. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' '฿' invalid special character. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/14. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-124_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' '฿' invalid special character. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-124/15. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-124_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-124_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});






test('GSD-125 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Completed' }).click();
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(1000);
    await page.locator('#mat-mdc-checkbox-2').click();
    await page.getByRole('button', { name: 'Receipts' }).first().click();
    await page.getByRole('button', { name: 'Go to Downloads' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('row', { name: 'kittisak.p@ginkgosoft.co.th' }).getByRole('button').nth(1).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS12-Fix Bug/GSD-125/01.Receipts.rar');


});




test('GSD-127 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-127/Auto_GSD-127.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-127' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-127/01. GSD-127.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-127').first().click();
    await expect.soft(page.getByRole('cell', { name: 'Ki*****ak' })).toHaveText('Ki*****ak');
    await expect.soft(page.getByRole('cell', { name: 'Ph*****an' })).toHaveText('Ph*****an');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-127/02. Full Name.png' });
    await expect.soft(page.getByRole('cell', { name: '0105556078229', exact: true })).toHaveText('0105556078229');
    await expect.soft(page.getByRole('cell', { name: '17*****82' })).toHaveText('17*****82');
    await page.getByRole('cell', { name: '17*****82' }).hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-127/03. Tax.png' });
    await expect.soft(page.getByRole('cell', { name: '88**' })).toHaveText('88**');
    await expect.soft(page.getByRole('cell', { name: '99' })).toHaveText('99');
    await page.getByRole('cell', { name: '99' }).hover()
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-127/04. Address.png' });
    await expect.soft(page.getByRole('cell', { name: 'au*****th' })).toHaveText('au*****th');
    await page.getByRole('cell', { name: 'au*****th' }).hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-127/05. Email.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-127 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-127  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





// test('GSD-128 ', async ({ page }) => {

//     await page.waitForURL('/batch');
//     await page.getByRole('link', { name: 'Administrator' }).click();
//     await page.getByRole('link', { name: 'User Accounts' }).click();
//     await page.waitForTimeout(1000);
//     await page.getByRole('combobox').selectOption('50');
//     await page.waitForTimeout(1000);
//     await page.getByRole('row', { name: 'ki*****.p ki*****th GGS' }).getByRole('button').first().click();
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-128/01. Basic User.png' });
//     await page.getByRole('button', { name: 'Cancel' }).click();
//     await page.waitForTimeout(1000);
//     await page.getByRole('row', { name: 'ra*****th ra*****th GGS, GGT' }).getByRole('button').first().click();
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-128/02. Entra User.png' });
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Cancel' }).click();


// });


test('GSD-130 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-130/Auto_GSD-130.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-130' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-130/01. GSD-130.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-130').first().click();
    await page.getByRole('cell', { name: 'Issue Number' }).hover();
    await expect.soft(page.locator('td:nth-child(52)')).toHaveText('1');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-130/02. Validate Issue Number.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-130 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-130  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-131 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-131/Auto_GSD-131.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-131' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-131/01. GSD-131.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-131').first().click();
    await expect(page.getByText('Updated Bykittisak.p@ginkgosoft.co.th')).toHaveText('Updated Bykittisak.p@ginkgosoft.co.th');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-131/02. Validate Upload By.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-131 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-131  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-135 1 - 4 ', async ({ page }) => {
    await page.getByText('logout').click();
    await page.locator('input[name="email"]').fill('test.gamekittisak1@gmail.com');
    await page.locator('input[name="password"]').fill('qwerty123');
    await page.locator('span').filter({ hasText: 'visibility_off' }).click();
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(10000);
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(1\)$/ }).first()).toBeVisible();
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(1\)$/ }).first()).toHaveText("You are unauthorized (1)")
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-135/01.Login 1st.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(2\)$/ }).first()).toBeVisible();
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(2\)$/ }).first()).toHaveText("You are unauthorized (2)")
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-135/02.Login 2nd.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(20000);
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(3\)$/ }).first()).toBeVisible();
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(3\)$/ }).first()).toHaveText("You are unauthorized (3)")
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-135/03.Login 3rd.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(25000);
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(4\)$/ }).first()).toBeVisible();
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(4\)$/ }).first()).toHaveText("You are unauthorized (4)")
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-135/04.Login 4th.png' });

});





test('GSD-135 5 - 8 ', async ({ page }) => {
    await page.getByText('logout').click();
    await page.locator('input[name="email"]').fill('test.gamekittisak1@gmail.com');
    await page.locator('input[name="password"]').fill('qwerty123');
    await page.locator('span').filter({ hasText: 'visibility_off' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(25000);
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(5\)$/ }).first()).toBeVisible();
    await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(5\)$/ }).first()).toHaveText("You are unauthorized (5)")
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-135/05.Login 5th.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(5000);
    await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out \(Max Failure\)$/ }).first()).toBeVisible();
    await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out \(Max Failure\)$/ }).first()).toHaveText("Your account has been locked out (Max Failure)")
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-135/06.Login 6th.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(5000);
    await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out$/ }).first()).toBeVisible();
    await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out$/ }).first()).toHaveText("Your account has been locked out")
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-135/07.Login 7th.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(5000);
    await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out$/ }).first()).toBeVisible();
    await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out$/ }).first()).toHaveText("Your account has been locked out")
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-135/08.Login 8th.png' });
    await page.waitForTimeout(1000);



});


test('GSD-136 ', async ({ page }) => {
    await page.getByText('logout').click();
    await page.locator('input[name="email"]').fill('test.gamekittisak1@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.locator('span').filter({ hasText: 'visibility_off' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-136/01.Account Lock.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.getByRole('combobox').selectOption('50');
    await page.getByRole('row', { name: 'te*****er     te*****om GGS' }).getByRole('button').first().click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-136/02.Details Account Lock.png' });
    await page.getByText('User Locked Out').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-136/03.Unlock Account.png' });
    await page.waitForTimeout(1000);
    await page.getByText('logout').click();
    await page.locator('input[name="email"]').fill('test.gamekittisak1@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.locator('span').filter({ hasText: 'visibility_off' }).click();
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-136/04.After Unlock Account Login Success.png' });

});






test('GSD-142 ', async ({ page }) => {

    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.waitForURL('admin/company');
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.getByRole('combobox').selectOption('50');
    await page.waitForTimeout(800);
    await page.getByRole('row', { name: 'ki*****.p     ki*****th GGS, GDM' }).getByRole('button').first().click();
    await page.waitForTimeout(800);
    await page.getByRole('tab', { name: 'Roles' }).click();
    await page.waitForTimeout(800);
    await expect.soft(page.getByRole('cell', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด' })).toHaveText('Ginkgo Soft Co., Ltd.บริษัท กิงโกะ ซอฟต์ จำกัด');
    await expect.soft(page.getByRole('cell', { name: 'Ginkgo Soft Co., Ltd. (Demo) บริษัท กิงโกะ ซอฟต์ จำกัด (Demo)' })).toHaveText('Ginkgo Soft Co., Ltd. (Demo)บริษัท กิงโกะ ซอฟต์ จำกัด (Demo)');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-142/01. Validate Company.png' });






});


test('GSD-143 ', async ({ page }) => {
    // TC1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-143/Auto_GSD-143_TC1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-143_TC1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-143/01. GSD-143 TC1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-143_TC1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-143_TC1  ' })).toBeHidden();
    // TC3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-143/Auto_GSD-143_TC3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-143_TC3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-143/02. GSD-143 TC3.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-143_TC3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-143_TC3  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-144 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-144/Auto_GSD-144.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-144' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-144/01. GSD-144.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-144/02. GSD-144 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-144').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-144/03. GSD-144 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-144 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-144  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});






test('GSD-145 ', async ({ page }) => {
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.waitForURL('admin/company');
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.locator('select').selectOption('10');
    await page.getByText('Rows per page').hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-145/01.Rows per page 10.png' });
    await page.locator('select').selectOption('15');
    await page.waitForTimeout(1200);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-145/01.Rows per page 15.png' });
    await page.locator('select').selectOption('20');
    await page.waitForTimeout(1200);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-145/02.Rows per page 20.png' });
    await page.locator('select').selectOption('50');
    await page.waitForTimeout(1200);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-145/03.Rows per page 50.png' });
    await page.locator('select').selectOption('100');
    await page.waitForTimeout(1200);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-145/04.Rows per page 100.png' });
    await page.locator('select').selectOption('150');
    await page.waitForTimeout(1200);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-145/05.Rows per page 150.png' });
    await page.locator('select').selectOption('200');
    await page.waitForTimeout(1200);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-145/06.Rows per page 200.png' });
    await page.waitForTimeout(1500);


});



test('GSD-147 ', async ({ page }) => {



    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-147/Auto_GSD-147_Error.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-147_Error' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-147/01. GSD-147.png.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GSD-147_Error ').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-147/Auto_GSD-147.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-147' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-147/02.Import Batch Success.png', mask: [mask_locator1], maskColor: '#00FF01' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: ' Auto_GSD-147_Error ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-147_Error  ' })).toBeHidden();
    await page.waitForTimeout(1000);




});



test('GSD-148 ', async ({ page }) => {


    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-148/Auto_GSD-148.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-148' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-148/01. GSD-148 TC1.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-148 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-148  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-149 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-149/Auto_GSD-149.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-149' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-149/01. GSD-149.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'relateContract' typeCode is equal to 2, 8, 10, 12, 16, 17, 91, 111, or 271; therefore, relateContractName must not be empty. [R22] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-149/02. GSD-149 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-149').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'relateContract' typeCode is equal to 2, 8, 10, 12, 16, 17, 91, 111, or 271; therefore, relateContractName must not be empty. [R22] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-149/03. GSD-149 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-149 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-149  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-150 C1  ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-150/Auto_GSD-150_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-150_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/01.Create Batch Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GSD-150_C1 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/02.Batch Details.png' });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_GSD-150_C1 ').first().click();
    await page.getByRole('button', { name: 'Reject' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Reject' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/03.Reject.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_GSD-150_C1').click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-150/Auto_GSD-150_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/04.After Import Fix.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GSD-150_C1').click();
    await expect(page.locator('td').first()).toBeEnabled();
    await expect.soft(page.getByRole('cell', { name: '2', exact: true })).toBeHidden()
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/05.Validate Transactions.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-150_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-150_C1  ' })).toBeHidden();
    await page.waitForTimeout(1500);

});



test('GSD-150 C2  ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-150/Auto_GSD-150_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-150_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/06.Create Batch Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GSD-150_C2 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/07.Batch Details.png' });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_GSD-150_C2 ').first().click();
    await page.getByRole('button', { name: 'Reject' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Reject' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/08.Reject.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_GSD-150_C2').click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-150/Auto_GSD-150_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/09.After Import Fix.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GSD-150_C2').click();
    await expect(page.locator('td').first()).toBeEnabled();
    await expect.soft(page.getByRole('cell', { name: '2', exact: true })).toBeHidden()
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-150/10.Validate Transactions.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-150_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-150_C2  ' })).toBeHidden();
    await page.waitForTimeout(1500);

});



test('GSD-152 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-152/Auto_GSD-152.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-152' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-152/01. GSD-152.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-152/02. GSD-152 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-152').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-152/03. GSD-152 Error Msg.png' });
    await page.getByRole('button', { name: 'Edit' }).click();
    await expect(page.getByText('arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attA')).toHaveText("arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3");
    await page.getByText('arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attA').hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-152/04. GSD-152 Edit Error Msg.png' });
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-152 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-152  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-153 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-153/Auto_GSD-153.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-153' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-153/01. GSD-153.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-153/02. GSD-153 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-153').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid (attAmount1 * number1) + attAmount2 must be equal to attAmount3 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-153/03. GSD-153 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-153 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-153  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-154 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-154/Auto_GSD-154.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-154' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-154/01. GSD-154.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' typeCode is equal to 1 and attType is equal to 2 and attActionType1 is equal to 1 or 2 therefore, attNumber1 and attAmount1 must be more than 0 [R56] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-154/02. GSD-154 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-154').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' typeCode is equal to 1 and attType is equal to 2 and attActionType1 is equal to 1 or 2 therefore, attNumber1 and attAmount1 must be more than 0 [R56] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-154/03. GSD-154 Error Msg.png' });
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(1500);
    await expect.soft(page.getByText('typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21]')).toHaveText('typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21]');
    await expect.soft(page.getByText('typeCode is equal to 1 and attType is equal to 2 and attActionType1 is equal to 1 or 2 therefore, attNumber1 and attAmount1 must be more than 0 [R56]  arrayDetail is invalid attAmount3 must be equal to instAmount ')).toHaveText('typeCode is equal to 1 and attType is equal to 2 and attActionType1 is equal to 1 or 2 therefore, attNumber1 and attAmount1 must be more than 0 [R56]  arrayDetail is invalid attAmount3 must be equal to instAmount');
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-154 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-154  ' })).toBeHidden();
    await page.waitForTimeout(1500);



});


test('GSD-155 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-155/Auto_GSD-155.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-155' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-155/01. GSD-155.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-155/02. GSD-155 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-155').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-155/03. GSD-155 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-155 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-155  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



// test('GSD-158 ', async ({ page }) => {

//     await page.waitForTimeout(2000);
//     await page.getByRole('button', { name: 'Sign in with your IDP' }).click();
//     await expect.soft(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
//     await page.getByPlaceholder('Email, phone, or Skype').fill('kittisak.p@ginkgosoft.co.th');
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-158/01. Username.png' });
//     await page.waitForTimeout(500);
//     await page.getByRole('button', { name: 'Next' }).click();
//     await page.waitForTimeout(500);
//     await expect.soft(page.getByRole('heading', { name: 'Enter password' })).toBeVisible();
//     await page.getByPlaceholder('Password').fill('db99bLydfbN');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('heading', { name: 'Stay signed in?' }).click();
//     await page.getByRole('button', { name: 'No' }).click();


//   });





test('GSD-164 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-164/Auto_GSD-164.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-164' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-164/01. GSD-164.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-164').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-164/02. Validate Click Edit.png' });
    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-164 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-164  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





// test('GSD-166 1 - 4 ', async ({ page }) => {
//     await page.getByText('logout').click();
//     await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//     await page.locator('input[name="password"]').fill('asdfghjkl321');
//     await page.locator('span').filter({ hasText: 'visibility_off' }).click();
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(5000);
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(1\)$/ }).first()).toBeVisible();
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(1\)$/ }).first()).toHaveText("You are unauthorized (1)")
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-166/01.Login 1st.png' });
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(10000);
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(2\)$/ }).first()).toBeVisible();
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(2\)$/ }).first()).toHaveText("You are unauthorized (2)")
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-166/02.Login 2nd.png' });
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(15000);
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(3\)$/ }).first()).toBeVisible();
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(3\)$/ }).first()).toHaveText("You are unauthorized (3)")
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-166/03.Login 3rd.png' });
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(20000);
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(4\)$/ }).first()).toBeVisible();
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(4\)$/ }).first()).toHaveText("You are unauthorized (4)")
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-166/04.Login 4th.png' });

// });





// test('GSD-166 5 - 8 ', async ({ page }) => {
//     await page.getByText('logout').click();
//     await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//     await page.locator('input[name="password"]').fill('asdfghjkl321');
//     await page.locator('span').filter({ hasText: 'visibility_off' }).click();
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(25000);
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(5\)$/ }).first()).toBeVisible();
//     await expect.soft(page.locator('div').filter({ hasText: /^You are unauthorized \(5\)$/ }).first()).toHaveText("You are unauthorized (5)")
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-166/05.Login 5th.png' });
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(5000);
//     await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out \(Max Failure\)$/ }).first()).toBeVisible();
//     await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out \(Max Failure\)$/ }).first()).toHaveText("Your account has been locked out (Max Failure)")
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-166/06.Login 6th.png' });
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(5000);
//     await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out$/ }).first()).toBeVisible();
//     await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out$/ }).first()).toHaveText("Your account has been locked out")
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-166/07.Login 7th.png' });
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(5000);
//     await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out$/ }).first()).toBeVisible();
//     await expect.soft(page.locator('div').filter({ hasText: /^Your account has been locked out$/ }).first()).toHaveText("Your account has been locked out")
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-166/08.Login 8th.png' });
//     await page.waitForTimeout(1000);



// });


test('Unlock GSD-166 ', async ({ page }) => {

    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.getByRole('combobox').selectOption('50');
    await page.waitForTimeout(1000);
    await page.locator('tr:nth-child(17) > .text-right > button').first().click();
    await page.waitForTimeout(1000);
    await page.getByText('User Locked Out').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
    await page.getByText('logout').click();
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.locator('span').filter({ hasText: 'visibility_off' }).click();
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(5000);

});



test('GSD-167 ', async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.getByText('logout').click();
    await page.waitForTimeout(3000);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Completed' }).click();
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('TC5_UAT_GDM for demo_2705-40');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('button', { name: 'TC5_UAT_GDM for demo_2705-40', exact: true }).first().click();
    await page.waitForTimeout(1000);
    await expect.soft(page.getByRole('heading', { name: 'History for \'TC5_UAT_GDM for demo_2705-40\'' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: '1', exact: true })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-167/01.Contract No Details.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1000);

});



test('GSD-171  ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-171/1.1 Auto_GSD-171.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-171' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-171/01.Batch Error.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('1.1 Auto_GSD-171 ').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await expect(page.getByText('\'TC1-2คน-2023-11-20\' is Exist.')).toHaveText("\'TC1-2คน-2023-11-20\' is Exist.");
    await page.locator('[id="\\30 _1"]').fill('TC1-2คน-2023-11-20agxyys');
    await page.getByRole('button', { name: 'Validate' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('1.1 Auto_GSD-171 ').first().click();
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-171' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-171/02.Validate Batch Name.png', mask: [mask_locator1], maskColor: '#00FF01' });
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-171 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-171  ' })).toBeHidden();
    await page.waitForTimeout(1000);



});





test('GSD-172 ', async ({ page }) => {
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.waitForURL('admin/company');
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.getByRole('combobox').selectOption('50');
    await page.waitForTimeout(800);
    await page.getByRole('row', { name: 'ma*****.n     ma*****th GGS' }).getByRole('button').first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-172/01.Validate Click Edit User.png' });




});





test('GSD-173 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-173/Auto_GSD-173.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-173' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-173/01. GSD-173.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-173/02. GSD-173 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-173').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-173/03. GSD-173 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-173 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-173  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-174 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-174/Auto_GSD-174.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-174' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-174/01. GSD-174.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'relateParty' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyBranchNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyBranchNo' is an invalid number ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-174/02. GSD-174 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-174').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'relateParty' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyBranchNo' invalid special character ข้อมูลบรรทัดที่ 1 column 'relatePartyBranchNo' is an invalid number Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-174/03. GSD-174 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-174 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-174  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-175  ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-175/Auto_GSD-175.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-175' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-175/01.Batch Error.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_GSD-175 ').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await expect.soft(page.getByText('\'TC1-2คน-2023-11-20\' is Exist.')).toHaveText("\'TC1-2คน-2023-11-20\' is Exist.");
    await page.locator('[id="\\30 _1"]').fill('TC1-2คน-2023-11-20agx42yys');
    await expect.soft(page.getByText('typeCode is equal to 1 and attType is equal to 2 therefore, attActionType1 must be one of (1,2,3,4) [R56] ')).toHaveText('typeCode is equal to 1 and attType is equal to 2 therefore, attActionType1 must be one of (1,2,3,4) [R56]');
    await page.locator('[id="\\30 _57"]').fill('[2|1|1|d1|d2|d3|d4|d5||10000|1000|51000|5]');
    await page.getByRole('button', { name: 'Validate' }).click();
    await page.waitForTimeout(10000);
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('Auto_GSD-175 ').first().click();
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.waitForTimeout(1500);
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-175' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-175/02.Validate Batch Name.png', mask: [mask_locator1], maskColor: '#00FF01' });
    await page.getByRole('link', { name: 'Batch ' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-175 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-175  ' })).toBeHidden();
    await page.waitForTimeout(1000);



});



test('GSD-176 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-176/Auto_GSD-176.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-176' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-176/01. GSD-176.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'issueNumber' typeCode is one of 1,2,3,4,5,6,7,8,10,14,16,18,19,20,21,271,272,92 ; therefore, issueNumber must be empty ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-176/02. GSD-176 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-176').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'issueNumber' typeCode is one of 1,2,3,4,5,6,7,8,10,14,16,18,19,20,21,271,272,92 ; therefore, issueNumber must be empty Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-176/03. GSD-176 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-176 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-176  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-177 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-177/Auto_GSD-177.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-177' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-177/01. GSD-177.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'receiveDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-177/02. GSD-177 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-177').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'receiveDate' invalid special character ข้อมูลบรรทัดที่ 1 column 'receiveDate' is an incorrect date formatข้อมูลบรรทัดที่ 1 column 'receiveDate' instInfo.receiveDate must not be before instInfo.creationDate. [E07360] ข้อมูลบรรทัดที่ 1 column 'receiveDate' receiveDate must not more than 30 days in advance. [E07363] ข้อมูลบรรทัดที่ 1 column 'receiveDate' creationDate must not be over than receiveDate. [R51] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-177/03. GSD-177 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-177 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-177  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-178 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-178/Auto_GSD-178.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-178' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-178/01. GSD-178.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'relateContractTitleName' length is overflow ข้อมูลบรรทัดที่ 1 column 'relateContractName' length is overflow ข้อมูลบรรทัดที่ 1 column 'relateContractSurname' length is overflow  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-178/02. GSD-178 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-178').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'relateContractTitleName' length is overflow ข้อมูลบรรทัดที่ 1 column 'relateContractName' length is overflow ข้อมูลบรรทัดที่ 1 column 'relateContractSurname' length is overflow  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-178/03. GSD-178 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-178 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-178  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});

test('GSD-179 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-179/Auto_GSD-179.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-179' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-179/01. GSD-179.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ข้อมูลบรรทัดที่ 2 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ข้อมูลบรรทัดที่ 3 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ข้อมูลบรรทัดที่ 4 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-179/02. GSD-179 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-179').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ข้อมูลบรรทัดที่ 2 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ข้อมูลบรรทัดที่ 3 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ข้อมูลบรรทัดที่ 4 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-179/03. GSD-179 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-179 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-179  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-184 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-184/Auto_GSD-184.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-184' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-184/01. GSD-184.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'dupNumber' invalid special character ข้อมูลบรรทัดที่ 1 column 'dupNumber' is an invalid number ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' invalid special character ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'dupNumber' selectType is 0; therefore, dupNumber must be equal to 0. (E07370) ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-184/02. GSD-184 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-184').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'dupNumber' invalid special character ข้อมูลบรรทัดที่ 1 column 'dupNumber' is an invalid number ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' invalid special character ข้อมูลบรรทัดที่ 1 column 'dupDutyAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'dupNumber' selectType is 0; therefore, dupNumber must be equal to 0. (E07370) Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-184/03. GSD-184 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-184 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-184  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('GSD-192 ', async ({ page }) => {

    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.waitForURL('/settings/configuration');
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('tab', { name: 'Company' }).click();
    await page.waitForTimeout(1500);
    await page.locator('div').filter({ hasText: /^OrganizationAll$/ }).first().click();
    await page.getByRole('option', { name: 'Test Auto' }).locator('span').click();
    await page.getByRole('button', { name: 'INFO' }).click();
    await page.waitForTimeout(3000);
    await page.locator('#mat-mdc-checkbox-2-input').click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-192/01. Click Enble Auto Submit.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-192/02. After Click Save.png' });
    await page.getByRole('button', { name: 'INFO' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-192/03. Details After Click Save.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'INFO' }).click();
    await page.waitForTimeout(1500);
    await page.locator('#mat-mdc-checkbox-6-input').click();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-192/01. Click Enble Auto Submit.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);


});






test('GSD-194 ', async ({ page }) => {

    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('/paperstamp');
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Data Version' }).hover();
    await page.getByRole('menuitem', { name: 'All Version' }).click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-194/01. Search Paper Stamp.png' });



});


test('GSD-200 ', async ({ page }) => {





});

test('GSD-201 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Completed' }).click();
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(1000);
    await page.locator('#mat-mdc-checkbox-2').click();
    await page.getByRole('button', { name: 'Receipts' }).first().click();
    await page.getByRole('button', { name: 'Go to Downloads' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('row', { name: 'kittisak.p@ginkgosoft.co.th' }).getByRole('button').nth(1).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS12-Fix Bug/GSD-201/01.Receipts.rar');


});


test('GSD-203 ', async ({ page }) => {

    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Preparing' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS12-Fix Bug/GSD-203/01.Transaction.csv');
    await page.waitForTimeout(1000);

});


test('GSD-204 ', async ({ page }) => {


    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('/paperstamp');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-204/Auto_GSD-204.xlsx');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.waitForTimeout(1000);
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await expect.soft(page.getByText('Upload Total: 5 row(s) Success: 3 row(s) ,Duplicate: 2 row(s) ,Error: 0 row(s) Error Message')).toHaveText('Upload Total: 5 row(s) Success: 3 row(s) ,Duplicate: 2 row(s) ,Error: 0 row(s) Error Message');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-204/01. Upload Details.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Search').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-204/02. Upload Success.png' });
    await page.waitForTimeout(1000);
    await page.locator('tr').filter({ hasText: 'Auto_Dup0001' }).locator('button').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1000);
    await page.locator('tr').filter({ hasText: 'Auto_Dup0002' }).locator('button').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1000);
    await page.locator('tr').filter({ hasText: 'Auto_Dup0003' }).locator('button').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1000);

});






test('GSD-211 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.getByText('logout').click();
    await page.waitForTimeout(3000);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.goto('/batch/4028');
    await page.getByRole('button', { name: 'Receipts', exact: true }).click();
    await page.getByRole('button', { name: 'Go to Downloads' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('row', { name: 'test.gamekittisak2@gmail.com' }).getByRole('button').nth(1).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS12-Fix Bug/GSD-211/01.Receipts.rar');

});



test('GSD-213 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-213/Auto_GSD-213.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-213' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-213/01. GSD-213.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-213').first().click();
    await page.waitForTimeout(1500);
    await page.getByRole('cell', { name: '2', exact: true }).first().click();
    await expect.soft(page.getByRole('heading', { name: 'Relate Party' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: '3164765717686' })).toHaveText('3164765717686');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-213/02. Relate Party.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1500);
    await page.locator('td:nth-child(53)').click();
    await expect.soft(page.getByRole('heading', { name: 'Relate Contract' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'ทดสอบ' })).toHaveText('ทดสอบ');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-213/03. Relate Contract.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1500);
    await page.locator('td:nth-child(54)').click();
    await expect.soft(page.getByRole('heading', { name: 'Array Detail' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'd1' })).toHaveText('d1');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-213/04. Array Detail.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-213 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-213  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-214 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-214/Auto_GSD-214.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-214' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-214/01. GSD-214.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-214').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'Contract Party Tax ID' }).hover()
    await expect.soft(page.getByRole('cell', { name: '17*****82' })).toHaveText('17*****82');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-214/02. Contract Party Tax ID.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-214 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-214  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-252 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-252/Auto_GSD-252.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-252' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-252/01. GSD-252.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 2,111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-252/02. GSD-252 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-252').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 2,111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-252/03. GSD-252 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-252 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-252  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  
  
  test('GSD-253 ', async ({ page }) => {
  
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-253/Auto_GSD-253.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-253' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-253/01. GSD-253.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 2,111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-253/02. GSD-253 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-253').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode is equal to 2,111 and actionType is equal to 3 and actionType1 is equal to 3; therefore, detail1 must not be empty. [R18] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-253/03. GSD-253 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-253 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-253  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  
  test('GSD-254 ', async ({ page }) => {
  
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-254/Auto_GSD-254.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-254' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-254/01. GSD-254.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-254/02. GSD-254 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-254').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'detail1' typeCode in (2,4,5,7,8,17,18,19,20,21,271,272,283) detail1 must not be empty. [R17] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-254/03. GSD-254 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-254 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-254  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  
  test('GSD-256  ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-256/Auto_GSD-256.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-256' }).getByRole('cell').first();
    await page.getByText('Auto_GSD-256 ').first().click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-256 ').first().click();
    await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(10000);
    await page.getByText('Search').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Payment', exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Auto_GSD-256' }).getByLabel('').click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).first().click();
    const downloadPromise = page.waitForEvent('download');
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS12-Fix Bug/GSD-256/01.qrPayment.jpg');
    await page.waitForTimeout(1500);
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).first().click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS12-Fix Bug/GSD-256/02.payInSlipFile.pdf');
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Auto_GSD-256 ' }).getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-256  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  });
  
  
  
  test('GSD-258  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-258/Auto_GSD-258 1.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-258 1.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-258/01. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_GSD-258 1.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-258 1.1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-258/Auto_GSD-258 1.12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_GSD-258 1.12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-258/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_GSD-258 1.12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-258 1.12  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-258/Auto_GSD-258 1.123.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-258 1.123' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-258/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_GSD-258 1.123 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-258 1.123  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  
  
  
  
  });
  
  
  
  
  
  test('GSD-260 : Submit Error', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Submit Error' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('GeStamp_TC4-Test_2105');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/01.Search Submit Error.png' });
    await page.waitForTimeout(1000);
  
  });
  
  
  test('GSD-260 : Filing Error', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Filing Error' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('TC1-2024-01-18-1');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/02.Search Filing Error.png' });
    await page.waitForTimeout(1000);
  
  });
  
  
  test('GSD-260 : Payment Error', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Payment Error' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('zxcvbnm123');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/03.Search Payment Error.png' });
    await page.waitForTimeout(1000);
  
  
  });
  
  
  test('GSD-260 : Receipt Error', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Receipt Error' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('TC6_TS3-4999_increase');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/04.Search Receipt Error.png' });
    await page.waitForTimeout(1000);
  
  
  });
  
  
  test('GSD-260 : Preparing', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Preparing' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('TC6-2023-11-15c');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/05.Search Preparing.png' });
    await page.waitForTimeout(1000);
  
  });
  
  
  test('GSD-260 : Rejected', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Rejected' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('TC1-2024-03-19');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/06.Search Rejected.png' });
    await page.waitForTimeout(1000);
  
  
  });
  
  
  test('GSD-260 : Reviewing', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Reviewing' }).click();
    await page.waitForTimeout(10000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('a5c15581');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/07.Search Reviewing.png' });
    await page.waitForTimeout(1000);
  
  });
  
  
  test('GSD-260 : Submitted', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Submitted' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('Test');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/08.Search Submitted.png' });
    await page.waitForTimeout(1000);
  
  });
  
  
  test('GSD-260 : Payment', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Payment', exact: true }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('TC2-2024-05-08xx');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/09.Search Payment.png' });
    await page.waitForTimeout(1000);
  
  });
  
  
  
  
  
  test('GSD-260 : Paid', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Paid' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('TC1-2024-01-18-3');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/10.Search Paid.png' });
    await page.waitForTimeout(1000);
  
  });
  
  
  
  
  
  test('GSD-260 : Completed', async ({ page }) => {
    await page.getByRole('link', { name: 'Transaction ' }).click();
    await page.waitForURL('/transactions');
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Completed' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).hover();
    await page.getByRole('menuitem', { name: 'Default Ginkgo' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Contract No').fill('1.2_TC4_new_entry-10xx');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-260/11.Search Completed.png' });
    await page.waitForTimeout(1000);
  
  });
  
  
  
  
  test('GSD-262', async ({ page }) => {
  
  
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-262/Auto_GSD-262.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-262/01. GSD-262.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-262').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-262/02. Batch Success.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_GSD-262 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-262  ' })).toBeHidden();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 4 column 'contractNo' 'akj599jaskm3' is duplicate. ข้อมูลบรรทัดที่ 5 column 'contractNo' 'akj599jaskm2' is duplicate. ข้อมูลบรรทัดที่ 6 column 'contractNo' 'akj599jaskm1' is duplicate. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-262/03. GSD-262 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-262').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 4 column 'contractNo' 'akj599jaskm3' is duplicate. ข้อมูลบรรทัดที่ 5 column 'contractNo' 'akj599jaskm2' is duplicate. ข้อมูลบรรทัดที่ 6 column 'contractNo' 'akj599jaskm1' is duplicate. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-262/04. GSD-262 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-262 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-262  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  });
  