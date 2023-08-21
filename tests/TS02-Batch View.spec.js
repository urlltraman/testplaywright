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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.reload();
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
  await page.screenshot({ path: 'Output/TS02-Batch View/TC03 Click Next And Previews Page/02.Click Previous Page.png' });

});



test('TC04 Create Batch  ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_1_Record.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForTimeout(1500);
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  let mask_locator = await page.getByRole('row', { name: 'Auto_1_Record' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/01.Upload 1 Record.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_1_Record ').first().click();
  await page.reload();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/02.1 Record Details.png', fullPage: true });
  await page.getByRole('link', { name: 'Batch View' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('row', { name: 'Auto_1_Record ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(500);
  // Upload Many Records
  await page.reload();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Many_Record.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForTimeout(1500);
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  let mask_locator1 = await page.getByRole('row', { name: 'Auto_Type1_Many_Record' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/03.Upload Many Record.png', mask: [mask_locator1], maskColor: '#00FF00' });
  await page.getByText('Auto_Type1_Many_Record ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/04.Many Record Details.png'});
  await page.getByRole('link', { name: 'Batch View' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('row', { name: 'Auto_Type1_Many_Record ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(500);



});






test('TC05 Edit Batch On Web  ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Edit.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Type1_Edit' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC05 Edit Batch/01.Batch Error.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_Type1_Edit ').first().click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await expect(page.getByRole('cell', { name: '\'ABC10003\' is Exist.' })).toHaveText("'ABC10003' is Exist.");
  await page.locator('[id="\\30 _1"]').fill('ZXCV1234');
  await page.getByRole('button', { name: 'Validate' }).click();
  await page.getByRole('link', { name: 'Batch View' }).click();
  await page.waitForTimeout(1500);
  await page.reload();
  await page.waitForTimeout(1500);
  let mask_locator1 = await page.getByRole('row', { name: 'Auto_Type1_Edit' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC05 Edit Batch/02.Edit Batch Success.png', mask: [mask_locator1], maskColor: '#00FF01' });
  await page.getByRole('row', { name: 'Auto_Type1_Edit ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(500);



});





test('TC05 Edit Batch Import Files  ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Edit.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Type1_Edit' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC05 Edit Batch/03.Batch Error.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_Type1_Edit ').first().click();
  await page.getByRole('button', { name: 'Import Fixes' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Import.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(1500);
  let mask_locator1 = await page.getByRole('row', { name: 'Auto_Type1_Import' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC05 Edit Batch/04.Import Batch Success.png', mask: [mask_locator1], maskColor: '#00FF01' });
  await page.waitForTimeout(1500);
  await page.getByRole('row', { name: 'Auto_Type1_Import ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(500);


});




test('TC06 Delete Batch  ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Delete.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Delete' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC06 Delete Batch/01.Select Batch Delete.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('row', { name: 'Auto_Delete' }).first().getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(500);
  await page.reload();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC06 Delete Batch/02.After Delete.png' });

});





test('TC07 Reject Batch  ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Reject.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Reject' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/01.Create Batch Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_Reject ').first().click();
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/02.Batch Details.png', fullPage: true });
  await page.getByRole('button', { name: 'Submit For Review' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/03.Click Confirm.png', fullPage: true });
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/04.After Confirm.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_Reject ').first().click();
  await page.getByRole('button', { name: 'Reject' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/05.Click Reject.png', fullPage: true });
  await page.getByRole('button', { name: 'Reject' }).click();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/06.After Reject.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('row', { name: 'Auto_Reject' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(500);



});


// test('TC08 Submit Batch  ', async ({ page }) => {
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_1_Record.xlsx');
//   await page.getByRole('button', { name: 'Upload' }).click();
// 
//   await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.reload();
//   await page.waitForTimeout(2500);
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   let mask_locator = await page.getByRole('row', { name: 'Auto_Type1_1_Record' }).getByRole('cell').first();
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/01.Create Batch Success.png', mask: [mask_locator], maskColor: '#00FF00' });
//   await page.getByRole('cell', { name: 'Auto_Type1_1_Record' }).first().click();
//   await page.waitForTimeout(2500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/02.Batch Details.png' });
//   await page.getByRole('button', { name: 'Submit For Review' }).click();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/03.Click Confirm.png' });
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.waitForTimeout(1500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/04.After Confirm.png', mask: [mask_locator], maskColor: '#00FF00' });
//   await page.getByRole('cell', { name: 'Auto_Type1_1_Record' }).first().click();
//   await page.getByRole('button', { name: 'Submit', exact: true }).click();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/05.Click Submit.png' });
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.waitForTimeout(4500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/06.After Submit.png', mask: [mask_locator], maskColor: '#00FF00' });

// });



// test('TC09 Schedule Submit Batch  ', async ({ page }) => {
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.locator('#file').setInputFiles('Data Files/test/Auto_ Schedule Submit.xlsx');
//   await page.getByRole('button', { name: 'Upload' }).click();
// 
//   await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.reload();
//   await page.waitForTimeout(2500);
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   let mask_locator = await page.getByRole('row', { name: 'Auto_ Schedule Submit' }).getByRole('cell').first();
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC09 Schedule Submit/01.Create Batch Success.png', mask: [mask_locator], maskColor: '#00FF00' });
//   await page.getByRole('cell', { name: 'Auto_ Schedule Submit' }).first().click();
//   await page.waitForTimeout(2500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC09 Schedule Submit/02.Batch Details.png' });
//   await page.getByRole('button', { name: 'Submit For Review' }).click();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC09 Schedule Submit/03.Click Confirm.png' });
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
//   await page.waitForTimeout(1500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC09 Schedule Submit/04.After Confirm.png', mask: [mask_locator], maskColor: '#00FF00' });
//   await page.getByRole('cell', { name: 'Auto_ Schedule Submit' }).first().click();
//   await page.getByRole('button', { name: 'Schedule Submit' }).click();
//   await page.waitForTimeout(1000);

// });



test('TC10 Export  ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Edit.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();

  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(2500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Type1_Edit' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC10 Export/01.Select Batch Export.png', mask: [mask_locator], maskColor: '#00FF00' });
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'Auto_Type1_Edit ' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS02-Batch View/TC10 Export/02.File Export.rar');
  await page.getByRole('row', { name: 'Auto_Type1_Edit ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(500);



});





test('TC11 Download QR Payin  ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Payment', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  const downloadPromise = page.waitForEvent('download');
  await page.locator('div').filter({ hasText: /^SearchQRPay-in$/ }).getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS02-Batch View/TC11 Download/01.QRCODE.rar');
  const downloadPromiseA = page.waitForEvent('download');
  await page.locator('div').filter({ hasText: /^SearchQRPay-in$/ }).getByRole('button').nth(2).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS02-Batch View/TC11 Download/02.Payin.rar');

});





test('TC11 Download Receipts ', async ({ page }) => {
  await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('div').filter({ hasText: /^SearchReceipts$/ }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).getByRole('button').nth(1).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS02-Batch View/TC11 Download/03.Receipts.rar');


});