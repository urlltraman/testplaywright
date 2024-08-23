import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     // Runs Uat


//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
//     await page.locator('input[name="password"]').fill('P@ssw0rd');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     // await page.getByRole('button', { name: 'Accept' }).click();

// });



test.beforeEach(async ({ page }) => {
    // Runs Dev

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});





test('TC01 Show Report ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC01 Show Report/01.All Report.png', fullPage: true });

});

test('TC02 Monthly Usage 3 Months ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Usage' }).click();
    await page.locator('div').filter({ hasText: /^Period MonthLast 3 Months$/ }).first().click();
    await page.getByRole('option', { name: 'Last 3 Months' }).locator('span').click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    // await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC02 Monthly Usage/01.Last 3 Months.png', fullPage: true });
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)').getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    // Save downloaded file somewhere
    await download1.saveAs('Output/TS08-Button/TC02 Monthly Usage/02.Report GGS Last 3 Months.xlsx');
    await page.waitForTimeout(1000);
    // const downloadPromise2 = page.waitForEvent('download');
    // await page.getByLabel('Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))').getByRole('button', { name: 'Export' }).click();
    // const download2 = await downloadPromise2;
    // // Save downloaded file somewhere
    // await download2.saveAs('Output/TS08-Button/TC02 Monthly Usage/03.Report GDM Last 3 Months.xlsx');

});




test('TC02 Monthly Usage 6 Months ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Usage' }).click();

    await page.locator('div').filter({ hasText: /^Period MonthLast 3 Months$/ }).first().click();
    await page.getByText('Last 6 Months').click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    // await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC02 Monthly Usage/04.Last 6 Months.png', fullPage: true });
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)').getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    // Save downloaded file somewhere
    await download1.saveAs('Output/TS08-Button/TC02 Monthly Usage/05.Report GGS Last 6 Months.xlsx');
    await page.waitForTimeout(1000);
    // const downloadPromise2 = page.waitForEvent('download');
    // await page.getByLabel('Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))').getByRole('button', { name: 'Export' }).click();
    // const download2 = await downloadPromise2;
    // // Save downloaded file somewhere
    // await download2.saveAs('Output/TS08-Button/TC02 Monthly Usage/06.Report GDM Last 6 Months.xlsx');

});




test('TC02 Monthly Usage 12 Months ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Usage' }).click();

    await page.locator('div').filter({ hasText: /^Period MonthLast 3 Months$/ }).first().click();
    await page.getByText('Last 12 Months').click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    // await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC02 Monthly Usage/07.Last 12 Months.png', fullPage: true });
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByLabel('Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)').getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    // Save downloaded file somewhere
    await download1.saveAs('Output/TS08-Button/TC02 Monthly Usage/08.Report GDM Last 12 Months.xlsx');
    await page.waitForTimeout(1000);
    // const downloadPromise2 = page.waitForEvent('download');
    // await page.getByLabel('Ginkgo Soft Co., Ltd. (Demo) (บริษัท กิงโกะ ซอฟต์ จำกัด (Demo))').getByRole('button', { name: 'Export' }).click();
    // const download2 = await downloadPromise2;
    // // Save downloaded file somewhere
    // await download2.saveAs('Output/TS08-Button/TC02 Monthly Usage/09.Report GDM Last 12 Months.xlsx');

});

test('TC03 Monthly Account ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Transactions for Accounting' }).click();
    await page.locator('div').filter({ hasText: /^Period MonthLast 2 Months$/ }).nth(2).click();
    await page.getByText('Last 1 Month').click();
    await page.getByRole('button', { name: '2024-08' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/01.Last 1 Months.png' });
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Period MonthLast 1 Month$/ }).nth(2).click();
    await page.getByRole('option', { name: 'Last 2 Months' }).locator('span').click();
    await page.getByRole('button', { name: '2024-07' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/02.Last 2 Months.png' });
    await page.locator('div').filter({ hasText: /^Period MonthLast 2 Months$/ }).nth(2).click();
    await page.getByText('Last 3 Month').click();
    await page.getByRole('button', { name: '2024-06' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/03.Last 3 Months.png' });
    await page.locator('div').filter({ hasText: /^Period MonthLast 3 Months$/ }).first().click();
    await page.getByText('Last 4 Month').click();
    await page.getByRole('button', { name: '2024-05' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/04.Last 4 Months.png' });
    await page.locator('div').filter({ hasText: /^Period MonthLast 4 Months$/ }).nth(2).click();
    await page.getByText('Last 6 Month').click();
    await page.getByRole('button', { name: '2024-04' }).click();
    await page.getByRole('button', { name: '2024-03' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/05.Last 6 Months.png' });
    await page.locator('div').filter({ hasText: /^Period MonthLast 6 Months$/ }).nth(2).click();
    await page.getByText('Last 12 Month').click();
    await page.getByRole('button', { name: '2024-02' }).click();
    await page.getByRole('button', { name: '2024-01' }).click();
    await page.getByRole('button', { name: '2023-12' }).click();
    await page.getByRole('button', { name: '2023-11' }).click();
    await page.getByRole('button', { name: '2023-10' }).click();
    await page.getByRole('button', { name: '2023-09' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS08-Button/TC03 Monthly Account/06.Last 12 Months.png' });
});



test('TC03 Report Account ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Transactions for Accounting' }).click();
    await page.locator('div').filter({ hasText: /^Period MonthLast 2 Months$/ }).nth(2).click();
    await page.getByText('Last 12 Month').click();
    await page.getByRole('button', { name: '2024-08' }).click();
    await page.getByRole('button', { name: '2024-07' }).click();
    await page.getByRole('button', { name: '2024-06' }).click();
    await page.getByRole('button', { name: '2024-05' }).click();
    await page.getByRole('button', { name: '2024-04' }).click();
    await page.getByRole('button', { name: '2024-03' }).click();
    await page.getByRole('button', { name: '2024-02' }).click();
    await page.getByRole('button', { name: '2024-01' }).click();
    await page.getByRole('button', { name: '2023-12' }).click();
    await page.getByRole('button', { name: '2023-11' }).click();
    await page.getByRole('button', { name: '2023-10' }).click();
    await page.getByRole('button', { name: '2023-09' }).click();
    await page.waitForTimeout(3000);
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByLabel('2024-08').getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    // Save downloaded file somewhere
    await download1.saveAs('Output/TS08-Button/TC03 Monthly Account/07.Report Account Month 03.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise2 = page.waitForEvent('download');
    await page.getByLabel('2024-07').getByRole('button', { name: 'Export' }).click();
    const download2 = await downloadPromise2;
    // Save downloaded file somewhere
    await download2.saveAs('Output/TS08-Button/TC03 Monthly Account/08.Report Account Month 02.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise3 = page.waitForEvent('download');
    await page.getByLabel('2024-06').getByRole('button', { name: 'Export' }).click();
    const download3 = await downloadPromise3;
    // Save downloaded file somewhere
    await download3.saveAs('Output/TS08-Button/TC03 Monthly Account/09.Report Account Month 01.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise4 = page.waitForEvent('download');
    await page.getByLabel('2024-05').getByRole('button', { name: 'Export' }).click();
    const download4 = await downloadPromise4;
    // Save downloaded file somewhere
    await download4.saveAs('Output/TS08-Button/TC03 Monthly Account/10.Report Account Month 12.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise5 = page.waitForEvent('download');
    await page.getByLabel('2024-04').getByRole('button', { name: 'Export' }).click();
    const download5 = await downloadPromise5;
    // Save downloaded file somewhere
    await download5.saveAs('Output/TS08-Button/TC03 Monthly Account/11.Report Account Month 11.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise6 = page.waitForEvent('download');
    await page.getByLabel('2024-03').getByRole('button', { name: 'Export' }).click();
    const download6 = await downloadPromise6;
    // Save downloaded file somewhere
    await download6.saveAs('Output/TS08-Button/TC03 Monthly Account/12.Report Account Month 10.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise7 = page.waitForEvent('download');
    await page.getByLabel('2024-02').getByRole('button', { name: 'Export' }).click();
    const download7 = await downloadPromise7;
    // Save downloaded file somewhere
    await download7.saveAs('Output/TS08-Button/TC03 Monthly Account/13.Report Account Month 09.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise8 = page.waitForEvent('download');
    await page.getByLabel('2024-01').getByRole('button', { name: 'Export' }).click();
    const download8 = await downloadPromise8;
    // Save downloaded file somewhere
    await download8.saveAs('Output/TS08-Button/TC03 Monthly Account/14.Report Account Month 08.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise9 = page.waitForEvent('download');
    await page.getByLabel('2023-12').getByRole('button', { name: 'Export' }).click();
    const download9 = await downloadPromise9;
    // Save downloaded file somewhere
    await download9.saveAs('Output/TS08-Button/TC03 Monthly Account/15.Report Account Month 07.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise10 = page.waitForEvent('download');
    await page.getByLabel('2023-11').getByRole('button', { name: 'Export' }).click();
    const download10 = await downloadPromise10;
    // Save downloaded file somewhere
    await download10.saveAs('Output/TS08-Button/TC03 Monthly Account/16.Report Account Month 06.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise11 = page.waitForEvent('download');
    await page.getByLabel('2023-10').getByRole('button', { name: 'Export' }).click();
    const download11 = await downloadPromise11;
    // Save downloaded file somewhere
    await download11.saveAs('Output/TS08-Button/TC03 Monthly Account/17.Report Account Month 05.xlsx');
    await page.waitForTimeout(1000);

    const downloadPromise12 = page.waitForEvent('download');
    await page.getByLabel('2023-09').getByRole('button', { name: 'Export' }).click();
    const download12 = await downloadPromise12;
    // Save downloaded file somewhere
    await download12.saveAs('Output/TS08-Button/TC03 Monthly Account/18.Report Account Month 04.xlsx');
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
    await page.locator('div').filter({ hasText: /^event$/ }).nth(1).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: '2023' }).click();
    await page.screenshot({ path: 'Output/TS08-Button/TC04 Show Holiday/01.Holiday 2023.png', fullPage: true });
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: '2024' }).click();
    await page.screenshot({ path: 'Output/TS08-Button/TC04 Show Holiday/02.Holiday 2024.png', fullPage: true });
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: '2025' }).click();
    await page.screenshot({ path: 'Output/TS08-Button/TC04 Show Holiday/03.Holiday 2025.png', fullPage: true });
});












test('TC04 Show Download ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'file_download' }).click();
    await page.screenshot({ path: 'Output/TS08-Button/TC04 Show Download/01.Download.png', fullPage: true });

});




test('TC05 Click Next And Previous Page ', async ({ page }) => {

    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('31 July 2023').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(2500);
    await page.getByLabel('Next').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS08-Button/TC05 Click Next And Previous Page/01.Click Next.png' });
    await page.getByLabel('Previous').click();
    await page.locator('.p-10').hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS08-Button/TC05 Click Next And Previous Page/02.Click Previous.png' });



});





test('TC06 Refresh ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.goto("/batch");
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Completed' }).click();
    await page.waitForTimeout(1000);
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon').click();
    await page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Completed [42133] TC272_issueNumber' }).getByLabel('').click();
    await page.screenshot({ path: 'Output/TS08-Button/TC06 Refresh/01.Select Download.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Receipts' }).first().click();
    await page.getByRole('button', { name: 'Go to Downloads' }).click();
    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(1500);
    let mask_locator = await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).getByRole('cell').nth(2);
    await page.screenshot({ path: 'Output/TS08-Button/TC06 Refresh/02.Before Refresh.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByRole('button', { name: 'Refresh' }).click();
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('row', { name: 'test.gamekittisak@gmail.com' }).first().getByRole('button').nth(1).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS08-Button/TC06 Refresh/04.Download Receipts.rar');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS08-Button/TC06 Refresh/03.After Refresh.png', mask: [mask_locator], maskColor: '#00FF00' });


});



test('TC07 User ', async ({ page }) => {

    await page.getByText('logout').click();
    await page.getByPlaceholder('Enter your email').fill('test.gamekittisak2@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(500);
    await page.getByText('persontest.gamekittisak2@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'person' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS08-Button/TC07 User/01.User Details.png' });
    await page.waitForTimeout(500);
    await page.goto('/batch/91200');    
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS08-Button/TC07 User/02.Enable Masking Sensitive Data.png'});
    await page.waitForTimeout(500);
    await page.getByText('persontest.gamekittisak2@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'person' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-1-button').click();
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS08-Button/TC07 User/03.Disable Masking Sensitive Data.png' });
    await page.goto('/batch/91200');    
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'Output/TS08-Button/TC07 User/04.Batch Details.png' });
    await page.waitForTimeout(500);
    await page.getByText('persontest.gamekittisak2@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'person' }).click();
    await page.waitForTimeout(500);
    await page.locator('#mat-mdc-slide-toggle-1-button').click();
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);

    // // getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.') dev
    // // getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.') uat
    // await page.waitForTimeout(1000);
    // await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    // await page.locator('button').filter({ hasText: 'person' }).click();
    // await page.waitForTimeout(3000);
    // await page.goto('/batch/91200');    
    // await page.waitForTimeout(1000);
    // await page.waitForTimeout(1000);
    // await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    // await page.locator('button').filter({ hasText: 'person' }).click();
    // await page.waitForTimeout(3000);
    // await page.getByText('Masking Sensitive Data').click();


    // await page.waitForTimeout(1000);
    // await page.reload()
    // await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
    // await page.waitForTimeout(1000);
    // await page.screenshot({ path: 'Output/TS08-Button/TC07 User/03.Disable Masking Sensitive Data.png', fullPage: true });
    // await page.waitForTimeout(1000);
    // await page.reload()


});



// test('TC08 Change Password ', async ({ page }) => {

//     await page.waitForTimeout(1000);
//     await page.getByText('persontest.gamekittisak@gmail.comGinkgo Soft Co., Ltd.').click();
//     await page.locator('#kt_header').getByText('Log Out').click();
//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
//     await page.locator('input[name="password"]').fill('ZXcv.!234');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.getByText('persontest.gamekittisak3@gmail.comGinkgo Soft Co., Ltd.').click();
//     await page.getByText('Change Password').click();
//     await page.waitForTimeout(3000);
//     await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/01.Change Password Details.png' });
//     await page.locator('input[name="password"]').click();
//     await page.locator('input[name="cPassword"]').click();
//     await page.locator('input[name="curPassword"]').click();
//     await expect(page.getByText('Current Password is required')).toHaveText('Current Password is required');
//     await expect(page.getByText('Password is required', { exact: true })).toHaveText('Password is required');
//     await expect(page.getByText('Confirm Password is required')).toHaveText('Confirm Password is required');
//     await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/02.Change Password Required.png' });
//     await page.locator('input[name="curPassword"]').fill('ZXcv.!234');
//     await page.locator('input[name="password"]').fill('Qwerty@123');
//     await page.locator('input[name="cPassword"]').fill('Qwerty@123');
//     await page.waitForTimeout(1000);
//     await page.getByText('visibility_off').first().click();
//     await page.getByText('visibility_off').nth(1).click();
//     await page.getByText('visibility_off').click();
//     await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/03.New Password.png' });
//     await page.getByRole('button', { name: 'Close' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/04.Click Close.png' });
//     await page.getByText('persontest.gamekittisak3@gmail.comGinkgo Soft Co., Ltd.').click();
//     await page.getByText('Change Password').click();
//     await page.locator('input[name="curPassword"]').fill('ZXcv.!234');
//     await page.locator('input[name="password"]').fill('Qwerty@123');
//     await page.locator('input[name="cPassword"]').fill('Qwerty@123');
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/05.Click Save.png' });
//     await page.getByText('persontest.gamekittisak3@gmail.comGinkgo Soft Co., Ltd.').click();
//     await page.locator('#kt_header').getByText('Log Out').click();
//     await page.locator('input[name="email"]').fill('test.gamekittisak3@gmail.com');
//     await page.locator('input[name="password"]').fill('Qwerty@123');
//     await page.getByText('visibility_off').click();
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/06.New Password Login.png' });
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'Output/TS08-Button/TC08 Change Password/07.New Password Login Success.png' });
//     await page.getByText('persontest.gamekittisak3@gmail.comGinkgo Soft Co., Ltd.').click();
//     await page.getByText('Change Password').click();
//     await page.locator('input[name="curPassword"]').fill('Qwerty@123');
//     await page.locator('input[name="password"]').fill('ZXcv.!234');
//     await page.locator('input[name="cPassword"]').fill('ZXcv.!234');
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(2000);

// });


test('TC08 Click Link ', async ({ page }) => {

    await page.waitForTimeout(1000);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '© 2023 Ginkgo Soft Co., Ltd.' }).click();
    const page1 = await page1Promise;
    await page1.waitForURL('https://ginkgosoft.co.th/');
    await expect(page1.locator('#content div').filter({ hasText: 'Our Best Services เราคือผู้เชี่ยวชาญทางด้าน Digital Transformation, Paperless So' }).nth(2)).toBeEnabled();
    await page.waitForTimeout(1000);
    await page1.screenshot({ path: 'Output/TS08-Button/TC08 Click Link/01.Click Ginkgo Soft.png' });
    await page.waitForTimeout(1000);
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
    const page2 = await page2Promise;
    await page2.waitForURL('https://www.gestampduty.com/privacy-policy/');
    await expect(page2.getByText('นโยบายความเป็นส่วนตัวข้อมูลส่วนบุคคล สำหรับผลิตภัณฑ์ GeStamp Duty Last Updated: ')).toBeEnabled();
    await page.waitForTimeout(5000);
    await page2.screenshot({ path: 'Output/TS08-Button/TC08 Click Link/02.Click Privacy Policy.png' });

});




test('TC09 Logout ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC09 Logout/01.Before Click Logout.png' });
    await page.waitForTimeout(1000);
    await page.getByText('logout').click();
    await page.screenshot({ path: 'Output/TS08-Button/TC09 Logout/02.After Click Logout.png' });
    await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByText('persontest.gamekittisak2@gmail.comGinkgo Soft Co., Ltd.').click();
    await page.screenshot({ path: 'Output/TS08-Button/TC09 Logout/03.Before Click Logout User Details.png' });
    await page.locator('#kt_header').getByText('Log Out').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC09 Logout/04.After Click Logout User Details.png' });

});




test('TC10 Monthly E-Stamp 1 - 6  ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Transactions', exact: true }).click();
    await page.locator('div').filter({ hasText: /^Select Month2024-07$/ }).nth(2).click();
    await page.getByRole('option', { name: '2024-07' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/01. 1st Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2024-07$/ }).nth(2).click();
    await page.getByRole('option', { name: '2024-06' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/02. 2nd Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2024-06$/ }).nth(2).click();
    await page.getByRole('option', { name: '2024-05' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/03. 3rd Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2024-05$/ }).nth(2).click();
    await page.getByRole('option', { name: '2024-04' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/04. 4th Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2024-04$/ }).nth(2).click();
    await page.getByRole('option', { name: '2024-03' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/05. 5th Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2024-03$/ }).nth(2).click();
    await page.getByRole('option', { name: '2024-02' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/06. 6th Months.png', fullPage: true });
    await page.waitForTimeout(2000);

});



test('TC10 Monthly E-Stamp 7 - 12  ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Transactions', exact: true }).click();
    await page.locator('div').filter({ hasText: /^Select Month2024-07$/ }).nth(2).click();
    await page.getByRole('option', { name: '2024-01' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/07. 7th Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2024-01$/ }).nth(2).click();
    await page.getByRole('option', { name: '2023-12' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/08. 8th Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2023-12$/ }).nth(2).click();
    await page.getByRole('option', { name: '2023-11' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/09. 9th Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2023-11$/ }).nth(2).click();
    await page.getByRole('option', { name: '2023-10' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/10. 10th Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2023-10$/ }).nth(2).click();
    await page.getByRole('option', { name: '2023-09' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/11. 11th Months.png', fullPage: true });
    await page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Select Month2023-09$/ }).nth(2).click();
    await page.getByRole('option', { name: '2023-08' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Ginkgo Soft Co., Ltd. (บริษัท กิงโกะ ซอฟต์ จำกัด)' }).click();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'Output/TS08-Button/TC10 Monthly E-Stamp/12. 12th Months.png', fullPage: true });
    await page.waitForTimeout(2000);

});




test('TC11 Dashboard  ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Open calendar').click();
    await page.getByLabel('1 January 2024', { exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByLabel('31 January 2024').click();
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS08-Button/TC11 Dashboard/01. Dashboard.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Complete vs Incomplete Transactions').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC11 Dashboard/02. Incomplete Transactions.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Monthly e-Stamp duty amount').hover();
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC11 Dashboard/03. Monthly e-Stamp duty amount.png' });
    await page.waitForTimeout(1000);
    await page.getByText('(ก)214').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC11 Dashboard/04. Completed duty amount by Type Code.png' });
    await page.waitForTimeout(1000);
    await page.getByText('New EntryAdditionalIncrease Limit').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC11 Dashboard/05. Completed duty amount by Send form type.png' });
    await page.waitForTimeout(1000);




});




test('TC12 Click Dashboard YTD  ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.getByRole('button', { name: 'YTD' }).click();
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/01. YTD/01. Dashboard.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Complete vs Incomplete Transactions').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/01. YTD/02. Incomplete Transactions.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Monthly e-Stamp duty amount').hover();
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/01. YTD/03. Monthly e-Stamp duty amount.png' });
    await page.waitForTimeout(1000);
    await page.getByText('(ก)214').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/01. YTD/04. Completed duty amount by Type Code.png' });
    await page.waitForTimeout(1000);
    await page.getByText('New EntryAdditionalIncrease Limit').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/01. YTD/05. Completed duty amount by Send form type.png' });
    await page.waitForTimeout(1000);




});


test('TC12 Click Dashboard LM  ', async ({ page }) => {

    // await page.waitForTimeout(3000);
    // await page.getByText('logout').click();
    // await page.waitForTimeout(3000);
    // await page.goto('/login');
    // await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
    // await page.locator('input[name="password"]').fill('ZXcv.!234');
    // await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.getByRole('button', { name: 'LM' }).click();
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/02. LM/01. Dashboard.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Complete vs Incomplete Transactions').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/02. LM/02. Incomplete Transactions.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Monthly e-Stamp duty amount').hover();
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/02. LM/03. Monthly e-Stamp duty amount.png' });
    await page.waitForTimeout(1000);
    // await page.getByText('(ก)24').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/02. LM/04. Completed duty amount by Type Code.png' });
    await page.waitForTimeout(1000);
    await page.getByText('New EntryAdditionalIncrease Limit').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/02. LM/05. Completed duty amount by Send form type.png' });
    await page.waitForTimeout(1000);




});



test('TC12 Click Dashboard MTD  ', async ({ page }) => {

    // await page.waitForTimeout(3000);
    // await page.getByText('logout').click();
    // await page.waitForTimeout(3000);
    // await page.goto('/login');
    // await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
    // await page.locator('input[name="password"]').fill('ZXcv.!234');
    // await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.getByRole('button', { name: 'MTD' }).click();
    await page.waitForTimeout(10000);
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/03. MTD/01. Dashboard.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Complete vs Incomplete Transactions').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/03. MTD/02. Incomplete Transactions.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Monthly e-Stamp duty amount').hover();
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/03. MTD/03. Monthly e-Stamp duty amount.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Completed duty amount by Type Code').hover();
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/03. MTD/04. Completed duty amount by Type Code.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Completed duty amount by Send form type').hover();
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    await page.locator('#kt_body').press('ArrowDown');
    // await page.getByText('New EntryAdditionalIncrease Limit').hover();
    await page.screenshot({ path: 'Output/TS08-Button/TC12 Click Dashboard/03. MTD/05. Completed duty amount by Send form type.png' });
    await page.waitForTimeout(1000);




});