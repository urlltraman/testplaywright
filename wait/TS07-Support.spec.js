// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('https://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();
    await page.getByRole('link', { name: 'Support' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/support');
});




// const { test, expect } = require('@playwright/test');
// test.use({ storageState: 'playwright/.auth/T1.json' });




// test.beforeEach(async ({ page }) => {
//     // Runs before each test and signs in each page.
//     await page.goto('https://gestamp.ddns.net/gestamp/support');
// });




test('TC01 Show Supprot ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS07-Support/TC01 Show Supprot/01.Supprot.png', fullPage: true });
    await page.getByRole('button', { name: 'Search' }).click();
    await page.locator('select').selectOption('10');
    await page.waitForTimeout(500);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS07-Support/TC01 Show Supprot/02.10 Rows Per Page.png' });
    await page.locator('select').selectOption('15');
    await page.waitForTimeout(500);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS07-Support/TC01 Show Supprot/03.15 Rows Per Page.png' });
    await page.locator('select').selectOption('50');
    await page.waitForTimeout(500);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS07-Support/TC01 Show Supprot/04.50 Rows Per Page.png' });
    await page.locator('select').selectOption('100');
    await page.waitForTimeout(500);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS07-Support/TC01 Show Supprot/05.100 Rows Per Page.png' });
    await page.locator('select').selectOption('200');
    await page.waitForTimeout(500);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS07-Support/TC01 Show Supprot/06.200 Rows Per Page.png' });
    await page.waitForTimeout(500);





});



test('TC02 Audit Log Click Next And Previous Page ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByLabel('Next').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC02 Audit Log Click Next And Previous Page/01.Click Next.png' });
    await page.getByLabel('Previous').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC02 Audit Log Click Next And Previous Page/02.Click Previous.png' });
    await page.getByLabel('Last').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC02 Audit Log Click Next And Previous Page/03.Click To Last.png' });
    await page.getByLabel('First').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC02 Audit Log Click Next And Previous Page/04.Click To First.png' });


});


test('TC03 Search Audit Log Log Type ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/01.Log Type/01.None.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'Authentication' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/01.Log Type/02.Authen.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'Administration' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/01.Log Type/03.Admin.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'BatchService' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/01.Log Type/04.BatchService.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'Transaction' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/01.Log Type/05.Transaction.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'ProcessService' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/01.Log Type/06.ProcessService.png'});
    await page.locator('#mat-select-value-7').click();
    await page.getByRole('option', { name: 'WatcherService' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/01.Log Type/07.WatcherService.png'});


});





test('TC03 Search Audit Log Date From ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('1 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/02.Date Form/01.Date From Valid.png'});
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/02.Date Form/02.Date From InValid.png'});

});




test('TC03 Search Audit Log Date To ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('1 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/03.Date To/01.Date To Valid.png'});
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/03.Date To/02.Date To InValid.png'});

});



test('TC03 Search Audit Log Company ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.locator('#mat-select-value-9').click();
    await page.getByRole('option', { name: 'All' }).locator('span').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/04.Company/01.All Company.png'});
    await page.locator('#mat-select-value-9').click();
    await page.getByRole('option', { name: 'Ginkgo Soft Co., Ltd.', exact: true }).locator('span').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/04.Company/02.GGS Company.png'});
    await page.locator('#mat-select-value-9').click();
    await page.getByText('Test Company OrgTest').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/04.Company/03.TCO Company.png'});
    await page.locator('#mat-select-value-9').click();
    await page.getByText('GinkgoTest').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/04.Company/04.GGT Company.png'});
    await page.locator('#mat-select-value-9').click();
    await page.getByText('NATPHADA Co.Ltd').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/04.Company/05.NPD Company.png'});
    await page.locator('#mat-select-value-9').click();
    await page.getByText('shelby company limited').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/04.Company/06.SCL Company.png'});
    await page.locator('#mat-select-value-9').click();
    await page.getByText('Ginkgo Soft Co., Ltd. (Demo)').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/04.Company/07.GDM Company.png'});

});




test('TC03 Search Audit Log Batch ID ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.locator('#mat-input-4').fill('1');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/05.Batch ID/01.ID 1.png'});
    await page.locator('#mat-input-4').fill('147');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/05.Batch ID/02.ID 147.png'});    
    await page.locator('#mat-input-4').fill('987654321');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/05.Batch ID/03.ID 987654321.png'});
    await page.locator('#mat-input-4').fill('-100');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/05.Batch ID/04.ID -100.png'});


});




test('TC03 Search Audit Log Search ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.locator('#mat-input-5').fill('test.gamekittisak@gmail.com');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/06.Search/01.Search Email.png'});
    await page.locator('#mat-input-5').fill('Finish check payment');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/06.Search/02.Search check payment.png'});
    await page.locator('#mat-input-5').fill('Set permission');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/06.Search/03.Search Set permission.png'});
    await page.locator('#mat-input-5').fill('Login google');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS07-Support/TC03 Search Audit Log/06.Search/04.Search Login google.png'});
    
    
});








test('TC04 Input Log Click Next And Previous Page ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Input Log' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByLabel('Next').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC04 Input Log Click Next And Previous Page/01.Click Next.png' });
    await page.getByLabel('Previous').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC04 Input Log Click Next And Previous Page/02.Click Previous.png' });
    await page.getByLabel('Last').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC04 Input Log Click Next And Previous Page/03.Click To Last.png' });
    await page.getByLabel('First').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC04 Input Log Click Next And Previous Page/04.Click To First.png' });


});




test('TC05 Search Input Log Channel ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Input Log' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('channel').click();
    await page.getByRole('option', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/01.Channel/01.All.png'});
    await page.getByLabel('channel').click();
    await page.getByRole('option', { name: 'Upload' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/01.Channel/02.Upload.png'});
    await page.getByLabel('channel').click();
    await page.getByRole('option', { name: 'APIs' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/01.Channel/03.APIs.png'});
    await page.getByLabel('channel').click();
    await page.getByRole('option', { name: 'Watcher' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/01.Channel/04.Watcher.png'});
    


});

test('TC05 Search Input Log Date From ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Input Log' }).click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('1 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/02.Date Form/01.Date From Valid.png'});
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/02.Date Form/02.Date From InValid.png'});

});





test('TC05 Search Input Log Date To ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Input Log' }).click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('15 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/03.Date To/01.Date To Valid.png'});
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/03.Date To/02.Date To InValid.png'});

});



test('TC05 Search Input Log Company ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Input Log' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-select-value-13').click();
    await page.getByRole('option', { name: 'All' }).locator('span').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/04.Company/01.All Company.png'});
    await page.locator('#mat-select-value-13').click();
    await page.getByRole('option', { name: 'Ginkgo Soft Co., Ltd.', exact: true }).locator('span').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/04.Company/02.GGS Company.png'});
    await page.locator('#mat-select-value-13').click();
    await page.getByText('Test Company OrgTest').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/04.Company/03.TCO Company.png'});
    await page.locator('#mat-select-value-13').click();
    await page.getByText('GinkgoTest').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/04.Company/04.GGT Company.png'});
    await page.locator('#mat-select-value-13').click();
    await page.getByText('NATPHADA Co.Ltd').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/04.Company/05.NPD Company.png'});
    await page.locator('#mat-select-value-13').click();
    await page.getByText('shelby company limited').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/04.Company/06.SCL Company.png'});
    await page.locator('#mat-select-value-13').click();
    await page.getByText('Ginkgo Soft Co., Ltd. (Demo)').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/04.Company/07.GDM Company.png'});

});



test('TC05 Search Input Log Search ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Input Log' }).click();
    await page.waitForTimeout(500);
    await page.getByLabel('Search').first().fill('test.gamekittisak@gmail.com');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/05.Search/01.Search Email.png'});
    await page.getByLabel('Search').first().fill('GinkgoTest');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/05.Search/02.Search Company.png'});
    await page.getByLabel('Search').first().fill('Auto');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC05 Search Input Log/05.Search/03.Search Files Name.png'});
});












// test('TC06 Submit Log Click Next And Previous Page ', async ({ page }) => {
//     await page.waitForTimeout(1000);
//     await page.getByRole('tab', { name: 'Submit Log' }).click();
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Search' }).first().click();
//     await page.getByLabel('Next').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC06 Submit Log Click Next And Previous Page/01.Click Next.png' });
//     await page.getByLabel('Previous').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC06 Submit Log Click Next And Previous Page/02.Click Previous.png' });
//     await page.getByLabel('Last').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC06 Submit Log Click Next And Previous Page/03.Click To Last.png' });
//     await page.getByLabel('First').click();
//     await page.waitForTimeout(1500);
//     await page.locator('.p-10').hover();
//     await page.screenshot({ path: 'Output/TS07-Support/TC06 Submit Log Click Next And Previous Page/04.Click To First.png' });


// });





test('TC07 Search Submit Log Channel ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Submit Log' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#mat-select-value-15').click();
    await page.getByRole('option', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/01.Channel/01.All.png'});
    await page.locator('#mat-select-value-15').click();
    await page.getByRole('option', { name: 'Scheduled Submit' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/01.Channel/02.Scheduled Submit.png'});
    await page.locator('#mat-select-value-15').click();
    await page.getByRole('option', { name: 'Manual Submit' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/01.Channel/03.Manual Submit.png'});


});








test('TC07 Search Submit Log Date From ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Submit Log' }).click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('1 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/02.Date Form/01.Date From Valid.png'});
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/02.Date Form/02.Date From InValid.png'});

});





test('TC07 Search Submit Log Date To ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Submit Log' }).click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('15 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/03.Date To/01.Date To Valid.png'});
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/03.Date To/02.Date To InValid.png'});

});





test('TC07 Search Submit Log Company', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Submit Log' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-select-value-17').click();
    await page.getByRole('option', { name: 'All' }).locator('span').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/04.Company/01.All Company.png'});
    await page.locator('#mat-select-value-17').click();
    await page.getByRole('option', { name: 'Ginkgo Soft Co., Ltd.', exact: true }).locator('span').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/04.Company/02.GGS Company.png'});
    await page.locator('#mat-select-value-17').click();
    await page.getByText('Test Company OrgTest').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/04.Company/03.TCO Company.png'});
    await page.locator('#mat-select-value-17').click();
    await page.getByText('GinkgoTest').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/04.Company/04.GGT Company.png'});
    await page.locator('#mat-select-value-17').click();
    await page.getByText('NATPHADA Co.Ltd').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/04.Company/05.NPD Company.png'});
    await page.locator('#mat-select-value-17').click();
    await page.getByText('shelby company limited').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/04.Company/06.SCL Company.png'});
    await page.locator('#mat-select-value-17').click();
    await page.getByText('Ginkgo Soft Co., Ltd. (Demo)').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/04.Company/07.GDM Company.png'});

});



test('TC07 Search Submit Log Batch ID ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Submit Log' }).click();
    await page.waitForTimeout(1500);
    await page.getByLabel('Batch ID').first().fill('1028');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/05.Batch ID/01.ID 1028.png'});
    await page.getByLabel('Batch ID').first().fill('999');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/05.Batch ID/02.ID 999.png'});    
    await page.getByLabel('Batch ID').first().fill('987654321');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/05.Batch ID/03.ID 987654321.png'});
    await page.getByLabel('Batch ID').first().fill('-100');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/05.Batch ID/04.ID -100.png'});


});


test('TC07 Search Submit Log Search ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Submit Log' }).click();
    await page.waitForTimeout(500);
    await page.getByLabel('Search').first().fill('I07000');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/06.Search/01.Search Status RD.png'});
    await page.getByLabel('Search').first().fill('E07276');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/06.Search/02.Search Status Error.png'});
    await page.getByLabel('Search').first().fill('ทำรายการเรียบร้อย');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/06.Search/03.Search Response Message.png'});
    await page.getByLabel('Search').first().fill('API00000000000088231');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/06.Search/04.Search API.png'});
    await page.getByLabel('Search').first().fill('271');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC07 Search Submit Log/06.Search/05.Search Type Code.png'});
    
    
});







// test('TC08 Emails Log Click Next And Previous Page ', async ({ page }) => {
//     await page.getByRole('tab', { name: 'Emails Log' }).click();
//     await page.getByRole('button', { name: 'Search' }).nth(1).click();
//     await page.getByLabel('Next').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC08 Emails Log Click Next And Previous Page/01.Click Next.png' });
//     await page.getByLabel('Previous').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC08 Emails Log Click Next And Previous Page/02.Click Previous.png' });
//     await page.getByLabel('Last').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC08 Emails Log Click Next And Previous Page/03.Click To Last.png' });
//     await page.getByLabel('First').click();
//     await page.locator('.p-10').hover();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC08 Emails Log Click Next And Previous Page/04.Click To First.png' });


// });





// test('TC09 Search Emails Log Date From ', async ({ page }) => {

//     await page.getByRole('tab', { name: 'Emails Log' }).click();
//     await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
//     await page.getByLabel('Choose month and year').click();
//     await page.getByLabel('2023').click();
//     await page.getByLabel('August 2023').click();
//     await page.getByLabel('1 August 2023', { exact: true }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/01.Date Form/01.Date From Valid.png'});
//     await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
//     await page.getByLabel('Choose month and year').click();
//     await page.getByLabel('2033').click();
//     await page.getByLabel('August 2033').click();
//     await page.getByLabel('12 August 2033', { exact: true }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/01.Date Form/02.Date From InValid.png'});

// });





// test('TC09 Search Emails Log Date To ', async ({ page }) => {
//     await page.getByRole('tab', { name: 'Emails Log' }).click();
//     await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
//     await page.getByLabel('Choose month and year').click();
//     await page.getByLabel('2023').click();
//     await page.getByLabel('August 2023').click();
//     await page.getByLabel('1 August 2023', { exact: true }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/02.Date To/01.Date To Valid.png'});
//     await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
//     await page.getByLabel('Choose month and year').click();
//     await page.getByLabel('2033').click();
//     await page.getByLabel('August 2033').click();
//     await page.getByLabel('12 August 2033', { exact: true }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/02.Date To/02.Date To InValid.png'});

// });



// test('TC09 Search Emails Log Batch ID ', async ({ page }) => {
//     await page.getByRole('tab', { name: 'Emails Log' }).click();
//     await page.waitForTimeout(500);
//     await page.getByLabel('Batch Id').first().fill('1');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/03.Batch ID/01.ID 1.png'});
//     await page.getByLabel('Batch Id').first().fill('147');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/03.Batch ID/02.ID 147.png'});    
//     await page.getByLabel('Batch Id').first().fill('987654321');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/03.Batch ID/03.ID 987654321.png'});
//     await page.getByLabel('Batch Id').first().fill('-100');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/03.Batch ID/04.ID -100.png'});


// });




// test('TC09 Search Emails Log Search ', async ({ page }) => {
//     await page.getByRole('tab', { name: 'Emails Log' }).click();
//     await page.getByLabel('Search').fill('test.gamekittisak@gmail.com');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/04.Search/01.Search Email.png'});
//     await page.getByLabel('Search').fill('Finish check payment');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/04.Search/02.Search check payment.png'});
//     await page.getByLabel('Search').fill('Set permission');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/04.Search/03.Search Set permission.png'});
//     await page.getByLabel('search').fill('Login google');
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS07-Support/TC09 Search Emails Log/04.Search/04.Search Login google.png'});
// });





test('TC10 Event Log  Click Next And Previous Page ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Event Log' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByLabel('Next').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS07-Support/TC10 Event Log  Click Next And Previous Page/01.Click Next.png' });
    await page.getByLabel('Previous').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS07-Support/TC10 Event Log  Click Next And Previous Page/02.Click Previous.png' });
    await page.getByLabel('Last').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS07-Support/TC10 Event Log  Click Next And Previous Page/03.Click To Last.png' });
    await page.getByLabel('First').click();
    await page.waitForTimeout(1500);
    await page.locator('.p-10').hover();
    await page.screenshot({ path: 'Output/TS07-Support/TC10 Event Log  Click Next And Previous Page/04.Click To First.png' });


});








test('TC11 Search Event Log Log Type ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Event Log' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#mat-select-value-19').click();
    await page.getByRole('option', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/01.Log Type/01.All.png'});
    await page.locator('#mat-select-value-19').click();
    await page.getByRole('option', { name: 'INFO' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/01.Log Type/02.Info.png'});
    await page.locator('#mat-select-value-19').click();
    await page.getByRole('option', { name: 'DEBUG' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/01.Log Type/03.Debug.png'});
    await page.locator('#mat-select-value-19').click();
    await page.getByRole('option', { name: 'ERROR' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/01.Log Type/04.Error.png'});
    


});




test('TC11 Search Event Log Date From ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Event Log' }).click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('1 August 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/02.Date Form/01.Date From Valid.png'});
    await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/02.Date Form/02.Date From InValid.png'});

});





test('TC11 Search Event Log Date To ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Event Log' }).click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('October 2023').click();
    await page.getByLabel('20 October 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/03.Date To/01.Date To Valid.png'});
    await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2033').click();
    await page.getByLabel('August 2033').click();
    await page.getByLabel('12 August 2033', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/03.Date To/02.Date To InValid.png'});

});




test('TC11 Search Event Log Search ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Event Log' }).click();
    await page.waitForTimeout(500);
    await page.getByLabel('Search').first().fill('process');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/01.Search Process.png'});
    await page.getByLabel('Search').first().fill('run');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/02.Search Run.png'});
    await page.getByLabel('Search').first().fill('checkPayment');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/03.Search Check Payment.png'});
    await page.getByLabel('Search').first().fill('init');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/04.Search Init.png'});
    await page.getByLabel('Search').first().fill('token');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/05.Search Token.png'});
    
    
});
