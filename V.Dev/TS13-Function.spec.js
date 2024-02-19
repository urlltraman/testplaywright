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
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});


test('GSD-3 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
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
    await page.locator('.mat-checkbox-inner-container').first().click();
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    await download1.saveAs('Output/TS13-Function/GSD-17/01.Export 10.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('15');
    await page.waitForTimeout(5000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    await page.waitForTimeout(1000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    const downloadPromise2 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download2 = await downloadPromise2;
    await download2.saveAs('Output/TS13-Function/GSD-17/02.Export 15.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('20');
    await page.waitForTimeout(5000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    await page.waitForTimeout(1000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    const downloadPromise3 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download3 = await downloadPromise3;
    await download3.saveAs('Output/TS13-Function/GSD-17/03.Export 20.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('50');
    await page.waitForTimeout(5000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    await page.waitForTimeout(1000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    const downloadPromise4 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download4 = await downloadPromise4;
    await download4.saveAs('Output/TS13-Function/GSD-17/04.Export 50.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('100');
    await page.waitForTimeout(5000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    await page.waitForTimeout(1000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    const downloadPromise5 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download5 = await downloadPromise5;
    await download5.saveAs('Output/TS13-Function/GSD-17/05.Export 100.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('150');
    await page.waitForTimeout(5000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    await page.waitForTimeout(1000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    const downloadPromise6 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download6 = await downloadPromise6;
    await download6.saveAs('Output/TS13-Function/GSD-17/06.Export 150.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('200');
    await page.waitForTimeout(5000);
    await page.locator('.mat-checkbox-inner-container').first().click();
    await page.waitForTimeout(1000);
    await page.locator('.mat-checkbox-inner-container').first().click();
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




test('GSD-62 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'Schedule Submit' }).click();
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowLeft');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/01. 1 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/02. 2 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/03. 33 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/04. 4 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/05. 5 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/06. 6 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/07. 7 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/08. 8 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/09. 9 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/10. 10 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/11. 11 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/12. 12 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/13. 13 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/14. 14 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').press('ArrowRight');
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
    await page.getByText('Auto_GSD-68').click();
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
    await expect.soft(page.getByRole('cell', { name: 'Contract Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Stamp Duty Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duplicated Stamp Duty Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Paid Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'e-Document No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Surcharge Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Fine Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Actual Surcharge Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Previous Submit' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Entity Id' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Sender Role' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Form Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Select Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Type Code' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'UserId' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Effective Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Expire Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receive Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Send From Type' })).toBeVisible();
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
    await expect.soft(page.getByRole('cell', { name: 'Status' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Select Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Type Code' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Effective Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Expire Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Import Contract Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Send Form Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Filing No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Overdue flag' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'No. of Duplicated Contract' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred E-Document No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred Contract No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred Creation Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duty Amount OS4' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Action Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Stamp Duty Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duplicated Stamp Duty Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Paid Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Surcharge Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Fine Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Actual Surcharge Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Actual Fine Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Payer Tax ID' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Tax ID' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party First Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Last Name' })).toBeVisible();
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
    await expect.soft(page.getByRole('cell', { name: 'Email' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Product Code' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Credit Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Schedule Submit Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Submit Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Batch Id' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Form Submit No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'SD Payment Code' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Reference1' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Reference2' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Payment Due Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receipt No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receipt Date' })).toBeVisible();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-99/02. Transactions Details.png' });
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




