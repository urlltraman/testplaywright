
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs Uat

  await page.goto('/auth/login');
  await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Transaction ' }).click();
});



// test.beforeEach(async ({ page }) => {
//   // Runs Dev

//   await page.goto('/auth/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//   await page.locator('input[name="password"]').fill('P@ssw0rd');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   // await page.getByRole('button', { name: 'Accept' }).click();
//   await page.getByRole('link', { name: 'Transaction ' }).click();
//   await page.waitForURL('https://gestamp.ddns.net/transactions');
// });





test('TC01 Transaction View ', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByText('Payment', { exact: true }).click();
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



test('TC02 Search E-Document No. ', async ({ page }) => {

  // e-doc
  await page.getByLabel('E-Document No.').fill('00100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.E-Document No/01.Search E-Doc.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract No. ', async ({ page }) => {
  // contract no

  await page.getByLabel('Contract No.').fill('abc');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02.Contract No/01.Search Contract No.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : All Status', async ({ page }) => {
  // status
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'All Status' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/01.Search All Status.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Submit Error', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submit Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/02.Search Submit Error.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Filing Error', async ({ page }) => {


  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Filing Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/03.Search Filing Error.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Payment Error', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Payment Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/04.Search Payment Error.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Status : Receipt Error', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Receipt Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/05.Search Receipt Error.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Status : Preparing', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Preparing' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/06.Search Preparing.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Rejected', async ({ page }) => {


  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/07.Search Rejected.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Status : Reviewing', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByText('Reviewing').click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/08.Search Reviewing.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Submitted', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submitted' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/09.Search Submitted.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Payment', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByText('Payment', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/10.Search Payment.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Status : Completed', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/11.Search Completed.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Tax Id ', async ({ page }) => {
  // tax id
  await page.getByLabel('Party Tax ID').fill('1721000011382');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04.Tax ID/01.Search Tax ID.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search First Name ', async ({ page }) => {
  // first name
  await page.getByLabel('Party First Name').fill('Sopita');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05.First Name/01.Search First Name.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Last Name ', async ({ page }) => {

  // last name
  await page.getByLabel('Party Last Name').fill('Saetong');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/06.Last Name/16.Search Last Name.png' });
  await page.waitForTimeout(1000);

});





test('TC02 Search Contract Type All ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/01.Search Contract Type All.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Contract Type 1 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '1 เช่าที่ดิน โรงเรือน สิ่งปลูกสร้างอย่างอื่น หรือแพ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/02.Search Contract Type 1.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 2 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '2 โอนใบหุ้น ใบหุ้นกู้ พันธบัตร ใบรับรองหนี้ฯ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/03.Search Contract Type 2.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 3 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '3 เช่าซื้อทรัพย์สิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/04.Search Contract Type 3.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Contract Type 4 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '4 จ้างทำของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/05.Search Contract Type 4.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 5 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '5 กู้ยืมเงิน หรือการตกลงให้เบิกเงินเกินบัญชีจากธนาคาร' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/06.Search Contract Type 5.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Contract Type 6', async ({ page }) => {

  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '6 กรมธรรม์ประกันภัย' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/07.Search Contract Type 6.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 7 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '7 ใบมอบอำนาจ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/08.Search Contract Type 7.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 8 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '8 ใบมอบฉันทะสำหรับให้ลงมติ ในที่ประชุมของบริษัท' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/09.Search Contract Type 8.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 91 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '9.(1) ตั๋วแลกเงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/10.Search Contract Type 91.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 92 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '9.(2) ตั๋วสัญญาใช้เงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/11.Search Contract Type 92.png' });
  await page.waitForTimeout(1000);


});

test('TC02 Search Contract Type 10 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '10 บิลออฟเลดิง (ใบตราส่งสินค้า)' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/12.Search Contract Type 10.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Contract Type 111', async ({ page }) => {

  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '11.(1) ใบหุ้น ใบหุ้นกู้หรือใบรับรองหนี้ฯ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/13.Search Contract Type 111.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 112 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '11.(2) พันธบัตรของรัฐบาลใด ๆ ที่ขายในประเทศไทย' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/14.Search Contract Type 112.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Contract Type 12 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '12 เช็ค' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/15.Search Contract Type 12.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 13 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '13 ใบรับฝากเงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/16.Search Contract Type 13.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Contract Type 14 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '14 เลตเตอร์ออฟเครดิต' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/17.Search Contract Type 14.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 15 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '15 เช็คสำหรับผู้เดินทาง' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/18.Search Contract Type 15.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Contract Type 16', async ({ page }) => {

  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '16 ใบรับของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/19.Search Contract Type 16.png' });
  await page.waitForTimeout(1000);
});


test('TC02 Search Contract Type 17 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '17 ค้ำประกัน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/20.Search Contract Type 17.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 18 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '18 จำนำ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/21.Search Contract Type 18.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 19 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '19 ใบรับของคลังสินค้า' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/22.Search Contract Type 19.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Contract Type 20 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '20 คำสั่งให้ส่งมอบของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/23.Search Contract Type 20.png' });
  await page.waitForTimeout(1000);
});


test('TC02 Search Contract Type 21', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '21 ตัวแทน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/24.Search Contract Type 21.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Contract Type 23 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '23 คู่ฉบับหรือคู่ฉีกแห่งตราสาร' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/25.Search Contract Type 23.png' });
  await page.waitForTimeout(1000);
});


test('TC02 Search Contract Type 271 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '27.(ก) หนังสือสัญญาจัดตั้งห้างหุ้นส่วน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/26.Search Contract Type 271.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search Contract Type 272 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '27.(ข) หนังสือสัญญาที่แก้ไขสัญญาจัดตั้งห้างหุ้นส่วน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/27.Search Contract Type 272.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Contract Type 28 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(2000);
  // contract type
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '28.(ค) ใบรับสำหรับการขาย ขายฝาก ให้เช่าซื้อ หรือโอนกรรมสิทธิยานพาหนะ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(7000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/28.Search Contract Type 28.png' });
  await page.waitForTimeout(1000);
});


test('TC02 Search Year All ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Year').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/01.Search Year All.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Year 2023 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Year').click();
  await page.getByRole('option', { name: '2023' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/02.Search Year 2023.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Year 2024 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Year').click();
  await page.getByRole('option', { name: '2024' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/03.Search Year 2024.png' });
  await page.waitForTimeout(1000);


});



test('TC02 Search Year 2025 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Year').click();
  await page.getByRole('option', { name: '2025' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/04.Search Year 2025.png' });
  await page.waitForTimeout(1000);


});



test('TC02 Search Year 2026 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Year').click();
  await page.getByRole('option', { name: '2026' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/08.Year/05.Search Year 2026.png' });
  await page.waitForTimeout(1000);


});


test('TC02 Search Month All ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/01.Search Month All.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Month 1 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'January' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/02.Search Month January.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Month 2 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'February' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/03.Search Month February.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Month 3 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'March' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/04.Search Month March.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Month 4', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'April' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/05.Search Month April.png' });
  await page.waitForTimeout(1000);


});



test('TC02 Search Month 5 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'May' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/06.Search Month May.png' });
  await page.waitForTimeout(1000);
});



test('TC02 Search Month 6 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'June' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/07.Search Month June.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Month 7 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'July' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/08.Search Month July.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Month 8', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'August' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/09.Search Month August.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Month 9 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'September' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/10.Search Month September.png' });
  await page.waitForTimeout(1000);
});



test('TC02 Search Month 10 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'October' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/11.Search Month October.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Month 11 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'November' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/12.Search Month November.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Month 12 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'December' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/13.Search Month December.png' });
  await page.waitForTimeout(1000);
});




test('TC02 Search Submit Type 1', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  //Submit Type
  await page.getByText('AllSubmit Type').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/01.Search Submit Type All.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Submit Type 2', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  await page.getByText('AllSubmit Type').click();
  await page.getByRole('option', { name: 'Normal' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(25000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/02.Search Submit Type Normal.png' });
  await page.waitForTimeout(1000);
});

test('TC02 Search Submit Type 3', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.waitForTimeout(1000);
  await page.getByText('AllSubmit Type').click();
  await page.getByRole('option', { name: 'Additional' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/03.Search Submit Type Additional.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Creation Date From', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();

  // Creation Date From
  await page.locator('div').filter({ hasText: /^Creation Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/12.Creation Date From/01.Search Creation Date From.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Creation Date To', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();


  //Creation Date To
  await page.locator('div').filter({ hasText: /^Creation Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/13.Creation Date To/01.Search Creation Date To.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search Form Submit No', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();

  //Form Submit No.
  await page.getByLabel('Form Submit No.').fill('31');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/14.Submit No/01.Search Form Submit No.png' });
  await page.waitForTimeout(1000);

});

test('TC02 Search SD Payment Code', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();

  //SD Payment Code
  await page.getByLabel('SD Payment Code').fill('00316607240547866553');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/15.SD Payment Code/01.Search SD Payment Code.png' });
  await page.waitForTimeout(1000);

});




test('TC02 Search Receipt No.', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();

  //Receipt No.
  await page.getByLabel('Receipt No.').fill('66100122710');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/16.Receipt No/01.Search Receipt No.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date From', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();


  //Receipt Date From
  await page.locator('div').filter({ hasText: /^Receipt Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('27 July 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17.Receipt Date From/01.Search Receipt Date From.png' });
  await page.waitForTimeout(1000);

});


test('TC02 Search Receipt Date To', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  //Receipt Date To
  await page.locator('div').filter({ hasText: /^Receipt Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('24 July 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18.Receipt Date From/01.Search Receipt Date To.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search All Filters', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  // All Filters
  await page.getByLabel('E-Document No.').fill('00100000000TC1-090371232023080301');
  await page.getByLabel('Contract No.').fill('TC1-09037123');
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByLabel('Party Tax ID').fill('1721000011382');
  await page.getByLabel('Party First Name').fill('รัชชานนท์');
  await page.getByLabel('Party Last Name').fill('แพรวพรายรัตน์');
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '1 เช่าที่ดิน โรงเรือน สิ่งปลูกสร้างอย่างอื่น หรือแพ' }).click();
  await page.getByText('AllSubmit Year').click();
  await page.getByRole('option', { name: '2023' }).click();
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'August' }).click();
  await page.getByText('AllSubmit Type').click();
  await page.getByText('Normal').click();
  await page.getByLabel('Form Submit No.').fill('P');
  await page.getByLabel('SD Payment Code').fill('82296609010794881962');
  await page.locator('div').filter({ hasText: /^Creation Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('1 July 2023', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Creation Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('31 August 2023', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Receipt Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('1 July 2023', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Receipt Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('September 2023').click();
  await page.getByLabel('1 September 2023', { exact: true }).click();
  await page.getByLabel('Receipt No.').fill('66100145135');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19.All Filters/01.Search All Filters.png' });
  await page.waitForTimeout(1000);

});



test('TC02 Search No Input Data', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(20000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19.All Filters/02.Search No Input Data.png' });
  await page.waitForTimeout(1000);
});





test('TC03 Click Next And Previous Page  ', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByText('Payment', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
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
  // await page.getByPlaceholder('Status').click();
  // await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  // await page.getByLabel('Contract No.').fill('100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-52 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
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
  // await page.getByPlaceholder('Status').click();
  // await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  // await page.getByLabel('Contract No.').fill('100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-53 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  await page.locator('#mat-checkbox-55 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  await page.locator('#mat-checkbox-57 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
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
  // await page.getByPlaceholder('Status').click();
  // await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(1000);
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.locator('select').selectOption('10');
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
  await page.locator('select').selectOption('150');
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
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-2').click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Receipts' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download receipts' })).toHaveText('You are going to download receipts');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('https://gestamp.ddns.net/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/19.Receipts Single Task Compressing.png' });
  await page.reload();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamkittisak10@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/20.Receipts Single.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/21.Receipts Single Task.png' });
  await page.waitForTimeout(1000);

});




test('TC04 Export Receipts Multi ', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-3').click();
  await page.locator('#mat-checkbox-5').click();
  await page.waitForTimeout(500);
  // await page.locator('#mat-checkbox-7').click();
  await page.getByRole('button', { name: 'Receipts' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download receipts' })).toHaveText('You are going to download receipts');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('https://gestamp.ddns.net/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/22.Receipts Multi Task Compressing.png' });
  await page.reload();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamkittisak10@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/23.Receipts Multi.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/24.Receipts Multi Task.png' });
  await page.waitForTimeout(1000);

});










test('TC04 Export Receipts All ', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.getByRole('button', { name: 'Receipts' }).click();
  await expect(page.getByRole('heading', { name: 'You are going to download receipts' })).toHaveText('You are going to download receipts');
  await expect(page.getByRole('heading', { name: 'Ready to start..' })).toHaveText('Ready to start..');
  await page.getByRole('button', { name: 'Go to Downloads' }).click();
  await page.waitForURL('https://gestamp.ddns.net/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/25.Receipts 50 Task Compressing.png' });
  await page.waitForTimeout(15000);
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.waitForTimeout(5000);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamkittisak10@gmail.com' }).first().getByRole('button').nth(1).click();
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

  // await page.getByPlaceholder('Status').click();
  // await page.getByText('Payment', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(3000);
  await page.keyboard.press('End');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC06 Click Up To/01.Before Click.png' });
  await page.getByRole('img', { name: 'Stockholm-icons / Navigation / Up-2' }).click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC06 Click Up To/02.After Click.png' });
  await page.waitForTimeout(1000);


});



test('TC07 Click E-Document No. ', async ({ page }) => {

  // await page.getByPlaceholder('Status').click();
  // await page.getByText('Completed', { exact: true }).click();
  await page.getByLabel('Contract No.').fill('ABC10003');
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: '001000000000000ABC1000320231101' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('dialog').getByText('E-Document No.'))
    .toHaveText('E-Document No.');
  await expect(page.getByRole('dialog').getByText('001000000000000ABC1000320231101'))
    .toHaveText('001000000000000ABC1000320231101');
  await expect(page.getByText('Contract No.ABC10003')).toHaveText('Contract No.ABC10003');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC07 Click E-Document No/01.E-Document Details.png' });
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC07 Click E-Document No/02.After Click Close.png' });
  await page.waitForTimeout(1000);

});




test('TC08 Clear Filters', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByRole('button', { name: 'Less filters' })).toBeEnabled();
  // All Filters
  await page.getByLabel('E-Document No.').fill('00100000000TC1-090371232023080301');
  await page.getByLabel('Contract No.').fill('TC1-09037123');
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByLabel('Party Tax ID').fill('1721000011382');
  await page.getByLabel('Party First Name').fill('รัชชานนท์');
  await page.getByLabel('Party Last Name').fill('แพรวพรายรัตน์');
  await page.getByLabel('Contract Type').click();
  await page.getByRole('option', { name: '1 เช่าที่ดิน โรงเรือน สิ่งปลูกสร้างอย่างอื่น หรือแพ' }).click();
  await page.getByText('AllSubmit Year').click();
  await page.getByRole('option', { name: '2023' }).click();
  await page.getByText('AllSubmit Month').click();
  await page.getByRole('option', { name: 'August' }).click();
  await page.getByText('AllSubmit Type').click();
  await page.getByText('Normal').click();
  await page.getByLabel('Form Submit No.').fill('P');
  await page.getByLabel('SD Payment Code').fill('82296609010794881962');
  await page.locator('div').filter({ hasText: /^Creation Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('1 July 2023', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Creation Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('31 August 2023', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Receipt Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('1 July 2023', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Receipt Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByRole('button', { name: '2023' }).click();
  await page.getByLabel('September 2023').click();
  await page.getByLabel('1 September 2023', { exact: true }).click();
  await page.getByLabel('Receipt No.').fill('66100145135');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Clear Filters/01.All Filters.png' });
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Clear Filters' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC08 Clear Filters/02.Click Clear Filters.png' });
  await page.waitForTimeout(1000);


});
