// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/paperstamp');
});



test('TC01 Paper Stamp Duty ', async ({ page }) => {
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/01.Paper Stamp Duty.png' });
    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '20' }).first().click();
    await page.waitForTimeout(800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/02.Rows per page 20.png' });
    await page.locator('div').filter({ hasText: /^20$/ }).nth(2).click();
    await page.getByRole('option', { name: '50' }).click();
    await page.waitForTimeout(800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/03.Rows per page 50.png' });
    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '100' }).click();
    await page.waitForTimeout(800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/04.Rows per page 100.png' });
    await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
    await page.getByRole('option', { name: '200' }).click();
    await page.waitForTimeout(800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/05.Rows per page 200.png' });

});


test('TC02 Search Data Version ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '20' }).first().click();
    await page.getByLabel('Latest').click();
    await page.getByRole('option', { name: 'Latest' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/01.Search Data Version Lastest.png', fullPage: true });
    await page.getByLabel('Latest').click();
    await page.getByRole('option', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/02.Search Data Version All.png', fullPage: true });

});


test('TC02 Search Uploaded Date From ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '20' }).first().click();
    await page.getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('12 July 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Search Uploaded Date From.png', fullPage: true });


});


test('TC02 Search Uploaded Date To ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '20' }).first().click();
    await page.getByLabel('Open calendar').nth(1).click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('12 July 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Search Uploaded Date To.png', fullPage: true });


});




test('TC02 Search Contract No ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '20' }).first().click();
    await page.locator('#mat-input-4').fill('2269639948');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/05.Search Contract No.png', fullPage: true });

});


test('TC02 Search Full  ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '20' }).first().click();
    await page.getByLabel('Latest').click();
    await page.getByRole('option', { name: 'Latest' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('1 July 2023', { exact: true }).click();
    await page.getByLabel('Open calendar').nth(1).click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('31 July 2023', { exact: true }).click();
    await page.locator('#mat-input-4').fill('21000000');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/06.Search Full.png', fullPage: true });

});



test('TC02 Search No Input ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '20' }).first().click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/07.Search No Input.png', fullPage: true });

});





test('TC03 Click Next And Previous Page  ', async ({ page }) => {

    await page.getByRole('button', { name: 'Search' }).click();
    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '20' }).first().click();
    await page.getByLabel('Next page').click();
    await page.getByLabel('Next page').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/01.20 Records Next Page.png' });
    await page.getByLabel('Previous page').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/02.20 Records Next Previous.png' });
    await page.locator('div').filter({ hasText: /^20$/ }).first().click();
    await page.getByRole('option', { name: '50' }).click();
    await page.getByLabel('Next page').click();
    await page.getByLabel('Next page').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/03.50 Records Next Page.png' });
    await page.getByLabel('Previous page').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/04.50 Records Next Previous.png' });
    await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
    await page.getByRole('option', { name: '100' }).click();
    await page.getByLabel('Next page').click();
    await page.getByLabel('Next page').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/05.100 Records Next Page.png' });
    await page.getByLabel('Previous page').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/06.100 Records Next Previous.png' });
    await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
    await page.getByRole('option', { name: '200' }).click();
    await page.getByLabel('Next page').click();
    await page.getByLabel('Next page').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/07.200 Records Next Page.png' });
    await page.getByLabel('Previous page').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/08.200 Records Next Previous.png' });

});



test('TC05 Download Template ', async ({ page }) => {



    const downloadPromise = page.waitForEvent('download');
    await page.getByText('TEMPLATE').click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Download/TS04-Paper Stamp Duty/PaperStampTemplate.xlsx');
    



});
