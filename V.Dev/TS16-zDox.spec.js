import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs Uat

  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
  await page.locator('input[name="password"]').fill('ZXcv.!2345');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // await page.getByRole('button', { name: 'Accept' }).click();

});



// test.beforeEach(async ({ page }) => {
//   // Runs Dev

//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//   await page.locator('input[name="password"]').fill('ZXcv.!2345');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   // await page.getByRole('button', { name: 'Accept' }).click();

// });


test('TC01 zDOX File Support XLSX ', async ({ page }) => {

  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.locator('div').filter({ hasText: /^File Name$/ }).nth(2).click();
  await page.getByLabel('File Name').fill('Auto_zDOX');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_zDOX_FileSupportXLSX' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/01. XLSX/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_zDOX_FileSupportXLSX ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/01. XLSX/02.Upload Details.png', fullPage: true });
  await page.getByText('Submit For Review').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_zDOX_FileSupportXLSX ').first().click();
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
  await page.getByText('Auto_zDOX_FileSupportXLSX ').first().click();
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: 'QR' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS16-zDOX/TC01 Files Support/01. XLSX/04.qrPayment.jpg');
  await page.reload();
  await page.waitForTimeout(1500);
  await page.goto('/batch');
  await page.getByText('Auto_zDOX_FileSupportXLSX ').first().click();
  // download 2
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Pay-in' }).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS16-zDOX/TC01 Files Support/01. XLSX/05.payInSlipFile.pdf');
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/01. XLSX/03.API.png', fullPage: true });
  await page.waitForTimeout(1500);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.getByRole('row', { name: 'Auto_zDOX_FileSupportXLSX ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_zDOX_FileSupportXLSX  ' })).toBeHidden();
  await page.waitForTimeout(1800);


});



test('TC01 zDOX File Support JSON ', async ({ page }) => {

  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.locator('div').filter({ hasText: /^File Name$/ }).nth(2).click();
  await page.getByLabel('File Name').fill('Auto_zDOX');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_zDOX_FileSupportJSON' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/02. JSON/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_zDOX_FileSupportJSON ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/02. JSON/02.Upload Details.png', fullPage: true });
  await page.getByText('Submit For Review').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_zDOX_FileSupportJSON ').first().click();
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
  await page.getByText('Auto_zDOX_FileSupportJSON ').first().click();
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: 'QR' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS16-zDOX/TC01 Files Support/02. JSON/04.qrPayment.jpg');
  await page.reload();
  await page.waitForTimeout(1500);
  await page.goto('/batch');
  await page.getByText('Auto_zDOX_FileSupportJSON ').first().click();
  // download 2
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Pay-in' }).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS16-zDOX/TC01 Files Support/02. JSON/05.payInSlipFile.pdf');
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/02. JSON/03.API.png', fullPage: true });
  await page.waitForTimeout(1500);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.getByRole('row', { name: 'Auto_zDOX_FileSupportJSON ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_zDOX_FileSupportJSON  ' })).toBeHidden();
  await page.waitForTimeout(1800);


});



test('TC01 zDOX File Support CSV', async ({ page }) => {

  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.locator('div').filter({ hasText: /^File Name$/ }).nth(2).click();
  await page.getByLabel('File Name').fill('Auto_zDOX');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_zDOX_FileSupportCSV' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/03. CSV/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_zDOX_FileSupportCSV ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/03. CSV/02.Upload Details.png', fullPage: true });
  await page.getByText('Submit For Review').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_zDOX_FileSupportCSV ').first().click();
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
  await page.getByText('Auto_zDOX_FileSupportCSV ').first().click();
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: 'QR' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS16-zDOX/TC01 Files Support/03. CSV/04.qrPayment.jpg');
  await page.reload();
  await page.waitForTimeout(1500);
  await page.goto('/batch');
  await page.getByText('Auto_zDOX_FileSupportCSV ').first().click();
  // download 2
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Pay-in' }).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS16-zDOX/TC01 Files Support/03. CSV/05.payInSlipFile.pdf');
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/03. CSV/03.API.png', fullPage: true });
  await page.waitForTimeout(1500);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.getByRole('row', { name: 'Auto_zDOX_FileSupportCSV ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_zDOX_FileSupportCSV  ' })).toBeHidden();
  await page.waitForTimeout(1800);


});



test('TC01 zDOX File Support TXT', async ({ page }) => {

  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.locator('div').filter({ hasText: /^File Name$/ }).nth(2).click();
  await page.getByLabel('File Name').fill('Auto_zDOX');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  let mask_locator = await page.getByRole('row', { name: 'Auto_zDOX_FileSupportTXT' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/04. TXT/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
  await page.getByText('Auto_zDOX_FileSupportTXT ').first().click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/04. TXT/02.Upload Details.png', fullPage: true });
  await page.getByText('Submit For Review').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('/batch');
  await page.getByText('Search').click();
  await page.getByText('Auto_zDOX_FileSupportTXT ').first().click();
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
  await page.getByText('Auto_zDOX_FileSupportTXT ').first().click();
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: 'QR' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  // Save downloaded file somewhere
  await download.saveAs('Output/TS16-zDOX/TC01 Files Support/04. TXT/04.qrPayment.jpg');
  await page.reload();
  await page.waitForTimeout(1500);
  await page.goto('/batch');
  await page.getByText('Auto_zDOX_FileSupportTXT ').first().click();
  // download 2
  const downloadPromiseA = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Pay-in' }).click();
  const downloadA = await downloadPromiseA;
  // Save downloaded file somewhere
  await downloadA.saveAs('Output/TS16-zDOX/TC01 Files Support/04. TXT/05.payInSlipFile.pdf');
  await page.screenshot({ path: 'Output/TS16-zDOX/TC01 Files Support/04. TXT/03.API.png', fullPage: true });
  await page.waitForTimeout(1500);
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.getByRole('row', { name: 'Auto_zDOX_FileSupportTXT ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_zDOX_FileSupportTXT' })).toBeHidden();
  await page.waitForTimeout(1800);


});




test('TC02 zDOX Duplicate XLSX', async ({ page }) => {

  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.locator('div').filter({ hasText: /^File Name$/ }).nth(2).click();
  await page.getByLabel('File Name').fill('Auto_zDOX_zDuplicateXLSX');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  let mask_locator2 = await page.getByRole('row', { name: 'Auto_zDOX_zDuplicateXLSX' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/01. XLSX.png', mask: [mask_locator2], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(500);
  await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
  await expect.soft(page.getByLabel('Message')).toBeVisible();
  await expect.soft(page.getByLabel('Message'))
    .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo'  'a6su5--ya99cj9a' is Exist. ");
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/02. XLSX Click Status Error Msg.png' });
  await page.waitForTimeout(500);
  await page.reload();
  await page.getByText('Auto_zDOX_zDuplicateXLSX').first().click();
  await expect.soft(page.locator('.card-error')).toBeVisible();
  await expect.soft(page.locator('.card-error'))
    .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo'  'a6su5--ya99cj9a' is Exist. Import FixesExport FixesEdit");
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/03. XLSX Error Msg.png' });
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('row', { name: 'Auto_zDOX_zDuplicateXLSX ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_zDOX_zDuplicateXLSX  ' })).toBeHidden();
  await page.waitForTimeout(1500);


});




test('TC02 zDOX Duplicate JSON', async ({ page }) => {

  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.locator('div').filter({ hasText: /^File Name$/ }).nth(2).click();
  await page.getByLabel('File Name').fill('Auto_zDOX_zDuplicateJSON');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  let mask_locator2 = await page.getByRole('row', { name: 'Auto_zDOX_zDuplicateJSON' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/04. JSON.png', mask: [mask_locator2], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(500);
  await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
  await expect.soft(page.getByLabel('Message')).toBeVisible();
  await expect.soft(page.getByLabel('Message'))
    .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' 'u5ya9a--699cj9a' is Exist. ");
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/05. JSON Click Status Error Msg.png' });
  await page.waitForTimeout(500);
  await page.reload();
  await page.getByText('Auto_zDOX_zDuplicateJSON').first().click();
  await expect.soft(page.locator('.card-error')).toBeVisible();
  await expect.soft(page.locator('.card-error'))
    .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' 'u5ya9a--699cj9a' is Exist. Import FixesExport FixesEdit");
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/06. JSON Error Msg.png' });
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('row', { name: 'Auto_zDOX_zDuplicateJSON ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_zDOX_zDuplicateJSON  ' })).toBeHidden();
  await page.waitForTimeout(1500);


});



test('TC02 zDOX Duplicate CSV', async ({ page }) => {

  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.locator('div').filter({ hasText: /^File Name$/ }).nth(2).click();
  await page.getByLabel('File Name').fill('Auto_zDOX_zDuplicateCSV');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  let mask_locator2 = await page.getByRole('row', { name: 'Auto_zDOX_zDuplicateCSV' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/07. CSV.png', mask: [mask_locator2], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(500);
  await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
  await expect.soft(page.getByLabel('Message')).toBeVisible();
  await expect.soft(page.getByLabel('Message'))
    .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractNo' 'u5ya5jj--899cj9a' is Exist. ");
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/08. CSV Click Status Error Msg.png' });
  await page.waitForTimeout(500);
  await page.reload();
  await page.getByText('Auto_zDOX_zDuplicateCSV').first().click();
  await expect.soft(page.locator('.card-error')).toBeVisible();
  await expect.soft(page.locator('.card-error'))
    .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractNo' 'u5ya5jj--899cj9a' is Exist. Import FixesExport FixesEdit");
  await page.screenshot({ path: 'Output/TS16-zDOX/TC02 Duplicate/09. CSV Error Msg.png' });
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('row', { name: 'Auto_zDOX_zDuplicateCSV ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_zDOX_zDuplicateCSV  ' })).toBeHidden();
  await page.waitForTimeout(1500);


});



test('TC03 zDOX Input Error', async ({ page }) => {

  await page.waitForURL('/batch');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('menuitem', { name: 'File Name' }).click();
  await page.locator('div').filter({ hasText: /^File Name$/ }).nth(2).click();
  await page.getByLabel('File Name').fill('Auto_zDOX_InputError');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Search').click();
  await page.waitForTimeout(1500);
  let mask_locator2 = await page.getByRole('row', { name: 'Auto_zDOX_InputError' }).getByRole('cell').first();
  await page.screenshot({ path: 'Output/TS16-zDOX/TC03 Input Error/01. Input Error.png', mask: [mask_locator2], maskColor: '#00FF00' });
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Search' }).first().click();
  await page.waitForTimeout(500);
  await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
  await expect.soft(page.getByLabel('Message')).toBeVisible();
  await expect.soft(page.getByLabel('Message'))
    .toHaveText("Messageinvalid typeCode ");
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'Output/TS16-zDOX/TC03 Input Error/02. Input Error Click Status Error Msg.png' });
  await page.waitForTimeout(500);
  await page.reload();
  await page.getByText('Auto_zDOX_InputError').first().click();
  await expect.soft(page.locator('.card-error')).toBeVisible();
  await expect.soft(page.locator('.card-error'))
    .toHaveText("errorInput Errorinvalid typeCode");
  await page.screenshot({ path: 'Output/TS16-zDOX/TC03 Input Error/03. Input Error Error Msg.png' });
  await page.locator('a').filter({ hasText: 'Batch' }).click();
  await page.getByRole('row', { name: 'Auto_zDOX_InputError ' }).first().getByText('delete').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect.soft(page.getByRole('row', { name: 'Auto_zDOX_InputError  ' })).toBeHidden();
  await page.waitForTimeout(1500);


});
