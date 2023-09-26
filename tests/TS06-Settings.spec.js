// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/#/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByRole('link', { name: 'Settings' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/#/settings');
});




test('TC01 Show Settings ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC01 Show Settings/01.Default Page.png', fullPage: true });

});



test('TC02 Chang Batch Size ', async ({ page }) => {
    await page.getByRole('tab', { name: 'Configuration' }).click();
    await page.getByRole('textbox').fill('2222');
    await page.screenshot({ path: 'Output/TS06-Settings/TC02 Chang Batch Size /01.2222.png', fullPage: true });
    await page.getByRole('textbox').fill('10');
    await page.screenshot({ path: 'Output/TS06-Settings/TC02 Chang Batch Size /02.10.png', fullPage: true });
    await page.getByRole('textbox').fill('30303');
    await page.screenshot({ path: 'Output/TS06-Settings/TC02 Chang Batch Size /03.30303.png', fullPage: true });

});




test('TC03 Check Status Interval Filing ', async ({ page }) => {
    await page.getByRole('tab', { name: 'Configuration' }).click();
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/01.Default Page.png', fullPage: true });
    await page.locator('#mat-select-value-7').click();
    await page.getByText('2', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/02.Check Filing 2.png', fullPage: true });
    await page.locator('#mat-select-value-7').click();
    await page.getByText('3', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/03.Check Filing 3.png', fullPage: true });
    await page.locator('#mat-select-value-7').click();
    await page.getByText('4', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/04.Check Filing 4.png', fullPage: true });
    await page.locator('#mat-select-value-7').click();
    await page.getByText('6', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/05.Check Filing 6.png', fullPage: true });
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: '12' }).locator('span').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/06.Check Filing 12.png', fullPage: true });
    await page.locator('#mat-select-value-7').click();
    await page.getByText('24', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/07.Check Filing 24.png', fullPage: true });


});




test('TC03 Check Status Interval Payment  ', async ({ page }) => {
    await page.getByRole('tab', { name: 'Configuration' }).click();
    await page.locator('#mat-select-value-9').click();
    await page.getByText('2', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/08.Check Payment  2.png', fullPage: true });
    await page.locator('#mat-select-value-9').click();
    await page.getByText('3', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/09.Check Payment  3.png', fullPage: true });
    await page.locator('#mat-select-value-9').click();
    await page.getByText('4', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/10.Check Payment  4.png', fullPage: true });
    await page.locator('#mat-select-value-9').click();
    await page.getByText('6', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/11.Check Payment  6.png', fullPage: true });
    await page.locator('#mat-select-value-9').click();
    await page.getByRole('option', { name: '12' }).locator('span').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/12.Check Payment  12.png', fullPage: true });
    await page.locator('#mat-select-value-9').click();
    await page.getByText('24', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/13.Check Payment  24.png', fullPage: true });


});



test('TC03 Check Status Interval  ', async ({ page }) => {
    await page.getByRole('tab', { name: 'Configuration' }).click();
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: '12' }).locator('span').click();
    await page.locator('#mat-select-value-9').click();
    await page.getByText('24', { exact: true }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/14.Check All.png', fullPage: true });


});





test('TC04 Permission  ', async ({ page }) => {
    await page.getByRole('tab', { name: 'Permission' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC04 Permission/01.Default Page.png' });

});




test('TC05 Holiday  ', async ({ page }) => {
    await page.getByRole('tab', { name: 'Holiday' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC05 Holiday/01.Default Page.png' });

});





test('TC06 Mail Server  ', async ({ page }) => {
    await page.getByRole('tab', { name: 'E-Mail' }).click();
    await page.getByRole('tab', { name: 'Mail Server' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC06 Mail Server/01.Default Page.png' });

});



test('TC07 Mail Scheduler  ', async ({ page }) => {
    await page.getByRole('tab', { name: 'E-Mail' }).click();
    await page.getByRole('tab', { name: 'Mail Scheduler' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC07 Mail Scheduler /01.Default Page.png' });

});



test('TC08 Organization  ', async ({ page }) => {
    await page.locator('#mat-tab-label-0-4').click();
    await page.locator('#mat-tab-label-2-0').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC08 Organization/01.Default Page.png' });
    await page.getByRole('tab', { name: 'Company' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC08 Organization/02.Company.png' });
    await page.getByRole('tab', { name: 'Users' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC08 Organization/03.User.png' });

});



