import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Runs Uat

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

  });



// test.beforeEach(async ({ page }) => {
//   // Runs Dev

//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//   await page.locator('input[name="password"]').fill('P@ssw0rd');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   // await page.getByRole('button', { name: 'Accept' }).click();

// });


test('TC01 Batch View ', async ({ page }) => {

  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/01.Batch View.png' });
  await page.locator('select').selectOption('10');
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/02.Rows per page 10.png' });
  await page.locator('select').selectOption('15');
  await page.waitForTimeout(1200);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/03.Rows per page 15.png' });
  await page.locator('select').selectOption('20');
  await page.waitForTimeout(1200);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/04.Rows per page 20.png' });
  await page.locator('select').selectOption('50');
  await page.waitForTimeout(1200);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/05.Rows per page 50.png' });
  await page.locator('select').selectOption('100');
  await page.waitForTimeout(1200);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/06.Rows per page 100.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('150');
  await page.waitForTimeout(1200);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/07.Rows per page 150.png' });
  await page.waitForTimeout(1000);
  await page.locator('select').selectOption('200');
  await page.waitForTimeout(1200);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC01 Batch View/08.Rows per page 200.png' });
  await page.waitForTimeout(1000);
});


test('TC02 Search Status : All Status  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  // await page.getByPlaceholder('Status').click();
  // await page.getByLabel('All Status').getByText('All Status').click();
  // await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/01.All Status.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/04.Date From And To.png' });

  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/01.All Status/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);

});







test('TC02 Search Status : Uploading  ', async ({ page }) => {

  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Uploading' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/01.Uploading.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/02.Uploading/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);


});





test('TC02 Search Status : Input Error  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Input Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/01.Input Error.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/03.Input Error/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Status : Submit Error  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Submit Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/01.Submit Error.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/04.Submit Error/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);


});



test('TC02 Search Status : Filing Error  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Filing Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/01.Filing Error.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/05.Filing Error/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Status : Payment Error  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Payment Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/01.Payment Errors.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/06.Payment Error/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Status : Receipt Error  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Receipt Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/01.Receipt Error.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/07.Receipt Error/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);




});




test('TC02 Search Status : Preparing  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Preparing' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/01.Preparing.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/08.Preparing/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Status : Rejected  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/01.Rejected.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/09.Rejected/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Status : Reviewing  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Reviewing' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/01.Reviewing.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/10.Reviewing/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);





});




test('TC02 Search Status : Submitted  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Submitted' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/01.Submitted.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/11.Submitted/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Status : Payment  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Payment', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/01.Payment.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/12.Payment/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Status : Completed  ', async ({ page }) => {



  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/01.Completed.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/02.Date From.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.waitForTimeout(1000);
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('31 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/03.Date To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/04.Date From And To.png' });
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2030').click();
  await page.getByLabel('December 2030').click();
  await page.getByLabel('31 December 2030').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2010').click();
  await page.getByLabel('January 2010').click();
  await page.getByLabel('1 January 2010', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC02 Search Status/13.Completed/05.Invalid Date From And To.png' });
  await page.waitForTimeout(1000);

});


test('TC03 Click Next And Previous Page  ', async ({ page }) => {


  await page.waitForTimeout(5000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  // await page.locator('select').selectOption('50');
  await page.getByLabel('Next').click();
  // await page.getByLabel('Next').click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC03 Click Next And Previews Page/01.Click Next Page.png' });
  await page.getByLabel('Previous').click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC03 Click Next And Previews Page/02.Click Previous Page.png' });
  await page.waitForTimeout(1000);

});



test('TC04 Create Batch  ', async ({ page }) => {

  await page.getByRole('button', { name: 'Upload' }).first().click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_1_Record.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_1_Record' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/01.Upload 1 Record.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByText('Auto_1_Record ').first().click();
  await page.reload();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/02.1 Record Details.png', fullPage: true });
  await page.getByRole('link', { name: 'Batch ' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('row', { name: 'Auto_1_Record ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_1_Record  ' })).toBeHidden();
  await page.waitForTimeout(1000);
  // Upload Many Records
  await page.reload();
  await page.getByRole('button', { name: 'Upload' }).first().click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Many_Record.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1500);
  let mask_locator1 = await page.getByRole('row', { name: 'Auto_Type1_Many_Record' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/03.Upload Many Record.png', mask: [mask_locator1], maskColor: '#00FF00' });
  await page.getByText('Auto_Type1_Many_Record ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC04 Create Batch/04.Many Record Details.png' });
  await page.getByRole('link', { name: 'Batch ' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('row', { name: 'Auto_Type1_Many_Record ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_Type1_Many_Record  ' })).toBeHidden();
  await page.waitForTimeout(1000);

});






test('TC05 Edit Batch On Web  ', async ({ page }) => {

  await page.getByRole('button', { name: 'Upload' }).first().click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Edit.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Type1_Edit' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC05 Edit Batch/01.Batch Error.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_Type1_Edit ').first().click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await expect(page.getByRole('cell', { name: '\'ABC10003\' is Exist.' })).toHaveText("'ABC10003' is Exist.");
  await page.locator('[id="\\30 _1"]').fill('Zas5ad212443');
  await page.getByRole('button', { name: 'Validate' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('link', { name: 'Batch ' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).click();
  let mask_locator1 = await page.getByRole('row', { name: 'Auto_Type1_Edit' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC05 Edit Batch/02.Edit Batch Success.png', mask: [mask_locator1], maskColor: '#00FF01' });
  await page.getByRole('link', { name: 'Batch ' }).click();
  await page.getByRole('row', { name: 'Auto_Type1_Edit ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_Type1_Edit  ' })).toBeHidden();
  await page.waitForTimeout(1000);



});





test('TC05 Edit Batch Import Files  ', async ({ page }) => {

  await page.getByRole('button', { name: 'Upload' }).first().click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Edit.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();

  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Type1_Edit' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC05 Edit Batch/03.Batch Error.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_Type1_Edit ').first().click();
  await page.getByRole('button', { name: 'Import Fixes' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Import.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();

  await page.waitForTimeout(1500);
  let mask_locator1 = await page.getByRole('row', { name: 'Auto_Type1_Import' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC05 Edit Batch/04.Import Batch Success.png', mask: [mask_locator1], maskColor: '#00FF01' });
  await page.waitForTimeout(1500);
  await page.getByRole('row', { name: ' Auto_Type1_Edit ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_Type1_Edit  ' })).toBeHidden();
  await page.waitForTimeout(1000);


});




test('TC06 Delete Batch  ', async ({ page }) => {

  await page.getByRole('button', { name: 'Upload' }).first().click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Delete.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();

  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Delete' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC06 Delete Batch/01.Select Batch Delete.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: 'Auto_Delete' }).first().getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_Delete  ' })).toBeHidden();
  await page.waitForTimeout(1000);
  await page.reload();

  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC06 Delete Batch/02.After Delete.png' });
  await page.waitForTimeout(1000);

});





test('TC07 Reject Batch  ', async ({ page }) => {

  await page.getByRole('button', { name: 'Upload' }).first().click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Reject.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).click();
  let mask_locator = await page.getByRole('row', { name: 'Auto_Reject' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/01.Create Batch Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Auto_Reject ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/02.Batch Details.png', fullPage: true });
  await page.getByRole('button', { name: 'Submit For Review' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  await page.getByText('Auto_Reject ').first().click();
  await page.getByRole('button', { name: 'Reject', exact: true }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/03.Click Reject.png', fullPage: true });
  await page.getByRole('button', { name: 'Reject' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC07 Reject Batch/04.After Reject.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: 'Auto_Reject' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_Reject  ' })).toBeHidden();
  await page.waitForTimeout(1000);




});


// test('TC08 Submit Batch  ', async ({ page }) => {
//   
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_1_Record.xlsx');
//   await page.getByRole('button', { name: 'Upload' }).click();
// 
//   await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.reload();
//   await page.waitForTimeout(1500);
//   
//   let mask_locator = await page.getByRole('row', { name: 'Auto_Type1_1_Record' }).getByRole('cell').first();
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/01.Create Batch Success.png', mask: [mask_locator], maskColor: '#00FF00' });
//   await page.getByRole('cell', { name: 'Auto_Type1_1_Record' }).first().click();
//   await page.waitForTimeout(1500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/02.Batch Details.png' });
//   await page.getByRole('button', { name: 'Submit For Review' }).click();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/03.Click Confirm.png' });
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   
//   await page.waitForTimeout(1500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/04.After Confirm.png', mask: [mask_locator], maskColor: '#00FF00' });
//   await page.getByRole('cell', { name: 'Auto_Type1_1_Record' }).first().click();
//   await page.getByRole('button', { name: 'Submit', exact: true }).click();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/05.Click Submit.png' });
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   
//   await page.waitForTimeout(4500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC08 Submit Batch/06.After Submit.png', mask: [mask_locator], maskColor: '#00FF00' });

// });



// test('TC09 Schedule Submit Batch  ', async ({ page }) => {
//   
//   await page.getByRole('button', { name: 'Upload' }).click();
//   await page.locator('#file').setInputFiles('Data Files/test/Auto_ Schedule Submit.xlsx');
//   await page.getByRole('button', { name: 'Upload' }).click();
// 
//   await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.reload();
//   await page.waitForTimeout(1500);
//   
//   let mask_locator = await page.getByRole('row', { name: 'Auto_ Schedule Submit' }).getByRole('cell').first();
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC09 Schedule Submit/01.Create Batch Success.png', mask: [mask_locator], maskColor: '#00FF00' });
//   await page.getByRole('cell', { name: 'Auto_ Schedule Submit' }).first().click();
//   await page.waitForTimeout(1500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC09 Schedule Submit/02.Batch Details.png' });
//   await page.getByRole('button', { name: 'Submit For Review' }).click();
//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC09 Schedule Submit/03.Click Confirm.png' });
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   
//   await page.waitForTimeout(1500);
//   await page.screenshot({ path: 'Output/TS02-Batch View/TC09 Schedule Submit/04.After Confirm.png', mask: [mask_locator], maskColor: '#00FF00' });
//   await page.getByRole('cell', { name: 'Auto_ Schedule Submit' }).first().click();
//   await page.getByRole('button', { name: 'Schedule Submit' }).click();
//   await page.waitForTimeout(1000);

// });



test('TC10 Export  ', async ({ page }) => {

  await page.getByRole('button', { name: 'Upload' }).first().click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_Type1_Edit.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.reload();

  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_Type1_Edit' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC10 Export/01.Select Batch Export.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByRole('button', { name: 'Search' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'Auto_Type1_Edit ' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS02-Batch View/TC10 Export/02.File Export.rar');
  await page.getByRole('row', { name: 'Auto_Type1_Edit ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_Type1_Edit   ' })).toBeHidden();
  await page.waitForTimeout(1000);



});






test('TC11 Download QR Payin  ', async ({ page }) => {

  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Payment', exact: true }).click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('December 2023').click();
  await page.getByLabel('26 December 2023').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('26 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.locator('#mat-mdc-checkbox-4').click();
  const downloadPromise = page.waitForEvent('download');
  await page.locator('div').filter({ hasText: /^QRPay-inUpload$/ }).getByRole('button').first().click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS02-Batch View/TC11 Download/01.QRCODE.rar');
  const downloadPromiseA = page.waitForEvent('download');
  await page.locator('div').filter({ hasText: /^QRPay-inUpload$/ }).getByRole('button').nth(1).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS02-Batch View/TC11 Download/02.Payin.rar');
  await page.waitForTimeout(1000);

});





test('TC11 Download Receipts ', async ({ page }) => {

  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('December 2023').click();
  await page.getByLabel('26 December 2023').click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2024').click();
  await page.getByLabel('December 2024').click();
  await page.getByLabel('26 December 2024').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'Completed [14831] GeStamp_TC6_2504__UAT_relate3ผู้รับประโยชน์ ' }).getByLabel('').click();
  await page.getByRole('button', { name: 'Receipts' }).first().click();
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('row', { name: 'kittisak.p@ginkgosoft.co.th' }).getByRole('button').nth(1).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS02-Batch View/TC11 Download/03.Receipts.rar');


});

test('TC12 Click Learn More ', async ({ page }) => {


  await page.waitForTimeout(3000);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Learn More' }).click();
  const page1 = await page1Promise;
  await page1.waitForURL('https://www.gestampduty.com/docs/batch/');
  await expect(page1.getByText('Home Docs Overview Batch Batch การจัดการข้อมูลนำเข้าของระบบ # ผู้ใช้สามารถนำไฟล์')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page1.screenshot({ path: 'Output/TS02-Batch View/TC12 Click Learn More/01.Click Learn More.png' });

});

test('TC13 Click Up To ', async ({ page }) => {


  await page.waitForTimeout(3000);
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').first().click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(3000);
  await page.keyboard.press('End');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC13 Click Up To/01.Before Click.png' });
  await page.getByRole('img', { name: 'Stockholm-icons / Navigation / Up-2' }).click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC13 Click Up To/02.After Click.png' });


});



test('TC14 Sorting Tools Upload Date ', async ({ page }) => {


  await page.waitForTimeout(3000);
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Today' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/01. Upload Date/01.Today.png' });
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 7 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/01. Upload Date/02.Last 7 Days.png' });
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 15 Days' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/01. Upload Date/03.Last 15 Days.png' });
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 1 Month' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/01. Upload Date/04.Last 1 Month.png' });
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 2 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/01. Upload Date/05.Last 2 Month.png' });
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 3 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/01. Upload Date/06.Last 3 Month.png' });
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
  await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press('End');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/01. Upload Date/07.Last 6 Month.png' });



});



test('TC14 Sorting Tools  ', async ({ page }) => {


  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Batch ID' }).click();
  await page.getByRole('menuitem', { name: 'Batch ID' }).hover();
  await page.getByRole('menuitem', { name: 'Ascending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/02. Batch ID/01.Batch ID Ascending.png' });
  await page.getByRole('button', { name: 'Batch ID' }).click();
  await page.getByRole('menuitem', { name: 'Batch ID' }).hover();
  await page.getByRole('menuitem', { name: 'Descending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/02. Batch ID/02.Batch ID Descending.png' });
  await page.getByRole('button', { name: 'Batch ID' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).hover();
  await page.getByRole('menuitem', { name: 'Ascending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/02. Batch ID/03.File Name Ascending.png' });
  await page.getByRole('button', { name: 'File Name' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).hover();
  await page.getByRole('menuitem', { name: 'Descending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/02. Batch ID/04.File Name Descending.png' });
  await page.getByRole('button', { name: 'File Name' }).click();
  await page.getByRole('menuitem', { name: 'Uploader' }).hover();
  await page.getByRole('menuitem', { name: 'Ascending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/02. Batch ID/05.Uploader Ascending.png' });
  await page.getByRole('button', { name: 'Uploader' }).click();
  await page.getByRole('menuitem', { name: 'Uploader' }).hover();
  await page.getByRole('menuitem', { name: 'Descending' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/02. Batch ID/06.Uploader Descending.png' });



});








test('TC14 Sorting Tools File Name ', async ({ page }) => {


  await page.waitForTimeout(3000);
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.getByLabel('File Name').fill('Auto');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/03. File Name/01. Auto.png' });
  await page.waitForTimeout(1000);
  await page.getByLabel('File Name').fill('TC');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/03. File Name/02. TC.png' });
  await page.waitForTimeout(1000);
  await page.getByLabel('File Name').fill('!@#$%^&*()');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/03. File Name/03. SP.png' });
  await page.waitForTimeout(1000);



});






test('TC14 Sorting Tools Uploader ', async ({ page }) => {


  await page.waitForTimeout(3000);
  await page.locator('button').filter({ hasText: 'filter_alt' }).click();
  await page.getByRole('menuitem', { name: 'Uploader' }).click();
  await page.getByLabel('Uploader').fill('test');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/04. Uploader/01. Test.png' });
  await page.waitForTimeout(1000);
  await page.getByLabel('Uploader').fill('praw');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/04. Uploader/02. Praw.png' });
  await page.waitForTimeout(1000);
  await page.getByLabel('Uploader').fill('!@#$%^&*()');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Sorting Tools/04. Uploader/03. SP.png' });
  await page.waitForTimeout(1000);


});




// test('TC15 Click To Getinvoice ', async ({ page }) => {


//   await page.waitForTimeout(3000);
//   await page.locator('div').filter({ hasText: /^apps$/ }).nth(1).click();
//   await page.waitForTimeout(1000);
//   await page.getByRole('link', { name: 'getInvoice' })
// await page.waitForURL('https://uat-zdox.ginkgosoft.co.th/login?state=sso&upn=test.gamekittisak@gmail.com');
// await expect(page.getByText('Sign In to Your Account or Register account')).toHaveText('Sign In to Your Account or Register account');
// await page.waitForTimeout(1000);
// await page.screenshot({ path: 'Output/TS02-Batch View/TC14 Click To ZDOX/01.ZDOX Page.png' });


// });




test('TC15 Files Support CSV  ', async ({ page }) => {
  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_FileSupportCSV.csv');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByLabel('Upload Success').click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2500);
  await page.getByText('Search').click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  let mask_locator = await page.getByRole('row', { name: 'Auto_FileSupportCSV' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/01. CSV/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_FileSupportCSV ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/01. CSV/02.Upload Details.png', fullPage: true });
  await page.getByText('Submit For Review').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_FileSupportCSV ').first().click();
  await page.locator('button').filter({ hasText: /^Submit$/ }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(5000);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.waitForURL('/batch');
  await page.waitForTimeout(1500);
  await page.getByText('Search').click();
  await page.waitForTimeout(15000);
  await page.reload();
  await page.goto('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_FileSupportCSV ').first().click();
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: 'QR' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS02-Batch View/TC15 Files Support/01. CSV/04.qrPayment.jpg');
  await page.reload();
  await page.waitForTimeout(1500);
  await page.goto('/batch');
  await page.getByText('Auto_FileSupportCSV ').first().click();
  // download 2
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Pay-in' }).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS02-Batch View/TC15 Files Support/01. CSV/05.payInSlipFile.pdf');
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/01. CSV/03.API.png', fullPage: true });
  await page.waitForTimeout(1500);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.getByRole('row', { name: 'Auto_FileSupportCSV ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_FileSupportCSV  ' })).toBeHidden();
  await page.waitForTimeout(1800);

});




test('TC15 Files Support JSON  ', async ({ page }) => {
  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_FileSupportJSON.json');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByLabel('Upload Success').click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2500);
  await page.getByText('Search').click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  let mask_locator = await page.getByRole('row', { name: 'Auto_FileSupportJSON' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/02. JSON/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_FileSupportJSON ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/02. JSON/02.Upload Details.png', fullPage: true });
  await page.getByText('Submit For Review').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_FileSupportJSON ').first().click();
  await page.locator('button').filter({ hasText: /^Submit$/ }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(5000);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.waitForURL('/batch');
  await page.waitForTimeout(1500);
  await page.getByText('Search').click();
  await page.waitForTimeout(15000);
  await page.reload();
  await page.goto('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_FileSupportJSON ').first().click();
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: 'QR' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS02-Batch View/TC15 Files Support/02. JSON/04.qrPayment.jpg');
  await page.reload();
  await page.waitForTimeout(1500);
  await page.goto('/batch');
  await page.getByText('Auto_FileSupportJSON ').first().click();
  // download 2
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Pay-in' }).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS02-Batch View/TC15 Files Support/02. JSON/05.payInSlipFile.pdf');
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/02. JSON/03.API.png', fullPage: true });
  await page.waitForTimeout(1500);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.getByRole('row', { name: 'Auto_FileSupportJSON ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_FileSupportJSON  ' })).toBeHidden();
  await page.waitForTimeout(1800);

});





test('TC15 Files Support XLSX  ', async ({ page }) => {
  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_FileSupportXLSX.xlsx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByLabel('Upload Success').click();
  await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(2500);
  await page.getByText('Search').click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  let mask_locator = await page.getByRole('row', { name: 'Auto_FileSupportXLSX' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/03. XLSX/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_FileSupportXLSX ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/03. XLSX/02.Upload Details.png', fullPage: true });
  await page.getByText('Submit For Review').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_FileSupportXLSX ').first().click();
  await page.locator('button').filter({ hasText: /^Submit$/ }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(5000);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.waitForURL('/batch');
  await page.waitForTimeout(1500);
  await page.getByText('Search').click();
  await page.waitForTimeout(15000);
  await page.reload();
  await page.goto('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_FileSupportXLSX ').first().click();
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: 'QR' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS02-Batch View/TC15 Files Support/03. XLSX/04.qrPayment.jpg');
  await page.reload();
  await page.waitForTimeout(1500);
  await page.goto('/batch');
  await page.getByText('Auto_FileSupportXLSX ').first().click();
  // download 2
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Pay-in' }).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS02-Batch View/TC15 Files Support/03. XLSX/05.payInSlipFile.pdf');
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/03. XLSX/03.API.png', fullPage: true });
  await page.waitForTimeout(1500);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.getByRole('row', { name: 'Auto_FileSupportXLSX ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_FileSupportXLSX  ' })).toBeHidden();
  await page.waitForTimeout(1800);

});





test('TC15 Files Support TXT  ', async ({ page }) => {
  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_FileSupportTXT.txt');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect.soft(page.getByRole('heading', { name: 'Upload Fail' })).toHaveText('Upload Fail');
  await expect.soft(page.getByText('Please upload only .csv,.xlsx or .json file')).toHaveText('Please upload only .csv,.xlsx or .json file');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/04. TXT/01. Not Support File TXT.png' });
  await page.getByRole('button', { name: 'Close' }).click();


});


test('TC15 Files Support DOCX  ', async ({ page }) => {
  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.locator('#file').setInputFiles('Data Files/test/Auto_FileSupportDOCX.docx');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect.soft(page.getByRole('heading', { name: 'Upload Fail' })).toHaveText('Upload Fail');
  await expect.soft(page.getByText('Please upload only .csv,.xlsx or .json file')).toHaveText('Please upload only .csv,.xlsx or .json file');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS02-Batch View/TC15 Files Support/05. DOCX/01. Not Support File DOCX.png' });
  await page.getByRole('button', { name: 'Close' }).click();


});
