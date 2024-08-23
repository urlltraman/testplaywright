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
    await page.locator('input[name="email"]').fill('test.gamekittisak10@outlook.com');
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});


test('TC01 Company Notifications ', async ({ page }) => {
    //GSD-76
    await page.getByText('logout').click();
    await page.getByPlaceholder('Enter your email').fill('test.gamekittisak@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(500);
    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS15-Notifications/01. Company Noti/01. Default Notifications.png' });
    await page.waitForTimeout(1500);
    await page.locator('#mat-mdc-slide-toggle-1-button').click();
    await page.locator('#mat-mdc-slide-toggle-2-button').click();
    await page.locator('#mat-mdc-slide-toggle-3-button').click();
    await page.locator('#mat-mdc-slide-toggle-4-button').click();
    await page.locator('#mat-mdc-slide-toggle-5-button').click();
    await page.locator('#mat-mdc-slide-toggle-6-button').click();
    await page.locator('#mat-mdc-slide-toggle-7-button').click();
    await page.locator('#mat-mdc-slide-toggle-8-button').click();
    await page.locator('#mat-mdc-slide-toggle-9-button').click();
    await page.locator('#mat-mdc-slide-toggle-10-button').click();
    await page.getByLabel('Reminder set for one month').click();
    await page.getByLabel('Reminder set for two month').click();
    await page.getByLabel('Reminder set for three month').click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS15-Notifications/01. Company Noti/02. Change Notifications.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: /^error_outline$/ })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toHaveText('Confirm Saving Notification Settings');
    await expect.soft(page.getByText('CancelConfirm')).toBeVisible();
    await expect.soft(page.getByText('CancelConfirm')).toHaveText('CancelConfirm');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/01. Company Noti/03. Click Save.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS15-Notifications/01. Company Noti/04. Click Cancel.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: /^error_outline$/ })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toHaveText('Confirm Saving Notification Settings');
    await expect.soft(page.getByText('CancelConfirm')).toBeVisible();
    await expect.soft(page.getByText('CancelConfirm')).toHaveText('CancelConfirm');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS15-Notifications/01. Company Noti/05. Click Confirm.png' });
    await page.waitForTimeout(500);






});




test('Change Company Notifications to Default ', async ({ page }) => {

    await page.getByText('logout').click();
    await page.getByPlaceholder('Enter your email').fill('test.gamekittisak@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(500);
    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(1500);
    await page.locator('#mat-mdc-slide-toggle-1-button').click();
    await page.locator('#mat-mdc-slide-toggle-2-button').click();
    await page.locator('#mat-mdc-slide-toggle-3-button').click();
    await page.locator('#mat-mdc-slide-toggle-4-button').click();
    await page.locator('#mat-mdc-slide-toggle-5-button').click();
    await page.locator('#mat-mdc-slide-toggle-6-button').click();
    await page.locator('#mat-mdc-slide-toggle-7-button').click();
    await page.locator('#mat-mdc-slide-toggle-8-button').click();
    await page.locator('#mat-mdc-slide-toggle-9-button').click();
    await page.locator('#mat-mdc-slide-toggle-10-button').click();
    await page.getByLabel('Reminder set for one month').click();
    await page.getByLabel('Reminder set for two month').click();
    await page.getByLabel('Reminder set for three month').click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: /^error_outline$/ })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toHaveText('Confirm Saving Notification Settings');
    await expect.soft(page.getByText('CancelConfirm')).toBeVisible();
    await expect.soft(page.getByText('CancelConfirm')).toHaveText('CancelConfirm');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);






});




test('TC02 User Notifications', async ({ page }) => {
    //GSD-274
    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();

    await expect.soft(page.getByRole('heading', { name: 'Batch Notification:' })).toBeVisible();
    await expect.soft(page.getByText('Input Processing:')).toBeVisible();
    await expect.soft(page.getByText('Batch status changed:')).toBeVisible();
    await expect.soft(page.getByText('Batch overdue submit alert:')).toBeVisible();
    await expect.soft(page.getByText('Batch overdue payment alert:')).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Batch Activity:' })).toBeVisible();
    await expect.soft(page.getByText('Batch error alert:')).toBeVisible();
    await expect.soft(page.getByText('Batch approve alert:')).toBeVisible();
    await expect.soft(page.getByText('Batch reject alert:')).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'User Activity:' })).toBeVisible();
    await expect.soft(page.getByText('Password expiration:')).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Batch Notification:' })).toHaveText('Batch Notification:');

    await expect.soft(page.getByRole('heading', { name: 'Batch Notification:' })).toHaveText('Batch Notification:');
    await expect.soft(page.getByText('Input Processing:')).toHaveText('Input Processing:');
    await expect.soft(page.getByText('Batch status changed:')).toHaveText('Batch status changed:');
    await expect.soft(page.getByText('Batch overdue submit alert:')).toHaveText('Batch overdue submit alert:');
    await expect.soft(page.getByText('Batch overdue payment alert:')).toHaveText('Batch overdue payment alert:');
    await expect.soft(page.getByRole('heading', { name: 'Batch Activity:' })).toHaveText('Batch Activity:');
    await expect.soft(page.getByText('Batch error alert:')).toHaveText('Batch error alert:');
    await expect.soft(page.getByText('Batch approve alert:')).toHaveText('Batch approve alert:');
    await expect.soft(page.getByText('Batch reject alert:')).toHaveText('Batch reject alert:');
    await expect.soft(page.getByRole('heading', { name: 'User Activity:' })).toHaveText('User Activity:');
    await expect.soft(page.getByText('Password expiration:')).toHaveText('Password expiration:');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/02. User Noti/01. Default Notifications.png' });
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-3-button').click();
    await page.locator('#mat-mdc-slide-toggle-4-button').click();
    await page.locator('#mat-mdc-slide-toggle-5-button').click();
    await page.locator('#mat-mdc-slide-toggle-6-button').click();
    await page.locator('#mat-mdc-slide-toggle-7-button').click();
    await page.locator('#mat-mdc-slide-toggle-8-button').click();
    await page.locator('#mat-mdc-slide-toggle-9-button').click();
    await page.locator('#mat-mdc-slide-toggle-10-button').click();
    await page.locator('#mat-mdc-slide-toggle-11-button').click();
    await page.locator('#mat-mdc-slide-toggle-12-button').click();
    await page.locator('#mat-mdc-slide-toggle-13-button').click();
    await page.locator('#mat-mdc-slide-toggle-14-button').click();
    await page.locator('#mat-mdc-slide-toggle-15-button').click();
    await page.locator('#mat-mdc-slide-toggle-16-button').click();
    await page.locator('#mat-mdc-slide-toggle-17-button').click();
    await page.locator('#mat-mdc-slide-toggle-18-button').click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS15-Notifications/02. User Noti/02. Change Notifications.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: /^error_outline$/ })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toHaveText('Confirm Saving Notification Settings');
    await expect.soft(page.getByText('CancelConfirm')).toBeVisible();
    await expect.soft(page.getByText('CancelConfirm')).toHaveText('CancelConfirm');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/02. User Noti/03. Click Save.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS15-Notifications/02. User Noti/04. Click Cancel.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: /^error_outline$/ })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toHaveText('Confirm Saving Notification Settings');
    await expect.soft(page.getByText('CancelConfirm')).toBeVisible();
    await expect.soft(page.getByText('CancelConfirm')).toHaveText('CancelConfirm');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS15-Notifications/02. User Noti/05. Click Confirm.png' });
    await page.waitForTimeout(500);
});




test('Change User Notifications to Default', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();


    await expect.soft(page.getByRole('heading', { name: 'Batch Notification:' })).toBeVisible();
    await expect.soft(page.getByText('Input Processing:')).toBeVisible();
    await expect.soft(page.getByText('Batch status changed:')).toBeVisible();
    await expect.soft(page.getByText('Batch overdue submit alert:')).toBeVisible();
    await expect.soft(page.getByText('Batch overdue payment alert:')).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Batch Activity:' })).toBeVisible();
    await expect.soft(page.getByText('Batch error alert:')).toBeVisible();
    await expect.soft(page.getByText('Batch approve alert:')).toBeVisible();
    await expect.soft(page.getByText('Batch reject alert:')).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'User Activity:' })).toBeVisible();
    await expect.soft(page.getByText('Password expiration:')).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Batch Notification:' })).toHaveText('Batch Notification:');

    await expect.soft(page.getByRole('heading', { name: 'Batch Notification:' })).toHaveText('Batch Notification:');
    await expect.soft(page.getByText('Input Processing:')).toHaveText('Input Processing:');
    await expect.soft(page.getByText('Batch status changed:')).toHaveText('Batch status changed:');
    await expect.soft(page.getByText('Batch overdue submit alert:')).toHaveText('Batch overdue submit alert:');
    await expect.soft(page.getByText('Batch overdue payment alert:')).toHaveText('Batch overdue payment alert:');
    await expect.soft(page.getByRole('heading', { name: 'Batch Activity:' })).toHaveText('Batch Activity:');
    await expect.soft(page.getByText('Batch error alert:')).toHaveText('Batch error alert:');
    await expect.soft(page.getByText('Batch approve alert:')).toHaveText('Batch approve alert:');
    await expect.soft(page.getByText('Batch reject alert:')).toHaveText('Batch reject alert:');
    await expect.soft(page.getByRole('heading', { name: 'User Activity:' })).toHaveText('User Activity:');
    await expect.soft(page.getByText('Password expiration:')).toHaveText('Password expiration:');
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-3-button').click();
    await page.locator('#mat-mdc-slide-toggle-4-button').click();
    await page.locator('#mat-mdc-slide-toggle-5-button').click();
    await page.locator('#mat-mdc-slide-toggle-6-button').click();
    await page.locator('#mat-mdc-slide-toggle-7-button').click();
    await page.locator('#mat-mdc-slide-toggle-8-button').click();
    await page.locator('#mat-mdc-slide-toggle-9-button').click();
    await page.locator('#mat-mdc-slide-toggle-10-button').click();
    await page.locator('#mat-mdc-slide-toggle-11-button').click();
    await page.locator('#mat-mdc-slide-toggle-12-button').click();
    await page.locator('#mat-mdc-slide-toggle-13-button').click();
    await page.locator('#mat-mdc-slide-toggle-14-button').click();
    await page.locator('#mat-mdc-slide-toggle-15-button').click();
    await page.locator('#mat-mdc-slide-toggle-16-button').click();
    await page.locator('#mat-mdc-slide-toggle-17-button').click();
    await page.locator('#mat-mdc-slide-toggle-18-button').click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: /^error_outline$/ })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Confirm Saving Notification Settings' })).toHaveText('Confirm Saving Notification Settings');
    await expect.soft(page.getByText('CancelConfirm')).toBeVisible();
    await expect.soft(page.getByText('CancelConfirm')).toHaveText('CancelConfirm');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});











test('TC03 Input Processing : Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-3-button').click();
    await page.locator('#mat-mdc-slide-toggle-4-button').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/01. Input Processing/01. Settings.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});





test('TC03 Input Processing : Gestamp', async ({ page }) => {

    // Input Success XLSX
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Notifications/01. Input Processing/Auto_Input_Processing_XLSX.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_Input_Processing_XLSX' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/01. Input Processing/02. Case 1.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/01. Input Processing/03. Notifications.png' });
    await page.getByRole('link', { name: 'See More' }).click();
    await page.locator('#kt_body').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/01. Input Processing/04. All Notifications.png' });
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_Input_Processing_XLSX ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Input_Processing_XLSX  ' })).toBeHidden();
    await page.waitForTimeout(500);


});




test('TC03 Input Processing : Email', async ({ page }) => {


    await page.goto('https://outlook.live.com/');
    await page.getByLabel('Sign in to your account').click();
    await page.waitForTimeout(500);
    await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'No' }).click();
    await page.waitForTimeout(500);
    await page.getByText('Processing file:').first().click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/01. Input Processing/05. Email Notifications.png' });
    await page.waitForTimeout(500);


});








test('TC03 Input Processing : Close Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-3-button').click();
    await page.locator('#mat-mdc-slide-toggle-4-button').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});







test('TC03 Status Change : Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-5-button').click();
    await page.locator('#mat-mdc-slide-toggle-6-button').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/02. Status Change/01. Settings.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});





test('TC03 Status Change : Gestamp', async ({ page }) => {



    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Notifications/02. Status Change/Auto_Status_Change.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.getByText('Search').click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_Status_Change' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/01. Type Code 01/02.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(500);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/02. Status Change/03. Notifications.png' });
    await page.getByText('Search').click();
    await page.waitForTimeout(1500);
    await page.getByText('Auto_Status_Change').click();
    await page.waitForTimeout(1500);
    await page.getByText('Submit For Review').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(5000);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/02. Status Change/04. Notifications.png' });
    await page.getByText('Search').click();
    await page.getByText('Auto_Status_Change').click();
    await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(10000);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/02. Status Change/05. Notifications.png' });
    await page.getByText('Search').click();
    await page.getByText('Auto_Status_Change').click();
    await page.waitForTimeout(15000);
    await page.reload();
    await page.goto('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_Status_Change').click();
    await page.waitForTimeout(1800);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/02. Status Change/06. Notifications.png' });
    await page.goto('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Payment' }).getByRole('button').nth(3).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Status_Change  ' })).toBeHidden();
    await page.waitForTimeout(500);







});


















test('TC03 Status Change : Email', async ({ page }) => {


    await page.goto('https://outlook.live.com/');
    await page.getByLabel('Sign in to your account').click();
    await page.waitForTimeout(500);
    await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'No' }).click();
    await page.waitForTimeout(500);
    await page.getByText('status updated').first().click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/02. Status Change/07. Email Notifications.png' });
    await page.waitForTimeout(500);


});








test('TC03 Status Change : Close Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-5-button').click();
    await page.locator('#mat-mdc-slide-toggle-6-button').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});




test('TC03 Batch Error : Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-11-button').click();
    await page.locator('#mat-mdc-slide-toggle-12-button').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/01. Case1/01. Settings.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});





test('TC03 Batch Error C1 : Gestamp', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Notifications/03. Batch Error/Auto_Batch_Error_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Batch_Error_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/01. Case1/02. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/01. Case1/03. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Batch_Error_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/01. Case1/04. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/01. Case1/05. Notifications.png' });
    await page.getByRole('row', { name: 'Auto_Batch_Error_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Batch_Error_C1  ' })).toBeHidden();
    await page.waitForTimeout(500);


});




test('TC03 Batch Error C1 : Email', async ({ page }) => {


    await page.goto('https://outlook.live.com/');
    await page.getByLabel('Sign in to your account').click();
    await page.waitForTimeout(500);
    await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'No' }).click();
    await page.waitForTimeout(500);
    await page.getByText('input error alert').first().click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/01. Case1/06. Email Notifications.png' });
    await page.waitForTimeout(500);


});




test('TC03 Batch Error C2: Gestamp', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Notifications/03. Batch Error/Auto_Batch_Error_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Batch_Error_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/02. Case2/02. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/02. Case2/03. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Batch_Error_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/02. Case2/04. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/02. Case2/05. Notifications.png' });
    await page.getByRole('row', { name: 'Auto_Batch_Error_C2' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Batch_Error_C2 ' })).toBeHidden();
    await page.waitForTimeout(500);


});




test('TC03 Batch Error C2: Email', async ({ page }) => {


    await page.goto('https://outlook.live.com/');
    await page.getByLabel('Sign in to your account').click();
    await page.waitForTimeout(500);
    await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'No' }).click();
    await page.waitForTimeout(500);
    await page.getByText('input error alert').first().click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/02. Case2/06. Email Notifications.png' });
    await page.waitForTimeout(500);


});









test('TC03 Batch Error C3: Gestamp', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Notifications/03. Batch Error/Auto_Batch_Error_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Batch_Error_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/03. Case3/02. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo'  'FFssaw4001' is Exist. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/03. Case3/03. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Batch_Error_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo'  'FFssaw4001' is Exist. Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/03. Case3/04. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/03. Case3/05. Notifications.png' });
    await page.getByRole('row', { name: 'Auto_Batch_Error_C3' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Batch_Error_C3 ' })).toBeHidden();
    await page.waitForTimeout(500);


});




test('TC03 Batch Error C3: Email', async ({ page }) => {


    await page.goto('https://outlook.live.com/');
    await page.getByLabel('Sign in to your account').click();
    await page.waitForTimeout(500);
    await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'No' }).click();
    await page.waitForTimeout(500);
    await page.getByText('input error alert').first().click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/03. Case3/06. Email Notifications.png' });
    await page.waitForTimeout(500);


});





test('TC03 Batch Error C4: Gestamp', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Notifications/03. Batch Error/Auto_Batch_Error_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_Batch_Error_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/04. Case4/02. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("MessageInvalid input data format. ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/04. Case4/03. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_Batch_Error_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput ErrorInvalid input data format.");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/04. Case4/04. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('notifications').first().click();
    await page.getByText('Events').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/04. Case4/05. Notifications.png' });
    await page.getByRole('row', { name: 'Auto_Batch_Error_C4' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Batch_Error_C4 ' })).toBeHidden();
    await page.waitForTimeout(500);


});




test('TC03 Batch Error C4: Email', async ({ page }) => {


    await page.goto('https://outlook.live.com/');
    await page.getByLabel('Sign in to your account').click();
    await page.waitForTimeout(500);
    await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'No' }).click();
    await page.waitForTimeout(500);
    await page.getByText('input error alert').first().click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/03. Batch Error/04. Case4/06. Email Notifications.png' });
    await page.waitForTimeout(500);


});






test('TC03 Batch Error : Close Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-11-button').click();
    await page.locator('#mat-mdc-slide-toggle-12-button').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});








test('TC03 Batch Approve : Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-13-button').click();
    await page.locator('#mat-mdc-slide-toggle-14-button').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/04. Batch Approve/01. Settings.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});





test('TC03 Batch Approve : Gestamp', async ({ page }) => {



    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Notifications/04. Batch Approve/Auto_Batch_Approve.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.getByText('Search').click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_Batch_Approve' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/01. Type Code 01/02.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(500);
    await page.getByText('notifications').first().click();
    await page.getByText('Alerts').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/04. Batch Approve/03. Notifications.png' });
    await page.getByText('Search').click();
    await page.waitForTimeout(1500);
    await page.getByText('Auto_Batch_Approve').click();
    await page.waitForTimeout(1500);
    await page.getByText('Submit For Review').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(5000);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.getByText('notifications').first().click();
    await page.getByText('Alerts').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/04. Batch Approve/04. Notifications.png' });
    await page.getByText('Search').click();
    await page.getByText('Auto_Batch_Approve').click();
    await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(10000);
    await page.getByText('notifications').first().click();
    await page.getByText('Alerts').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/04. Batch Approve/05. Notifications.png' });
    await page.getByText('Search').click();
    await page.getByText('Auto_Batch_Approve').click();
    await page.waitForTimeout(15000);
    await page.reload();
    await page.goto('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_Batch_Approve').click();
    await page.waitForTimeout(1800);
    await page.getByText('notifications').first().click();
    await page.getByText('Alerts').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/04. Batch Approve/06. Notifications.png' });
    await page.goto('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Payment' }).getByRole('button').nth(3).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Batch_Approve  ' })).toBeHidden();
    await page.waitForTimeout(500);







});


















test('TC03 Batch Approve : Email', async ({ page }) => {


    await page.goto('https://outlook.live.com/');
    await page.getByLabel('Sign in to your account').click();
    await page.waitForTimeout(500);
    await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'No' }).click();
    await page.waitForTimeout(500);
    await page.getByText('approval alert').first().click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/04. Batch Approve/07. Email Notifications.png' });
    await page.waitForTimeout(500);


});








test('TC03 Batch Approve : Close Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-13-button').click();
    await page.locator('#mat-mdc-slide-toggle-14-button').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});



test('TC03 Batch Reject : Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-15-button').click();
    await page.locator('#mat-mdc-slide-toggle-16-button').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/05. Batch Reject/01. Settings.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});





test('TC03 Batch Reject : Gestamp', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Notifications/05. Batch Reject/Auto_Batch_Reject.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_Batch_Reject ').first().click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    await page.waitForTimeout(1500);
    await page.getByText('Auto_Batch_Reject ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/05. Batch Reject/02. Batch Reject.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Reject', exact: true }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Reject' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('notifications').first().click();
    await page.getByText('Alerts').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/05. Batch Reject/03. Notifications.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('row', { name: 'Auto_Batch_Reject' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_Batch_Reject  ' })).toBeHidden();
    await page.waitForTimeout(1000);


});


















test('TC03 Batch Reject : Email', async ({ page }) => {


    await page.goto('https://outlook.live.com/');
    await page.getByLabel('Sign in to your account').click();
    await page.waitForTimeout(500);
    await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'No' }).click();
    await page.waitForTimeout(500);
    await page.getByText('reject alert').first().click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS15-Notifications/03. Notifications/05. Batch Reject/07. Email Notifications.png' });
    await page.waitForTimeout(500);


});








test('TC03 Batch Reject : Close Settings', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personOutlook MailGinkgo Soft').click();
    await page.waitForTimeout(500);
    await page.locator('app-user-dropdown-inner').getByText('Outlook Mail').click();
    await page.getByRole('link', { name: 'Notifications' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Settings' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-15-button').click();
    await page.locator('#mat-mdc-slide-toggle-16-button').click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
});




// test('1Outlook', async ({ page }) => {


//     await page.goto('https://outlook.live.com/');
//     await page.getByLabel('Sign in to your account').click();
//     await page.waitForTimeout(500);
//     await page.getByTestId('i0116').fill('test.gamekittisak10@outlook.com');
//     await page.getByRole('button', { name: 'Next' }).click();
//     await page.waitForTimeout(500);
//     await page.getByPlaceholder('Password').fill('ZXcv.!2345');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.waitForTimeout(500);
//     await page.getByRole('button', { name: 'No' }).click();
    


// });
