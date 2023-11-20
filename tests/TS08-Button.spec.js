// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('https://app.gestampduty.com/auth/login');
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();
    // await page.locator('div').filter({ hasText: /^file_download$/ }).first().click();
    // await page.waitForURL('https://gestamp.ddns.net/downloads');
});







// const { test, expect } = require('@playwright/test');
// test.use({ storageState: 'playwright/.auth/T1.json' });




// test.beforeEach(async ({ page }) => {
//     // Runs before each test and signs in each page.
//     await page.goto('https://gestamp.ddns.net/downloads');
// });


test('TC01 Show Report ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC01 Show Report/01.All Report.png', fullPage: true });

});


test('TC02 Monthly Usage 3 Months ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByText('Last 3 MonthsPeriod Month').click();
    await page.getByRole('option', { name: 'Last 3 Months' }).locator('span').click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC02 Monthly Usage/01.Last 3 Months.png', fullPage: true });
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)').getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    // Save downloaded file somewhere
    await download1.saveAs('Output/TS08-Button/TC02 Monthly Usage/02.Report GDM Last 3 Months.xlsx');
    await page.waitForTimeout(1000);
    const downloadPromise2 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))').getByRole('button', { name: 'Export' }).click();
    const download2 = await downloadPromise2;
    // Save downloaded file somewhere
    await download2.saveAs('Output/TS08-Button/TC02 Monthly Usage/03.Report GDM Last 3 Months.xlsx');

});




test('TC02 Monthly Usage 6 Months ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByText('Last 3 MonthsPeriod Month').click();
    await page.getByText('Last 6 Months').click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC02 Monthly Usage/04.Last 6 Months.png', fullPage: true });
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)').getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    // Save downloaded file somewhere
    await download1.saveAs('Output/TS08-Button/TC02 Monthly Usage/05.Report GDM Last 6 Months.xlsx');
    await page.waitForTimeout(1000);
    const downloadPromise2 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))').getByRole('button', { name: 'Export' }).click();
    const download2 = await downloadPromise2;
    // Save downloaded file somewhere
    await download2.saveAs('Output/TS08-Button/TC02 Monthly Usage/06.Report GDM Last 6 Months.xlsx');

});




test('TC02 Monthly Usage 12 Months ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByText('Last 3 MonthsPeriod Month').click();
    await page.getByText('Last 12 Months').click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC02 Monthly Usage/07.Last 12 Months.png', fullPage: true });
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)').getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    // Save downloaded file somewhere
    await download1.saveAs('Output/TS08-Button/TC02 Monthly Usage/08.Report GDM Last 12 Months.xlsx');
    await page.waitForTimeout(1000);
    const downloadPromise2 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))').getByRole('button', { name: 'Export' }).click();
    const download2 = await downloadPromise2;
    // Save downloaded file somewhere
    await download2.saveAs('Output/TS08-Button/TC02 Monthly Usage/09.Report GDM Last 12 Months.xlsx');

});


test('TC03 Monthly Account ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Transaction for Accounting' }).click();
    await page.getByText('Last 2 MonthsPeriod Month').click();
    await page.getByText('Last 1 Month').click();
    await page.getByRole('button', { name: '2023-11' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/01.Last 1 Months.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Last 1 MonthPeriod Month').click();
    await page.getByRole('option', { name: 'Last 2 Months' }).locator('span').click();
    await page.getByRole('button', { name: '2023-10' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/02.Last 2 Months.png' });
    await page.getByText('Last 2 MonthsPeriod Month').click();
    await page.getByText('Last 3 Month').click();
    await page.getByRole('button', { name: '2023-09' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/03.Last 3 Months.png' });
    await page.getByText('Last 3 MonthsPeriod Month').click();
    await page.getByText('Last 4 Month').click();
    await page.getByRole('button', { name: '2023-08' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/04.Last 4 Months.png' });
    await page.getByText('Last 4 MonthsPeriod Month').click();
    await page.getByText('Last 6 Month').click();
    await page.getByRole('button', { name: '2023-07' }).click();
    await page.getByRole('button', { name: '2023-06' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/05.Last 6 Months.png' });
    await page.getByText('Last 6 MonthsPeriod Month').click();
    await page.getByText('Last 12 Month').click();
    await page.getByRole('button', { name: '2023-05' }).click();
    await page.getByRole('button', { name: '2023-04' }).click();
    await page.getByRole('button', { name: '2023-03' }).click();
    await page.getByRole('button', { name: '2023-02' }).click();
    await page.getByRole('button', { name: '2023-01' }).click();
    await page.getByRole('button', { name: '2022-12' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/06.Last 12 Months.png' });
});



test('TC03 Report Account ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Transaction for Accounting' }).click();
    await page.getByText('Last 2 MonthsPeriod Month').click();
    await page.getByText('Last 12 Month').click();
    await page.getByRole('button', { name: '2023-11' }).click();
    await page.getByRole('button', { name: '2023-10' }).click();
    await page.getByRole('button', { name: '2023-09' }).click();
    await page.getByRole('button', { name: '2023-08' }).click();
    await page.getByRole('button', { name: '2023-07' }).click();
    await page.getByRole('button', { name: '2023-06' }).click();
    await page.getByRole('button', { name: '2023-05' }).click();
    await page.getByRole('button', { name: '2023-04' }).click();
    await page.getByRole('button', { name: '2023-03' }).click();
    await page.getByRole('button', { name: '2023-02' }).click();
    await page.getByRole('button', { name: '2023-01' }).click();
    await page.getByRole('button', { name: '2022-12' }).click();
    await page.waitForTimeout(3000);
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByLabel('2023-11').getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    // Save downloaded file somewhere
    await download1.saveAs('Output/TS08-Button/TC03 Monthly Account/07.Report Account Month 11.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise2 = page.waitForEvent('download');
    await page.getByLabel('2023-10').getByRole('button', { name: 'Export' }).click();
    const download2 = await downloadPromise2;
    // Save downloaded file somewhere
    await download2.saveAs('Output/TS08-Button/TC03 Monthly Account/08.Report Account Month 10.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise3 = page.waitForEvent('download');
    await page.getByLabel('2023-09').getByRole('button', { name: 'Export' }).click();
    const download3 = await downloadPromise3;
    // Save downloaded file somewhere
    await download3.saveAs('Output/TS08-Button/TC03 Monthly Account/09.Report Account Month 09.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise4 = page.waitForEvent('download');
    await page.getByLabel('2023-08').getByRole('button', { name: 'Export' }).click();
    const download4 = await downloadPromise4;
    // Save downloaded file somewhere
    await download4.saveAs('Output/TS08-Button/TC03 Monthly Account/10.Report Account Month 08.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise5 = page.waitForEvent('download');
    await page.getByLabel('2023-07').getByRole('button', { name: 'Export' }).click();
    const download5 = await downloadPromise5;
    // Save downloaded file somewhere
    await download5.saveAs('Output/TS08-Button/TC03 Monthly Account/11.Report Account Month 07.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise6 = page.waitForEvent('download');
    await page.getByLabel('2023-06').getByRole('button', { name: 'Export' }).click();
    const download6 = await downloadPromise6;
    // Save downloaded file somewhere
    await download6.saveAs('Output/TS08-Button/TC03 Monthly Account/12.Report Account Month 06.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise7 = page.waitForEvent('download');
    await page.getByLabel('2023-05').getByRole('button', { name: 'Export' }).click();
    const download7 = await downloadPromise7;
    // Save downloaded file somewhere
    await download7.saveAs('Output/TS08-Button/TC03 Monthly Account/13.Report Account Month 05.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise8 = page.waitForEvent('download');
    await page.getByLabel('2023-04').getByRole('button', { name: 'Export' }).click();
    const download8 = await downloadPromise8;
    // Save downloaded file somewhere
    await download8.saveAs('Output/TS08-Button/TC03 Monthly Account/14.Report Account Month 04.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise9 = page.waitForEvent('download');
    await page.getByLabel('2023-03').getByRole('button', { name: 'Export' }).click();
    const download9 = await downloadPromise9;
    // Save downloaded file somewhere
    await download9.saveAs('Output/TS08-Button/TC03 Monthly Account/15.Report Account Month 03.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise10 = page.waitForEvent('download');
    await page.getByLabel('2023-02').getByRole('button', { name: 'Export' }).click();
    const download10 = await downloadPromise10;
    // Save downloaded file somewhere
    await download10.saveAs('Output/TS08-Button/TC03 Monthly Account/16.Report Account Month 02.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise11 = page.waitForEvent('download');
    await page.getByLabel('2023-01').getByRole('button', { name: 'Export' }).click();
    const download11 = await downloadPromise11;
    // Save downloaded file somewhere
    await download11.saveAs('Output/TS08-Button/TC03 Monthly Account/17.Report Account Month 01.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise12 = page.waitForEvent('download');
    await page.getByLabel('2022-12').getByRole('button', { name: 'Export' }).click();
    const download12 = await downloadPromise12;
    // Save downloaded file somewhere
    await download12.saveAs('Output/TS08-Button/TC03 Monthly Account/18.Report Account Month 12.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise13 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export All' }).click();
    const download13 = await downloadPromise13;
    // Save downloaded file somewhere
    await download13.saveAs('Output/TS08-Button/TC03 Monthly Account/19.Report Account All.xlsx');
    await page.waitForTimeout(1000);



});







test('TC04 Show Holiday ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'event' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: '2022' }).click();
    await page.screenshot({ path: 'Output/TS08-Button/TC04 Show Holiday/01.Holiday 2022.png', fullPage: true });
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: '2023' }).click();
    await page.screenshot({ path: 'Output/TS08-Button/TC04 Show Holiday/02.Holiday 2023.png', fullPage: true });
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: '2024' }).click();
    await page.screenshot({ path: 'Output/TS08-Button/TC04 Show Holiday/03.Holiday 2024.png', fullPage: true });
});












// test('TC04 Show Download ', async ({ page }) => {

//     await page.waitForTimeout(1000);
//     await page.locator('a').filter({ hasText: 'file_download' }).click();
//     await page.screenshot({ path: 'Output/TS08-Button/TC04 Show Download/01.Download.png', fullPage: true });

// });




// // test('TC05 Click Next And Previous Page ', async ({ page }) => {


// //     await page.getByLabel('Next').click();
// //     await page.locator('.p-10').hover();
// //     await page.waitForTimeout(500);
// //     await page.screenshot({ path: 'Output/TS08-Button/TC05 Click Next And Previous Page/01.Click Next.png' });
// //     await page.getByLabel('Previous').click();
// //     await page.locator('.p-10').hover();
// //     await page.waitForTimeout(500);
// //     await page.screenshot({ path: 'Output/TS08-Button/TC05 Click Next And Previous Page/02.Click Previous.png' });



// // });





// test('TC06 Refresh ', async ({ page }) => {
//     await page.getByRole('link', { name: 'Batch ' }).click();
//     await page.waitForURL('https://gestamp.ddns.net/batch');
//     await page.waitForTimeout(3000);
//     await page.getByPlaceholder('Status').click();
//     await page.getByRole('option', { name: 'Completed' }).click();
//     await page.getByRole('button', { name: 'Search' }).click();
//     await page.waitForTimeout(1000);
//     await page.reload();
//     await page.waitForTimeout(1000);
//     await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS08-Button/TC06 Refresh/01.Select Download.png' });
//     await page.locator('div').filter({ hasText: /^SearchReceipts$/ }).getByRole('button').nth(1).click();
//     await page.getByRole('button', { name: 'Go to Downloads' }).click();
//     await page.waitForTimeout(5000);
//     await page.reload();
//     await page.waitForTimeout(1500);
//     let mask_locator = await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).getByRole('cell').nth(2);
//     await page.screenshot({ path: 'Output/TS08-Button/TC06 Refresh/02.Before Refresh.png', mask: [mask_locator], maskColor: '#00FF00' });
//     await page.getByRole('button', { name: 'Refresh' }).click();
//     const downloadPromiseA = page.waitForEvent('download');
//     await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
//     const downloadA = await downloadPromiseA;
//     // Save downloaded file somewhere
//     await downloadA.saveAs('Output/TS08-Button/TC06 Refresh/04.Download Receipts.rar');
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS08-Button/TC06 Refresh/03.After Refresh.png', mask: [mask_locator], maskColor: '#00FF00' });


// });



test('TC07 User ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.getByText('personKittisak PhaisrisanGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC07 User/01.User Details.png' });
    await page.goto('https://app.gestampduty.com/batch/254');
    await page.getByText('personKittisak PhaisrisanGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC07 User/02.Enable Masking Sensitive Data.png', fullPage: true });
    await page.waitForTimeout(1000);
    await page.getByText('Masking Sensitive Data').click();
    await page.waitForTimeout(1000);
    await page.reload()
    await page.getByText('personKittisak PhaisrisanGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC07 User/03.Disable Masking Sensitive Data.png', fullPage: true });
    await page.getByText('Masking Sensitive Data').click();


});



test('TC08 Change Password ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.getByText('personKittisak PhaisrisanGinkgo Soft Co., Ltd.').click();
    await page.locator('#kt_header').getByText('Log Out').click();
    await page.goto('https://app.gestampduty.com/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByText('personKittisak ViewerGinkgo Soft Co., Ltd.').click();
    await page.getByText('Change Password').click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/01.Change Password Details.png' });
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="cPassword"]').click();
    await page.locator('input[name="curPassword"]').click();
    await expect(page.getByText('Current Password is required')).toHaveText('Current Password is required');
    await expect(page.getByText('Password is required', { exact: true })).toHaveText('Password is required');
    await expect(page.getByText('Confirm Password is required')).toHaveText('Confirm Password is required');
    await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/02.Change Password Required.png' });
    await page.locator('input[name="curPassword"]').fill('ZXcv.!234');
    await page.locator('input[name="password"]').fill('Qwerty@123');
    await page.locator('input[name="cPassword"]').fill('Qwerty@123');
    await page.waitForTimeout(1000);
    await page.getByText('visibility_off').first().click();
    await page.getByText('visibility_off').nth(1).click();
    await page.getByText('visibility_off').click();
    await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/03.New Password.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/04.Click Close.png' });
    await page.getByText('personKittisak ViewerGinkgo Soft Co., Ltd.').click();
    await page.getByText('Change Password').click();
    await page.locator('input[name="curPassword"]').fill('ZXcv.!234');
    await page.locator('input[name="password"]').fill('Qwerty@123');
    await page.locator('input[name="cPassword"]').fill('Qwerty@123');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/05.Click Save.png' });
    await page.getByText('personKittisak ViewerGinkgo Soft Co., Ltd.').click();
    await page.locator('#kt_header').getByText('Log Out').click();
    await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
    await page.locator('input[name="password"]').fill('Qwerty@123');
    await page.getByText('visibility_off').click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/06.New Password Login.png' });
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/07.New Password Login Success.png' });
    await page.getByText('personKittisak ViewerGinkgo Soft Co., Ltd.').click();
    await page.getByText('Change Password').click();
    await page.locator('input[name="curPassword"]').fill('Qwerty@123');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.locator('input[name="cPassword"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

});


test('TC09 Click Link ', async ({ page }) => {

    await page.waitForTimeout(1000);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '© 2023 Ginkgo Soft Co., Ltd.' }).click();
    const page1 = await page1Promise;
    await page1.waitForURL('https://ginkgosoft.co.th/');
    await expect(page1.locator('#content div').filter({ hasText: 'Our Best Services เราคือผู้เชี่ยวชาญทางด้าน Digital Transformation, Paperless So' }).nth(2)).toBeEnabled();
    await page.waitForTimeout(1000);
    await page1.screenshot({ path: 'Output/TS08-Button/09 Click Link/01.Click Ginkgo Soft.png' });
    await page.waitForTimeout(1000);
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
    const page2 = await page2Promise;
    await page2.waitForURL('https://www.gestampduty.com/privacy-policy/');
    await expect(page2.getByText('นโยบายความเป็นส่วนตัวข้อมูลส่วนบุคคล สำหรับผลิตภัณฑ์ GeStamp Duty Last Updated: ')).toBeEnabled();
    await page.waitForTimeout(5000);
    await page2.screenshot({ path: 'Output/TS08-Button/09 Click Link/02.Click Privacy Policy.png' });

});




test('TC10 Logout ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC10 Logout/01.Before Click Logout.png' });
    await page.waitForTimeout(1000);
    await page.getByText('logout').click();
    await page.screenshot({ path: 'Output/TS08-Button/TC10 Logout/02.After Click Logout.png' });
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByText('personKittisak PhaisrisanGinkgo Soft Co., Ltd.').click();
    await page.screenshot({ path: 'Output/TS08-Button/TC10 Logout/03.Before Click Logout User Details.png' });
    await page.locator('#kt_header').getByText('Log Out').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC10 Logout/04.After Click Logout User Details.png' });

});
