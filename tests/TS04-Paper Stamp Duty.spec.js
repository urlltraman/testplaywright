import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     // Runs Uat

//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
//     await page.locator('input[name="password"]').fill('P@ssw0rd');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     // await page.getByRole('button', { name: 'Accept' }).click();
//     await page.getByRole('link', { name: 'Transaction ' }).click();
//     await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
//   });



test.beforeEach(async ({ page }) => {
    // Runs Dev

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('https://gestamp.ddns.net/paperstamp');
});



test('TC01 Paper Stamp Duty ', async ({ page }) => {
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('2 August 2023', { exact: true }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/01.Paper Stamp Duty.png' });
    await page.locator('select').selectOption('10');
    await page.waitForTimeout(2800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/02.Rows per page 10.png' });
    await page.locator('select').selectOption('15');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/03.Rows per page 15.png' });
    await page.locator('select').selectOption('20');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/04.Rows per page 20.png' });
    await page.locator('select').selectOption('50');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/05.Rows per page 50.png' });
    await page.locator('select').selectOption('100');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/06.Rows per page 100.png' });
    await page.locator('select').selectOption('150');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/07.Rows per page 150.png' });
    await page.locator('select').selectOption('200');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/08.Rows per page 200.png' });
    await page.waitForTimeout(1000);

});


test('TC02 Search Data Version ', async ({ page }) => {
    
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('2 August 2023', { exact: true }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Data Version' }).hover();
    await page.getByRole('menuitem', { name: 'Latest' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/01. Data Veriosn/01. Version Lastest.png' });
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Data Version' }).hover();
    await page.getByRole('menuitem', { name: 'All Version' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/01. Data Veriosn/02. Version All.png' });

});




test('TC02 Search Uploaded Date From ', async ({ page }) => {

    await page.locator('select').selectOption('15');
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('December 2023').click();
    await page.getByLabel('11 December 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/02. Date Form Date To/01. Date From.png' });


});


test('TC02 Search Uploaded Date To ', async ({ page }) => {
    await page.locator('select').selectOption('15');
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('August 2023').click();
    await page.getByLabel('2 August 2023', { exact: true }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('11 December 2024', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/02. Date Form Date To/02. Date To.png' });


});












test('TC02 Search Uploaded Date : Today', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Today' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/01.Today.png' });
    await page.waitForTimeout(1000);

  });





  test('TC02 Search Uploaded Date : This Week', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'This Week' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/02.This Week.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Uploaded Date : This Month', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'This Month' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/03.This Month.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Uploaded Date : Last 7 Days', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 7 Days' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/04.7 day.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Uploaded Date : Last 15 Days', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 15 Days' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/05.15 day.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Uploaded Date : Last 1 Months', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 1 Month' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/06.1 M.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Uploaded Date : Last 2 Months', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 2 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/07.2 M.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Uploaded Date : Last 3 Months', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/08.3 M.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Uploaded Date : Last 6 Months', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Upload Date/09.6 M.png' });
    await page.waitForTimeout(1000);

  });







test('TC02 Search Creation Date : Today', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Today' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/01.Today.png' });
    await page.waitForTimeout(1000);

  });





  test('TC02 Search Creation Date : This Week', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'This Week' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/02.This Week.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Creation Date : This Month', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'This Month' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/03.This Month.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Creation Date : Last 7 Days', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 7 Days' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/04.7 day.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Creation Date : Last 15 Days', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 15 Days' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/05.15 day.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Creation Date : Last 1 Months', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 1 Month' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/06.1 M.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Creation Date : Last 2 Months', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 2 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/07.2 M.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Creation Date : Last 3 Months', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/08.3 M.png' });
    await page.waitForTimeout(1000);

  });


  test('TC02 Search Creation Date : Last 6 Months', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Creation Date/09.6 M.png' });
    await page.waitForTimeout(1000);

  });





test('TC02 Search Contract No', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.getByLabel('Contract No').fill('2269639948');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/05.Contract No/01. Contract No.png' });
    await page.waitForTimeout(1000);

});



test('TC02 Search Uploader', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploader' }).click();
    await page.getByLabel('Uploader').fill('kittisak');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/06.Uploader/01. Uploader.png' });
    await page.waitForTimeout(1000);

});


test('TC02 Sorting Tools ', async ({ page }) => {

    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Uploaded Date' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Ascending' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/07. Sorting Tools/01.Uploaded Date Ascending.png' });
    await page.getByRole('button', { name: 'Uploaded Date' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Descending' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/07. Sorting Tools/02.Uploaded Date Descending.png' });
    await page.getByRole('button', { name: 'Uploaded Date' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Ascending' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/07. Sorting Tools/03.Creation Date Ascending.png' });
    await page.getByRole('button', { name: 'Creation Date' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Descending' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/07. Sorting Tools/04.Creation Date Descending.png' });
    await page.getByRole('button', { name: 'Creation Date' }).click();
    await page.getByRole('menuitem', { name: 'Contract No' }).hover();
    await page.getByRole('menuitem', { name: 'Ascending' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/07. Sorting Tools/05.Contract No Ascending.png' });
    await page.getByRole('button', { name: 'Contract No' }).click();
    await page.getByRole('menuitem', { name: 'Contract No' }).hover();
    await page.getByRole('menuitem', { name: 'Descending' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/07. Sorting Tools/06.Contract No Descending.png' });
  
  
  
  });


  test('TC02 Search Full  ', async ({ page }) => {
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Data Version' }).hover();
    await page.getByRole('menuitem', { name: 'Latest' }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('January 2023').click();
    await page.getByLabel('11 January 2023', { exact: true }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('11 December 2024', { exact: true }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Creation Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Uploader' }).click();
    await page.getByLabel('Uploader').fill('kittisak');
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Contract No' }).click();
    await page.getByLabel('Contract No').fill('Auto_GSD-120');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/08. Full Filter/01.Search Full.png' });
  
  });
  



test('TC02 Search No Filter ', async ({ page }) => {

    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/08. Full Filter/02.Search No Filter.png' });

});





test('TC03 Click Next And Previous Page  ', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.locator('select').selectOption('10');
    // await page.getByLabel('Next').click();
    await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/01.10 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/02.10 Records Next Previous.png' });
    await page.locator('select').selectOption('15');
    await page.getByLabel('Next').click();
    // await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/03.15 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/04.15 Records Next Previous.png' });
    await page.locator('select').selectOption('50');
    // await page.getByLabel('Next').click();
    await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/05.50 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/06.50 Records Next Previous.png' });
    await page.locator('select').selectOption('100');
    await page.getByLabel('Next').click();
    // await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/07.100 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/08.100 Records Next Previous.png' });
    await page.locator('select').selectOption('200');
    await page.getByLabel('Next').click();
    // await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/09.200 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/10.200 Records Next Previous.png' });
    await page.waitForTimeout(1800);


});



test('TC04 Download Template ', async ({ page }) => {



    const downloadPromise = page.waitForEvent('download');
    await page.getByText('TEMPLATE').click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS04-Paper Stamp Duty/TC04 Download Template/PaperStampTemplate.xlsx');




});





test('TC05 Upload Template ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/test/PaperStampTemplate.xlsx');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.waitForTimeout(1000);
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await expect.soft(page.getByText('Upload Total: 1 row(s) Success: 1 row(s) ,Duplicate: 0 row(s) ,Error: 0 row(s) Error Message')).toHaveText('Upload Total: 1 row(s) Success: 1 row(s) ,Duplicate: 0 row(s) ,Error: 0 row(s) Error Message');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Paper ' }).getByRole('button').first();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC05 Upload Template/01.Upload Success.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.getByRole('row', { name: 'Auto_Paper ' }).getByRole('button').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1000);

});





test('TC06 Delete Template ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/test/PaperStampTemplate2.xlsx');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success'); await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Paper ' }).getByRole('button').first();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC06 Delete Template/01.Upload Success.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.getByRole('row', { name: 'Auto_Delete ' }).getByRole('button').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC06 Delete Template/02.Click Delete.png' });
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC06 Delete Template/03.Delete Sucess.png' });

});





test('TC07 Click Learn More ', async ({ page }) => {

    await page.waitForURL('/paperstamp');
    await page.waitForTimeout(3000);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn More' }).click();
    const page1 = await page1Promise;
    await page1.waitForURL('https://www.gestampduty.com/docs/paper-stamp-duty/');
    await expect(page1.getByText('Home Docs Input Data Paper Stamp Duty Paper Stamp Duty ผู้ใช้งานสามารถนำข้อมูลกา')).toBeEnabled();
    await page.waitForTimeout(1000);
    await page1.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC07 Click Learn More/01.Click Learn More.png' });
    await page.waitForTimeout(1000);

});


test('TC08 Click Up To ', async ({ page }) => {
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC08 Click Up To/01.Before Click.png' });
    await page.getByRole('img', { name: 'Stockholm-icons / Navigation / Up-2' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC08 Click Up To/02.After Click.png' });
    await page.waitForTimeout(1000);


});

