// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByRole('link', { name: 'Support' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/support');
});




test('TC01 Show Supprot ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS07-Support/TC01 Show Supprot/01.Supprot.png', fullPage: true });

});



test('TC02 Log Audit Click Next And Previous Page ', async ({ page }) => {

    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByLabel('Next').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC02 Log Audit Click Next And Previous Page/01.Click Next.png' });
    await page.getByLabel('Previous').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC02 Log Audit Click Next And Previous Page/02.Click Previous.png' });
    await page.getByLabel('Last').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC02 Log Audit Click Next And Previous Page/03.Click To Last.png' });
    await page.getByLabel('First').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC02 Log Audit Click Next And Previous Page/04.Click To First.png' });


});


test('TC03 Search Log Audit Log Type ', async ({ page }) => {

    await page.getByRole('tab', { name: 'Log Audit' }).click();
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'None' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/01.Log Type/01.None.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'Authentication' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/01.Log Type/02.Authen.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'Administration' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/01.Log Type/03.Admin.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'BatchService' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/01.Log Type/04.BatchService.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'Transaction' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/01.Log Type/05.Transaction.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'ProcessService' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/01.Log Type/06.ProcessService.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'WatcherService' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/01.Log Type/07.WatcherService.png'});


});





test('TC03 Search Log Audit Date From ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('1 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/02.Date Form/01.Date From Valid.png'});
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/02.Date Form/02.Date From InValid.png'});

});




test('TC03 Search Log Audit Date To ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('1 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/03.Date To/01.Date To Valid.png'});
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/03.Date To/02.Date To InValid.png'});

});




test('TC03 Search Log Audit Batch ID ', async ({ page }) => {

    await page.locator('#mat-input-4').fill('1');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/04.Batch ID/01.ID 1.png'});
    await page.locator('#mat-input-4').fill('147');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/04.Batch ID/02.ID 147.png'});    
    await page.locator('#mat-input-4').fill('987654321');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/04.Batch ID/03.ID 987654321.png'});
    await page.locator('#mat-input-4').fill('-100');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/04.Batch ID/04.ID -100.png'});


});




test('TC03 Search Log Audit Search ', async ({ page }) => {

    await page.locator('#mat-input-5').fill('test.gamekittisak@gmail.com');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/05.Search/01.Search Email.png'});
    await page.locator('#mat-input-5').fill('Finish check payment');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/05.Search/02.Search check payment.png'});
    await page.locator('#mat-input-5').fill('Set permission');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/05.Search/03.Search Set permission.png'});
    await page.locator('#mat-input-5').fill('Login google');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Log Audit/05.Search/04.Search Login google.png'});
    
    
});







// test('TC04 Log Emails Click Next And Previous Page ', async ({ page }) => {
//     await page.getByRole('tab', { name: 'Log Emails' }).click();
//     await page.getByRole('button', { name: 'Search' }).nth(1).click();
//     await page.getByLabel('Next').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC04 Log Emails Click Next And Previous Page/01.Click Next.png' });
//     await page.getByLabel('Previous').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC04 Log Emails Click Next And Previous Page/02.Click Previous.png' });
//     await page.getByLabel('Last').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC04 Log Emails Click Next And Previous Page/03.Click To Last.png' });
//     await page.getByLabel('First').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC04 Log Emails Click Next And Previous Page/04.Click To First.png' });


// });





// test('TC05 Search Log Emails Date From ', async ({ page }) => {

//     await page.getByRole('tab', { name: 'Log Emails' }).click();
//     await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
//     await page.getByLabel('Choose month and year').click();
//     await page.getByLabel('2023').click();
//     await page.getByLabel('August 2023').click();
//     await page.getByLabel('1 August 2023', { exact: true }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/01.Date Form/01.Date From Valid.png'});
//     await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
//     await page.getByLabel('Choose month and year').click();
//     await page.getByLabel('2033').click();
//     await page.getByLabel('August 2033').click();
//     await page.getByLabel('12 August 2033', { exact: true }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/01.Date Form/02.Date From InValid.png'});

// });





// test('TC05 Search Log Audit Date To ', async ({ page }) => {
//     await page.getByRole('tab', { name: 'Log Emails' }).click();
//     await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
//     await page.getByLabel('Choose month and year').click();
//     await page.getByLabel('2023').click();
//     await page.getByLabel('August 2023').click();
//     await page.getByLabel('1 August 2023', { exact: true }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/02.Date To/01.Date To Valid.png'});
//     await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
//     await page.getByLabel('Choose month and year').click();
//     await page.getByLabel('2033').click();
//     await page.getByLabel('August 2033').click();
//     await page.getByLabel('12 August 2033', { exact: true }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/02.Date To/02.Date To InValid.png'});

// });



// test('TC05 Search Log Emails Batch ID ', async ({ page }) => {
//     await page.getByRole('tab', { name: 'Log Emails' }).click();
//     await page.locator('#mat-input-8').fill('1');
//     await page.getByRole('button', { name: 'Search' }).nth(1).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/03.Batch ID/01.ID 1.png'});
//     await page.locator('#mat-input-8').fill('147');
//     await page.getByRole('button', { name: 'Search' }).nth(1).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/03.Batch ID/02.ID 147.png'});    
//     await page.locator('#mat-input-8').fill('987654321');
//     await page.getByRole('button', { name: 'Search' }).nth(1).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/03.Batch ID/03.ID 987654321.png'});
//     await page.locator('#mat-input-8').fill('-100');
//     await page.getByRole('button', { name: 'Search' }).nth(1).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/03.Batch ID/04.ID -100.png'});


// });




// test('TC05 Search Log Emails Search ', async ({ page }) => {

//     await page.locator('#mat-input-9').fill('test.gamekittisak@gmail.com');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/04.Search/01.Search Email.png'});
//     await page.locator('#mat-input-9').fill('Finish check payment');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/04.Search/02.Search check payment.png'});
//     await page.locator('#mat-input-9').fill('Set permission');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/04.Search/03.Search Set permission.png'});
//     await page.locator('#mat-input-9').fill('Login google');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Log Emails/04.Search/04.Search Login google.png'});
    
    
// });