// @ts-nocheck
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.

  await page.goto('https://gestamp.ddns.net/gestamp/auth/login');
  await page.locator('input[name="email"]').fill('test.gamkittisak10@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!234');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Transaction ' }).click();
  await page.waitForURL('https://gestamp.ddns.net/gestamp/transactions');
});


// const { test, expect } = require('@playwright/test');
// test.use({ storageState: 'playwright/.auth/T1.json' });




// test.beforeEach(async ({ page }) => {
//     // Runs before each test and signs in each page.
//     await page.goto('https://gestamp.ddns.net/gestamp/transactions');
// });




test('TC01 Transaction View ', async ({ page }) => {
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/01.Transaction View.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '50' }).locator('span').click();
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/02.Rows per page 50.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '100' }).click();
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/03.Rows per page 100.png' });
  await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
  await page.getByRole('option', { name: '200' }).click();
  await page.waitForTimeout(5000);
  await page.getByText('Rows per page').hover();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC01 Transaction View/04.Rows per page 200.png' });
});



test('TC02 Search E-Document No. ', async ({ page }) => {

  // e-doc
  await page.getByLabel('E-Document No.').fill('00100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/01.E-Document No/01.Search E-Doc.png' });

});

test('TC02 Search Contract No. ', async ({ page }) => {
  // contract no

  await page.getByLabel('Contract No.').fill('ABC');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/02.Contract No/01.Search Contract No.png' });

});


test('TC02 Search Status : All Status', async ({ page }) => {
  // status
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'All Status' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/01.Search All Status.png' });

});


test('TC02 Search Status : Submit Error', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submit Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/02.Search Submit Error.png' });

});


test('TC02 Search Status : Filing Error', async ({ page }) => {


  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Filing Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/03.Search Filing Error.png' });

});


test('TC02 Search Status : Payment Error', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Payment Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/04.Search Payment Error.png' });


});


test('TC02 Search Status : Receipt Error', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Receipt Error' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/05.Search Receipt Error.png' });


});


test('TC02 Search Status : Preparing', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Preparing' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/06.Search Preparing.png' });
});


test('TC02 Search Status : Rejected', async ({ page }) => {


  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Rejected' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/07.Search Rejected.png' });


});


test('TC02 Search Status : Reviewing', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByText('Reviewing').click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/08.Search Reviewing.png' });

});


test('TC02 Search Status : Submitted', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Submitted' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/09.Search Submitted.png' });

});


test('TC02 Search Status : Payment', async ({ page }) => {

  await page.getByPlaceholder('Status').click();
  await page.getByText('Payment', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/10.Search Payment.png' });

});


test('TC02 Search Status : Completed', async ({ page }) => {
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/03.Status/11.Search Completed.png' });

});

test('TC02 Search Tax Id ', async ({ page }) => {
  // tax id
  await page.getByLabel('Party Tax ID').fill('0107537002273');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/04.Tax ID/01.Search Tax ID.png' });

});

test('TC02 Search First Name ', async ({ page }) => {
  // first name
  await page.getByLabel('Party First Name').fill('Sopita');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/05.First Name/01.Search First Name.png' });

});

test('TC02 Search Last Name ', async ({ page }) => {

  // last name
  await page.getByLabel('Party Last Name').fill('Saetong');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/06.Last Name/16.Search Last Name.png' });

});




test('TC02 Search Contract Type All ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/01.Search Contract Type All.png' });


});




test('TC02 Search Contract Type 1 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '1 เช่าที่ดิน โรงเรือน สิ่งปลูกสร้างอย่างอื่น หรือแพ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/02.Search Contract Type 1.png' });
});

test('TC02 Search Contract Type 2 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '2 โอนใบหุ้น ใบหุ้นกู้ พันธบัตร ใบรับรองหนี้ฯ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/03.Search Contract Type 2.png' });

});

test('TC02 Search Contract Type 3 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '3 เช่าซื้อทรัพย์สิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/04.Search Contract Type 3.png' });
});

test('TC02 Search Contract Type 4 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '4 จ้างทำของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/05.Search Contract Type 4.png' });

});

test('TC02 Search Contract Type 5 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '5 กู้ยืมเงิน หรือการตกลงให้เบิกเงินเกินบัญชีจากธนาคาร' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/06.Search Contract Type 5.png' });

});



test('TC02 Search Contract Type 6', async ({ page }) => {

  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '6 กรมธรรม์ประกันภัย' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/07.Search Contract Type 6.png' });

});

test('TC02 Search Contract Type 7 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '7 ใบมอบอำนาจ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/08.Search Contract Type 7.png' });

});

test('TC02 Search Contract Type 8 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '8 ใบมอบฉันทะสำหรับให้ลงมติ ในที่ประชุมของบริษัท' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/09.Search Contract Type 8.png' });

});

test('TC02 Search Contract Type 91 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '9.(1) ตั๋วแลกเงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/10.Search Contract Type 91.png' });

});

test('TC02 Search Contract Type 92 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '9.(2) ตั๋วสัญญาใช้เงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/11.Search Contract Type 92.png' });


});

test('TC02 Search Contract Type 10 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '10 บิลออฟเลดิง (ใบตราส่งสินค้า)' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/12.Search Contract Type 10.png' });

});



test('TC02 Search Contract Type 111', async ({ page }) => {

  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '11.(1) ใบหุ้น ใบหุ้นกู้หรือใบรับรองหนี้ฯ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/13.Search Contract Type 111.png' });

});

test('TC02 Search Contract Type 112 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '11.(2) พันธบัตรของรัฐบาลใด ๆ ที่ขายในประเทศไทย' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/14.Search Contract Type 112.png' });
});

test('TC02 Search Contract Type 12 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '12 เช็ค' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/15.Search Contract Type 12.png' });

});

test('TC02 Search Contract Type 13 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '13 ใบรับฝากเงิน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/16.Search Contract Type 13.png' });
});

test('TC02 Search Contract Type 14 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '14 เลตเตอร์ออฟเครดิต' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/17.Search Contract Type 14.png' });

});

test('TC02 Search Contract Type 15 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '15 เช็คสำหรับผู้เดินทาง' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/18.Search Contract Type 15.png' });

});



test('TC02 Search Contract Type 16', async ({ page }) => {

  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '16 ใบรับของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/19.Search Contract Type 16.png' });
});
test('TC02 Search Contract Type 17 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '17 ค้ำประกัน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/20.Search Contract Type 17.png' });

});

test('TC02 Search Contract Type 18 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '18 จำนำ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/21.Search Contract Type 18.png' });
});

test('TC02 Search Contract Type 19 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '19 ใบรับของคลังสินค้า' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/22.Search Contract Type 19.png' });
});


test('TC02 Search Contract Type 20 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '20 คำสั่งให้ส่งมอบของ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/23.Search Contract Type 20.png' });
});


test('TC02 Search Contract Type 21', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '21 ตัวแทน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/24.Search Contract Type 21.png' });
});

test('TC02 Search Contract Type 23 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '23 คู่ฉบับหรือคู่ฉีกแห่งตราสาร' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/25.Search Contract Type 23.png' });
});
test('TC02 Search Contract Type 271 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '27.(ก) หนังสือสัญญาจัดตั้งห้างหุ้นส่วน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/26.Search Contract Type 271.png' });

});

test('TC02 Search Contract Type 272 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '27.(ข) หนังสือสัญญาที่แก้ไขสัญญาจัดตั้งห้างหุ้นส่วน' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/27.Search Contract Type 272.png' });
});

test('TC02 Search Contract Type 28 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // contract type
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '28.(ค) ใบรับสำหรับการขาย ขายฝาก ให้เช่าซื้อ หรือโอนกรรมสิทธิยานพาหนะ' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/07.Contract Type/28.Search Contract Type 28.png' });
});



test('TC02 Search Month All ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/01.Search Month All.png' });
  
});



test('TC02 Search Month 1 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'January' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/02.Search Month January.png' });
  
});



test('TC02 Search Month 2 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'February' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/03.Search Month February.png' });
  
});



test('TC02 Search Month 3 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'March' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/04.Search Month March.png' });
});

test('TC02 Search Month 4', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'April' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/05.Search Month April.png' });
  
  
});



test('TC02 Search Month 5 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'May' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/06.Search Month May.png' });
});



test('TC02 Search Month 6 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'June' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/07.Search Month June.png' });
  
});



test('TC02 Search Month 7 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'July' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/08.Search Month July.png' });
});

test('TC02 Search Month 8', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'August' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/09.Search Month August.png' });
  
});



test('TC02 Search Month 9 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'September' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/10.Search Month September.png' });
});



test('TC02 Search Month 10 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'October' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/11.Search Month October.png' });
  
});



test('TC02 Search Month 11 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'November' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/12.Search Month November.png' });
  
});



test('TC02 Search Month 12 ', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  // month
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'December' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2500)
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/09.Month/13.Search Month December.png' });
});


test('TC02 Search Submit Type 1', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  //Submit Type
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/01.Search Submit Type All.png' });
});

test('TC02 Search Submit Type 2', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Normal' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/02.Search Submit Type Normal.png' });
});

test('TC02 Search Submit Type 3', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-14').click();
  await page.getByRole('option', { name: 'Additional' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/11.Submit Type/03.Search Submit Type Additional.png' });

});


test('TC02 Search Creation Date From', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();

  // Creation Date From
  await page.locator('div').filter({ hasText: /^Creation Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/12.Creation Date From/01.Search Creation Date From.png' });

});



test('TC02 Search Creation Date To', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();


  //Creation Date To
  await page.locator('div').filter({ hasText: /^Creation Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('2 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/13.Creation Date To/01.Search Creation Date To.png' });

});



test('TC02 Search Form Submit No', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();

  //Form Submit No.
  await page.getByLabel('Form Submit No.').fill('31');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/14.Submit No/01.Search Form Submit No.png' });

});

test('TC02 Search SD Payment Code', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();

  //SD Payment Code
  await page.getByLabel('SD Payment Code').fill('00316607240547866553');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/15.SD Payment Code/01.Search SD Payment Code.png' });

});




test('TC02 Search Receipt No.', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();

  //Receipt No.
  await page.getByLabel('Receipt No.').fill('66100122710');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/16.Receipt No/01.Search Receipt No.png' });

});


test('TC02 Search Receipt Date From', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();


  //Receipt Date From
  await page.locator('div').filter({ hasText: /^Receipt Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('27 July 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/17.Receipt Date From/01.Search Receipt Date From.png' });

});


test('TC02 Search Receipt Date To', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();



  //Receipt Date To
  await page.locator('div').filter({ hasText: /^Receipt Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('July 2023').click();
  await page.getByLabel('24 July 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/18.Receipt Date From/01.Search Receipt Date To.png' });

});



test('TC02 Search All Filters', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  // All Filters
  await page.getByLabel('E-Document No.').fill('00100000000TC1-090371232023080301');
  await page.getByLabel('Contract No.').fill('TC1-09037123');
  await page.getByPlaceholder('Status').click();
  await page.getByRole('option', { name: 'Completed' }).click();
  await page.getByLabel('Party Tax ID').fill('1721000011382');
  await page.getByLabel('Party First Name').fill('รัชชานนท์');
  await page.getByLabel('Party Last Name').fill('แพรวพรายรัตน์');
  await page.locator('#mat-select-8').click();
  await page.getByRole('option', { name: '1 เช่าที่ดิน โรงเรือน สิ่งปลูกสร้างอย่างอื่น หรือแพ' }).click();
  await page.locator('#mat-select-10').click();
  await page.getByRole('option', { name: '2023' }).click();
  await page.locator('#mat-select-12').click();
  await page.getByRole('option', { name: 'August' }).click();
  await page.locator('#mat-select-14').click();
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

});



test('TC02 Search No Input Data', async ({ page }) => {
  // click more filters
  await page.getByRole('button', { name: 'More filters' }).click();
  await expect(page.getByText('AllContract TypeAllYearAllMonthAllSubmit TypeForm Submit No.SD Payment CodeCreat')).toBeEnabled();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(20000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC02 Search Transaction View/19.All Filters/02.Search No Input Data.png' });
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

  await page.screenshot({ path: 'Output/TS03-Transaction View/TC03 Click Next And Previous Page/04.100 Records Next Previous.png' });
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

  await page.getByLabel('Contract No.').fill('100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();


  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/02.Export Task Single.csv');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/01.Export Single Task.png' });
});

test('TC04 Export Task Multi ', async ({ page }) => {
  await page.getByLabel('Contract No.').fill('100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  await page.locator('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  await page.locator('#mat-checkbox-7 > .mat-checkbox-layout > .mat-checkbox-inner-container').check();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/04.Export Task Multi.csv');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/03.Export Multi Task.png' });


});



test('TC04 Export Task All ', async ({ page }) => {
  await page.getByLabel('Contract No.').fill('100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/06.Export 50 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/05.Export 50 Task.png' });
  await page.locator('div').filter({ hasText: /^50$/ }).nth(2).click();
  await page.getByRole('option', { name: '100' }).click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise2 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download2 = await downloadPromise2;
  // Save downloaded file somewhere
  await download2.saveAs('Output/TS03-Transaction View/TC04 Export/08.Export 100 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/07.Export 100 Task.png' });
  await page.locator('div').filter({ hasText: /^100$/ }).nth(2).click();
  await page.getByRole('option', { name: '200' }).click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  const downloadPromise3 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download3 = await downloadPromise3;
  // Save downloaded file somewhere
  await download3.saveAs('Output/TS03-Transaction View/TC04 Export/10.Export 200 Task .csv');
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/09.Export 200 Task.png' });

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
  await page.waitForURL('https://gestamp.ddns.net/gestamp/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/11.Receipts Single Task Compressing.png' });
  await page.reload();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamkittisak10@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/12.Receipts Single.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/13.Receipts Single Task.png' });

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
  await page.waitForURL('https://gestamp.ddns.net/gestamp/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/14.Receipts Multi Task Compressing.png' });
  await page.reload();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Refresh' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamkittisak10@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/15.Receipts Multi.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/16.Receipts Multi Task.png' });

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
  await page.waitForURL('https://gestamp.ddns.net/gestamp/downloads')
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/17.Receipts 50 Task Compressing.png' });
  await page.waitForTimeout(15000);
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.waitForTimeout(5000);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: 'test.gamkittisak10@gmail.com' }).first().getByRole('button').nth(1).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS03-Transaction View/TC04 Export/18.Receipts 50.rar');
  await page.screenshot({ path: 'Output/TS03-Transaction View/TC04 Export/19.Receipts 50 Task.png' });

});

