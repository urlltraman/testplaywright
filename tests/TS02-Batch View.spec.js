// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.

  await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

});



test('TC01 Batch View ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/01.Batch View.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '50' }).click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/02.Rows per page 50.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '100' }).click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/03.Rows per page 100.png' });
  await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
  await page.getByRole('option', { name: '200' }).click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/04.Rows per page 200.png' });
});


test('TC02 Search Status : All Status  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'All Status' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/01.All Status.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/04.Date From And To.png' });

  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/05.Invalid Date From And To.png' });

});




test('TC02 Search Status : Uploading  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Uploading' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/01.Uploading.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/04.Date From And To.png' });

  
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/05.Invalid Date From And To.png' });


});





test('TC02 Search Status : Input Error  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Input Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/01.Input Error.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/04.Date From And To.png' });



  
  
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/05.Invalid Date From And To.png' });


});


test('TC02 Search Status : Submit Error  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submit Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/01.Submit Error.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/04.Date From And To.png' });


  
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/05.Invalid Date From And To.png' });


});



test('TC02 Search Status : Filing Error  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Filing Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/01.Filing Error.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/04.Date From And To.png' });


  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/05.Invalid Date From And To.png' });




});



test('TC02 Search Status : Payment Error  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Payment Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/01.Payment Errors.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/04.Date From And To.png' });


  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/05.Invalid Date From And To.png' });




});




test('TC02 Search Status : Receipt Error  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Receipt Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/01.Receipt Error.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/04.Date From And To.png' });


  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/05.Invalid Date From And To.png' });




});




test('TC02 Search Status : Preparing  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Preparing' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/01.Preparing.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/04.Date From And To.png' });


  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/05.Invalid Date From And To.png' });




});




test('TC02 Search Status : Rejected  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/01.Rejected.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/04.Date From And To.png' });


  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/05.Invalid Date From And To.png' });





});



test('TC02 Search Status : Reviewing  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Reviewing' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/01.Reviewing.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/04.Date From And To.png' });


  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/05.Invalid Date From And To.png' });





});




test('TC02 Search Status : Submitted  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submitted' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/01.Submitted.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/04.Date From And To.png' });

  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/05.Invalid Date From And To.png' });





});




test('TC02 Search Status : Payment  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Payment', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/01.Payment.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/04.Date From And To.png' });

  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/05.Invalid Date From And To.png' });

});




test('TC02 Search Status : Completed  ', async ({ page }) => {


  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/01.Completed.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/02.Date From.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/03.Date To.png' });
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/04.Date From And To.png' });

  await page.locator('div').filter({ hasText: /^Uploaded Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Uploaded Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2030').click();
  await page.getByLabel('July 2030').click();
  await page.getByLabel('31 July 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/05.Invalid Date From And To.png' });

});



test('TC03 Click Next And Previous Page  ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.getByLabel('Next page').click();
  await page.getByLabel('Next page').click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC03 Click Next And Previews Page/01.Click Next Page.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '100' }).click();
  await page.getByLabel('Previous page').click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC03 Click Next And Previews Page/02.Click Previous Page.png'  });

});



// test('TC04 Create Batch  ', async ({ page }) => {
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_1_Record.xlsx');
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.getByLabel('Upload Success').click();
//   await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.reload();
//   await page.waitForTimeout(1500);
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/01.Upload 1 Record.png' });
//   await page.getByRole('cell', { name: 'Auto_Type1_1_Record' }).click();
//   await page.waitForTimeout(1500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/02.1 Record Details.png', fullPage: true });
//   await page.getByRole('link', { name: 'Batch View' }).click();
//   await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(1).click();
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   await page.waitForTimeout(1000);
//   // Upload Many Records
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Many_Record.xlsx');
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.getByLabel('Upload Success').click();
//   await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.reload();
//   await page.waitForTimeout(1500);
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/03.Upload Many Record.png' });
//   await page.getByRole('cell', { name: 'Auto_Type1_Many_Record' }).click();
//   await page.waitForTimeout(1500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/04.Many Record Details.png', fullPage: true });
//   await page.getByRole('link', { name: 'Batch View' }).click();
//   await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(2).click();
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   await page.waitForTimeout(1000);
// });






// test('TC05 Edit Batch  ', async ({ page }) => {
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Edit.xlsx');
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.getByLabel('Upload Success').click();
//   await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.reload();
//   await page.waitForTimeout(1500);
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.getByRole('cell', { name: 'Auto_Type1_Edit' }).click();

//   await page.getByRole('button', { name: 'Edit' }).click();
//   await page.locator('[id="\\30 _33"]').click();
//   await page.getByRole('cell', { name: '\'ABC10003\' is Exist.' }).click();
//   await page.getByRole('cell', { name: '\'ABC10003\' is Exist.' }).click();
//   await page.locator('[id="\\30 _33"]').fill('ZXCV1234');
//   await page.getByRole('button', { name: 'Validate' }).click();
// });