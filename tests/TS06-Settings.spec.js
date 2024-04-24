
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Runs Uat

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.waitForURL('/settings/configuration');
});



// test.beforeEach(async ({ page }) => {
//     // Runs Dev

//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//     await page.locator('input[name="password"]').fill('P@ssw0rd');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     // await page.getByRole('button', { name: 'Accept' }).click();
//     await page.locator('a').filter({ hasText: 'settings' }).click();
//     await page.waitForURL('/settings/configuration');
// });






test('TC01 Show Settings ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC01 Show Settings/01.Default Page.png', fullPage: true });

});



test('TC02 Chang Batch Size ', async ({ page }) => {
    await page.getByRole('link', { name: 'Configuration' }).click();
    await page.getByRole('tab', { name: 'System Configuration' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox').fill('2222');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC02 Chang Batch Size /01.2222.png', fullPage: true });
    await page.waitForTimeout(1000);
    await page.getByRole('textbox').fill('10');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC02 Chang Batch Size /02.10.png', fullPage: true });
    await page.getByRole('textbox').fill('30303');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC02 Chang Batch Size /03.30303.png', fullPage: true });

});




test('TC03 Check Status Interval Filing ', async ({ page }) => {
    await page.getByRole('link', { name: 'Configuration' }).click();
    await page.getByRole('tab', { name: 'System Configuration' }).click();
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/01.Default Page.png', fullPage: true });
    await page.getByText('1Check Filing Status Frequency (Hour) *').click();
    await page.getByRole('option', { name: '1', exact: true }).locator('span').click();
    await page.getByText('1Check Filing Status Frequency (Hour) *').click();
    await page.getByText('2', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/02.Check Filing 2.png', fullPage: true });
    await page.getByText('2Check Filing Status Frequency (Hour) *').click();
    await page.getByText('3', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/03.Check Filing 3.png', fullPage: true });
    await page.getByText('3Check Filing Status Frequency (Hour) *').click();
    await page.getByRole('option', { name: '4', exact: true }).locator('span').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/04.Check Filing 4.png', fullPage: true });
    await page.getByText('4Check Filing Status Frequency (Hour) *').click();
    await page.getByRole('option', { name: '6' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/05.Check Filing 6.png', fullPage: true });
    await page.getByText('6Check Filing Status Frequency (Hour) *').click();
    await page.getByRole('option', { name: '12' }).locator('span').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/06.Check Filing 12.png', fullPage: true });
    await page.getByText('12Check Filing Status Frequency (Hour) *').click();
    await page.getByText('24', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/07.Check Filing 24.png', fullPage: true });


});




test('TC03 Check Status Interval Payment  ', async ({ page }) => {
    await page.getByRole('link', { name: 'Configuration' }).click();
    await page.getByRole('tab', { name: 'System Configuration' }).click();
    await page.getByText('1Check Payment Frequency (Hour) *').click();
    await page.getByRole('option', { name: '1', exact: true }).locator('span').click();
    await page.getByText('1Check Payment Frequency (Hour) *').click();
    await page.getByText('2', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/08.Check Payment  2.png', fullPage: true });
    await page.getByText('2Check Payment Frequency (Hour) *').click();
    await page.getByText('3', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/09.Check Payment  3.png', fullPage: true });
    await page.getByText('3Check Payment Frequency (Hour) *').click();
    await page.getByRole('option', { name: '4', exact: true }).locator('span').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/10.Check Payment  4.png', fullPage: true });
    await page.getByText('4Check Payment Frequency (Hour) *').click();
    await page.getByRole('option', { name: '6' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/11.Check Payment  6.png', fullPage: true });
    await page.getByText('6Check Payment Frequency (Hour) *').click();
    await page.getByRole('option', { name: '12' }).locator('span').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/12.Check Payment  12.png', fullPage: true });
    await page.getByText('12Check Payment Frequency (Hour) *').click();
    await page.getByText('24', { exact: true }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/13.Check Payment  24.png', fullPage: true });


});



test('TC03 Check Status Interval  ', async ({ page }) => {
    await page.getByRole('link', { name: 'Configuration' }).click();
    await page.getByRole('tab', { name: 'System Configuration' }).click();
    await page.getByText('1Check Filing Status Frequency (Hour) *').click();
    await page.getByRole('option', { name: '12' }).locator('span').click();
    await page.getByText('1Check Payment Frequency (Hour) *').click();
    await page.getByText('24', { exact: true }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC03 Check Status Interval/14.Check All.png', fullPage: true });


});





test('TC04 Permission  ', async ({ page }) => {
    await page.getByRole('link', { name: 'Permission' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC04 Permission/01.Default Page.png' });

});



test('TC05 Organization  ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    // await page.locator('#mat-tab-label-0-4').click();
    // await page.locator('#mat-tab-label-2-0').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC05 Organization/01.Default Page.png' });
    await page.getByRole('tab', { name: 'Company' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC05 Organization/02.Company.png' });
    await page.getByRole('tab', { name: 'Users' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC05 Organization/03.User.png' });

});






test('TC06 Mail Server  ', async ({ page }) => {

    await page.getByRole('link', { name: 'E-Mail' }).click();
    await page.getByRole('tab', { name: 'Mail Server' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC06 Mail Server/01.Default Page.png' });

});



test('TC07 Mail Scheduler  ', async ({ page }) => {

    await page.getByRole('link', { name: 'E-Mail' }).click();
    await page.getByRole('tab', { name: 'Mail Scheduler' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC07 Mail Scheduler /01.Default Page.png' });

});







test('TC08 Holiday  ', async ({ page }) => {
    await page.getByRole('link', { name: 'Holiday' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC08 Holiday/01.Default Page.png' });

});



test('TC09 Creation Organization General Information ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'General Information' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: 'General InformationWatcherResponse FilesOrganization Name English*Organization N' }).nth(3)).toBeVisible();
    await page.waitForTimeout(500);
    await page.locator('input[name="nameEng"]').click();
    await page.locator('input[name="nameTha"]').click();
    await page.locator('input[name="orgAbbr"]').click();
    await page.locator('input[name="nameEng"]').click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByText('Organization Name English is required')).toHaveText('Organization Name English is required');
    await page.waitForTimeout(500);
    await expect.soft(page.getByText('Organization Name Thai is required')).toHaveText('Organization Name Thai is required');
    await page.waitForTimeout(500);
    await expect.soft(page.getByText('Organization Abbreviation is required')).toHaveText('Organization Abbreviation is required');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/01. General Information Required.png' });
    await page.locator('input[name="nameEng"]').fill('Automate Test');
    await page.locator('input[name="nameTha"]').fill('ทดสอบอัตโนมัติ');
    await page.locator('input[name="orgAbbr"]').fill('AT');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/02. Input General Information.png' });

});





test('TC09 Creation Organization Watcher ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Watcher' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: 'General InformationWatcherResponse Files File Watcher' }).nth(3)).toBeVisible();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/03. Watcher.png' });
    await page.waitForTimeout(500);
    await page.locator('.mat-checkbox-inner-container').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/04. Watcher Details.png' });
    await page.waitForTimeout(1000);
    await page.locator('select[name="protocol"]').selectOption('FTP');
    await page.locator('select[name="protocol"]').selectOption('SFTP');
    await page.locator('select[name="encryption"]').selectOption('TLS/SSLIm');
    await page.locator('select[name="encryption"]').selectOption('TLS/SSLEx');
    await page.locator('input[name="hostname"]').fill('Test');
    await page.locator('input[name="port"]').fill('1234');
    await page.locator('input[name="username"]').fill('Auto');
    await page.locator('input[name="password"]').fill('Matedtest');
    await page.getByPlaceholder('Home Path').fill('/Auto/Test');
    await page.getByText('Keep Success Files').click();
    await page.getByPlaceholder('Enter success folder name').fill('/Auto/Success');
    await page.getByText('Enable Watcher PGP Encryption').click();
    await page.locator('#watcherPGPPassphase').fill('/key');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/05. Input Watcher.png', fullPage: true });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();


});




test('TC09 Creation Organization Response Files ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Response Files' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: 'General InformationWatcherResponse Files Send Response Files Enable Response PGP' }).nth(3)).toBeVisible();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/06. Response Files.png' });
    await page.getByText('Send Response Files').click();
    await page.getByText('Enable Response PGP Encryption').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/07. Response Files Details.png' });
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter response folder name').fill('/Auto/Response');
    await page.locator('#processPGPPassphase').fill('1234');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/08. Input Response Files.png' });


});







test('TC09 Creation Organization ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'General Information' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: 'General InformationWatcherResponse FilesOrganization Name English*Organization N' }).nth(3)).toBeVisible();
    await page.waitForTimeout(500);
    await page.locator('input[name="nameEng"]').fill('Automate Test');
    await page.locator('input[name="nameTha"]').fill('ทดสอบอัตโนมัติ');
    await page.locator('input[name="orgAbbr"]').fill('AT');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/09. Creation Organization.png' });
    await page.waitForTimeout(1500);


});




test('TC09 Delete Organization ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('row', { name: 'Automate Test ทดสอบอัตโนมัติ AT' }).getByRole('button').nth(1).click();
    await expect.soft(page.getByLabel('Confirm delete organization')).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/10. Click Cancel Delete Or.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Automate Test ทดสอบอัตโนมัติ AT' }).getByRole('button').nth(1).click();
    await expect.soft(page.getByLabel('Confirm delete organization')).toBeVisible();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500)
    await page.screenshot({ path: 'Output/TS06-Settings/TC09 Creation Organization/11. Click Confirm Delete Or.png' });
    await page.waitForTimeout(1500)



});





test('TC10 Creation Company General Information  ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('tab', { name: 'Company' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC10 Creation Company/01. All Company.png' });
    await page.getByText('AllOrganization').click();
    await page.waitForTimeout(1500);
    await page.getByRole('option', { name: 'Test Auto' }).locator('span').click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC10 Creation Company/02. Company Details.png' });
    await page.locator('input[name="nameEng"]').click();
    await page.locator('input[name="nameTha"]').click();
    await page.locator('input[name="taxId"]').click();
    await page.locator('input[name="abbrName"]').click();
    await page.locator('input[name="keyStoreKey"]').click();
    await page.locator('input[name="keyStorePass"]').click();
    await page.locator('input[name="userId"]').click();
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="nameEng"]').click();
    await page.waitForTimeout(1500);
    await expect.soft(page.locator('div').filter({ hasText: /^Name \(English\)\*Name is required$/ }).locator('div')).toHaveText('Name is required');
    await expect.soft(page.locator('div').filter({ hasText: /^Name \(Thai\)\*Name is required$/ }).locator('div')).toHaveText('Name is required');
    await expect.soft(page.getByText('Tax ID is required')).toHaveText('Tax ID is required');
    await expect.soft(page.getByText('Company Abbreviation is required')).toHaveText('Company Abbreviation is required');
    await expect.soft(page.getByText('keyStoreKey is required')).toHaveText('keyStoreKey is required');
    await expect.soft(page.getByText('keyStorePass is required')).toHaveText('keyStorePass is required');
    await expect.soft(page.getByText('UserId is required')).toHaveText('UserId is required');
    await expect.soft(page.getByText('Password is required')).toHaveText('Password is required');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC10 Creation Company/03. Company Required 1.png' });
    await page.waitForTimeout(1500);
    await page.getByText('Password is required').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC10 Creation Company/04. Company Required 2.png' });

});



test('TC10 Creation Company  ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('tab', { name: 'Company' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('AllOrganization').click();
    await page.getByRole('option', { name: 'Test Auto' }).locator('span').click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(1500);
    await page.locator('input[name="nameEng"]').fill('Playwright');
    await page.locator('input[name="nameTha"]').fill('นักเขียนบทละคร');
    await page.locator('input[name="taxId"]').fill('2536433718231');
    await page.locator('input[name="abbrName"]').fill('PW');
    await page.locator('input[name="keyStoreKey"]').fill('test');
    await page.locator('input[name="keyStorePass"]').fill('test');
    await page.locator('input[name="userId"]').fill('test');
    await page.locator('input[name="password"]').fill('test');
    await page.locator('#file').setInputFiles('Data Files/AutomateTest.p12');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC10 Creation Company/05. Input Company.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC10 Creation Company/06. Click Cancle Company.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(1500);
    await page.locator('input[name="nameEng"]').fill('Playwright');
    await page.locator('input[name="nameTha"]').fill('นักเขียนบทละคร');
    await page.locator('input[name="taxId"]').fill('2536433718231');
    await page.locator('input[name="abbrName"]').fill('PW');
    await page.locator('input[name="keyStoreKey"]').fill('test');
    await page.locator('input[name="keyStorePass"]').fill('test');
    await page.locator('input[name="userId"]').fill('test');
    await page.locator('input[name="password"]').fill('test');
    await page.locator('#file').setInputFiles('Data Files/AutomateTest.p12');
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS06-Settings/TC10 Creation Company/07. Click Add Company.png' });


});



test('TC11 Delete Company  ', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('tab', { name: 'Company' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('AllOrganization').click();
    await page.getByRole('option', { name: 'Test Auto' }).locator('span').click();
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Playwright นักเขียนบทละคร PW Test Auto ทดสอบ อัตโนมัติ 1 ACCOUNT INFO KEY' }).getByRole('button').nth(3).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC11 Delete Company/01. Click Cancel Delete.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('row', { name: 'Playwright นักเขียนบทละคร PW Test Auto ทดสอบ อัตโนมัติ 1 ACCOUNT INFO KEY' }).getByRole('button').nth(3).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS06-Settings/TC11 Delete Company/02. Click Confirm Delete.png' });
});



