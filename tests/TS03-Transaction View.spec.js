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
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/01.Transaction View.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '50' }).locator('span').click();
  await page.waitForTimeout(1500);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/02.Rows per page 50.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '100' }).click();
  await page.waitForTimeout(1500);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/03.Rows per page 100.png' });
  await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
  await page.getByRole('option', { name: '200' }).click();
  await page.waitForTimeout(1500);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/04.Rows per page 200.png' });
});



test('TC02 Search E-Document No. ', async ({ page }) => {

  // e-doc
  await page.getByLabel('E-Document No.').fill('00100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.E-Document No/01.Search E-Doc.png', fullPage: true });

});

test('TC02 Search Contract No. ', async ({ page }) => {
  // contract no

  await page.getByLabel('Contract No.').fill('ABC');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02.Contract No/01.Search Contract No.png', fullPage: true });

});


test('TC02 Search Status ', async ({ page }) => {
  // status
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'All Status' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/01.Search All Status.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submit Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/02.Search Submit Error.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Filing Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/03.Search Filing Error.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Payment Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/04.Search Payment Error.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Receipt Error' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/05.Search Receipt Error.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Preparing' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/06.Search Preparing.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/07.Search Rejected.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByText('Reviewing').click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/08.Search Reviewing.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submitted' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/09.Search Submitted.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByText('Payment', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/10.Search Payment.png', fullPage: true });
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/11.Search Completed.png', fullPage: true });

});

test('TC02 Search Tax Id ', async ({ page }) => {
  // tax id
  await page.getByLabel('Party Tax ID').fill('0107537002273');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04.Tax ID/01.Search Tax ID.png', fullPage: true });

});

test('TC02 Search First Name ', async ({ page }) => {
  // first name
  await page.getByLabel('Party First Name').fill('Sopita');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05.First Name/01.Search First Name.png', fullPage: true });

});

test('TC02 Search Last Name ', async ({ page }) => {

  // last name
  await page.getByLabel('Party Last Name').fill('Saetong');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/06.Last Name/16.Search Last Name.png', fullPage: true });

});



test('TC02 Search Contract Type', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/01.Search Contract Type All.png', fullPage: true });



  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '1 เช่าที่ดิน โรงเรือน สิ่งปลูกสร้างอย่างอื่น หรือแพ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/02.Search Contract Type 1.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '2 โอนใบหุ้น ใบหุ้นกู้ พันธบัตร ใบรับรองหนี้ฯ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/03.Search Contract Type 2.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '3 เช่าซื้อทรัพย์สิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/04.Search Contract Type 3.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '4 จ้างทำของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/05.Search Contract Type 4.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '5 กู้ยืมเงิน หรือการตกลงให้เบิกเงินเกินบัญชีจากธนาคาร' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/06.Search Contract Type 5.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '6 กรมธรรม์ประกันภัย' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/07.Search Contract Type 6.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '7 ใบมอบอำนาจ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/08.Search Contract Type 7.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '8 ใบมอบฉันทะสำหรับให้ลงมติ ในที่ประชุมของบริษัท' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/09.Search Contract Type 8.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '9.(1) ตั๋วแลกเงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/10.Search Contract Type 91.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '9.(2) ตั๋วสัญญาใช้เงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/11.Search Contract Type 92.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '10 บิลออฟเลดิง (ใบตราส่งสินค้า)' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/12.Search Contract Type 10.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '11.(1) ใบหุ้น ใบหุ้นกู้หรือใบรับรองหนี้ฯ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/13.Search Contract Type 111.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '11.(2) พันธบัตรของรัฐบาลใด ๆ ที่ขายในประเทศไทย' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/14.Search Contract Type 112.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '12 เช็ค' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/15.Search Contract Type 12.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '13 ใบรับฝากเงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/16.Search Contract Type 13.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '14 เลตเตอร์ออฟเครดิต' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/17.Search Contract Type 14.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '15 เช็คสำหรับผู้เดินทาง' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/18.Search Contract Type 15.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '16 ใบรับของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/19.Search Contract Type 16.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '17 ค้ำประกัน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/20.Search Contract Type 17.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '18 จำนำ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/21.Search Contract Type 18.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '19 ใบรับของคลังสินค้า' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/22.Search Contract Type 19.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '20 คำสั่งให้ส่งมอบของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/23.Search Contract Type 20.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '21 ตัวแทน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/24.Search Contract Type 21.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '23 คู่ฉบับหรือคู่ฉีกแห่งตราสาร' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/25.Search Contract Type 23.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '27.(ก) หนังสือสัญญาจัดตั้งห้างหุ้นส่วน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/26.Search Contract Type 271.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '27.(ข) หนังสือสัญญาที่แก้ไขสัญญาจัดตั้งห้างหุ้นส่วน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/27.Search Contract Type 272.png', fullPage: true });
  
  
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '28.(ค) ใบรับสำหรับการขาย ขายฝาก ให้เช่าซื้อ หรือโอนกรรมสิทธิยานพาหนะ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/28.Search Contract Type 28.png', fullPage: true });
  
  

});


test('TC02 Search Year', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();
  // year
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/01.Search Year All.png', fullPage: true });
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2026' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/05.Search Year 2026.png', fullPage: true });
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2025' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/04.Search Year 2025.png', fullPage: true });
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2024' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/03.Search Year 2024.png', fullPage: true });
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2023' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/02.Search Year 2023.png', fullPage: true });

});

test('TC02 Search Month', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/01.Search Month All.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'January' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/02.Search Month January.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'February' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/03.Search Month February.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'March' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/04.Search Month March.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'April' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/05.Search Month April.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'May' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/06.Search Month May.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'June' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/07.Search Month June.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'July' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/08.Search Month July.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'August' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/09.Search Month August.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'September' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/10.Search Month September.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'October' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/11.Search Month October.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'November' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/12.Search Month November.png', fullPage: true });
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'December' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/13.Search Month December.png', fullPage: true });

});




test('TC02 Search Period Submit', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();

  // period submit
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/10.Period Submit/01.Search Period Submit All.png', fullPage: true });
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 1' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/10.Period Submit/02.Search Period Submit Round 1.png', fullPage: true });
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 2' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/10.Period Submit/03.Search Period Submit Round 2.png', fullPage: true });
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 3' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/10.Period Submit/04.Search Period Submit Round 3.png', fullPage: true });
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Round 4' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/10.Period Submit/05.Search Period Submit Round 4.png', fullPage: true });

});

test('TC02 Search Submit Type', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();

  //Submit Type
  await page.locator('#mat-select-16').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/01.Search Submit Type All.png', fullPage: true });
  await page.locator('#mat-select-16').click();
  await page.getByRole('option', { name: 'Normal' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/02.Search Submit Type Normal.png', fullPage: true });
  await page.locator('#mat-select-16').click();
  await page.getByRole('option', { name: 'Additional' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/03.Search Submit Type Additional.png', fullPage: true });

});





test('TC02 Search Creation Date From', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();

  // Creation Date From
  await page.locator('div').filter({ hasText: /^Creation Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/12.Creation Date From/01.Search Creation Date From.png', fullPage: true });

});



test('TC02 Search Creation Date To', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();


  //Creation Date To
  await page.locator('div').filter({ hasText: /^Creation Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/13.Creation Date To/01.Search Creation Date To.png', fullPage: true });

});



test('TC02 Search Form Submit No', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();

  //Form Submit No.
  await page.getByLabel('Form Submit No.').fill('31');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/14.Submit No/01.Search Form Submit No.png', fullPage: true });

});

test('TC02 Search SD Payment Code', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();

  //SD Payment Code
  await page.getByLabel('SD Payment Code').fill('00316607240547866553');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/15.SD Payment Code/01.Search SD Payment Code.png', fullPage: true });

});




test('TC02 Search Receipt No.', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();

  //Receipt No.
  await page.getByLabel('Receipt No.').fill('66100122710');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/16.Receipt No/01.Search Receipt No.png', fullPage: true });

});


test('TC02 Search Receipt Date From', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(800);
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();


  //Receipt Date From
  await page.locator('div').filter({ hasText: /^Receipt Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('27 July 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17.Receipt Date From/01.Search Receipt Date From.png', fullPage: true });

});


test('TC02 Search Receipt Date To', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();



  //Receipt Date To
  await page.locator('div').filter({ hasText: /^Receipt Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('24 July 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18.Receipt Date From/01.Search Receipt Date To.png', fullPage: true });

});



test('TC02 Search All Filters', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(800);
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();
  // All Filters
  await page.getByLabel('E-Document No.').fill('017');
  await page.getByLabel('Contract No.').fill('MTC17');
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByLabel('Party Tax ID').fill('1721000011382');
  await page.getByLabel('Party First Name').fill('Sopita');
  await page.getByLabel('Party Last Name').fill('Sugsa');
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '17 ค้ำประกัน' }).click();
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
  await page.getByLabel('Form Submit No.').fill('P');
  await page.getByLabel('SD Payment Code').fill('822966072');
  await page.getByLabel('Receipt No.').fill('66100123');
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
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/58.Search All Filters.png', fullPage: true });

});



test('TC02 Search No Input Data', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllPeriod SubmitAllSubmit TypeForm Submit No.Crea')).toBeEnabled();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/59.Search No Input Data.png', fullPage: true });
});





test('TC03 Click Next And Previous Page  ', async ({ page }) => {

  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('Next page').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/01.50 Records Next Page.png' });
  await page.getByLabel('Previous page').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/02.50 Records Next Previous.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '100' }).click();
  await page.getByLabel('Next page').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();

  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/03.100 Records Next Page.png' });
  await page.getByLabel('Previous page').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();

  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/04.100 Records Next Previous.png'});
  await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
  await page.getByRole('option', { name: '200' }).click();
  await page.getByLabel('Next page').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();

  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/05.200 Records Next Page.png' });
  await page.getByLabel('Previous page').click();
  await page.waitForTimeout(1800);
  await page.getByText('Rows per page').hover();

  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/06.200 Records Next Previous.png' });

});







test('TC04 Export Task Single ', async ({ page }) => {


  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();


  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/02.Export Task Single.csv');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/01.Export Single Task.png' });
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
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/04.Export Task Multi.csv');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/03.Export Multi Task.png' });


});



// test('TC04 Export Task All ', async ({ page }) => {

//   await page.locator('.mat-checkbox-inner-container').first().click();
//   const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('button', { name: 'Export' }).click();
//   const download = await downloadPromise;
//   // Save downloaded file somewhere
//   await download.saveAs('Output/TS03-Transaction View/TC04 Export/06.Export Task All.csv');
//   await page.waitForTimeout(2800);
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/05.Export All Task.png', fullPage: true });

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
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/07.Proof of Payment Single Task Compressing.png'});
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/08.Receipts Single.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/09.Proof of Payment Single Task.png' });

});




test('TC04 Export Proof of Payment Multi ', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-3').click();
  await page.locator('#mat-checkbox-5').click();
  await page.waitForTimeout(500);
  // await page.locator('#mat-checkbox-7').click();
  await page.getByRole('button', { name: 'Proof of Payment' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download proof of payment' })).toHaveText('You are going to download proof of payment');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('http://gestamp.ddns.net/gestamp/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/10.Proof of Payment Multi Task Compressing.png', fullPage: true });
  await page.reload();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/11.Receipts Multi.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/12.Proof of Payment Multi Task.png', fullPage: true });

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
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/13.Proof of Payment All Task Compressing.png', fullPage: true });
//   await page.waitForTimeout(800);
//   await page.getByRole('button', { name: 'Refresh' }).click();
//   const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
//   const download = await downloadPromise;
//   // Save downloaded file somewhere
//   await download.saveAs('Output/TS03-Transaction View/TC04 Export/14.Receipts All.rar');
//   await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/15.Proof of Payment All Task.png', fullPage: true });
  
// });













