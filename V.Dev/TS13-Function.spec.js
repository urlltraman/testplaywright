import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     // Runs Uat

//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
//     await page.locator('input[name="password"]').fill('ZXcv.!234');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     // await page.getByRole('button', { name: 'Accept' }).click();

// });



test.beforeEach(async ({ page }) => {
    // Runs Dev

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});


test('GSD-3 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.locator('#kt_content div').filter({ hasText: 'No.E-Document No.Contract No.Creation DateStatusSelect TypeType CodeEffective Da' }).nth(3)).toBeVisible();
    await page.getByText('test.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-03/01. Ginkgosoft.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Ginkgo Soft Co., Ltd.').nth(1).click();
    await page.getByText('GinkgoTest').click();
    await page.waitForTimeout(5000);
    await page.locator('button').filter({ hasText: 'filter_alt' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.locator('#kt_content div').filter({ hasText: 'No.E-Document No.Contract No.Creation DateStatusSelect TypeType CodeEffective Da' }).nth(3)).toBeVisible();
    await page.getByText('persontest.gamekittisak@gmail.comGinkgoTest').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-03/02. GinkgoTest.png' });
    await page.waitForTimeout(1000);

});


test('GSD-7', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.waitForURL('/settings/configuration');
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('tab', { name: 'Company' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Test Auto ทดสอบ TA Test Auto' }).getByRole('button').nth(2).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-07/01. Expire Date.png' });
    await page.waitForTimeout(1000);
    await page.getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2030').click();
    await page.getByLabel('December 2030').click();
    await page.getByLabel('31 December 2030').click();
    await page.locator('input[name="keyStoreKey"]').fill('test');
    await page.locator('input[name="keyStorePass"]').fill('test');
    await page.locator('#file').setInputFiles('Data Files/AutomateTest.p12');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('row', { name: 'Test Auto ทดสอบ TA Test Auto' }).getByRole('button').nth(2).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-07/02. Change Expire Date.png' });
    await page.waitForTimeout(1000);
    await page.getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('31 December 2024').click();
    await page.locator('#file').setInputFiles('Data Files/AutomateTest.p12');
    await page.locator('input[name="keyStoreKey"]').fill('test');
    await page.locator('input[name="keyStorePass"]').fill('test');
    await page.getByRole('button', { name: 'Save' }).click();


});


test('GSD-17 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(1000);
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2023').click();
    await page.getByLabel('December 2023').click();
    await page.getByLabel('26 December 2023').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await page.getByRole('combobox').selectOption('10');
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    await download1.saveAs('Output/TS13-Function/GSD-17/01.Export 10.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('15');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    const downloadPromise2 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download2 = await downloadPromise2;
    await download2.saveAs('Output/TS13-Function/GSD-17/02.Export 15.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('20');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    const downloadPromise3 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download3 = await downloadPromise3;
    await download3.saveAs('Output/TS13-Function/GSD-17/03.Export 20.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('50');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    const downloadPromise4 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download4 = await downloadPromise4;
    await download4.saveAs('Output/TS13-Function/GSD-17/04.Export 50.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('100');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    const downloadPromise5 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download5 = await downloadPromise5;
    await download5.saveAs('Output/TS13-Function/GSD-17/05.Export 100.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('150');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    const downloadPromise6 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download6 = await downloadPromise6;
    await download6.saveAs('Output/TS13-Function/GSD-17/06.Export 150.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('200');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract' }).getByLabel('').click();
    const downloadPromise7 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download7 = await downloadPromise7;
    await download7.saveAs('Output/TS13-Function/GSD-17/07.Export 200.csv');



});







test('GSD-20 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-20/Auto_GSD-20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-03/01. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-20  ' })).toBeHidden();

});




// test('GSD-31 ', async ({ page }) => {

//     await page.getByRole('link', { name: 'Administrator' }).click();
//     await page.getByRole('link', { name: 'User Accounts' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByRole('combobox').selectOption('50');
//     await page.waitForTimeout(500);
//     await page.getByRole('row', { name: 'Ki*****ak ki*****th GGS' }).getByRole('button').first().click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-31/01. User EntraID Details.png' });
//     await page.waitForTimeout(500);
//     await page.getByRole('button', { name: 'Cancel' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByText('logout').click();
//     await page.waitForTimeout(2500);
//     await page.goto('/login');
//     await page.getByRole('button', { name: 'Sign in with your IDP' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByPlaceholder('Email, phone, or Skype').fill('kittisak.p@ginkgosoft.co.th')
//     await page.getByRole('button', { name: 'Next' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByPlaceholder('Password').fill('db99bLydfbN');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByRole('button', { name: 'Yes' }).click();
//     await page.waitForTimeout(2500);
//     await page.waitForURL('/batch');
//     await page.getByText('personKittisakGinkgo Soft Co., Ltd.').click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-31/02. Login EntraID.png' });



// });





test('GSD-32 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-32/Auto_GSD-32.json');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-32' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-32/01. Upload Json.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-32 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-32  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-61 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.waitForURL('/settings/configuration');
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('row', { name: 'Test Auto ทดสอบ อัตโนมัติ 1 TA' }).getByRole('button').first().click();
    await page.waitForTimeout(1500);
    await page.getByRole('tab', { name: 'Watcher' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('Path').first().hover();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-61/01. Default Home Path.png' });
    await page.waitForTimeout(1500);
    await page.getByPlaceholder('Path').first().fill('/Test/Auto/GGS')
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-61/02. Change Home Path.png' });
    await page.getByRole('button', { name: 'Cancel' }).click();

});



test('GSD-62 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'Schedule Submit' }).click();
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/01. 1 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/02. 2 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/03. 33 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/04. 4 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/05. 5 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/06. 6 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/07. 7 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/08. 8 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/09. 9 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/10. 10 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/11. 11 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/12. 12 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/13. 13 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/14. 14 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/15. 15 Day.png' });
    await page.waitForTimeout(500);


});

test('GSD-68 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('button', { name: 'INFO' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-68/01. Details Company.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.getByText('test.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(1000);
    await page.getByText('Ginkgo Soft Co., Ltd.').nth(1).click();
    await page.getByText('GinkgoTest').click();
    await page.waitForTimeout(5000);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-68/Auto_GSD-68.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-68' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-68/02. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByText('Auto_GSD-68').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-68/03. By Pass Approve.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-68 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-68  ' })).toBeHidden();


});



test('GSD-72 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Input Log' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-72/01. Input Logs.png' });
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS13-Function/GSD-72/02.Input Logs.xlsx');

});





test('GSD-73 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Submit Log' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-73/01. Submit Logs.png' });
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS13-Function/GSD-73/02.Submit Logs.xlsx');

});




test('GSD-77 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Input Log' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-77/01. Input Logs.png' });
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS13-Function/GSD-77/02.Input Logs.xlsx');

});




test('GSD-78 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Submit Log' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-78/01. Submit Logs.png' });
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS13-Function/GSD-78/02.Submit Logs.xlsx');

});



// test('GSD-85 ', async ({ page }) => {

//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Function/GSD-85/Auto_GSD-85.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();

// });




test('GSD-86 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.waitForURL('/settings/configuration');
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('tab', { name: 'Users' }).click();
    await page.locator('div').filter({ hasText: /^OrganizationAll$/ }).first().click();
    await page.getByRole('option', { name: 'Ginkgo Soft' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'pr*****G]     pr*****om' }).getByRole('button').nth(1).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-86/01. Api User.png' });
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Vi**     te*****om Ginkgo' }).getByRole('button').nth(1).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-86/02. Normal User.png' });


});



test('GSD-88 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-88/Auto_GSD-88.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.waitForTimeout(30000);
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-88 (1)' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-88/01. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-88 (1)').click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-88/02. Batch 1 Details.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(30000);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-88 (2)').click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-88/03. Batch 2 Details.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-88 (1) ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-88 (1)  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-88 (2) ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-88 (2)  ' })).toBeHidden()
    await page.waitForTimeout(1500);
});



test('GSD-93 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.locator('#kt_content div').filter({ hasText: 'No.E-Document No.Contract No.Creation DateStatusSelect TypeType CodeEffective Da' }).nth(3)).toBeVisible();
    await page.getByText('test.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-93/01. Ginkgosoft.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Ginkgo Soft Co., Ltd.').nth(1).click();
    await page.getByText('GinkgoTest').click();
    await page.waitForTimeout(5000);
    await page.locator('button').filter({ hasText: 'filter_alt' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.locator('#kt_content div').filter({ hasText: 'No.E-Document No.Contract No.Creation DateStatusSelect TypeType CodeEffective Da' }).nth(3)).toBeVisible();
    await page.getByText('persontest.gamekittisak@gmail.comGinkgoTest').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-93/02. GinkgoTest.png' });
    await page.waitForTimeout(1000);

});



test('GSD-94 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-94/Auto_GSD-94.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-94' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-94/01. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-94 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-94  ' })).toBeHidden();

});




test('GSD-96 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-96/Auto_GSD-96.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-96' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-96/01. GSD-96.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-96').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.locator('[id="\\30 _55"]').hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-96/02. Relate Party.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-96 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-96  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-99 Batch', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-99/Auto_GSD-99.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    // let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-99' }).getByRole('cell').first();
    // await page.screenshot({ path: 'Output/TS13-Function/GSD-99/01. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByText('Auto_GSD-99').click();
    await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Creation Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party First Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Last Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Inst Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Stamp Duty Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duplicated Stamp Duty Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Paid Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'e-Document No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Surcharge Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Fine Amount' })).toBeVisible();

    await expect.soft(page.getByRole('cell', { name: 'Total Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Previous Submit' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Entity Id' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Sender Role' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Form Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Select Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Type Code' })).toBeVisible();
    // await expect.soft(page.getByRole('cell', { name: 'UserId' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Effective Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Expire Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receive Date' })).toBeVisible();
    // await expect.soft(page.getByRole('cell', { name: 'Send From Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Filing No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Overdue Flag' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'DupNumber' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'TaxPayer' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Brach No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Branch Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relationship' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Tax ID' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Branch No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Building Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Room No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Floor No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Village Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Building Number' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Moo' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Soi' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Junction' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Street' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Subdistrict' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'District', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Province' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Postcode' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Country Id' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Party' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Relate Contract' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Array Detail' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate InstInfo Id' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate InstInfo Contract No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate InstInfo Creation Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate InstInfo Duty Amount Os4' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail1' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail2' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail3' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail4' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail5' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail6' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail7' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail8' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount1' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount2' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount3' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount4' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Number', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'ActionType', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'ActionType1' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Email' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Product Code' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Old Limit' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Issue Number' })).toBeVisible();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-99/01. Batch Details.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-99 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-99  ' })).toBeHidden();

});




test('GSD-99 Transactions', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'E-Document No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Creation Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Status', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Select Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Type Code', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Effective Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Expire Date', exact: true })).toBeVisible();
    // await expect.soft(page.getByRole('cell', { name: 'Import Contract Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Send Form Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Filing No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Overdue flag', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'No. of Duplicated Contract', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred E-Document No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred Contract No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred Creation Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duty Amount OS4', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Inst Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Action Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Stamp Duty Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duplicated Stamp Duty Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Paid Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Surcharge Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Fine Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Payer Tax ID', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Tax ID', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party First Name', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Last Name', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Building Name', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Room No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Floor No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Village Name', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Building Number', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Moo', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Soi', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Junction', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Street', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Subdistrict', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'District', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Province', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Postcode', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Country Id', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Email', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Product Code', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Credit Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Schedule Submit Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Submit Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Batch Id', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Form Submit No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'SD Payment Code', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Reference1', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Reference2', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Payment Due Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receipt No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receipt Date', exact: true })).toBeVisible();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-99/02. Transactions Details.png' });
    await page.waitForTimeout(1500);






});



test('GSD-113 ', async ({ page }) => {
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('https://gestamp.ddns.net/paperstamp');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-113/Auto_GSD-113.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await expect.soft(page.getByText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s) Error Message Row number 1 |ContractNo is containt reserve word ')).toHaveText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s) Error Message Row number 1 |ContractNo is containt reserve word ');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-113/01.Upload Cross-Site Scripting.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);
    // await page.locator('a').filter({ hasText: 'settings' }).click();
    // await page.getByRole('link', { name: 'Organization' }).click();
    // await page.getByRole('tab', { name: 'Company' }).click();
    // await page.waitForTimeout(1500);
    // await page.locator('div').filter({ hasText: /^OrganizationAll$/ }).first().click();
    // await page.getByRole('option', { name: 'Test Auto' }).locator('span').click();
    // await page.getByRole('button', { name: 'Add' }).click();
    // await page.waitForTimeout(1500);
    // await page.locator('input[name="nameEng"]').fill('!@#$%^&*()');
    // await page.locator('input[name="nameTha"]').fill('!@#$%^&*()');
    // await page.locator('input[name="taxId"]').fill('!@#$%^&*()');
    // await page.locator('input[name="abbrName"]').fill('!@#$%^&*()');
    // await page.locator('input[name="keyStoreKey"]').fill('!@#$%^&*()');
    // await page.locator('input[name="keyStorePass"]').fill('!@#$%^&*()');
    // await page.locator('input[name="userId"]').fill('!@#$%^&*()');
    // await page.locator('input[name="password"]').fill('!@#$%^&*()');
    // await page.locator('#file').setInputFiles('Data Files/AutomateTest.p12');
    // await page.waitForTimeout(1500);
    // await page.screenshot({ path: 'Output/TS13-Function/GSD-113/02.Creation Company Cross-Site Scripting.png' });









});


test('GSD-118 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.getByText('test.gamekittisak@gmail.com').nth(1).click();
    await page.waitForTimeout(1500);
    await page.locator('#kt_content').click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-118/01. Defualt.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-118/02. Sensitive Data.png' });
    await page.waitForTimeout(1500);
    await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.locator('button').filter({ hasText: 'person' }).click();
    await page.waitForTimeout(1500);
    await page.locator('#kt_content').click();
    await page.waitForTimeout(1500);
    await page.locator('#mat-mdc-slide-toggle-3-button').click();
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-118/03. Unlock Sensitive Data.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-118/04. User Details.png' });
    await page.waitForTimeout(1500);
    await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.getByText('test.gamekittisak@gmail.com').nth(1).click();
    await page.waitForTimeout(1500);
    await page.locator('#kt_content').click();
    await page.waitForTimeout(1500);
    await page.locator('#mat-mdc-slide-toggle-5-button').click();
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);





});





test('GSD-119 ', async ({ page }) => {

    await page.waitForURL('/batch');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
    const page1 = await page1Promise;
    await page1.waitForTimeout(1500);
    await expect.soft(page1.getByRole('heading', { name: 'PRIVACY POLICY' })).toHaveText('PRIVACY POLICY')
    await page1.screenshot({ path: 'Output/TS13-Function/GSD-119/01. Policy.png' });

});




test('GSD-140 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.locator('#kt_header').getByText('Log Out').click();
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Forgot Password?' }).click();
    await page.getByPlaceholder('Enter your email').fill('test.gamekittisak5@gmail.com');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-140/01. Forgot Password.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-140/02. After Submit.png' });
    await page.waitForTimeout(1500);
    await expect.soft(page.getByRole('heading', { name: 'Email is correct!' })).toHaveText('Email is correct!');
    await expect.soft(page.getByText('Message with \'recovery\' instruction has been sent')).toHaveText('Message with \'recovery\' instruction has been sent');
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Ok, got it!' }).click();

});




test('GSD-141  ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-141/Auto_GSD-141.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.getByText('Search').click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-141 ').first().click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(5000);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-141 ').first().click();
    await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-141 ').first().click();
    await page.waitForTimeout(15000);
    await page.reload();
    await page.goto('/batch');
    await page.getByText('Search').click();
    // Payment 
    await page.waitForTimeout(1800);
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-141' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-141/01. GSD-141.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1000);
    await page.getByRole('cell', { name: 'QR Pay-in' }).getByRole('button').nth(2).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-141/02. Delete Batch Payment.png' });
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-141/03. After Delete Batch.png' });



});




test('GSD-156 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Submit Error' }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('February 2024').click();
    await page.getByLabel('1 February 2024', { exact: true }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('22 December 2024').click();
    await page.getByRole('combobox').selectOption('200');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_Gestamp_TC20').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-156/01. User Can Retry Submit.png' });

});


test('GSD-157 ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^apps$/ }).click();
    await page.getByRole('link', { name: 'zDox' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-157/01. Click zDox.png' });
    await page.waitForTimeout(5000);
    await page.goto('https://gestamp.ddns.net/batch');
    await page.locator('div').filter({ hasText: /^apps$/ }).click();
    await page.getByRole('link', { name: 'getInvoice' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-157/02. Click getInvoice.png' });

});


// test('GSD-158 ', async ({ page }) => {

//     await page.goto('https://gestamp.ddns.net/unauthorize');
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-158/01. Unauthorize.png' });


// });









test('GSD-159 ', async ({ page }) => {
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('https://gestamp.ddns.net/paperstamp');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-159/Auto_GSD-159.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await expect.soft(page.getByText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s) Error Message Row number 1 |ContractNo is containt reserve word ')).toHaveText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s) Error Message Row number 1 |ContractNo is containt reserve word ');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-159/01.Upload Error.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);

});



test('GSD-170 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Completed' }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2023').click();
    await page.getByLabel('December 2023').click();
    await page.getByLabel('26 December 2023').click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('26 December 2024').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Completed [42133] TC272_issueNumber ' }).getByLabel('').click();
    await page.getByRole('button', { name: 'Receipts' }).first().click();
    await page.getByRole('button', { name: 'Go to Downloads' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).getByRole('button').nth(1).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS13-Function/GSD-170/01.Receipts GSD-170.rar');


});





test('GSD-187 ', async ({ page }) => {
    await page.getByText('logout').click();
    await page.waitForTimeout(2500);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-187/Auto_GSD-187.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-187' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-187/01. Upload Company Auto Approved.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-187 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-187  ' })).toBeHidden();

});


test('GSD-217 ', async ({ page }) => {

    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('button', { name: 'INFO' }).first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-217/01. Company Taxid.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-217/Auto_GSD-217.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-217').click();
    await page.getByRole('cell', { name: 'TaxPayer' }).hover();
    await page.waitForTimeout(1000);
    await expect.soft(page.getByRole('cell', { name: 'TaxPayer' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: '0105556078229', exact: true })).toHaveText('0105556078229');
    await page.screenshot({ path: 'Output/TS13-Function/GSD-217/02. Input File Taxpayer.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-217 ').first().click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(5000);
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-217 ').first().click();
    await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(10000);
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-217 ').first().click();
    await page.waitForTimeout(15000);
    await page.reload();
    await page.goto('/batch');
    await page.getByText('Search').click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-217' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-217/03.Submit To RD.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('row', { name: 'Auto_GSD-217 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-217  ' })).toBeHidden();

});


test('GSD-224 ', async ({ page }) => {
    await page.getByText('logout').click();
    await page.waitForTimeout(2500);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1000);
    await page.getByText('persontest.gamekittisak3@gmail.comGinkgoTest').click();
    await page.waitForTimeout(1000);
    await page.getByText('Change Password').click();
    await page.waitForTimeout(1000);
    await page.getByText('visibility_off').first().click();
    await page.getByText('visibility_off').first().click();
    await page.getByText('visibility_off').click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="curPassword"]').fill('ZXcv.!234');
    await page.locator('input[name="password"]').fill('ZXcv.!23');
    await page.locator('input[name="cPassword"]').fill('ZXcv.!23');
    await expect.soft(page.getByText('Password must be at least 10 characters long')).toHaveText('Password must be at least 10 characters long');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/01. 8 Character.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.locator('input[name="cPassword"]').fill('ZXcv.!2345');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/02. 10 Character.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('gamekittisak');
    await page.locator('input[name="cPassword"]').fill('gamekittisak');
    await expect.soft(page.getByText('Password should be at least one lowercase')).toHaveText('Password should be at least one lowercase');
    await expect.soft(page.getByText('Password should be at least one uppercase')).toHaveText('Password should be at least one uppercase');
    await expect.soft(page.getByText('Password should be at least one number')).toHaveText('Password should be at least one number');
    await expect.soft(page.getByText('Password should be at least one symbol')).toHaveText('Password should be at least one symbol');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/03. Username.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('1234567890');
    await page.locator('input[name="cPassword"]').fill('1234567890');
    await expect.soft(page.getByText('Password should be at least one lowercase')).toHaveText('Password should be at least one lowercase');
    await expect.soft(page.getByText('Password should be at least one uppercase')).toHaveText('Password should be at least one uppercase');
    await expect.soft(page.getByText('Password should be at least one number')).toHaveText('Password should be at least one number');
    await expect.soft(page.getByText('Password should be at least one symbol')).toHaveText('Password should be at least one symbol');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/04. Poor Password.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('12345abcde');
    await page.locator('input[name="cPassword"]').fill('12345abcde');
    await expect.soft(page.getByText('Password should be at least one lowercase')).toHaveText('Password should be at least one lowercase');
    await expect.soft(page.getByText('Password should be at least one uppercase')).toHaveText('Password should be at least one uppercase');
    await expect.soft(page.getByText('Password should be at least one number')).toHaveText('Password should be at least one number');
    await expect.soft(page.getByText('Password should be at least one symbol')).toHaveText('Password should be at least one symbol');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/05. Not Good Password.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('12345@abcd');
    await page.locator('input[name="cPassword"]').fill('12345@abcd');
    await expect.soft(page.getByText('Password should be at least one lowercase')).toHaveText('Password should be at least one lowercase');
    await expect.soft(page.getByText('Password should be at least one uppercase')).toHaveText('Password should be at least one uppercase');
    await expect.soft(page.getByText('Password should be at least one number')).toHaveText('Password should be at least one number');
    await expect.soft(page.getByText('Password should be at least one symbol')).toHaveText('Password should be at least one symbol');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/06. Average Password.png' });
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('A1b2@c3D4e5');
    await page.locator('input[name="cPassword"]').fill('A1b2@c3D4e5');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/07. Good Password.png' });
    await page.waitForTimeout(1000);

});






test('GSD-231 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-231/Auto_GSD-231.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-231' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-231/01. GSD-231.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 4; therefore, instAmount must be equal amount4; At this time, the Revenue Department's system does not accept ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-231/02. GSD-231 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-231').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 4; therefore, instAmount must be equal amount4; At this time, the Revenue Department's system does not accept Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-231/03. GSD-231 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-231 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-231  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-232 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-232/Auto_GSD-232.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-232' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-232/01. GSD-232.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 1; therefore, instAmount must be equal to amount  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-232/02. GSD-232 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-232').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 1; therefore, instAmount must be equal to amount  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-232/03. GSD-232 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-232 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-232  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-233 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-233/Auto_GSD-233.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-233' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-233/01. GSD-233.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 2; therefore, instAmount must be equal to amount1 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-233/02. GSD-233 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-233').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 2; therefore, instAmount must be equal to amount1 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-233/03. GSD-233 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-233 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-233  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-234 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-234/Auto_GSD-234.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-234' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-234/01. GSD-234.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 3; therefore, instAmount must be equal to amount1 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-234/02. GSD-234 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-234').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 3; therefore, instAmount must be equal to amount1 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-234/03. GSD-234 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-234 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-234  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-235 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-235/Auto_GSD-235.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-235' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-235/01. GSD-235.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 4; therefore, instAmount must be equal to amount3 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-235/02. GSD-235 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-235').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 4; therefore, instAmount must be equal to amount3 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-235/03. GSD-235 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-235 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-235  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('TS-39 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-39/Auto_TS-39.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TS-39' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/TS-39/01. TS-39.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'typeCode' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-39/02. TS-39 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TS-39').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'typeCode' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-39/03. TS-39 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('row', { name: 'Auto_TS-39' }).getByRole('button').nth(1).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/TS-39/04. File Export.rar');
    await page.waitForTimeout(500);

    await page.getByText('Auto_TS-39').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-39/Auto_TS-39_Import.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-39/05. Import Success.png' });
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_TS-39 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TS-39  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});







test('TS-40 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-40/Auto_TS-40.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TS-40' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/TS-40/01. TS-40.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-40/02. TS-40 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TS-40').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-40/03. TS-40 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('row', { name: 'Auto_TS-40' }).getByRole('button').nth(1).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/TS-40/04. File Export.rar');
    await page.waitForTimeout(500);

    await page.getByText('Auto_TS-40').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-40/Auto_TS-40_Import.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-40/05. Import Success.png' });
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_TS-40 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TS-40  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TS-41 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-41/Auto_TS-41.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TS-41' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/TS-41/01. TS-41.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-41/02. TS-41 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TS-41').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-41/03. TS-41 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('row', { name: 'Auto_TS-41' }).getByRole('button').nth(1).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/TS-41/04. File Export.rar');
    await page.waitForTimeout(500);

    await page.getByText('Auto_TS-41').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-41/Auto_TS-41_Import.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-41/05. Import Success.png' });
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_TS-41 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TS-41  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TS-42 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-42/Auto_TS-42.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TS-42' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/TS-42/01. TS-42.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerId' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-42/02. TS-42 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TS-42').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerId' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-42/03. TS-42 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('row', { name: 'Auto_TS-42' }).getByRole('button').nth(1).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/TS-42/04. File Export.rar');
    await page.waitForTimeout(500);

    await page.getByText('Auto_TS-42').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-42/Auto_TS-42_Import.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-42/05. Import Success.png' });
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_TS-42 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TS-42  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});






test('TS-544 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Completed' }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2023').click();
    await page.getByLabel('December 2023').click();
    await page.getByLabel('26 December 2023').click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('26 December 2024').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Completed [42133] TC272_issueNumber ' }).getByLabel('').click();
    await page.getByRole('button', { name: 'Receipts' }).first().click();
    await page.getByRole('button', { name: 'Go to Downloads' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/TS-544/01. Can Not Download.png' });


});






test('TS-548 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.locator('div').filter({ hasText: /^file_download$/ }).nth(1).click();
    await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS13-Function/TS-548/01. GGS Company.png' });
    await page.waitForTimeout(2000);
    await page.getByText('logout').click();
    await page.waitForTimeout(2500);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(3000);
    await page.locator('div').filter({ hasText: /^file_download$/ }).nth(1).click();
    await page.getByText('persontest.gamekittisak3@gmail.comGinkgoTest').click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS13-Function/TS-548/02. GGT Company.png' });


});