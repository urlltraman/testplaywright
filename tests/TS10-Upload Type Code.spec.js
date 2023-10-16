// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('https://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
});




test('TC01 Type Code 01  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC01.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC01' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/01. Type Code 01/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC01 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/01. Type Code 01/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC01 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC01 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC01 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/01. Type Code 01/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC01 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/01. Type Code 01/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/01. Type Code 01/03.API.png', fullPage: true });

});




test('TC02 Type Code 02  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC02.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC02' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/02. Type Code 02/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC02 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/02. Type Code 02/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC02 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC02 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC02 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/02. Type Code 02/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC02 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/02. Type Code 02/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/02. Type Code 02/03.API.png', fullPage: true });

});




test('TC03 Type Code 03  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC03.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC03' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/03. Type Code 03/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC03 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/03. Type Code 03/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC03 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC03 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC03 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/03. Type Code 03/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC03 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/03. Type Code 03/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/03. Type Code 03/03.API.png', fullPage: true });

});




test('TC04 Type Code 04  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC04.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC04' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/04. Type Code 04/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC04 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/04. Type Code 04/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC04 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC04 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC04 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/04. Type Code 04/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC04 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/04. Type Code 04/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/04. Type Code 04/03.API.png', fullPage: true });

});




test('TC05 Type Code 05  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC05.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC05' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/05. Type Code 05/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC05 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/05. Type Code 05/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC05 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC05 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC05 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/05. Type Code 05/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC05 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/05. Type Code 05/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/05. Type Code 05/03.API.png', fullPage: true });

});



test('TC06 Type Code 06  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC06.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC06' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/06. Type Code 06/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC06 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/06. Type Code 06/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC06 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC06 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC06 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/06. Type Code 06/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC06 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/06. Type Code 06/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/06. Type Code 06/03.API.png', fullPage: true });

});




test('TC07 Type Code 07  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC07.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC07' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/07. Type Code 07/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC07 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/07. Type Code 07/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC07 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC07 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC07 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/07. Type Code 07/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC07 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/07. Type Code 07/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/07. Type Code 07/03.API.png', fullPage: true });

});





test('TC08 Type Code 08  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC08.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC08' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/08. Type Code 08/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC08 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/08. Type Code 08/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC08 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC08 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC08 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/08. Type Code 08/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC08 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/08. Type Code 08/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/08. Type Code 08/03.API.png', fullPage: true });

});



test('TC09 Type Code 09.1  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC09.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC09.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/09. Type Code 09.1/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC09.1 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/09. Type Code 09.1/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC09.1 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC09.1 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC09.1 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/09. Type Code 09.1/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC09.1 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/09. Type Code 09.1/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/09. Type Code 09.1/03.API.png', fullPage: true });

});


test('TC10 Type Code 09.2  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC09.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC09.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/10. Type Code 09.2/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC09.2 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/10. Type Code 09.2/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC09.2 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC09.2 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC09.2 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/10. Type Code 09.2/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC09.2 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/10. Type Code 09.2/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/10. Type Code 09.2/03.API.png', fullPage: true });

});



test('TC11 Type Code 10  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/11. Type Code 10/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC10 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/11. Type Code 10/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC10 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC10 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC10 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/11. Type Code 10/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC10 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/11. Type Code 10/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/11. Type Code 10/03.API.png', fullPage: true });

});




test('TC12 Type Code 11.1  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC11.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC11.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/12. Type Code 11.1/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC11.1 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/12. Type Code 11.1/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC11.1 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC11.1 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC11.1 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/12. Type Code 11.1/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC11.1 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/12. Type Code 11.1/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/12. Type Code 11.1/03.API.png', fullPage: true });

});





test('TC13 Type Code 11.2  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC11.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC11.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/13. Type Code 11.2/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC11.2 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/13. Type Code 11.2/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC11.2 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC11.2 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC11.2 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/13. Type Code 11.2/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC11.2 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/13. Type Code 11.2/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/13. Type Code 11.2/03.API.png', fullPage: true });

});



test('TC14 Type Code 12  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/14. Type Code 12/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC12 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/14. Type Code 12/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC12 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC12 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC12 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/14. Type Code 12/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC12 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/14. Type Code 12/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/14. Type Code 12/03.API.png', fullPage: true });

});



test('TC15 Type Code 13  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/15. Type Code 13/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC13 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/15. Type Code 13/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC13 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC13 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC13 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/15. Type Code 13/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC13 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/15. Type Code 13/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/15. Type Code 13/03.API.png', fullPage: true });

});



test('TC16 Type Code 14  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/16. Type Code 14/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC14 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/16. Type Code 14/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC14 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC14 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC14 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/16. Type Code 14/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC14 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/16. Type Code 14/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/16. Type Code 14/03.API.png', fullPage: true });

});




test('TC17 Type Code 15  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/17. Type Code 15/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC15 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/17. Type Code 15/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC15 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC15 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC15 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/17. Type Code 15/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC15 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/17. Type Code 15/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/17. Type Code 15/03.API.png', fullPage: true });

});



test('TC18 Type Code 16  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/18. Type Code 16/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC16 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/18. Type Code 16/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC16 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC16 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC16 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/18. Type Code 16/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC16 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/18. Type Code 16/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/18. Type Code 16/03.API.png', fullPage: true });

});


test('TC19 Type Code 17  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/19. Type Code 17/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC17 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/19. Type Code 17/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC17 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC17 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC17 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/19. Type Code 17/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC17 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/19. Type Code 17/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/19. Type Code 17/03.API.png', fullPage: true });

});



test('TC20 Type Code 18  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/20. Type Code 18/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC18 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/20. Type Code 18/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC18 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC18 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC18 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/20. Type Code 18/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC18 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/20. Type Code 18/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/20. Type Code 18/03.API.png', fullPage: true });

});



test('TC21 Type Code 19  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/21. Type Code 19/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC19 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/21. Type Code 19/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC19 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC19 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC19 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/21. Type Code 19/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC19 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/21. Type Code 19/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/21. Type Code 19/03.API.png', fullPage: true });

});




test('TC22 Type Code 20  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/22. Type Code 20/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC20 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/22. Type Code 20/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC20 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC20 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC20 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/22. Type Code 20/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC20 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/22. Type Code 20/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/22. Type Code 20/03.API.png', fullPage: true });

});



test('TC23 Type Code 21  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/23. Type Code 21/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC21 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/23. Type Code 21/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC21 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC21 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC21 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/23. Type Code 21/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC21 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/23. Type Code 21/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/23. Type Code 21/03.API.png', fullPage: true });

});



test('TC24 Type Code 27.1  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC27.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC27.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/24. Type Code 27.1/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC27.1 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/24. Type Code 27.1/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC27.1 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC27.1 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC27.1 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/24. Type Code 27.1/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC27.1 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/24. Type Code 27.1/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/24. Type Code 27.1/03.API.png', fullPage: true });

});



test('TC25 Type Code 27.2  ', async ({ page }) => {
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/27 ตราสาร/Auto_GeStamp_TC27.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    let mask_locator = await page.getByRole('row', { name: 'Auto_GeStamp_TC27.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS10-Typecode/25. Type Code 27.2/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GeStamp_TC27.2 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS10-Typecode/25. Type Code 27.2/02.Upload Details.png', fullPage: true });
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC27.2 ').first().click();
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC27.2 ').first().click();
    await page.waitForTimeout(1800);
    await page.reload();
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC27.2 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS10-Typecode/25. Type Code 27.2/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('https://gestamp.ddns.net/gestamp/batch');
    await page.getByText('Auto_GeStamp_TC27.2 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS10-Typecode/25. Type Code 27.2/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS10-Typecode/25. Type Code 27.2/03.API.png', fullPage: true });

});

