// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();

});




test('Up  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 1 เช่าที่ดิน/Auto_GeStamp_TC1_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC1/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC1_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC1/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC1_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC1_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC1/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC1_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC1/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC1/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});





test('test TypeCode 2  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 2 โอนใบหุ้น พันธบัตร ใบรับรองหนี้/Auto_GeStamp_TC2_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC2/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC2_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC2/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC2_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC2_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC2/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC2_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC2/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC2/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 3  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 3 เช่าซื้อทรัพย์สิน/Auto_GeStamp_TC3_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC3/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC3_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC3/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC3_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC3_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC3/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC3_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC3/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC3/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 4  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 4 จ้างทำของ/Auto_GeStamp_TC4_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC4/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC4_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC4/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC4_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC4_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC4/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC4_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC4/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC4/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 5  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 5 กู้ยืมเงิน/Auto_GeStamp_TC5_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC5/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC5_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC5/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC5_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC5_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC5/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC5_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC5/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC5/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 6  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 6 กรมธรรม์ประกันภัย/Auto_GeStamp_TC6_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC6/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC6_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC6/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC6_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC6_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC6/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC6_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC6/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC6/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});





test('test TypeCode 7  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 7 ใบมอบอำนาจ/Auto_GeStamp_TC7_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC7/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC7_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC7/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC7_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC7_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC7/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC7_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC7/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC7/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});



test('test TypeCode 8  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 8 ใบมอบฉันทะ/Auto_GeStamp_TC8_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC8/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC8_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC8/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC8_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC8_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC8/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC8_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC8/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC8/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 91  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 9.1 ตั๋วแลกเงิน/Auto_GeStamp_TC91_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC9.1/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC91_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC9.1/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC91_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC91_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC9.1/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC91_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC9.1/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC9.1/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});



test('test TypeCode 92  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 9.2 ตั๋วสัญญาใช้เงิน/Auto_GeStamp_TC92_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC9.2/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC92_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC9.2/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC92_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC92_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC9.2/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC92_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC9.2/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC9.2/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 10  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 10 บิลออฟเลดิง(ใบตราส่งสินค้า)/Auto_GeStamp_TC10_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC10/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC10_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC10/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC10_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC10_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC10/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC10_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC10/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC10/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 111  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 11.1 ใบหุ้น หุ้นกู้ รับนองหนี้/Auto_GeStamp_TC111_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC11.1/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC111_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC11.1/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC111_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC111_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC11.1/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC111_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC11.1/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC11.1/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 112  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 11.2 พันธบัตรรัฐ/Auto_GeStamp_TC112_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC11.2/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC112_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC11.2/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC112_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC112_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC11.2/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC112_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC11.2/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC11.2/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 12  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 12 เช็ค/Auto_GeStamp_TC12_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC12/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC12_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC12/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC12_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC12_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC12/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC12_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC12/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC12/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});







test('test TypeCode 13  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 13 ใบรับฝากเงิน/Auto_GeStamp_TC13_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC13/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC13_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC13/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC13_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC13_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC13/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC13_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC13/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC13/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});





test('test TypeCode 14  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 14 เลตเตอร์ออฟเครดิต/Auto_GeStamp_TC14_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC14/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC14_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC14/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC14_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC14_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC14/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC14_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC14/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC14/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});





test('test TypeCode 15  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 15 เช็คสำหรับผู้เดินทาง/Auto_GeStamp_TC15_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC15/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC15_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC15/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC15_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC15_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC15/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC15_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC15/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC15/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});






test('test TypeCode 16  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 16 ใบรับของ/Auto_GeStamp_TC16_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC16/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC16_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC16/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC16_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC16_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC16/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC16_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC16/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC16/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 17  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 17 ค้ำประกัน/Auto_GeStamp_TC17_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC17/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC17_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC17/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC17_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC17_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC17/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC17_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC17/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC17/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 18  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 18 จำนำ/Auto_GeStamp_TC18_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC18/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC18_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC18/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC18_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC18_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC18/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC18_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC18/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC18/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 19  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 19 ใบรับของคลังสินค้า/Auto_GeStamp_TC19_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC19/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC19_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC19/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC19_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC19_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC19/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC19_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC19/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC19/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 20  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 20 คำสั่งให้ส่งมอบของ/Auto_GeStamp_TC20_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC20/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC20_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC20/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC20_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC20_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC20/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC20_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC20/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC20/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 21  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 21 ตัวแทน/Auto_GeStamp_TC21_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC21/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC21_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC21/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC21_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC21_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC21/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC21_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC21/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC21/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 271  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 27ก น.จัดตั้งห้างหุ้นส่วน/Auto_GeStamp_TC271_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC27.1/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC271_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC27.1/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC271_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC271_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC27.1/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC271_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC27.1/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC27.1/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});




test('test TypeCode 272  ', async ({ page }) => {
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/ตราสาร 27ข น.แก้ไขสัญญาจัดตั้งห้างหุ้นส่วน/Auto_GeStamp_TC272_First_Half.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.screenshot({ path: 'Output/test Typecode/TC27.2/01.Upload Success.png' });
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC272_First' }).click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/test Typecode/TC27.2/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Reviewing' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC272_First' }).click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC272_First' }).click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/test Typecode/TC27.2/04.qrPayment_TypeCode4.jpg');
    await page.reload();
    await page.waitForTimeout(2500);
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('cell', { name: 'Auto_GeStamp_TC272_First' }).click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/test Typecode/TC27.2/05.payInSlipFile_TypeCode4.pdf');
    await page.screenshot({ path: 'Output/test Typecode/TC27.2/03.API.png', fullPage: true });
    // await page.getByRole('link', { name: 'Batch View' }).click();
    // await page.getByRole('row', { name: 'Game Kittisak ' }).getByRole('button').nth(3).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
});


