// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('https://app.gestampduty.com/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak1@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('https://app.gestampduty.com/paperstamp');
});

// const { test, expect } = require('@playwright/test');
// test.use({ storageState: 'playwright/.auth/T1.json' });




// test.beforeEach(async ({ page }) => {
//     // Runs before each test and signs in each page.
//     await page.goto('https://app.gestampduty.com/paperstamp');
// });


test('TC01 Paper Stamp Duty ', async ({ page }) => {
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/01.Paper Stamp Duty.png' });
    await page.locator('select').selectOption('10');
    await page.waitForTimeout(2800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/02.Rows per page 10.png' });
    await page.locator('select').selectOption('15');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/03.Rows per page 15.png' });
    await page.locator('select').selectOption('50');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/04.Rows per page 50.png' });
    await page.locator('select').selectOption('100');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/05.Rows per page 100.png' });
    await page.locator('select').selectOption('200');
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC01 Paper Stamp Duty/06.Rows per page 200.png' });
    await page.waitForTimeout(1000);

});


test('TC02 Search Data Version ', async ({ page }) => {

    await page.locator('select').selectOption('15');
    await page.getByLabel('Latest').click();
    await page.getByRole('option', { name: 'Latest' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/01.Search Data Version Lastest.png' });
    await page.getByLabel('Latest').click();
    await page.getByRole('option', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/02.Search Data Version All.png' });

});


test('TC02 Search Uploaded Date From ', async ({ page }) => {

    await page.locator('select').selectOption('15');
    await page.getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('12 July 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/03.Search Uploaded Date From.png' });


});


test('TC02 Search Uploaded Date To ', async ({ page }) => {

    await page.locator('select').selectOption('15');
    await page.getByLabel('Open calendar').nth(1).click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('12 July 2023', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/04.Search Uploaded Date To.png' });


});




test('TC02 Search Contract No ', async ({ page }) => {

    await page.locator('select').selectOption('15');
    await page.getByLabel('Contract No.').fill('2269639948');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/05.Search Contract No.png' });

});


test('TC02 Search Full  ', async ({ page }) => {

    await page.locator('select').selectOption('15');
    await page.getByLabel('Latest').click();
    await page.getByRole('option', { name: 'Latest' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByLabel('Open calendar').first().click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('1 July 2023', { exact: true }).click();
    await page.getByLabel('Open calendar').nth(1).click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2023').click();
    await page.getByLabel('July 2023').click();
    await page.getByLabel('31 July 2023', { exact: true }).click();
    await page.waitForTimeout(800);
    await page.getByLabel('Contract No.').fill('2269670000');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/06.Search Full.png' });

});



test('TC02 Search No Input ', async ({ page }) => {

    await page.locator('select').selectOption('15');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC02 Search/07.Search No Input.png' });

});





test('TC03 Click Next And Previous Page  ', async ({ page }) => {

    await page.getByRole('button', { name: 'Search' }).click();
    await page.locator('select').selectOption('10');
    // await page.getByLabel('Next').click();
    await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/01.10 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/02.10 Records Next Previous.png' });
    await page.locator('select').selectOption('15');
    await page.getByLabel('Next').click();
    // await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/03.15 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/04.15 Records Next Previous.png' });
    await page.locator('select').selectOption('50');
    // await page.getByLabel('Next').click();
    await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/05.50 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/06.50 Records Next Previous.png' });
    await page.locator('select').selectOption('100');
    await page.getByLabel('Next').click();
    // await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/07.100 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/08.100 Records Next Previous.png' });
    await page.locator('select').selectOption('200');
    await page.getByLabel('Next').click();
    // await page.getByLabel('Next').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/09.200 Records Next Page.png' });
    await page.getByLabel('Previous').click();
    await page.waitForTimeout(1800);
    await page.getByText('Rows per page').hover();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC03 Click Next And Previous Page/10.200 Records Next Previous.png' });
    await page.waitForTimeout(1800);


});



test('TC05 Download Template ', async ({ page }) => {



    const downloadPromise = page.waitForEvent('download');
    await page.getByText('TEMPLATE').click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS04-Paper Stamp Duty/TC05 Download Template/PaperStampTemplate.xlsx');




});





test('TC06 Upload Template ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/test/PaperStampTemplate.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByLabel('Upload Success')).toHaveText('check_circle_outline Upload Success Upload Total, 1 row(s)Success, 1 row(s)Duplicate, 0 row(s)Error, 0 row(s)Close');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Paper ' }).getByRole('button').first();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC06 Upload Template/01.Upload Success.png' , mask: [mask_locator2], maskColor: '#00FF00' });
    await page.getByRole('row', { name: 'Auto_Paper ' }).getByRole('button').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1000);

});





test('TC07 Delete Template ', async ({ page }) => {

    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/test/PaperStampTemplate2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByLabel('Upload Success')).toHaveText('check_circle_outline Upload Success Upload Total, 1 row(s)Success, 1 row(s)Duplicate, 0 row(s)Error, 0 row(s)Close');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_Paper ' }).getByRole('button').first();
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC07 Delete Template/01.Upload Success.png' , mask: [mask_locator2], maskColor: '#00FF00' });
    await page.getByRole('row', { name: 'Auto_Delete ' }).getByRole('button').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC07 Delete Template/02.Click Delete.png'  });
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC07 Delete Template/03.Delete Sucess.png'   });

});





test('TC08 Click Learn More ', async ({ page }) => {

    await page.waitForURL('https://app.gestampduty.com/paperstamp');
    await page.waitForTimeout(3000);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn More' }).click();
    const page1 = await page1Promise;
    await page1.waitForURL('https://www.gestampduty.com/docs/paper-stamp-duty/');
    await expect(page1.getByText('Home Docs Input Data Paper Stamp Duty Paper Stamp Duty ผู้ใช้งานสามารถนำข้อมูลกา')).toBeEnabled();
    await page.waitForTimeout(1000);
    await page1.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC08 Click Learn More/01.Click Learn More.png' });
    await page.waitForTimeout(1000);

  });


  test('TC09 Click Up To ', async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC09 Click Up To/01.Before Click.png' });
    await page.getByRole('img', { name: 'Stockholm-icons / Navigation / Up-2' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS04-Paper Stamp Duty/TC09 Click Up To/02.After Click.png' });
    await page.waitForTimeout(1000);

  
  });
  
