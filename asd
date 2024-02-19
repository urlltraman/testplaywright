
test('TC02 Search Full  ', async ({ page }) => {
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Data Version' }).hover();
  await page.getByRole('menuitem', { name: 'Latest' }).click();
  await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('December 2023').click();
  await page.getByLabel('11 December 2023', { exact: true }).click();
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
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'Contract No' }).click();
  await page.getByLabel('Contract No').fill('2269639948');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/08. Full Filter/01.Search Full.png' });

});
