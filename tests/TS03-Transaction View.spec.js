
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs Uat

  await page.goto('/login');
  await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
});



// test.beforeEach(async ({ page }) => {
//   // Runs Dev

//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//   await page.locator('input[name="password"]').fill('P@ssw0rd');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   // await page.getByRole('button', { name: 'Accept' }).click();
//   await page.getByRole('link', { name: 'Transaction ' }).click();
//   await page.waitForURL('/transactions');
// });





test('TC01 Transaction View ', async ({ page }) => {


  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('December').click();
  await page.getByLabel('1 December 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/01.Transaction View.png' });
  await page.locator('select').selectOption('10');
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/02.Rows per page 10.png' });
  await page.locator('select').selectOption('15');
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/03.Rows per page 15.png' });
  await page.locator('select').selectOption('20');
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/04.Rows per page 20.png' });
  await page.locator('select').selectOption('50');
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/05.Rows per page 50.png' });
  await page.locator('select').selectOption('100');
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/06.Rows per page 100.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('150');
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/07.Rows per page 150.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('200');
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/08.Rows per page 200.png' });
  await page.waitForTimeout(1000);
});




// test('TC02 Search Status : Uploading', async ({ page }) => {

//   // status
//   await page.getByRole('button', { name: 'Filter' }).click();
//   await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
//   await page.getByRole('menuitem', { name: 'Uploading' }).click();
//   await page.getByRole('button', { name: 'Search' }).first().click();
//   await page.waitForTimeout(10000);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/01.Search Uploading.png' });
//   await page.waitForTimeout(1000);

// });


// test('TC02 Search Status : Input Error', async ({ page }) => {

//   // status
//   await page.getByRole('button', { name: 'Filter' }).click();
//   await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
//   await page.getByRole('menuitem', { name: 'Input Error' }).click();
//     await page.getByRole('button', { name: 'Search' }).first().click();
//   await page.waitForTimeout(10000);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/02.Search Input Error.png' });
//   await page.waitForTimeout(1000);

// });





test('TC02 Search Status : Submit Error', async ({ page }) => {

  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/01.Search Submit Error.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Filing Error', async ({ page }) => {


  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Filing Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/02.Search Filing Error.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Payment Error', async ({ page }) => {

  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/03.Search Payment Error.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Status : Receipt Error', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/04.Search Receipt Error.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Status : Preparing', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Preparing' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/05.Search Preparing.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Rejected', async ({ page }) => {


  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/06.Search Rejected.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Status : Reviewing', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Reviewing' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/07.Search Reviewing.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Submitted', async ({ page }) => {

  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Submitted' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/08.Search Submitted.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Payment', async ({ page }) => {

  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Payment', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/09.Search Payment.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Completed', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Status/10.Search Completed.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Uploaded Date : Today', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Today' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/01.Today.png' });
  await page.waitForTimeout(1000);

});





test('TC02 Search Uploaded Date : This Week', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Week' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/02.This Week.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Uploaded Date : This Month', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/03.This Month.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Uploaded Date : Last 7 Days', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 7 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/04.7 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Uploaded Date : Last 15 Days', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 15 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/05.15 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Uploaded Date : Last 1 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 1 Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/06.1 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Uploaded Date : Last 2 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 2 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/07.2 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Uploaded Date : Last 3 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/08.3 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Uploaded Date : Last 6 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02. Upload Date/09.6 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Submit Date : Today', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'Today' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/01.Today.png' });
  await page.waitForTimeout(1000);

});





test('TC02 Search Submit Date : This Week', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Week' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/02.This Week.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Submit Date : This Month', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/03.This Month.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Submit Date : Last 7 Days', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 7 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/04.7 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Submit Date : Last 15 Days', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 15 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/05.15 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Submit Date : Last 1 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 1 Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/06.1 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Submit Date : Last 2 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 2 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/07.2 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Submit Date : Last 3 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/08.3 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Submit Date : Last 6 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03. Submit Date/09.6 M.png' });
  await page.waitForTimeout(1000);

});





test('TC02 Search Payment Date : Today', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'Today' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/01.Today.png' });
  await page.waitForTimeout(1000);

});





test('TC02 Search Payment Date : This Week', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Week' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/02.This Week.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Payment Date : This Month', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/03.This Month.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Payment Date : Last 7 Days', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 7 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/04.7 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Payment Date : Last 15 Days', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 15 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/05.15 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Payment Date : Last 1 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 1 Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/06.1 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Payment Date : Last 2 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 2 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/07.2 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Payment Date : Last 3 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/08.3 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Payment Date : Last 6 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04. Payment Date/09.6 M.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Receipt Date : Today', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'Today' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/01.Today.png' });
  await page.waitForTimeout(1000);

});





test('TC02 Search Receipt Date : This Week', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Week' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/02.This Week.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date : This Month', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/03.This Month.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date : Last 7 Days', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 7 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/04.7 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date : Last 15 Days', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 15 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/05.15 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date : Last 1 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 1 Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/06.1 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date : Last 2 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 2 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/07.2 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date : Last 3 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/08.3 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date : Last 6 Months', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05. Receipt Date/09.6 M.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Batch ID', async ({ page }) => {
  
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Batch ID' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Batch ID').fill('4313');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/06. Batch ID/01. Batch ID.png' });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: '2710000000000Auto50_27120240301' }).click();
  await expect.soft(page.getByText('E-Document No.2710000000000Auto50_27120240301')).toBeVisible();
  await expect.soft(page.getByText('E-Document No.2710000000000Auto50_27120240301')).toHaveText('E-Document No.2710000000000Auto50_27120240301');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/06. Batch ID/02. Batch Details.png' });
  await page.getByRole('button', { name: 'Close' }).click();
  await expect.soft(page.getByText('E-Document No.2710000000000Auto50_27120240301QRPay-inContract No.Auto45_21Create')).toBeHidden();
  await page.waitForTimeout(1000);



});



test('TC02 Search File Name', async ({ page }) => {

  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('File Name').fill('Auto');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07. File Name/01. File Name.png' });
  await page.waitForTimeout(1000);



});


test('TC02 Search Uploader', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Info' }).hover();
  await page.getByRole('menuitem', { name: 'Uploader' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Uploader').fill('prawprairat1');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08. Uploader/01. Uploader.png' });
  await page.waitForTimeout(1000);



});


test('TC02 Search Contract No', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Contract No' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Contract No').fill('TC7');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09. Contract No/01. Contract No.png' });
  await page.waitForTimeout(1000);



});

test('TC02 Search E-Document No', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'E-Document No' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('E-Document No').fill('00100TC');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/10. E-Document No/01. E-Document No.png' });
  await page.waitForTimeout(1000);



});



test('TC02 Search Form Submit No', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Form Submit No' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Form Submit No').fill('31');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11. Form Submit No/01. Form Submit No.png' });
  await page.waitForTimeout(1000);



});


test('TC02 Search SD Payment Code', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'SD Payment Code' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('SD Payment Code').fill('00316607240547866553');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/12. SD Payment Code/01. SD Payment Code.png' });
  await page.waitForTimeout(1000);



});

test('TC02 Search Receipt No', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt No' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Receipt No').fill('66100122710');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/13. Receipt No/01. Receipt No.png' });
  await page.waitForTimeout(1000);



});





test('TC02 Search Party Tax ID', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Party Tax ID' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Party Tax ID').fill('1721000011382');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/14. Party Tax ID/01. Party Tax ID.png' });
  await page.waitForTimeout(1000);



});


test('TC02 Search Party First Name', async ({ page }) => {

  await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
  await page.locator('label').filter({ hasText: 'Masking Sensitive Data' }).click();
  await page.waitForTimeout(1000);

  await page.reload();
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Party First Name' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Party First Name').fill('สมหมาย');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/15. Party First Name/01. Party First Name.png' });
  await page.waitForTimeout(1000);
  await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
  await page.locator('label').filter({ hasText: 'Masking Sensitive Data' }).click();
  await page.waitForTimeout(1000);
  await page.reload();


});


test('TC02 Search Party Last Name', async ({ page }) => {

  await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
  await page.locator('label').filter({ hasText: 'Masking Sensitive Data' }).click();
  await page.waitForTimeout(1000);

  await page.reload();
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Party Last Name' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Party Last Name').fill('ดั่งใจหวัง');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/16. Party Last Name/01. Party Last Name.png' });
  await page.waitForTimeout(1000);
  await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
  await page.locator('label').filter({ hasText: 'Masking Sensitive Data' }).click();
  await page.waitForTimeout(1000);
  await page.reload();


});

test('TC02 Sorting Tools ', async ({ page }) => {

  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Batch ID' }).click();
  await page.getByRole('menuitem', { name: 'Batch ID' }).hover();
  await page.getByRole('menuitem', { name: 'Ascending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17. Sorting Tools/01.Batch ID Ascending.png' });
  await page.getByRole('button', { name: 'Batch ID' }).click();
  await page.getByRole('menuitem', { name: 'Batch ID' }).hover();
  await page.getByRole('menuitem', { name: 'Descending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17. Sorting Tools/02.Batch ID Descending.png' });
  await page.getByRole('button', { name: 'Batch ID' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Ascending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17. Sorting Tools/03.Uploaded Date Ascending.png' });
  await page.getByRole('button', { name: 'Uploaded Date' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Descending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17. Sorting Tools/04.Uploaded Date Descending.png' });
  await page.getByRole('button', { name: 'Uploaded Date' }).click();
  await page.getByRole('menuitem', { name: 'Contract No' }).hover();
  await page.getByRole('menuitem', { name: 'Ascending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17. Sorting Tools/05.Contract No Ascending.png' });
  await page.getByRole('button', { name: 'Contract No' }).click();
  await page.getByRole('menuitem', { name: 'Contract No' }).hover();
  await page.getByRole('menuitem', { name: 'Descending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17. Sorting Tools/06.Contract No Descending.png' });



});



test('TC02 Search Type Code 1', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '1 : เช่าที่ดิน โรงเรือน สิ่งปลูกสร้างอย่างอื่น หรือแพ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/01. Type Code 1.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 2', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '2 : โอนใบหุ้น ใบหุ้นกู้ พันธบัตร ใบรับรองหนี้ฯ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/02. Type Code 2.png' });
  await page.waitForTimeout(1000);
 


});



test('TC02 Search Type Code 3', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '3 : เช่าซื้อทรัพย์สิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/03. Type Code 3.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 4', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '4 : จ้างทำของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/04. Type Code 4.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 5', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '5 : กู้ยืมเงิน หรือการตกลงให้เบิกเงินเกินบัญชีจากธนาคาร' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/05. Type Code 5.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 6', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '6 : กรมธรรม์ประกันภัย' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/06. Type Code 6.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 7', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '7 : ใบมอบอำนาจ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/07. Type Code 7.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 8', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '8 : ใบมอบฉันทะสำหรับให้ลงมติ ในที่ประชุมของบริษัท' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/08. Type Code 8.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 9.1', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '9.(1) : ตั๋วแลกเงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/09. Type Code 9.1.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 9.2', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '9.(2) : ตั๋วสัญญาใช้เงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/10. Type Code 9.2.png' });
  await page.waitForTimeout(1000);
 


});




test('TC02 Search Type Code 10', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '10 : บิลออฟเลดิง (ใบตราส่งสินค้า)' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/11. Type Code 10.png' });
  await page.waitForTimeout(1000);
 


});





test('TC02 Search Type Code 11.1', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '11.(1) : ใบหุ้น ใบหุ้นกู้หรือใบรับรองหนี้ฯ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/12. Type Code 11.1.png' });
  await page.waitForTimeout(1000);
 


});


test('TC02 Search Type Code 11.2', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '11.(2) : พันธบัตรของรัฐบาลใด ๆ ที่ขายในประเทศไทย' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/13. Type Code 11.2.png' });
  await page.waitForTimeout(1000);
 


});


test('TC02 Search Type Code 12', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '12 : เช็ค' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/14. Type Code 12.png' });
  await page.waitForTimeout(1000);
 


});


test('TC02 Search Type Code 13', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '13 : ใบรับฝากเงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/15. Type Code 13.png' });
  await page.waitForTimeout(1000);
 


});


test('TC02 Search Type Code 14', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '14 : เลตเตอร์ออฟเครดิต' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/16. Type Code 14.png' });
  await page.waitForTimeout(1000);
 


});


test('TC02 Search Type Code 15', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '15 : เช็คสำหรับผู้เดินทาง' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/17. Type Code 15.png' });
  await page.waitForTimeout(1000);
 


});


test('TC02 Search Type Code 16', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '16 : ใบรับของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/18. Type Code 16.png' });
  await page.waitForTimeout(1000);
 


});


test('TC02 Search Type Code 17', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '17 : ค้ำประกัน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/19. Type Code 17.png' });
  await page.waitForTimeout(1000);
 


});


test('TC02 Search Type Code 18', async ({ page }) => {

  
  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '18 : จำนำ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/20. Type Code 18.png' });
  await page.waitForTimeout(1000);
 


});



test('TC02 Search Type Code 19', async ({ page }) => {


  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '19 : ใบรับของคลังสินค้า' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/21. Type Code 19.png' });
  await page.waitForTimeout(1000);



});

test('TC02 Search Type Code 20', async ({ page }) => {


  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '20 : คำสั่งให้ส่งมอบของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/22. Type Code 20.png' });
  await page.waitForTimeout(1000);



});

test('TC02 Search Type Code 21', async ({ page }) => {


  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '21 : ตัวแทน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/23. Type Code 21.png' });
  await page.waitForTimeout(1000);



});

test('TC02 Search Type Code 23', async ({ page }) => {


  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '23 : คู่ฉบับหรือคู่ฉีกแห่งตราสาร' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/24. Type Code 23.png' });
  await page.waitForTimeout(1000);



});

test('TC02 Search Type Code 27.1', async ({ page }) => {


  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '27.(ก) : หนังสือสัญญาจัดตั้งห้างหุ้นส่วน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/25. Type Code 27.1.png' });
  await page.waitForTimeout(1000);



});

test('TC02 Search Type Code 27.2', async ({ page }) => {


  await page.waitForTimeout(1000);
  await page.goto('/transactions');
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Type Code' }).hover();
  await page.getByRole('menuitem', { name: '27.(ข) : หนังสือสัญญาที่แก้ไขสัญญาจัดตั้งห้างหุ้นส่วน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18. Type Code/26. Type Code 27.2.png' });
  await page.waitForTimeout(1000);



});





test('TC02 Search Creation Date : Today', async ({ page }) => {
  
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'Today' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/01.Today.png' });
  await page.waitForTimeout(1000);

});





test('TC02 Search Creation Date : This Week', async ({ page }) => {
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Week' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/02.This Week.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Creation Date : This Month', async ({ page }) => {
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'This Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/03.This Month.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Creation Date : Last 7 Days', async ({ page }) => {
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 7 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/04.7 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Creation Date : Last 15 Days', async ({ page }) => {
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 15 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/05.15 day.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Creation Date : Last 1 Months', async ({ page }) => {
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 1 Month' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/06.1 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Creation Date : Last 2 Months', async ({ page }) => {
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 2 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/07.2 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Creation Date : Last 3 Months', async ({ page }) => {
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/08.3 M.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Creation Date : Last 6 Months', async ({ page }) => {
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19. Creation Date/09.6 M.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Send Form Type : New Entry', async ({ page }) => {
  
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Send Form Type' }).hover();
  await page.getByRole('menuitem', { name: 'New Entry' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/20. Send Form Type/01. New Entry.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Send Form Type : Increase Limit', async ({ page }) => {
  
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Send Form Type' }).hover();
  await page.getByRole('menuitem', { name: 'Increase Limit' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/20. Send Form Type/02. Increase Limit.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Send Form Type : Additional', async ({ page }) => {
  
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Send Form Type' }).hover();
  await page.getByRole('menuitem', { name: 'Additional' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/20. Send Form Type/03. Additional.png' });
  await page.waitForTimeout(1000);

});






test('TC03 Click Next And Previous Page  ', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Payment', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.locator('select').selectOption('10');
  await page.getByLabel('Next').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/01.10 Records Next Page.png' });
  await page.getByLabel('Previous').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/02.10 Records Next Previous.png' });
  await page.waitForTimeout(1800);
  await page.locator('select').selectOption('15');
  await page.getByLabel('Next').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/03.15 Records Next Page.png' });
  await page.getByLabel('Previous').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/04.15 Records Next Previous.png' });
  await page.waitForTimeout(1800);
  await page.locator('select').selectOption('20');
  await page.getByLabel('Next').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/05.20 Records Next Page.png' });
  await page.getByLabel('Previous').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/06.20 Records Next Previous.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('50');
  await page.getByLabel('Next').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/07.50 Records Next Page.png' });
  await page.getByLabel('Previous').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/08.50 Records Next Previous.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('100');
  await page.getByLabel('Next').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/09.100 Records Next Page.png' });
  await page.getByLabel('Previous').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/10.100 Records Next Previous.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('150');
  await page.getByLabel('Next').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/09.150 Records Next Page.png' });
  await page.getByLabel('Previous').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/10.150 Records Next Previous.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('200');
  await page.getByLabel('Next').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/11.200 Records Next Page.png' });
  await page.getByLabel('Previous').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/12.200 Records Next Previous.png' });
  await page.waitForTimeout(1000);

});







test('TC04 Export Task Single ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  // await page.getByLabel('Contract No.').fill('100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-37 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/02.Export Task Single.csv');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/01.Export Single Task.png' });
  await page.waitForTimeout(1000);
});

test('TC04 Export Task Multi ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  // await page.getByLabel('Contract No.').fill('100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-39 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  await page.locator('#mat-checkbox-41 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  await page.locator('#mat-checkbox-43 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/04.Export Task Multi.csv');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/03.Export Multi Task.png' });
  await page.waitForTimeout(1000);


});



test('TC04 Export Task All ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('10');
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/06.Export 10 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/05.Export 10 Task.png' });
  await page.locator('select').selectOption('15');
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.waitForTimeout(1000);
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise2 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download2 = await downloadPromise2;
  // Save downloaded file somewhere
  await download2.saveAs('Output/TS03-Transaction View/TC04 Export/08.Export 15 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/07.Export 15 Task.png' });
  await page.locator('select').selectOption('20');
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.waitForTimeout(1000);
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise3 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download3 = await downloadPromise3;
  // Save downloaded file somewhere
  await download3.saveAs('Output/TS03-Transaction View/TC04 Export/10.Export 20 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/09.Export 20 Task.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('50');
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.waitForTimeout(1000);
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise4 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download4 = await downloadPromise4;
  // Save downloaded file somewhere
  await download4.saveAs('Output/TS03-Transaction View/TC04 Export/12.Export 50 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/11.Export 50 Task.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('100');
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.waitForTimeout(1000);
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise5 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download5 = await downloadPromise5;
  // Save downloaded file somewhere
  await download5.saveAs('Output/TS03-Transaction View/TC04 Export/14.Export 100 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/13.Export 100 Task.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('150');
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.waitForTimeout(1000);
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise6 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download6 = await downloadPromise6;
  // Save downloaded file somewhere
  await download6.saveAs('Output/TS03-Transaction View/TC04 Export/16.Export 150 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/15.Export 150 Task.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('200');
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.waitForTimeout(1000);
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise7 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download7 = await downloadPromise7;
  // Save downloaded file somewhere
  await download7.saveAs('Output/TS03-Transaction View/TC04 Export/18.Export 200 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/17.Export 200 Task.png' });

});







test('TC04 Export Receipts Single ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.waitForTimeout(1000);
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2024').click();
  await page.getByLabel('January 2024').click();
  await page.getByLabel('1 January 2024', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.locator('#mat-checkbox-2').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Receipts' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download receipts' })).toHaveText('You are going to download receipts');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/19.Receipts Single Task Compressing.png' });
  await page.reload();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).first().click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/20.Receipts Single.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/21.Receipts Single Task.png' });
  await page.waitForTimeout(1000);

});




test('TC04 Export Receipts Multi ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.waitForTimeout(1000);
  await page.getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2024').click();
  await page.getByLabel('January 2024').click();
  await page.getByLabel('1 January 2024', { exact: true }).click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.locator('#mat-checkbox-3').click();
  await page.locator('#mat-checkbox-5').click();
  await page.waitForTimeout(500);
  // await page.locator('#mat-checkbox-7').click();
  await page.getByRole('button', { name: 'Receipts' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download receipts' })).toHaveText('You are going to download receipts');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/22.Receipts Multi Task Compressing.png' });
  await page.reload();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).first().click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/23.Receipts Multi.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/24.Receipts Multi Task.png' });
  await page.waitForTimeout(1000);

});










test('TC04 Export Receipts All ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.waitForTimeout(1000);
  await page.getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2024').click();
  await page.getByLabel('January 2024').click();
  await page.getByLabel('1 January 2024', { exact: true }).click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.getByRole('button', { name: 'Receipts' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download receipts' })).toHaveText('You are going to download receipts');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/25.Receipts 50 Task Compressing.png' });
  await page.waitForTimeout(15000);
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.waitForTimeout(5000);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).first().click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/26.Receipts 50.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/27.Receipts 50 Task.png' });
  await page.waitForTimeout(1000);

});





test('TC05 Click Learn More ', async ({ page }) => {

  await page.waitForURL('/transactions');
  await page.waitForTimeout(3000);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Learn More' }).click();
  const page1 = await page1Promise;
  await page1.waitForURL('https://www.gestampduty.com/docs/transaction/');
  await expect(page1.getByText('Home Docs Overview Transaction Transaction สำหรับผู้ใช้ที่ต้องการค้นหาข้อมูลแบบเ')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page1.screenshot({ path: 'Output/TS03-Transaction View/TC05 Click Learn More/01.Click Learn More.png' });
  await page.waitForTimeout(1000);


});


test('TC06 Click Up To ', async ({ page }) => {
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Payment', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(10000);
  await page.keyboard.press('End');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC06 Click Up To/01.Before Click.png' });
  await page.getByRole('img', { name: 'Stockholm-icons / Navigation / Up-2' }).click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC06 Click Up To/02.After Click.png' });
  await page.waitForTimeout(1000);


});



test('TC07 Click E-Document No. ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Contract No' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Contract No').fill('Chod-TC4_2902');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: '0040000000Chod-TC4_290220240201' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('dialog').getByText('E-Document No.'))
    .toHaveText('E-Document No.');
  await expect(page.getByRole('dialog').getByText('0040000000Chod-TC4_290220240201'))
    .toHaveText('0040000000Chod-TC4_290220240201');
  await expect(page.getByText('Contract No.Chod-TC4_2902')).toHaveText('Contract No.Chod-TC4_2902');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC07 Click E-Document No/01.E-Document Details.png' });
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC07 Click E-Document No/02.After Click Close.png' });
  await page.waitForTimeout(1000);

});




test('TC08 Click Contract No Basic ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Contract No' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Contract No').fill('FPH_TC5_0112-D1');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'FPH_TC5_0112-D1', exact: true }).click();
  await page.waitForTimeout(1000);
  await expect.soft(page.getByRole('heading', { name: 'History for \'FPH_TC5_0112-D1\'' })).toBeVisible();
  await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('cell', { name: '1', exact: true })).toBeVisible();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/01.Contract No Basic Details.png' });
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/02.After Click Close.png' });
  await page.waitForTimeout(1000);

});





test('TC08 Click Contract No Additional ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Contract No' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Contract No').fill('TEST_TC5_SameContract_180124');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'TEST_TC5_SameContract_180124', exact: true }).first().click();
  await page.waitForTimeout(1000);
  await expect.soft(page.getByRole('heading', { name: 'History for \'TEST_TC5_SameContract_180124\'' })).toBeVisible();
  await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('cell', { name: '1', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('cell', { name: '2', exact: true })).toBeVisible();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/03.Contract No Additional Details.png' });
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/04.After Click Close.png' });
  await page.waitForTimeout(1000);

});




test('TC08 Click Contract No Increase ', async ({ page }) => {
  await page.getByText('logout').click();
  await page.waitForTimeout(3000);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('/transactions');
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
  await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
  await page.getByRole('menuitem', { name: 'Contract No' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Contract No').fill('001');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: '001', exact: true }).first().click();
  await page.waitForTimeout(1000);
  await expect.soft(page.getByRole('heading', { name: 'History for \'001\'' })).toBeVisible();
  await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('cell', { name: '1', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('cell', { name: '2', exact: true })).toBeVisible();
  // await expect.soft(page.getByRole('cell', { name: '3', exact: true })).toBeVisible();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/05.Contract No Increase Details.png' });
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/06.After Click Close.png' });
  await page.waitForTimeout(1000);

});





// test('TC08 Click Contract No Hybrid ', async ({ page }) => {
//   await page.getByText('logout').click();
//   await page.waitForTimeout(3000);
//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
//   await page.locator('input[name="password"]').fill('ZXcv.!234');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   await page.waitForTimeout(3000);
//   await page.getByRole('link', { name: 'Transaction ' }).click();
//   await page.waitForURL('/transactions');
//   await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
//   await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Filter' }).click();
//   await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
//   await page.getByRole('menuitem', { name: 'Contract No' }).click();
//   await page.waitForTimeout(1000);
//   await page.getByLabel('Contract No').fill('TC6_TS8-499_Hybrid');
//   await page.getByRole('button', { name: 'Filter' }).click();
//   await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
//   await page.getByRole('menuitem', { name: 'Completed' }).click();
//   await page.getByRole('button', { name: 'Search' }).first().click();
//   await page.waitForTimeout(5000);
//   await page.getByRole('button', { name: 'TC6_TS8-499_Hybrid', exact: true }).first().click();
//   await page.waitForTimeout(1000);
//   await expect.soft(page.getByRole('heading', { name: 'History for \'TC6_TS8-499_Hybrid\'' })).toBeVisible();
//   await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
//   await expect.soft(page.getByRole('cell', { name: '1', exact: true })).toBeVisible();
//   await expect.soft(page.getByRole('cell', { name: '2', exact: true })).toBeVisible();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/07.Contract No Hybrid Details.png' });
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/08.After Click Close.png' });
//   await page.waitForTimeout(1000);

// });





// test('TC08 Click Contract No Hybrid Up ', async ({ page }) => {
//   await page.getByText('logout').click();
//   await page.waitForTimeout(3000);
//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
//   await page.locator('input[name="password"]').fill('ZXcv.!234');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   await page.waitForTimeout(3000);
//   await page.getByRole('link', { name: 'Transaction ' }).click();
//   await page.waitForURL('/transactions');
//   await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
//   await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Filter' }).click();
//   await page.getByRole('menuitem', { name: 'Inst Info' }).hover();
//   await page.getByRole('menuitem', { name: 'Contract No' }).click();
//   await page.waitForTimeout(1000);
//   await page.getByLabel('Contract No').fill('TC17_TS12-949_Hybrid_up');
//   await page.getByRole('button', { name: 'Filter' }).click();
//   await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
//   await page.getByRole('menuitem', { name: 'Completed' }).click();
//   await page.getByRole('button', { name: 'Search' }).first().click();
//   await page.waitForTimeout(5000);
//   await page.getByRole('button', { name: 'TC17_TS12-949_Hybrid_up', exact: true }).first().click();
//   await page.waitForTimeout(1000);
//   await expect.soft(page.getByRole('heading', { name: 'History for \'TC17_TS12-949_Hybrid_up\'' })).toBeVisible();
//   await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
//   await expect.soft(page.getByRole('cell', { name: '1', exact: true })).toBeVisible();
//   await expect.soft(page.getByRole('cell', { name: '2', exact: true })).toBeVisible();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/09.Contract No Hybrid Up Details.png' });
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Click Contract No/10.After Click Close.png' });
//   await page.waitForTimeout(1000);

// });
