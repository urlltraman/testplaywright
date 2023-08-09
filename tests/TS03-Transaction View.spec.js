// @ts-nocheck
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.

  await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByRole('link', { name: 'Transaction View' }).click();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/transactions');
});



test('TC01 Transaction View ', async ({ page }) => {

  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/01.Transaction View.png' });
  await page.locator('div').filter({ hasText: /^200$/ }).nth(2).click();
  await page.getByRole('option', { name: '50' }).click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/02.Rows per page 50.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '100' }).click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/03.Rows per page 100.png' });
  await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
  await page.getByRole('option', { name: '200' }).click();
  await page.waitForTimeout(800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/04.Rows per page 200.png' });
});



test('TC02 Search E-Document No. ', async ({ page }) => {

  // e-doc
  await page.locator('#mat-input-2').fill('00100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.Search E-Doc.png', fullPage: true });

});

test('TC02 Search Contract No. ', async ({ page }) => {
  // contract no

  await page.locator('#mat-input-3').fill('ABC');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02.Search Contract No.png', fullPage: true });

});


test('TC02 Search Status ', async ({ page }) => {
  // status
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'All Status' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Search All Status.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submit Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04.Search Submit Error.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Filing Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05.Search Filing Error.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Payment Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/06.Search Payment Error.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Receipt Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Search Receipt Error.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Preparing' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Search Preparing.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Search Rejected.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByText('Reviewing').click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/10.Search Reviewing.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submitted' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Search Submitted.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByText('Payment', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/12.Search Payment.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/13.Search Completed.png', fullPage: true });

});

test('TC02 Search Tax Id ', async ({ page }) => {
  // tax id
  await page.locator('#mat-input-4').fill('0107537002273');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/14.Search Tax ID.png', fullPage: true });

});

test('TC02 Search First Name ', async ({ page }) => {
  // first name
  await page.locator('#mat-input-5').fill('Sopita');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/15.Search First Name.png', fullPage: true });

});

test('TC02 Search Last Name ', async ({ page }) => {

  // last name
  await page.locator('#mat-input-6').fill('Saetong');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/16.Search Last Name.png', fullPage: true });

});



test('TC02 Search Contract Type', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17.Search Contract Type All.png', fullPage: true });
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '4 Hire-of-work agreements' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18.Search Contract Type 4.png', fullPage: true });
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '4 Hire-of-work agreements' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19.Search Contract Type 4.png', fullPage: true });
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '5 Loan agreements or bank overdraft agreements' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/20.Search Contract Type 5.png', fullPage: true });
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '7 Powers of attorney' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/21.Search Contract Type 7.png', fullPage: true });
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '8 Proxies for voting at a company meeting' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/22.Search Contract Type 8.png', fullPage: true });
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '17 Suretyship contracts' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/23.Search Contract Type 17.png', fullPage: true });

});


test('TC02 Search Year', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();
  // year
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/24.Search Year All.png', fullPage: true });
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2026' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/25.Search Year 2026.png', fullPage: true });
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2025' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/26.Search Year 2025.png', fullPage: true });
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2024' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/27.Search Year 2024.png', fullPage: true });
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2023' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/28.Search Year 2023.png', fullPage: true });

});

test('TC02 Search Month', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/29.Search Month All.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'January' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/30.Search Month January.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'February' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/31.Search Month February.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'March' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/32.Search Month March.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'April' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/33.Search Month April.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'May' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/34.Search Month May.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'June' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/35.Search Month June.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'July' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/36.Search Month July.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'August' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/37.Search Month August.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'September' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/38.Search Month September.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'October' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/39.Search Month October.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'November' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/40.Search Month November.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'December' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/41.Search Month December.png', fullPage: true });

});




test('TC02 Search Period Submit', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();

  // period submit
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/42.Search Period Submit All.png', fullPage: true });
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 1' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/43.Search Period Submit Round 1.png', fullPage: true });
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 2' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/44.Search Period Submit Round 2.png', fullPage: true });
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 3' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/45.Search Period Submit Round 3.png', fullPage: true });
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 4' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/46.Search Period Submit Round 4.png', fullPage: true });

});

test('TC02 Search Submit Type', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();

  //Submit Type
  await page.locator('#mat-select-16').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/47.Search Submit Type All.png', fullPage: true });
  await page.locator('#mat-select-16').click();
  await page.getByRole('option', { name: 'Normal' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/48.Search Submit Type Normal.png', fullPage: true });
  await page.locator('#mat-select-16').click();
  await page.getByRole('option', { name: 'Additional' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/49.Search Submit Type Additional.png', fullPage: true });

});





test('TC02 Search Creation Date From', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();

  // Creation Date From
  await page.locator('div').filter({ hasText: /^Creation Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/50.Search Creation Date From.png', fullPage: true });

});



test('TC02 Search Creation Date To', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();


  //Creation Date To
  await page.locator('div').filter({ hasText: /^Creation Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/51.Search Creation Date To.png', fullPage: true });

});



test('TC02 Search Form Submit No', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();

  //Form Submit No.
  await page.locator('#mat-input-9').fill('31');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/52.Search Form Submit No.png', fullPage: true });

});

test('TC02 Search SD Payment Code', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();

  //SD Payment Code
  await page.locator('#mat-input-10').fill('00316607240547866553');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/53.Search SD Payment Code.png', fullPage: true });

});




test('TC02 Search Receipt No.', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();

  //Receipt No.
  await page.locator('#mat-input-11').fill('66100122710');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/54.Search Receipt No.png', fullPage: true });

});


test('TC02 Search Receipt Date From', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(800);
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();


  //Receipt Date From
  await page.locator('div').filter({ hasText: /^Receipt Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('27 July 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/56.Search Receipt Date From.png', fullPage: true });

});


test('TC02 Search Receipt Date To', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();



  //Receipt Date To
  await page.locator('div').filter({ hasText: /^Receipt Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('24 July 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/57.Search Receipt Date To.png', fullPage: true });

});


test('TC02 Search Receipt User ID', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();


  //User ID
  await page.locator('#mat-input-14').fill('prawprairat1');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/58.Search User ID.png', fullPage: true });


});



test('TC02 Search All Filters', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(800);
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();
  // All Filters
  await page.locator('#mat-input-2').fill('017');
  await page.locator('#mat-input-3').fill('MTC17');
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.locator('#mat-input-4').fill('1721000011382');
  await page.locator('#mat-input-5').fill('Sopita');
  await page.locator('#mat-input-6').fill('Sugsa');
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '17 Suretyship contracts' }).click();
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2023' }).click();
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'August' }).click();
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 2' }).click();
  await page.locator('#mat-select-16').click();
  await page.getByRole('option', { name: 'Normal' }).click();
  await page.locator('div').filter({ hasText: /^Creation Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('1 July 2023', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Creation Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('31 July 2023', { exact: true }).click();
  await page.locator('#mat-input-9').fill('P');
  await page.locator('#mat-input-10').fill('822966072');
  await page.locator('#mat-input-11').fill('66100123');
  await page.locator('div').filter({ hasText: /^Receipt Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('1 July 2023', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Receipt Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('1 August 2023', { exact: true }).click();
  await page.locator('#mat-input-14').fill('maysaameedusa');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/59.Search All Filters.png', fullPage: true });

});



test('TC02 Search No Input Data', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('Contract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeAllCreation Date FromC')).toBeEnabled();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/60.Search No Input Data.png', fullPage: true });
});





test('TC03 Click Next And Previous Page  ', async ({ page }) => {

  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('Next page').click();
  await page.getByLabel('Next page').click();
  await page.getByLabel('Next page').click();
  await page.getByLabel('Next page').click();
  await page.getByLabel('Next page').click();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/01.200 Records Next Page.png', fullPage: true });
  await page.getByLabel('Previous page').click();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/02.200 Records Next Previous.png', fullPage: true });
  await page.locator('div').filter({ hasText: /^200$/ }).nth(2).click();
  await page.getByRole('option', { name: '100' }).click();
  await page.getByLabel('Next page').click();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/03.100 Records Next Page.png', fullPage: true });
  await page.getByLabel('Previous page').click();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/04.100 Records Next Previous.png', fullPage: true });
  await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
  await page.getByRole('option', { name: '50' }).click();
  await page.getByLabel('Next page').click();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/05.50 Records Next Page.png', fullPage: true });
  await page.getByLabel('Previous page').click();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/06.50 Records Next Previous.png', fullPage: true });

});







test('TC04 Export Task Single ', async ({ page }) => {


  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();


  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Download/TS03-Transaction View/01.Export Task Single.csv');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/01.Export Single Task.png', fullPage: true });
});

test('TC04 Export Task Multi ', async ({ page }) => {
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  await page.locator('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  await page.locator('#mat-checkbox-7 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Download/TS03-Transaction View/02.Export Task Multi.csv');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/02.Export Multi Task.png', fullPage: true });


});



// test('TC04 Export Task All ', async ({ page }) => {

//   await page.locator('.mat-checkbox-inner-container').first().click();
//   const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('button', { name: 'Export' }).click();
//   const download = await downloadPromise;
//   // Save downloaded file somewhere
//   await download.saveAs('Download/TS03-Transaction View/03.Export Task All.csv');
//   await page.waitForTimeout(2800);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/03.Export All Task.png', fullPage: true });

// });







test('TC04 Export Proof of Payment Single ', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-2').click();
  await page.getByRole('button', { name: 'Proof of Payment' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download proof of payment' })).toHaveText('You are going to download proof of payment');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/04.Proof of Payment Single Task Compressing.png', fullPage: true });
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Download/TS03-Transaction View/04.Receipts Single.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/05.Proof of Payment Single Task.png', fullPage: true });

});




test('TC04 Export Proof of Payment Multi ', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-3').click();
  await page.locator('#mat-checkbox-5').click();
  await page.locator('#mat-checkbox-7').click();
  await page.getByRole('button', { name: 'Proof of Payment' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download proof of payment' })).toHaveText('You are going to download proof of payment');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/06.Proof of Payment Multi Task Compressing.png', fullPage: true });
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Download/TS03-Transaction View/05.Receipts Multi.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/07.Proof of Payment Multi Task.png', fullPage: true });

});










// test('TC04 Export Proof of Payment All ', async ({ page }) => {

//   await page.getByPlaceholder('Status').click();
//   await page.getByRole('option', { name: 'Completed' }).click();
//   await page.getByRole('button', { name: 'Search' }).click();
//   await page.locator('.mat-checkbox-inner-container').first().click();
//   await page.getByRole('button', { name: 'Proof of Payment' }).click();
//   await expect(page.getByRole('heading', { name: 'You are going to download proof of payment' })).toHaveText('You are going to download proof of payment');
//   await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
//   await page.getByRole('button', { name: 'Go to Downloads' }).click();
//   await page.waitForURL('http://gestamp.ddns.net/gestamp/downloads')
//   await page.waitForTimeout(800);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/08.Proof of Payment All Task Compressing.png', fullPage: true });
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Refresh' }).click();
//   const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
//   const download = await downloadPromise;
//   // Save downloaded file somewhere
//   await download.saveAs('Download/TS03-Transaction View/06.Receipts All.rar');
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/09.Proof of Payment All Task.png', fullPage: true });
  
// });


