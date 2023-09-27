// // @ts-check
// const { test, expect } = require('@playwright/test');

// test.beforeEach(async ({ page }) => {
//     // Runs before each test and signs in each page.

//     await page.goto('http://gestamp.ddns.net/gestamp/#/auth/login');
//     await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//     await page.locator('input[name="password"]').fill('P@ssw0rd');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.locator('div').filter({ hasText: /^file_download$/ }).first().click();
//     await page.waitForURL('http://gestamp.ddns.net/gestamp/#/downloads');
// });







const { test, expect } = require('@playwright/test');
test.use({ storageState: 'playwright/.auth/T1.json' });




test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.
    await page.goto('http://gestamp.ddns.net/gestamp/#/downloads');
});




test('TC01 Show Download ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Download/TC01 Show Download/01.Download.png', fullPage: true });

});




// test('TC02 Click Next And Previous Page ', async ({ page }) => {


//     await page.getByLabel('Next').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS08-Download/TC02 Log Audit Click Next And Previous Page/01.Click Next.png' });
//     await page.getByLabel('Previous').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS08-Download/TC02 Log Audit Click Next And Previous Page/02.Click Previous.png' });



// });





// test('TC03 Refresh ', async ({ page }) => {
//     await page.getByRole('link', { name: 'Batch ' }).click();
//     await page.waitForURL('http://gestamp.ddns.net/gestamp/#/batch');
//     await page.waitForTimeout(3000);
//     await page.getByPlaceholder('Status').click();
//     await page.getByRole('option', { name: 'Completed' }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(1000);
//     await page.reload();
//     await page.waitForTimeout(1000);
//     await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS08-Download/TC03 Refresh/01.Select Download.png' });
//     await page.locator('div').filter({ hasText: /^SearchReceipts$/ }).getByRole('button').nth(1).click();
//     await page.getByRole('button', { name: 'Go to Downloads' }).click();
//     await page.waitForTimeout(500);
//     await page.reload();
//     await page.waitForTimeout(1500);
//     let mask_locator = await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).getByRole('cell').nth(2);
//     await page.screenshot({ path: 'Output/TS08-Download/TC03 Refresh/02.Before Refresh.png', mask: [mask_locator], maskColor: '#00FF00' });
//     await page.getByRole('button', { name: 'Refresh' }).click();
//     const downloadPromiseA = page.waitForEvent('download');
//     await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
//     const downloadA = await downloadPromiseA;
//     // Save downloaded file somewhere
//     await downloadA.saveAs('Output/TS08-Download/TC03 Refresh/04.Download Receipts.rar');
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS08-Download/TC03 Refresh/03.After Refresh.png', mask: [mask_locator], maskColor: '#00FF00' });


// });