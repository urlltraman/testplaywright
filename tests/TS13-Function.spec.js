import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Runs Uat

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});



// test.beforeEach(async ({ page }) => {
//   // Runs Dev

//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//   await page.locator('input[name="password"]').fill('P@ssw0rd');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   // await page.getByRole('button', { name: 'Accept' }).click();

// });


test('GSD-3 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(5000);
    await expect.soft(page.locator('#kt_content div').filter({ hasText: 'No.E-Document No.Contract No.Creation DateStatusSelect TypeType CodeEffective Da' }).nth(3)).toBeVisible();
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-03/01. Ginkgosoft.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Ginkgo Soft Co., Ltd.').nth(1).click();
    await page.getByText('Ginkgo Soft Co., Ltd. (Demo)').click();
    await page.waitForTimeout(5000);
    await page.locator('button').filter({ hasText: 'filter_alt' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.locator('#kt_content div').filter({ hasText: 'No.E-Document No.Contract No.Creation DateStatusSelect TypeType CodeEffective Da' }).nth(3)).toBeVisible();
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd. (Demo)').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-03/02. GinkgoTest.png' });
    await page.waitForTimeout(1000);

});


test('GSD-7', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.waitForURL('/settings/configuration');
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('tab', { name: 'Company' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Auto Test ออโต เทส AT Test Auto ทดสอบ อัตโนมัติ 1 ACCOUNT INFO KEY' }).getByRole('button').nth(2).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-07/01. Expire Date.png' });
    await page.waitForTimeout(1000);
    await page.getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2030').click();
    await page.getByLabel('December 2030').click();
    await page.getByLabel('31 December 2030').click();
    await page.locator('input[name="keyStoreKey"]').fill('test');
    await page.locator('input[name="keyStorePass"]').fill('test');
    await page.locator('#file').setInputFiles('Data Files/AutomateTest.p12');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('row', { name: 'Auto Test ออโต เทส AT Test Auto ทดสอบ อัตโนมัติ 1 ACCOUNT INFO KEY' }).getByRole('button').nth(2).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-07/02. Change Expire Date.png' });
    await page.waitForTimeout(1000);
    await page.getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('31 December 2024').click();
    await page.locator('#file').setInputFiles('Data Files/AutomateTest.p12');
    await page.locator('input[name="keyStoreKey"]').fill('test');
    await page.locator('input[name="keyStorePass"]').fill('test');
    await page.getByRole('button', { name: 'Save' }).click();


});


test('GSD-17 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(1000);
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2023').click();
    await page.getByLabel('December 2023').click();
    await page.getByLabel('26 December 2023').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await page.getByRole('combobox').selectOption('10');
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download1 = await downloadPromise1;
    await download1.saveAs('Output/TS13-Function/GSD-17/01.Export 10.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('15');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    const downloadPromise2 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download2 = await downloadPromise2;
    await download2.saveAs('Output/TS13-Function/GSD-17/02.Export 15.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('20');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    const downloadPromise3 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download3 = await downloadPromise3;
    await download3.saveAs('Output/TS13-Function/GSD-17/03.Export 20.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('50');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    const downloadPromise4 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download4 = await downloadPromise4;
    await download4.saveAs('Output/TS13-Function/GSD-17/04.Export 50.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('100');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    const downloadPromise5 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download5 = await downloadPromise5;
    await download5.saveAs('Output/TS13-Function/GSD-17/05.Export 100.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('150');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    const downloadPromise6 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download6 = await downloadPromise6;
    await download6.saveAs('Output/TS13-Function/GSD-17/06.Export 150.csv');
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').selectOption('200');
    await page.waitForTimeout(5000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'No. E-Document No. Contract No. Creation Date Status Select Type Type Code Effective Date Expire Date Receive Date Send Form Type Filing No. Overdue flag No. of Duplicated Contract Referred E-Document No. Referred Contract No. Referred Creation Date Duty Amount OS4 Inst Amount Action Type Stamp Duty Amount Duplicated Stamp Duty Amount Total Paid Amount Estimated Surcharge Amount Estimated Fine Amount Actual Surcharge Amount Actual Fine Amount Total Amount Payer Tax ID Contract Party Tax ID Contract Party First Name Contract Party Last Name Building Name Room No. Floor No. Village Name Building Number Moo Soi Junction Street Subdistrict District Province Postcode Country Id Email Product Code Credit Type Schedule Submit Date Submit Date Batch Id Form Submit No. SD Payment Code Reference1 Reference2 Payment Due Date Receipt No. Receipt Date' }).getByLabel('').click();
    const downloadPromise7 = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download7 = await downloadPromise7;
    await download7.saveAs('Output/TS13-Function/GSD-17/07.Export 200.csv');



});








test('GSD-20 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-20/Auto_GSD-20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-03/01. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-20  ' })).toBeHidden();
    await page.waitForTimeout(1500);

});




// test('GSD-31 ', async ({ page }) => {

//     await page.getByRole('link', { name: 'Administrator' }).click();
//     await page.getByRole('link', { name: 'User Accounts' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByRole('combobox').selectOption('50');
//     await page.waitForTimeout(500);
//     await page.getByRole('row', { name: 'Ki*****ak ki*****th GGS' }).getByRole('button').first().click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-31/01. User EntraID Details.png' });
//     await page.waitForTimeout(500);
//     await page.getByRole('button', { name: 'Cancel' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByText('logout').click();
//     await page.waitForTimeout(2500);
//     await page.goto('/login');
//     await page.getByRole('button', { name: 'Sign in with your IDP' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByPlaceholder('Email, phone, or Skype').fill('kittisak.p@ginkgosoft.co.th')
//     await page.getByRole('button', { name: 'Next' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByPlaceholder('Password').fill('db99bLydfbN');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.waitForTimeout(2500);
//     await page.getByRole('button', { name: 'Yes' }).click();
//     await page.waitForTimeout(2500);
//     await page.waitForURL('/batch');
//     await page.getByText('personKittisakGinkgo Soft Co., Ltd.').click();
//     await page.waitForTimeout(500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-31/02. Login EntraID.png' });
// เพิ่่มสลับไป getinvoice


// });





test('GSD-32 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-32/Auto_GSD-32.json');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-32' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-32/01. Upload Json.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-32 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-32  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.waitForTimeout(1500);


});



// test('GSD-60  ', async ({ page }) => {

//     await page.getByRole('link', { name: 'Administrator' }).click();
//     await page.getByRole('link', { name: 'Groups' }).click();
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/01. Defualt Group.png' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('treeitem', { name: 'Toggle Ginkgo Soft Co., Ltd. Ginkgo Soft Co., Ltd.' }).getByRole('button').nth(1).click();
//     await page.getByPlaceholder('Ex. Default').fill('Auto Test');
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/02. Detail Group.png' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/03. Creation Group.png' });
//     await page.waitForTimeout(3500);
//     await page.getByRole('link', { name: 'Administrator' }).click();
//     await page.getByRole('link', { name: 'Groups' }).click();
//     await page.getByRole('button', { name: 'Auto Test' }).click();
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/04. No Member.png' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Members' }).click();
//     await page.locator('mat-list-option:nth-child(18) > .mdc-list-item__content').click();
//     await page.getByRole('option', { name: 'te*****om [Au*****rd]' }).locator('span').nth(1).click();
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/05. Details Member.png' });
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(3500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/06. Add Member.png' });
//     await page.waitForTimeout(3500);
//     await page.getByRole('button', { name: 'Members' }).click();
//     await page.getByRole('option', { name: 'te*****om [Au*****rd]' }).locator('span').nth(1).click();
//     await page.waitForTimeout(1500);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/07. Edit Member.png' });
//     await page.waitForTimeout(3500);
//     await page.getByRole('link', { name: 'Administrator' }).click();
//     await page.getByRole('link', { name: 'Groups' }).click();
//     await page.getByRole('button', { name: 'Auto Test' }).click();
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/08. Before Edit.png' });
//     await page.waitForTimeout(1500);
//     await page.locator('button').filter({ hasText: 'edit_note' }).click();
//     await page.getByPlaceholder('Ex. Default').fill('Auto Edit');
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/09. Affter Edit.png' });
//     await page.waitForTimeout(1500);
//     await page.locator('button').filter({ hasText: 'delete' }).click();
//     await page.getByRole('button', { name: 'Cancel' }).click();
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/10. Delete Click Cancel.png' });
//     await page.waitForTimeout(1500);
//     await page.locator('button').filter({ hasText: 'delete' }).click();
//     await page.getByRole('button', { name: 'Confirm' }).click();
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-60/11. Delete Click Confirm.png' });
//     await page.waitForTimeout(1500);
  
  
//   });

// test('GSD-61 ', async ({ page }) => {

//     await page.waitForURL('/batch');
//     await page.locator('a').filter({ hasText: 'settings' }).click();
//     await page.waitForURL('/settings/configuration');
//     await page.getByRole('link', { name: 'Organization' }).click();
//     await page.getByRole('row', { name: 'PAYPAL Co.,Ltd เพย์แพล PP' }).getByRole('button').first().click();
//     await page.waitForTimeout(1500);
//     await page.getByRole('tab', { name: 'Watcher' }).click();
//     await page.waitForTimeout(1500);
//     await page.getByText('Home Path').hover();
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-61/01. Default Home Path.png' });
//     await page.waitForTimeout(1500);
//     await page.getByPlaceholder('Home Path').fill('/Test/Auto/GGS')
//     await page.waitForTimeout(1500);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-61/02. Change Home Path.png' });
//     await page.getByRole('button', { name: 'Cancel' }).click();

// });




test('GSD-62 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'Schedule Submit' }).click();
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowLeft');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/01. 1 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/02. 2 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/03. 33 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/04. 4 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/05. 5 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/06. 6 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/07. 7 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/08. 8 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/09. 9 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/10. 10 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/11. 11 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/12. 12 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/13. 13 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/14. 14 Day.png' });
    await page.waitForTimeout(500);
    await page.getByRole('slider').first().press('ArrowRight');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-62/15. 15 Day.png' });
    await page.waitForTimeout(500);


});

test('GSD-68 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('button', { name: 'INFO' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-68/01. Details Company.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(1000);
    await page.getByText('Ginkgo Soft Co., Ltd.').nth(1).click();
    await page.getByText('Ginkgo Soft Co., Ltd. (Demo)').click();
    await page.waitForTimeout(5000);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-68/Auto_GSD-68.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-68' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-68/02. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByText('Auto_GSD-68').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-68/03. By Pass Approve.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-68 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-68  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-72 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Input Log' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-72/01. Input Logs.png' });
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS13-Function/GSD-72/02.Input Logs.xlsx');

});





test('GSD-73 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Submit Log' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-73/01. Submit Logs.png' });
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS13-Function/GSD-73/02.Submit Logs.xlsx');

});




test('GSD-77 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Input Log' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-77/01. Input Logs.png' });
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS13-Function/GSD-77/02.Input Logs.xlsx');

});




test('GSD-78 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Submit Log' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-78/01. Submit Logs.png' });
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Export' }).click();
    const download = await downloadPromise;
    await download.saveAs('Output/TS13-Function/GSD-78/02.Submit Logs.xlsx');

});



// test('GSD-85 ', async ({ page }) => {

//     await page.waitForURL('/batch');
//     await page.getByRole('button', { name: 'Upload' }).first().click();
//     await page.locator('#file').setInputFiles('Data Files/Function/GSD-85/Auto_GSD-85.xlsx');
//     await page.getByRole('button', { name: 'Upload' }).click();

// });




test('GSD-86 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.waitForURL('/settings/configuration');
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('tab', { name: 'Users' }).click();
    await page.locator('div').filter({ hasText: /^OrganizationAll$/ }).first().click();
    await page.getByRole('option', { name: 'Ginkgo Soft' }).locator('span').click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Pr*****in pr*****om Ginkgo Soft กิงโกะซอฟต์ GGS' }).getByRole('button').nth(1).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-86/01. Api User.png' });
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'ki*****.p     ki*****th' }).getByRole('button').nth(1).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-86/02. Normal User.png' });


});



test('GSD-88 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-88/Auto_GSD-88.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.waitForTimeout(30000);
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-88 (1)' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-88/01. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-88 (1)').click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-88/02. Batch 1 Details.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(30000);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-88 (2)').click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-88/03. Batch 2 Details.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-88 (1) ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-88 (1)  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-88 (2) ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-88 (2)  ' })).toBeHidden()
    await page.waitForTimeout(1500);
});



test('GSD-93 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.locator('#kt_content div').filter({ hasText: 'No.E-Document No.Contract No.Creation DateStatusSelect TypeType CodeEffective Da' }).nth(3)).toBeVisible();
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-93/01. Ginkgosoft.png' });
    await page.waitForTimeout(1000);
    await page.getByText('Ginkgo Soft Co., Ltd.').nth(1).click();
    await page.getByText('Ginkgo Soft Co., Ltd. (Demo)').click();
    await page.waitForTimeout(5000);
    await page.locator('button').filter({ hasText: 'filter_alt' }).click();
    await page.getByRole('menuitem', { name: 'Uploaded Date' }).hover();
    await page.getByRole('menuitem', { name: 'Last 6 Months' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.locator('#kt_content div').filter({ hasText: 'No.E-Document No.Contract No.Creation DateStatusSelect TypeType CodeEffective Da' }).nth(3)).toBeVisible();
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd. (Demo)').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-93/02. GinkgoTest.png' });
    await page.waitForTimeout(1000);

});



test('GSD-94 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-94/Auto_GSD-94.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-94' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-94/01. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-94 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-94  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.waitForTimeout(1500);

});




test('GSD-96 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-96/Auto_GSD-96.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-96' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-96/01. GSD-96.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByText('Auto_GSD-96').first().click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.locator('[id="\\30 _55"]').hover();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-96/02. Relate Party.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-96 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-96  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.waitForTimeout(1500);


});



test('GSD-99 Batch', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-99/Auto_GSD-99.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    // let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-99' }).getByRole('cell').first();
    // await page.screenshot({ path: 'Output/TS13-Function/GSD-99/01. Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByText('Auto_GSD-99').click();
    await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Creation Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party First Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Last Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Inst Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Stamp Duty Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duplicated Stamp Duty Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Paid Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'e-Document No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Surcharge Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Fine Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Actual Surcharge Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Amount' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Previous Submit' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Entity Id' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Sender Role' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Form Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Select Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Type Code' })).toBeVisible();
    // await expect.soft(page.getByRole('cell', { name: 'UserId' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Effective Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Expire Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receive Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Send From Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Filing No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Overdue Flag' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'DupNumber' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'TaxPayer' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Brach No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Branch Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relationship' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Tax ID' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Branch No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Building Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Room No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Floor No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Village Name' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Building Number' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Moo' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Soi' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Junction' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Street' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Subdistrict' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'District', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Province' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Postcode' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Country Id' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Party' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Relate Contract' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Array Detail' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate InstInfo Id' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate InstInfo Contract No.' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate InstInfo Creation Date' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Relate InstInfo Duty Amount Os4' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail1' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail2' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail3' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail4' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail5' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail6' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail7' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Detail8' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount1' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount2' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount3' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Amount4' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Number', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'ActionType', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'ActionType1' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Email' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Product Code' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Old Limit' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Issue Number' })).toBeVisible();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-99/01. Batch Details.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-99 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-99  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('GSD-99 Transactions', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(15000);
    await expect.soft(page.getByRole('cell', { name: 'No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'E-Document No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Creation Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Status', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Select Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Type Code', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Effective Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Expire Date', exact: true })).toBeVisible();
    // await expect.soft(page.getByRole('cell', { name: 'Import Contract Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Send Form Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Filing No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Overdue flag', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'No. of Duplicated Contract', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred E-Document No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred Contract No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Referred Creation Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duty Amount OS4', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Inst Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Action Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Stamp Duty Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Duplicated Stamp Duty Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Paid Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Surcharge Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Estimated Fine Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Actual Surcharge Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Actual Fine Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Total Amount', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Payer Tax ID', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Tax ID', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party First Name', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Contract Party Last Name', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Building Name', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Room No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Floor No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Village Name', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Building Number', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Moo', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Soi', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Junction', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Street', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Subdistrict', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'District', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Province', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Postcode', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Country Id', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Email', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Product Code', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Credit Type', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Schedule Submit Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Submit Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Batch Id', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Form Submit No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'SD Payment Code', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Reference1', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Reference2', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Payment Due Date', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receipt No.', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Receipt Date', exact: true })).toBeVisible();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-99/02. Transactions Details.png' });
    await page.waitForTimeout(1500);






});



test('GSD-113 ', async ({ page }) => {
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('/paperstamp');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-113/Auto_GSD-113.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await expect.soft(page.getByText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s) Error Message Row number 1 |ContractNo is containt reserve word ')).toHaveText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s) Error Message Row number 1 |ContractNo is containt reserve word ');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-113/01.Upload Cross-Site Scripting.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);
    // await page.locator('a').filter({ hasText: 'settings' }).click();
    // await page.getByRole('link', { name: 'Organization' }).click();
    // await page.getByRole('tab', { name: 'Company' }).click();
    // await page.waitForTimeout(1500);
    // await page.locator('div').filter({ hasText: /^OrganizationAll$/ }).first().click();
    // await page.getByRole('option', { name: 'Test Auto' }).locator('span').click();
    // await page.getByRole('button', { name: 'Add' }).click();
    // await page.waitForTimeout(1500);
    // await page.locator('input[name="nameEng"]').fill('!@#$%^&*()');
    // await page.locator('input[name="nameTha"]').fill('!@#$%^&*()');
    // await page.locator('input[name="taxId"]').fill('!@#$%^&*()');
    // await page.locator('input[name="abbrName"]').fill('!@#$%^&*()');
    // await page.locator('input[name="keyStoreKey"]').fill('!@#$%^&*()');
    // await page.locator('input[name="keyStorePass"]').fill('!@#$%^&*()');
    // await page.locator('input[name="userId"]').fill('!@#$%^&*()');
    // await page.locator('input[name="password"]').fill('!@#$%^&*()');
    // await page.locator('#file').setInputFiles('Data Files/AutomateTest.p12');
    // await page.waitForTimeout(1500);
    // await page.screenshot({ path: 'Output/TS13-Function/GSD-113/02.Creation Company Cross-Site Scripting.png' });









});


test('GSD-118 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-118/01. Sensitive Data.png' });
    await page.waitForTimeout(1500);
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
    await page.getByText('Masking Sensitive Data').click();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(1500);
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-118/02. Unlock Sensitive Data.png' });
    await page.waitForTimeout(1500);
    await page.getByText('Masking Sensitive Data').click();
    await page.waitForTimeout(1500);
    await page.reload();
    await page.waitForTimeout(5000);






});





test('GSD-119 ', async ({ page }) => {

    await page.waitForURL('/batch');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
    const page1 = await page1Promise;
    await page1.waitForTimeout(1500);
    await expect.soft(page1.getByRole('heading', { name: 'PRIVACY POLICY' })).toHaveText('PRIVACY POLICY')
    await page1.screenshot({ path: 'Output/TS13-Function/GSD-119/01. Policy.png' });

});




test('GSD-140 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
    await page.locator('#kt_header').getByText('Log Out').click();
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Forgot Password?' }).click();
    await page.getByPlaceholder('Enter your email').fill('test.gamekittisak3@gmail.com');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-140/01. Forgot Password.png' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-140/02. After Submit.png' });
    await page.waitForTimeout(1500);
    await expect.soft(page.getByRole('heading', { name: 'Email is correct!' })).toHaveText('Email is correct!');
    await expect.soft(page.getByText('Message with \'recovery\' instruction has been sent')).toHaveText('Message with \'recovery\' instruction has been sent');
    await page.waitForTimeout(1500);
    await page.getByRole('link', { name: 'Ok, got it!' }).click();

});



test('GSD-141  ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-141/Auto_GSD-141.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.getByText('Search').click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-141 ').first().click();
    await page.getByRole('button', { name: 'Submit For Review' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_GSD-141 ').first().click();
    await page.waitForTimeout(1500);
    await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(5000);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-141 ').first().click();
    // await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    // await page.getByRole('button', { name: 'Confirm' }).click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-141 ').first().click();
    await page.waitForTimeout(15000);
    await page.reload();
    await page.goto('/batch');
    await page.getByText('Search').click();
    // Payment 
    await page.waitForTimeout(1800);
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-141' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-141/01. GSD-141.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1000);
    await page.getByRole('cell', { name: 'QR Pay-in' }).getByRole('button').nth(2).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-141/02. Delete Batch Payment.png' });
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-141/03. After Delete Batch.png' });



});



test('GSD-156 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Submit Error' }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('February 2024').click();
    await page.getByLabel('1 February 2024', { exact: true }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('22 December 2024').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Auto_Gestamp').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-156/01. User Can Retry Submit.png' });


});


test('GSD-157 ', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^apps$/ }).click();
    await page.getByRole('link', { name: 'zDox' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-157/01. Click zDox.png' });
    await page.waitForTimeout(5000);
    await page.goto('/batch');
    await page.locator('div').filter({ hasText: /^apps$/ }).click();
    await page.getByRole('link', { name: 'getInvoice' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-157/02. Click getInvoice.png' });

});


// test('GSD-158 ', async ({ page }) => {

//     await page.goto('/unauthorize');
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'Output/TS13-Function/GSD-158/01. Unauthorize.png' });


// });









test('GSD-159 ', async ({ page }) => {
    await page.getByRole('link', { name: 'Paper Stamp Duty' }).click();
    await page.waitForURL('/paperstamp');
    await page.getByRole('button', { name: 'Upload', exact: true }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-159/Auto_GSD-159.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await expect.soft(page.getByText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s) Error Message Row number 1 |ContractNo is containt reserve word ')).toHaveText('Upload Total: 1 row(s) Success: 0 row(s) ,Duplicate: 0 row(s) ,Error: 1 row(s) Error Message Row number 1 |ContractNo is containt reserve word ');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-159/01.Upload Error.png' });
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1000);

});



test('GSD-170 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Completed' }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2023').click();
    await page.getByLabel('December 2023').click();
    await page.getByLabel('26 December 2023').click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('December 2024').click();
    await page.getByLabel('26 December 2024').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'Completed [14831]' }).getByLabel('').click();
    await page.getByRole('button', { name: 'Receipts' }).first().click();
    await page.getByRole('button', { name: 'Go to Downloads' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Refresh' }).click();
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('row', { name: 'kittisak.p@ginkgosoft.co.th' }).getByRole('button').nth(1).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS13-Function/GSD-170/01.Receipts GSD-170.rar');


});





test('GSD-187 ', async ({ page }) => {
    await page.getByText('logout').click();
    await page.waitForTimeout(2500);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak7@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd10');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-187/Auto_GSD-187.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-187' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-187/01. Upload Company Auto Approved.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-187 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-187  ' })).toBeHidden();
    await page.waitForTimeout(1500);

});



test('GSD-218 ', async ({ page }) => {

    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'dashboard' }).click();
    await page.getByRole('link', { name: 'Monthly Transactions for Accounting' }).click();
    await page.locator('div').filter({ hasText: /^Period MonthLast 2 Months$/ }).nth(2).click();
    await page.getByText('Last 1 Month').click();
    await page.getByRole('button', { name: '2024-06' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-218/01.Last 1 Months.png' });
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Period MonthLast 1 Month$/ }).nth(2).click();
    await page.getByRole('option', { name: 'Last 2 Months' }).locator('span').click();
    await page.getByRole('button', { name: '2024-05' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-218/02.Last 2 Months.png' });
    await page.locator('div').filter({ hasText: /^Period MonthLast 2 Months$/ }).nth(2).click();
    await page.getByText('Last 3 Month').click();
    await page.getByRole('button', { name: '2024-04' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-218/03.Last 3 Months.png' });
    await page.locator('div').filter({ hasText: /^Period MonthLast 3 Months$/ }).first().click();
    await page.getByText('Last 4 Month').click();
    await page.getByRole('button', { name: '2024-03' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-218/04.Last 4 Months.png' });
    await page.locator('div').filter({ hasText: /^Period MonthLast 4 Months$/ }).nth(2).click();
    await page.getByText('Last 6 Month').click();
    await page.getByRole('button', { name: '2024-02' }).click();
    await page.getByRole('button', { name: '2024-01' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-218/05.Last 6 Months.png' });
    await page.locator('div').filter({ hasText: /^Period MonthLast 6 Months$/ }).nth(2).click();
    await page.getByText('Last 12 Month').click();
    await page.getByRole('button', { name: '2023-12' }).click();
    await page.getByRole('button', { name: '2023-11' }).click();
    await page.getByRole('button', { name: '2023-10' }).click();
    await page.getByRole('button', { name: '2023-09' }).click();
    await page.getByRole('button', { name: '2023-08' }).click();
    await page.getByRole('button', { name: '2023-07' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('End');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-218/06.Last 12 Months.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.getByRole('link', { name: 'User Accounts' }).click();
    await page.getByRole('combobox').selectOption('50');
    await page.getByRole('row', { name: 'te*****om     te*****om GGS,' }).getByRole('button').first().click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-218/07.Accountant Users.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();
  
  
  
  
  
  });
  
  
  
  
  test('GSD-220 ', async ({ page }) => {
    // Batch
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-220/Auto_GSD-220.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.getByText('Search').click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-220 ').first().click();
    await expect.soft(page.getByText('Total InstAmount')).toHaveText('Total InstAmount');
    await expect.soft(page.getByText('Inst Amount')).toHaveText('Inst Amount');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-220/01.Batch Inst Amount Wording.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(500);
    await page.locator('tr').filter({ hasText: 'Auto_GSD-220' }).locator('button').nth(1).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-220  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    // Transaction
    await page.locator('a').filter({ hasText: 'Transaction' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('filter_alt Filter').click();
    await page.getByRole('menuitem', { name: 'Batch Status' }).hover();
    await page.getByRole('menuitem', { name: 'Payment', exact: true }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('January 2024').click();
    await page.getByLabel('1 January 2024', { exact: true }).click();
    await page.locator('mat-form-field').filter({ hasText: 'Uploaded Date To' }).getByLabel('Open calendar').click();
    await page.getByLabel('Choose month and year').first().click();
    await page.getByLabel('2024').click();
    await page.getByLabel('January 2024').click();
    await page.getByLabel('31 January 2024', { exact: true }).click();
    await page.getByText('Search', { exact: true }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: '001000000000000Auto40_120240101' }).click();
    await page.waitForTimeout(1500);
    await expect.soft(page.getByRole('dialog').getByText('Inst Amount')).toHaveText('Inst Amount');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-220/02.E-Doc Inst Amount Wording.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(1500);
    await page.getByText('Inst Amount', { exact: true }).hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-220/03.Transaction Inst Amount Wording.png' });
    await page.waitForTimeout(500);
  
  });
  


test('GSD-224 ', async ({ page }) => {
    await page.getByText('logout').click();
    await page.waitForTimeout(2500);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1000);
    await page.getByText('persontest.gamekittisak2@gmail.comGinkgo Soft Co., Ltd. (Demo)').click();
    await page.waitForTimeout(1000);
    await page.getByText('Change Password').click();
    await page.waitForTimeout(1000);
    await page.getByText('visibility_off').first().click();
    await page.getByText('visibility_off').first().click();
    await page.getByText('visibility_off').click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="curPassword"]').fill('ZXcv.!234');
    await page.locator('input[name="password"]').fill('ZXcv.!23');
    await page.locator('input[name="cPassword"]').fill('ZXcv.!23');
    await expect.soft(page.getByText('Password must be at least 10 characters long')).toHaveText('Password must be at least 10 characters long');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/01. 8 Character.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('ZXcv.!2345');
    await page.locator('input[name="cPassword"]').fill('ZXcv.!2345');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/02. 10 Character.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('gamekittisak');
    await page.locator('input[name="cPassword"]').fill('gamekittisak');
    await expect.soft(page.getByText('Password should be at least one lowercase')).toHaveText('Password should be at least one lowercase');
    await expect.soft(page.getByText('Password should be at least one uppercase')).toHaveText('Password should be at least one uppercase');
    await expect.soft(page.getByText('Password should be at least one number')).toHaveText('Password should be at least one number');
    await expect.soft(page.getByText('Password should be at least one symbol')).toHaveText('Password should be at least one symbol');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/03. Username.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('1234567890');
    await page.locator('input[name="cPassword"]').fill('1234567890');
    await expect.soft(page.getByText('Password should be at least one lowercase')).toHaveText('Password should be at least one lowercase');
    await expect.soft(page.getByText('Password should be at least one uppercase')).toHaveText('Password should be at least one uppercase');
    await expect.soft(page.getByText('Password should be at least one number')).toHaveText('Password should be at least one number');
    await expect.soft(page.getByText('Password should be at least one symbol')).toHaveText('Password should be at least one symbol');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/04. Poor Password.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('12345abcde');
    await page.locator('input[name="cPassword"]').fill('12345abcde');
    await expect.soft(page.getByText('Password should be at least one lowercase')).toHaveText('Password should be at least one lowercase');
    await expect.soft(page.getByText('Password should be at least one uppercase')).toHaveText('Password should be at least one uppercase');
    await expect.soft(page.getByText('Password should be at least one number')).toHaveText('Password should be at least one number');
    await expect.soft(page.getByText('Password should be at least one symbol')).toHaveText('Password should be at least one symbol');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/05. Not Good Password.png' });
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('12345@abcd');
    await page.locator('input[name="cPassword"]').fill('12345@abcd');
    await expect.soft(page.getByText('Password should be at least one lowercase')).toHaveText('Password should be at least one lowercase');
    await expect.soft(page.getByText('Password should be at least one uppercase')).toHaveText('Password should be at least one uppercase');
    await expect.soft(page.getByText('Password should be at least one number')).toHaveText('Password should be at least one number');
    await expect.soft(page.getByText('Password should be at least one symbol')).toHaveText('Password should be at least one symbol');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/06. Average Password.png' });
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
    await page.locator('input[name="password"]').fill('A1b2@c3D4e5');
    await page.locator('input[name="cPassword"]').fill('A1b2@c3D4e5');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-224/07. Good Password.png' });
    await page.waitForTimeout(1000);

});
















test('GSD-231 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-231/Auto_GSD-231.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-231' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-231/01. GSD-231.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 4; therefore, instAmount must be equal amount4; At this time, the Revenue Department's system does not accept ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-231/02. GSD-231 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-231').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 4; therefore, instAmount must be equal amount4; At this time, the Revenue Department's system does not accept Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-231/03. GSD-231 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-231 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-231  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-232 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-232/Auto_GSD-232.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-232' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-232/01. GSD-232.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 1; therefore, instAmount must be equal to amount  ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-232/02. GSD-232 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-232').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 1; therefore, instAmount must be equal to amount  Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-232/03. GSD-232 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-232 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-232  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-233 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-233/Auto_GSD-233.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-233' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-233/01. GSD-233.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 2; therefore, instAmount must be equal to amount1 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-233/02. GSD-233 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-233').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 2; therefore, instAmount must be equal to amount1 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-233/03. GSD-233 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-233 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-233  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('GSD-234 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-234/Auto_GSD-234.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-234' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-234/01. GSD-234.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 3; therefore, instAmount must be equal to amount1 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-234/02. GSD-234 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-234').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 3; therefore, instAmount must be equal to amount1 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-234/03. GSD-234 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-234 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-234  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('GSD-235 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-235/Auto_GSD-235.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-235' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-235/01. GSD-235.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 4; therefore, instAmount must be equal to amount3 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-235/02. GSD-235 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-235').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' actionType is equal to 6 and actionType1 is equal to 4; therefore, instAmount must be equal to amount3 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-235/03. GSD-235 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-235 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-235  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});






test('GSD-236 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-236/Auto_GSD-236.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-236' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-236/01. GSD-236.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'relateParty' invalid totalParty ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-236/02. GSD-236 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-236').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'relateParty' invalid totalParty Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-236/03. GSD-236 Error Msg.png' });
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.locator('[id="\\30 _37"]').fill('2');
    await page.getByRole('button', { name: 'Validate' }).click();
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByText('Auto_GSD-236').first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-236/04. GSD-236 Validate Complete.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-236 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-236  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  
  
  test('GSD-237  ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-237/Auto_GSD-237.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.getByText('Search').click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-237' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-237/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GSD-237 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-237/02.Upload Details.png', fullPage: true });
    await page.getByText('Submit For Review').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-237 ').first().click();
    await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(10000);
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-237 ').first().click();
    await page.waitForTimeout(15000);
    await page.reload();
    await page.goto('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-237 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/GSD-237/04.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('/batch');
    await page.getByText('Auto_GSD-237 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS13-Function/GSD-237/05.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS13-Function/GSD-237/03.API.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'QR Pay-in' }).getByRole('button').nth(2).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
  
  });
  
  
  
  
  
  
  test('GSD-240 ', async ({ page }) => {
  
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-240/Auto_GSD-240.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-240' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-240/01. GSD-240.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.getByText('Auto_GSD-240').first().click();
    await expect.soft(page.getByRole('button', { name: 'Submit', exact: true })).toBeDisabled();
    await expect.soft(page.getByRole('button', { name: 'Schedule Submit' })).toBeDisabled();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.getByText('warningAlert')).toHaveText('warningAlert');
    await expect.soft(page.getByText('Contract No. lk5lkasacas has been deleted. (Duty Amount less than zero)')).toHaveText('Contract No. lk5lkasacas has been deleted. (Duty Amount less than zero)');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-240/02. Can Not Submit.png' });
    await page.waitForTimeout(1500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-240 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-240  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  
  
  
  test('GSD-242  ', async ({ page }) => {
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-242/Auto_GSD-242.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(2500);
    await page.getByText('Search').click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_GSD-242' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-242/01.Upload Success.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.getByText('Auto_GSD-242 ').first().click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-242/02.Upload Details.png' });
    await page.waitForTimeout(1500);
    await page.locator('tr').filter({ hasText: 'akj5kmmmci1' }).locator('button').first().click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await page.locator('tr').filter({ hasText: 'akj5kmmmci3' }).locator('button').first().click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'delete' }).nth(3).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-242/03.Delete Transction.png' });
    await page.waitForTimeout(500);
    await page.getByText('Submit For Review').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-242 ').first().click();
    await page.locator('button').filter({ hasText: /^Submit$/ }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(10000);
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-242 ').first().click();
    await page.waitForTimeout(15000);
    await page.reload();
    await page.goto('/batch');
    await page.getByText('Search').click();
    await page.getByText('Auto_GSD-242 ').first().click();
    await page.waitForTimeout(1800);
    await page.getByRole('button', { name: 'QR' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/GSD-242/05.qrPayment.jpg');
    await page.reload();
    await page.waitForTimeout(1500);
    await page.goto('/batch');
    await page.getByText('Auto_GSD-242 ').first().click();
    // download 2
    const downloadPromiseA = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Pay-in' }).click();
    const downloadA = await downloadPromiseA;
    // Save downloaded file somewhere
    await downloadA.saveAs('Output/TS13-Function/GSD-242/06.payInSlipFile.pdf');
    await page.screenshot({ path: 'Output/TS13-Function/GSD-242/04.API.png', fullPage: true });
    await page.getByRole('link', { name: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'QR Pay-in' }).getByRole('button').nth(2).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1500);
  
  });
  
  
  
  
  
  
  test('GSD-243 ', async ({ page }) => {
  
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Application' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByText('zDOX:')).toHaveText('zDOX:');
    await page.screenshot({ path: 'Output/TS13-Function/GSD-243/01.zDOX.png' });
    await page.waitForTimeout(500);
  
  
  
  });
  
  
  
  
  
  
  
  test('GSD-251 C1  ', async ({ page }) => {
  
    //  C1-1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C1-1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-251_C1-1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/01. Case C1-1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C1-1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C1-1  ' })).toBeHidden();
    //  C1-2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C1-2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_GSD-251_C1-2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/02. Case C1-2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C1-2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C1-2  ' })).toBeHidden();
    //  C1-3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C1-3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-251_C1-3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/03. Case C1-3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C1-3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C1-3  ' })).toBeHidden();
    //  C1-4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C1-4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_GSD-251_C1-4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/04. Case C1-4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C1-4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C1-4  ' })).toBeHidden();
    //  C1-5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C1-5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_GSD-251_C1-5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/05. Case C1-5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C1-5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C1-5  ' })).toBeHidden();
    //  C1-6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C1-6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_GSD-251_C1-6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/06. Case C1-6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/07. Case C1-6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-251_C1-6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/08. Case C1-6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C1-6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C1-6  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  test('GSD-251 C2  ', async ({ page }) => {
  
    //  C2-1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C2-1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-251_C2-1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/09. Case C2-1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C2-1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C2-1  ' })).toBeHidden();
  
    //  C2-2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C2-2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_GSD-251_C2-2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/10. Case C2-2.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'contractPartyId' foreignType is equal to “1”; therefore, contractPartyId must be “0000000000000”. [R15] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/11. Case C2-2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-251_C2-2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'contractPartyId' foreignType is equal to “1”; therefore, contractPartyId must be “0000000000000”. [R15] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/12. Case C2-2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C2-2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C2-2  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  test('GSD-251 C3  ', async ({ page }) => {
  
    //  C3-1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C3-1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_GSD-251_C3-1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/13. Case C3-1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C3-1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C3-1  ' })).toBeHidden();
  
    //  C3-2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C3-2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_GSD-251_C3-2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/14. Case C3-2.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ข้อมูลบรรทัดที่ 1 column 'countryId' foreignType is equal to “1”; therefore, countryId must not be empty. [RD new requirement] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/15. Case C3-2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-251_C3-2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ข้อมูลบรรทัดที่ 1 column 'countryId' foreignType is equal to “1”; therefore, countryId must not be empty. [RD new requirement] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/16. Case C3-2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C3-2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C3-2  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  
  
  test('GSD-251 C4  ', async ({ page }) => {
    //  C4  Batch
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/GSD-251/Auto_GSD-251_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_GSD-251_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/17. Case C4.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.getByText('Auto_GSD-251_C4').first().click();
    await expect.soft(page.getByRole('cell', { name: 'Foreign Type' })).toBeVisible();
    await page.getByRole('cell', { name: 'Foreign Type' }).hover();
    await expect.soft(page.getByRole('cell', { name: '1', exact: true }).nth(4)).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: '1', exact: true }).nth(4)).toHaveText('1');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/18. Batch Foreign Type.png' });
    await page.waitForTimeout(500);
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-251_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-251_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
    // C4 Transaction
    await page.getByRole('link', { name: 'Transaction' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1500);
    await page.getByRole('cell', { name: 'Foreign Type' }).hover();
    await expect.soft(page.getByRole('cell', { name: 'Foreign Type' })).toBeVisible();
    await expect.soft(page.getByRole('cell', { name: 'Foreign Type' })).toHaveText('Foreign Type');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-251/19. Transaction Foreign Type.png' });
  
  });
  
  
  
  
  
  test('GSD-255 District Case 1 TC01 - TC03  ', async ({ page }) => {
    //  TC01
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC01.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC01' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/01. Case TC01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC01 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC01  ' })).toBeHidden();
    //TC02
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC02.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC02' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/02. Case TC02.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC02 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC02  ' })).toBeHidden();
    //  TC03
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC03.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC03' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/03. Case TC03.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC03 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC03  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  
  });
  
  
  
  
  test('GSD-255 District Case 1 TC04 - TC06  ', async ({ page }) => {
  
    //  TC04
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC04.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC04' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/04. Case TC04.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC04 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC04  ' })).toBeHidden();
    //  TC05
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC05.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC05' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/05. Case TC05.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC05 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC05  ' })).toBeHidden();
    //  TC06
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC06.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC06' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/06. Case TC06.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC06 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC06  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 District Case 1 TC07 - TC9.1  ', async ({ page }) => {
    //  TC07
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC07.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC07' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/07. Case TC07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC07 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC07  ' })).toBeHidden();
    //TC08
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC08.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC08' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/08. Case TC08.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC08 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC08  ' })).toBeHidden();
    //  TC09.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC09.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC09.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/09. Case TC09.1.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC09.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC09.1  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  
  });
  
  
  
  
  test('GSD-255 District Case 1 TC9.2 - TC11.1  ', async ({ page }) => {
    //  TC09.2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC09.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC09.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/10. Case TC09.2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC09.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC09.2  ' })).toBeHidden();
    //  TC10
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/11. Case TC10.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC10  ' })).toBeHidden();
    //  TC11.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC11.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC11.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/12. Case TC11.1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC11.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC11.1  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 District Case 1 TC11.2 - TC13  ', async ({ page }) => {
    //  TC11.2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC11.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC11.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/13. Case TC11.2.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC11.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC11.2  ' })).toBeHidden();
    //TC12
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/14. Case TC12.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC12  ' })).toBeHidden();
    //  TC13
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/15. Case TC13.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC13  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 District Case 1 TC14 - TC16  ', async ({ page }) => {
    //  TC14
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/16. Case TC14.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC14  ' })).toBeHidden();
    //  TC15
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/17. Case TC15.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC15  ' })).toBeHidden();
    //  TC16
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/18. Case TC16.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC16  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 District Case 1 TC17 - TC19  ', async ({ page }) => {
    //  TC17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/19. Case TC17.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC17  ' })).toBeHidden();
    //TC18
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/20. Case TC18.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC18  ' })).toBeHidden();
    //  TC19
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/21. Case TC19.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC19  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  
  });
  
  
  
  
  test('GSD-255 District Case 1 TC20 - TC27.2  ', async ({ page }) => {
    //  TC20
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/22. Case TC20.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC20  ' })).toBeHidden();
    //  TC21
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/23. Case TC21.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC21  ' })).toBeHidden();
    //  TC27.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC27.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC27.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/24. Case TC27.1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC27.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC27.1  ' })).toBeHidden();
    //  TC27.2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 1/Auto_R60_District_C1_TC27.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_R60_District_C1_TC27.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/01. District Case 1/25. Case TC27.2.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C1_TC27.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C1_TC27.2  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  test('GSD-255 District Case 2 TC01 - TC03  ', async ({ page }) => {
    //  TC01
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC01.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC01' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/01. Case TC01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/02. Case TC01 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC01').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/03. Case TC01 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC01 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC01  ' })).toBeHidden();
    //TC02
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC02.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC02' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/04. Case TC02.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/05. Case TC02 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC02').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/06. Case TC02 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC02 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC02  ' })).toBeHidden();
    //  TC03
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC03.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC03' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/07. Case TC03.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/08. Case TC03 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC03').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/09. Case TC03 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC03 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC03  ' })).toBeHidden();
  
  
  
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  test('GSD-255 District Case 2 TC04 - TC06  ', async ({ page }) => {
    //  TC04
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC04.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC04' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/10. Case TC04.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/11. Case TC04 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC04').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/12. Case TC04 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC04 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC04  ' })).toBeHidden();
    //  TC05
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC05.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC05' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/13. Case TC05.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/14. Case TC05 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC05').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/15. Case TC05 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC05 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC05  ' })).toBeHidden();
    //  TC06
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC06.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC06' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/16. Case TC06.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC06 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC06  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 District Case 2 TC07 - TC9.1  ', async ({ page }) => {
    //  TC07
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC07.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC07' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/17. Case TC07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/18. Case TC07 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC07').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/19. Case TC07 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC07 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC07  ' })).toBeHidden();
    //TC08
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC08.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC08' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/20. Case TC08.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/21. Case TC08 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC08').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/22. Case TC08 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC08 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC08  ' })).toBeHidden();
    //  TC09.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC09.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC09.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/23. Case TC09.1.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/24. Case TC09.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC09.1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/25. Case TC09.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC09.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC09.1  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  });
  
  
  
  
  test('GSD-255 District Case 2 TC9.2 - TC11.1  ', async ({ page }) => {
    //  TC09.2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC09.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC09.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/26. Case TC09.2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/27. Case TC09.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC09.2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/28. Case TC09.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC09.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC09.2  ' })).toBeHidden();
    //  TC10
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/29. Case TC10.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/30. Case TC10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/31. Case TC10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC10  ' })).toBeHidden();
    //  TC11.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC11.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC11.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/32. Case TC11.1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/33. Case TC11.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC11.1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/34. Case TC11.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC11.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC11.1  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 District Case 2 TC11.2 - TC13  ', async ({ page }) => {
    //  TC11.2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC11.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC11.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/35. Case TC11.2.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/36. Case TC11.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC11.2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/37. Case TC11.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC11.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC11.2  ' })).toBeHidden();
    //TC12
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/38. Case TC12.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/39. Case TC12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/40. Case TC12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC12  ' })).toBeHidden();
    //  TC13
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/41. Case TC13.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/42. Case TC13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/43. Case TC13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC13  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  
  });
  
  
  
  
  test('GSD-255 District Case 2 TC14 - TC16  ', async ({ page }) => {
    //  TC14
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/44. Case TC14.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/45. Case TC14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/46. Case TC14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC14  ' })).toBeHidden();
    //  TC15
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/47. Case TC15.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/48. Case TC15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/49. Case TC15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC15  ' })).toBeHidden();
    //  TC16
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/50. Case TC16.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/51. Case TC16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/52. Case TC16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC16  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 District Case 2 TC17 - TC19  ', async ({ page }) => {
    //  TC17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/53. Case TC17.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/54. Case TC17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/55. Case TC17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC17  ' })).toBeHidden();
    //TC18
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/56. Case TC18.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/57. Case TC18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/58. Case TC18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC18  ' })).toBeHidden();
    //  TC19
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/59. Case TC19.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/60. Case TC19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/61. Case TC19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC19  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  
  });
  
  
  
  
  test('GSD-255 District Case 2 TC20 - TC27.2  ', async ({ page }) => {
    //  TC20
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/62. Case TC20.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/63. Case TC20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/64. Case TC20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC20  ' })).toBeHidden();
    //  TC21
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/65. Case TC21.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/66. Case TC21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/67. Case TC21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC21  ' })).toBeHidden();
    //  TC27.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC27.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC27.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/68. Case TC27.1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/69. Case TC27.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC27.1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/70. Case TC27.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC27.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC27.1  ' })).toBeHidden();
    //  TC27.2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 2/Auto_R60_District_C2_TC27.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_R60_District_C2_TC27.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/71. Case TC27.2.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/72. Case TC27.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_District_C2_TC27.2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'district' selectType is equal to 1; therefore, district must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/02. District Case 2/73. Case TC27.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_District_C2_TC27.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C2_TC27.2  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  test('GSD-255 District Case 3 C1 - C4  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 3/Auto_R60_District_C3_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C3_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/03. District Case 3/01. Case C1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C3_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C3_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 3/Auto_R60_District_C3_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C3_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/03. District Case 3/02. Case C2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C3_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C3_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 3/Auto_R60_District_C3_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C3_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/03. District Case 3/03. Case C3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C3_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C3_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 3/Auto_R60_District_C3_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C3_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/03. District Case 3/04. Case C4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C3_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C3_C4  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  test('GSD-255 District Case 3 C5 - C8  ', async ({ page }) => {
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 3/Auto_R60_District_C3_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_District_C3_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/03. District Case 3/05. Case C5.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C3_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C3_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 3/Auto_R60_District_C3_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_District_C3_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/03. District Case 3/06. Case C6.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C3_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C3_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 3/Auto_R60_District_C3_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_District_C3_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/03. District Case 3/07. Case C7.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C3_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C3_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/81. R60 district/Case 3/Auto_R60_District_C3_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_District_C3_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/03. District Case 3/08. Case C8.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_District_C3_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_District_C3_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  
  test('GSD-255 Province Case 1 TC01 - TC03  ', async ({ page }) => {
    //  TC01
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC01.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC01' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/01. Case TC01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC01 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC01  ' })).toBeHidden();
    //TC02
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC02.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC02' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/02. Case TC02.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC02 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC02  ' })).toBeHidden();
    //  TC03
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC03.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC03' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/03. Case TC03.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC03 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC03  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  
  
  
  test('GSD-255 Province Case 1 TC04 - TC06  ', async ({ page }) => {
    //  TC04
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC04.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC04' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/04. Case TC04.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC04 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC04  ' })).toBeHidden();
    //  TC05
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC05.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC05' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/05. Case TC05.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC05 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC05  ' })).toBeHidden();
    //  TC06
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC06.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC06' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/06. Case TC06.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC06 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC06  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 1 TC07 - TC09.1  ', async ({ page }) => {
    //  TC07
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC07.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC07' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/07. Case TC07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC07 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC07  ' })).toBeHidden();
    //TC08
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC08.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC08' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/08. Case TC08.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC08 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC08  ' })).toBeHidden();
    //  TC09.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC09.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC09.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/09. Case TC09.1.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC09.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC09.1  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  
  });
  
  
  
  
  test('GSD-255 Province Case 1 TC09.2 - TC11.1  ', async ({ page }) => {
    //  TC09.2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC09.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC09.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/10. Case TC09.2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC09.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC09.2  ' })).toBeHidden();
    //  TC10
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/11. Case TC10.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC10  ' })).toBeHidden();
    //  TC11.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC11.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC11.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/12. Case TC11.1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC11.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC11.1  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 1 TC11.2 - TC13  ', async ({ page }) => {
    //  TC11.2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC11.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC11.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/13. Case TC11.2.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC11.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC11.2  ' })).toBeHidden();
    //TC12
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/14. Case TC12.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC12  ' })).toBeHidden();
    //  TC13
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/15. Case TC13.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC13  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 1 TC14 - TC16  ', async ({ page }) => {
    //  TC14
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/16. Case TC14.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC14  ' })).toBeHidden();
    //  TC15
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/17. Case TC15.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC15  ' })).toBeHidden();
    //  TC16
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/18. Case TC16.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC16  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 1 TC17 - TC19  ', async ({ page }) => {
    //  TC17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/19. Case TC17.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC17  ' })).toBeHidden();
    //TC18
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/20. Case TC18.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC18  ' })).toBeHidden();
    //  TC19
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/21. Case TC19.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC19  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  
  });
  
  
  
  
  test('GSD-255 Province Case 1 TC20 - TC27.2  ', async ({ page }) => {
    //  TC20
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/22. Case TC20.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC20  ' })).toBeHidden();
    //  TC21
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/23. Case TC21.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC21  ' })).toBeHidden();
    //  TC27.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC27.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC27.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/24. Case TC27.1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC27.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC27.1  ' })).toBeHidden();
    //  TC27.2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 1/Auto_R60_Province_C1_TC27.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC27.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/04. Province Case 1/25. Case TC27.2.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C1_TC27.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C1_TC27.2  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  test('GSD-255 Province Case 2 TC01 - TC03  ', async ({ page }) => {
    //  TC01
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC01.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC01' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/01. Case TC01.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/02. Case TC01 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC01').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/03. Case TC01 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC01 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC01  ' })).toBeHidden();
    //TC02
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC02.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC02' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/04. Case TC02.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/05. Case TC02 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC02').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/06. Case TC02 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC02 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC02  ' })).toBeHidden();
    //  TC03
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC03.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC03' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/07. Case TC03.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/08. Case TC03 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC03').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/09. Case TC03 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC03 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC03  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  test('GSD-255 Province Case 2 TC04 - TC06  ', async ({ page }) => {
  
  
    //  TC04
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC04.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC04' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/10. Case TC04.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/11. Case TC04 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC04').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/12. Case TC04 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC04 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC04  ' })).toBeHidden();
    //  TC05
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC05.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC05' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/13. Case TC05.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/14. Case TC05 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC05').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/15. Case TC05 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC05 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC05  ' })).toBeHidden();
    //  TC06
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC06.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC06' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/16. Case TC06.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC06 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC06  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 2 TC07 - TC09.1  ', async ({ page }) => {
    //  TC07
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC07.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC07' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/17. Case TC07.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/18. Case TC07 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC07').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/19. Case TC07 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC07 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC07  ' })).toBeHidden();
    //TC08
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC08.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC08' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/20. Case TC08.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/21. Case TC08 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC08').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/22. Case TC08 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC08 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC08  ' })).toBeHidden();
    //  TC09.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC09.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC09.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/23. Case TC09.1.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/24. Case TC09.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC09.1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/25. Case TC09.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC09.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC09.1  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 2 TC9.2 - TC11.1  ', async ({ page }) => {
  
  
    //  TC09.2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC09.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC09.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/26. Case TC09.2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/27. Case TC09.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC09.2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/28. Case TC09.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC09.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC09.2  ' })).toBeHidden();
    //  TC10
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/29. Case TC10.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/30. Case TC10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/31. Case TC10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC10  ' })).toBeHidden();
    //  TC11.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC11.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC11.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/32. Case TC11.1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/33. Case TC11.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC11.1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/34. Case TC11.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC11.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC11.1  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 2 TC11.2 - TC13  ', async ({ page }) => {
    //  TC11.2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC11.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC11.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/35. Case TC11.2.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/36. Case TC11.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC11.2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/37. Case TC11.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC11.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC11.2  ' })).toBeHidden();
    //TC12
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/38. Case TC12.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/39. Case TC12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/40. Case TC12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC12  ' })).toBeHidden();
    //  TC13
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/41. Case TC13.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/42. Case TC13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/43. Case TC13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC13  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 2 TC14 - TC16  ', async ({ page }) => {
    //  TC14
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/44. Case TC14.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/45. Case TC14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/46. Case TC14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC14  ' })).toBeHidden();
    //  TC15
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/47. Case TC15.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/48. Case TC15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/49. Case TC15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC15  ' })).toBeHidden();
    //  TC16
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/50. Case TC16.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/51. Case TC16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/52. Case TC16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC16  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-255 Province Case 2 TC17 - TC19  ', async ({ page }) => {
    //  TC17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/53. Case TC17.png', mask: [mask_locator], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/54. Case TC17 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC17').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/55. Case TC17 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC17  ' })).toBeHidden();
    //TC18
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/56. Case TC18.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/57. Case TC18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/58. Case TC18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC18  ' })).toBeHidden();
    //  TC19
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/59. Case TC19.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/60. Case TC19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/61. Case TC19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC19  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  });
  
  
  
  
  test('GSD-255 Province Case 2 TC20 - TC27.2  ', async ({ page }) => {
  
  
    //  TC20
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/62. Case TC20.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/63. Case TC20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/64. Case TC20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC20  ' })).toBeHidden();
    //  TC21
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/65. Case TC21.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/66. Case TC21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/67. Case TC21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC21  ' })).toBeHidden();
    //  TC27.1
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC27.1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC27.1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/68. Case TC27.1.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/69. Case TC27.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC27.1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/70. Case TC27.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC27.1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC27.1  ' })).toBeHidden();
    //  TC27.2
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 2/Auto_R60_Province_C2_TC27.2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC27.2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/71. Case TC27.2.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
      .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/72. Case TC27.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_R60_Province_C2_TC27.2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
      .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'province' selectType is equal to 1; therefore, province must not be empty. [R60] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/05. Province Case 2/73. Case TC27.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C2_TC27.2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C2_TC27.2  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  test('GSD-255 Province Case 3 C1 - C4  ', async ({ page }) => {
    //  C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 3/Auto_R60_Province_C3_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C3_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/06. Province Case 3/01. Case C1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C3_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C3_C1  ' })).toBeHidden();
    //  C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 3/Auto_R60_Province_C3_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C3_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/06. Province Case 3/02. Case C2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C3_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C3_C2  ' })).toBeHidden();
    //  C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 3/Auto_R60_Province_C3_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C3_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/06. Province Case 3/03. Case C3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C3_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C3_C3  ' })).toBeHidden();
    //  C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 3/Auto_R60_Province_C3_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C3_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/06. Province Case 3/04. Case C4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C3_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C3_C4  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  test('GSD-255 Province Case 3 C5 - C8  ', async ({ page }) => {
    //  C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 3/Auto_R60_Province_C3_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_R60_Province_C3_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/06. Province Case 3/05. Case C5.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C3_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C3_C5  ' })).toBeHidden();
    //  C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 3/Auto_R60_Province_C3_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_R60_Province_C3_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/06. Province Case 3/06. Case C6.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C3_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C3_C6  ' })).toBeHidden();
    //  C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 3/Auto_R60_Province_C3_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_R60_Province_C3_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/06. Province Case 3/07. Case C7.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C3_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C3_C7  ' })).toBeHidden();
    //  C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/82. R60 province/Case 3/Auto_R60_Province_C3_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Search' }).first().click();
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_R60_Province_C3_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/GSD-255/06. Province Case 3/08. Case C8.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_R60_Province_C3_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_R60_Province_C3_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
  });
  
  
  
  
  test('GSD-263  ', async ({ page }) => {
  
    await page.locator('a').filter({ hasText: 'support' }).click();
    await page.getByRole('link', { name: 'Event Log' }).click();
    await page.waitForTimeout(1500);
    await page.getByLabel('Search').fill('checkPayment');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-263/01. check payment.png' });
    await page.waitForTimeout(1500);
  
  });
  
  
  
  
  
  test('GSD-265 Create Company ', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: 'General InformationOrganization Name English*Organization Name Thai*' }).nth(3)).toBeVisible();
    await page.waitForTimeout(500);
    await page.locator('input[name="nameEng"]').fill('Automate Test');
    await page.locator('input[name="nameTha"]').fill('ทดสอบอัตโนมัติ');
    await page.locator('input[name="orgAbbr"]').fill('AT');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1500);
  
  
  });
  
  
  
  
  
  test('GSD-265 Edit Watcher  ', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('row', { name: 'Automate Test ทดสอบอัตโนมัติ' }).getByRole('button').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Watcher' }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.locator('div').filter({ hasText: 'General InformationWatcherResponse FileExport ReceiptsEnable WatcherCancelSave' }).nth(3)).toBeVisible();
    await page.waitForTimeout(500);
    await page.getByLabel('Enable Watcher').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/01. Edit Watcher/01. Watcher Details.png' });
    await page.waitForTimeout(1000);
    await page.getByText('info', { exact: true }).click();
    await page.waitForTimeout(500);
    await expect.soft(page.getByRole('heading', { name: 'Naming Convention' })).toHaveText('Naming Convention');
    await expect.soft(page.getByText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}')).toHaveText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}');
    await expect.soft(page.getByRole('cell', { name: 'Symbol' })).toHaveText('Symbol');
    await expect.soft(page.getByRole('cell', { name: 'Description' })).toHaveText('Description');
    await expect.soft(page.getByRole('cell', { name: 'Examples' })).toHaveText('Examples');
    await expect.soft(page.getByRole('cell', { name: 'companyTaxId' })).toHaveText('companyTaxId');
    await expect.soft(page.getByRole('cell', { name: 'Company Tax ID as a 13-digit' })).toHaveText('Company Tax ID as a 13-digit');
    await expect.soft(page.getByRole('cell', { name: '1234567890123' })).toHaveText('1234567890123');
    await expect.soft(page.getByRole('cell', { name: 'companyAbbr' })).toHaveText('companyAbbr');
    await expect.soft(page.getByRole('cell', { name: 'Company Abbreviation' })).toHaveText('Company Abbreviation');
    await expect.soft(page.getByRole('cell', { name: 'ABC, GKS,...' })).toHaveText('ABC, GKS,...');
    await expect.soft(page.getByRole('cell', { name: 'group', exact: true })).toHaveText('group');
    await expect.soft(page.getByRole('cell', { name: 'The name of group user' })).toHaveText('The name of group user');
    await expect.soft(page.getByRole('cell', { name: 'Default' })).toHaveText('Default');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/01. Edit Watcher/02. Path Convention.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('dialog').press('Escape');
    await page.waitForTimeout(1000);
    await page.getByLabel('Select Server SFTPzDOX').selectOption('SFTP');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/01. Edit Watcher/03. Watcher SFTP.png' });
    await page.waitForTimeout(1000);
    await page.getByLabel('Select Server SFTPzDOX').selectOption('zDOX');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/01. Edit Watcher/04. Watcher zDOX Details.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();
  
  
  
  });
  
  
  
  test('GSD-265 Edit Response File ', async ({ page }) => {
  
  
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('row', { name: 'Automate Test ทดสอบอัตโนมัติ' }).getByRole('button').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Response File' }).click();
    await page.waitForTimeout(500);
    await page.getByLabel('Enable Create Response File').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/02. Response File/01. Response File Details.png' });
    await page.waitForTimeout(500);
    await page.locator('label').filter({ hasText: 'Path info' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    
  
  
  
    await expect.soft(page.getByRole('heading', { name: 'Naming Convention' })).toHaveText('Naming Convention');
    await expect.soft(page.getByText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}')).toHaveText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}');
    await expect.soft(page.getByRole('cell', { name: 'Symbol' })).toHaveText('Symbol');
    await expect.soft(page.getByRole('cell', { name: 'Description' })).toHaveText('Description');
    await expect.soft(page.getByRole('cell', { name: 'Examples' })).toHaveText('Examples');
    await expect.soft(page.getByRole('cell', { name: 'companyTaxId' })).toHaveText('companyTaxId');
    await expect.soft(page.getByRole('cell', { name: 'Company Tax ID as a 13-digit' })).toHaveText('Company Tax ID as a 13-digit');
    await expect.soft(page.getByRole('cell', { name: '1234567890123' })).toHaveText('1234567890123');
    await expect.soft(page.getByRole('cell', { name: 'companyAbbr' })).toHaveText('companyAbbr');
    await expect.soft(page.getByRole('cell', { name: 'Company Abbreviation' })).toHaveText('Company Abbreviation');
    await expect.soft(page.getByRole('cell', { name: 'ABC, GKS,...' })).toHaveText('ABC, GKS,...');
    await expect.soft(page.getByRole('cell', { name: 'group', exact: true })).toHaveText('group');
    await expect.soft(page.getByRole('cell', { name: 'The name of group user' })).toHaveText('The name of group user');
    await expect.soft(page.getByRole('cell', { name: 'Default' })).toHaveText('Default');
    await expect.soft(page.getByRole('cell', { name: 'typeCode' })).toHaveText('typeCode');
    await expect.soft(page.getByRole('cell', { name: 'The type code of instrument' })).toHaveText('The type code of instrument');
    await expect.soft(page.getByRole('cell', { name: '1,2,3,4,...' })).toHaveText('1,2,3,4,...');
    await expect.soft(page.getByRole('cell', { name: 'upload:', exact: true })).toHaveText('upload:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use upload date' })).toHaveText('A prefix to use upload date');
    await expect.soft(page.getByRole('cell', { name: 'upload:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('upload:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'submit:', exact: true })).toHaveText('submit:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use submit date' })).toHaveText('A prefix to use submit date');
    await expect.soft(page.getByRole('cell', { name: 'submit:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('submit:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'payment:', exact: true })).toHaveText('payment:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use payment date' })).toHaveText('A prefix to use payment date');
    await expect.soft(page.getByRole('cell', { name: 'payment:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('payment:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'yyyy', exact: true })).toHaveText('yyyy');
    await expect.soft(page.getByRole('cell', { name: 'Year as a four-digit Number' })).toHaveText('Year as a four-digit Number');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 2024' })).toHaveText('2024-12-31 -> 2024');
    await expect.soft(page.getByRole('cell', { name: 'yy', exact: true })).toHaveText('yy');
    await expect.soft(page.getByRole('cell', { name: 'Year , from 00 to 99' })).toHaveText('Year , from 00 to 99');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 24' })).toHaveText('2024-12-31 -> 24');
    await expect.soft(page.getByRole('cell', { name: 'MM', exact: true })).toHaveText('MM');
    await expect.soft(page.getByRole('cell', { name: 'Month, from 01 through 12' })).toHaveText('Month, from 01 through 12');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 12' })).toHaveText('2024-12-31 -> 12');
    await expect.soft(page.getByRole('cell', { name: 'dd', exact: true })).toHaveText('dd');
    await expect.soft(page.getByRole('cell', { name: 'Day, from 01 through 31' })).toHaveText('Day, from 01 through 31');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 31' })).toHaveText('2024-12-31 -> 31');
    await expect.soft(page.getByRole('cell', { name: 'HH', exact: true })).toHaveText('HH');
    await expect.soft(page.getByRole('cell', { name: 'The hour, using a 24-hour clock from 00 to 23' })).toHaveText('The hour, using a 24-hour clock from 00 to 23');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 01' })).toHaveText('01:45:30 -> 01');
    await expect.soft(page.getByRole('cell', { name: 'mm', exact: true })).toHaveText('mm');
    await expect.soft(page.getByRole('cell', { name: 'The minute, from 00 through 59' })).toHaveText('The minute, from 00 through 59');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 45' })).toHaveText('01:45:30 -> 45');
    await expect.soft(page.getByRole('cell', { name: 'ss', exact: true })).toHaveText('ss');
    await expect.soft(page.getByRole('cell', { name: 'The second, from 00 through 59' })).toHaveText('The second, from 00 through 59');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 30' })).toHaveText('01:45:30 -> 30');
    await expect.soft(page.getByRole('cell', { name: 'SSS', exact: true })).toHaveText('SSS');
    await expect.soft(page.getByRole('cell', { name: 'The milliseconds in a date and time value' })).toHaveText('The milliseconds in a date and time value');
    await expect.soft(page.getByRole('cell', { name: '01:45:30.617 -> 617' })).toHaveText('01:45:30.617 -> 617');
    
    
    
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/02. Response File/02. Path Convention.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('dialog').press('Escape');
    await page.locator('label').filter({ hasText: 'File Name info' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
    
    await expect.soft(page.getByRole('heading', { name: 'Naming Convention' })).toHaveText('Naming Convention');
    await expect.soft(page.getByText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}')).toHaveText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}');
    await expect.soft(page.getByRole('cell', { name: 'Symbol' })).toHaveText('Symbol');
    await expect.soft(page.getByRole('cell', { name: 'Description' })).toHaveText('Description');
    await expect.soft(page.getByRole('cell', { name: 'Examples' })).toHaveText('Examples');
    await expect.soft(page.getByRole('cell', { name: 'companyTaxId' })).toHaveText('companyTaxId');
    await expect.soft(page.getByRole('cell', { name: 'Company Tax ID as a 13-digit' })).toHaveText('Company Tax ID as a 13-digit');
    await expect.soft(page.getByRole('cell', { name: '1234567890123' })).toHaveText('1234567890123');
    await expect.soft(page.getByRole('cell', { name: 'companyAbbr' })).toHaveText('companyAbbr');
    await expect.soft(page.getByRole('cell', { name: 'Company Abbreviation' })).toHaveText('Company Abbreviation');
    await expect.soft(page.getByRole('cell', { name: 'ABC, GKS,...' })).toHaveText('ABC, GKS,...');
    await expect.soft(page.getByRole('cell', { name: 'group', exact: true })).toHaveText('group');
    await expect.soft(page.getByRole('cell', { name: 'The name of group user' })).toHaveText('The name of group user');
    await expect.soft(page.getByRole('cell', { name: 'Default' })).toHaveText('Default');
    await expect.soft(page.getByRole('cell', { name: 'typeCode' })).toHaveText('typeCode');
    await expect.soft(page.getByRole('cell', { name: 'The type code of instrument' })).toHaveText('The type code of instrument');
    await expect.soft(page.getByRole('cell', { name: '1,2,3,4,...' })).toHaveText('1,2,3,4,...');
    await expect.soft(page.getByRole('cell', { name: 'upload:', exact: true })).toHaveText('upload:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use upload date' })).toHaveText('A prefix to use upload date');
    await expect.soft(page.getByRole('cell', { name: 'upload:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('upload:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'submit:', exact: true })).toHaveText('submit:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use submit date' })).toHaveText('A prefix to use submit date');
    await expect.soft(page.getByRole('cell', { name: 'submit:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('submit:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'payment:', exact: true })).toHaveText('payment:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use payment date' })).toHaveText('A prefix to use payment date');
    await expect.soft(page.getByRole('cell', { name: 'payment:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('payment:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'yyyy', exact: true })).toHaveText('yyyy');
    await expect.soft(page.getByRole('cell', { name: 'Year as a four-digit Number' })).toHaveText('Year as a four-digit Number');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 2024' })).toHaveText('2024-12-31 -> 2024');
    await expect.soft(page.getByRole('cell', { name: 'yy', exact: true })).toHaveText('yy');
    await expect.soft(page.getByRole('cell', { name: 'Year , from 00 to 99' })).toHaveText('Year , from 00 to 99');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 24' })).toHaveText('2024-12-31 -> 24');
    await expect.soft(page.getByRole('cell', { name: 'MM', exact: true })).toHaveText('MM');
    await expect.soft(page.getByRole('cell', { name: 'Month, from 01 through 12' })).toHaveText('Month, from 01 through 12');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 12' })).toHaveText('2024-12-31 -> 12');
    await expect.soft(page.getByRole('cell', { name: 'dd', exact: true })).toHaveText('dd');
    await expect.soft(page.getByRole('cell', { name: 'Day, from 01 through 31' })).toHaveText('Day, from 01 through 31');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 31' })).toHaveText('2024-12-31 -> 31');
    await expect.soft(page.getByRole('cell', { name: 'HH', exact: true })).toHaveText('HH');
    await expect.soft(page.getByRole('cell', { name: 'The hour, using a 24-hour clock from 00 to 23' })).toHaveText('The hour, using a 24-hour clock from 00 to 23');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 01' })).toHaveText('01:45:30 -> 01');
    await expect.soft(page.getByRole('cell', { name: 'mm', exact: true })).toHaveText('mm');
    await expect.soft(page.getByRole('cell', { name: 'The minute, from 00 through 59' })).toHaveText('The minute, from 00 through 59');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 45' })).toHaveText('01:45:30 -> 45');
    await expect.soft(page.getByRole('cell', { name: 'ss', exact: true })).toHaveText('ss');
    await expect.soft(page.getByRole('cell', { name: 'The second, from 00 through 59' })).toHaveText('The second, from 00 through 59');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 30' })).toHaveText('01:45:30 -> 30');
    await expect.soft(page.getByRole('cell', { name: 'SSS', exact: true })).toHaveText('SSS');
    await expect.soft(page.getByRole('cell', { name: 'The milliseconds in a date and time value' })).toHaveText('The milliseconds in a date and time value');
    await expect.soft(page.getByRole('cell', { name: '01:45:30.617 -> 617' })).toHaveText('01:45:30.617 -> 617');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/02. Response File/03. File Name Convention.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('dialog').press('Escape');
    await page.waitForTimeout(1000);
    await page.getByLabel('Select Server SFTPzDOX').selectOption('SFTP');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/02. Response File/04. Response SFTP.png' });
    await page.waitForTimeout(1000);
    await page.getByLabel('Select Server SFTPzDOX').selectOption('zDOX');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/02. Response File/05. Response zDOX Details.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();
  
  
  });
  
  
  
  test('GSD-265 Edit Export Receipts ', async ({ page }) => {
  
  
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('row', { name: 'Automate Test ทดสอบอัตโนมัติ' }).getByRole('button').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Export Receipts' }).click();
    await page.waitForTimeout(500);
    await page.getByLabel('Enable Export Receipts').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/03. Export Receipts/01. Export Receipts Details.png' });
    await page.waitForTimeout(500);
    await page.locator('label').filter({ hasText: 'Path info' }).locator('mat-icon').click();
    await page.waitForTimeout(500);
  
    await expect.soft(page.getByRole('heading', { name: 'Naming Convention' })).toHaveText('Naming Convention');
    await expect.soft(page.getByText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}')).toHaveText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}');
    await expect.soft(page.getByRole('cell', { name: 'Symbol' })).toHaveText('Symbol');
    await expect.soft(page.getByRole('cell', { name: 'Description' })).toHaveText('Description');
    await expect.soft(page.getByRole('cell', { name: 'Examples' })).toHaveText('Examples');
    await expect.soft(page.getByRole('cell', { name: 'companyTaxId' })).toHaveText('companyTaxId');
    await expect.soft(page.getByRole('cell', { name: 'Company Tax ID as a 13-digit' })).toHaveText('Company Tax ID as a 13-digit');
    await expect.soft(page.getByRole('cell', { name: '1234567890123' })).toHaveText('1234567890123');
    await expect.soft(page.getByRole('cell', { name: 'companyAbbr' })).toHaveText('companyAbbr');
    await expect.soft(page.getByRole('cell', { name: 'Company Abbreviation' })).toHaveText('Company Abbreviation');
    await expect.soft(page.getByRole('cell', { name: 'ABC, GKS,...' })).toHaveText('ABC, GKS,...');
    await expect.soft(page.getByRole('cell', { name: 'group', exact: true })).toHaveText('group');
    await expect.soft(page.getByRole('cell', { name: 'The name of group user' })).toHaveText('The name of group user');
    await expect.soft(page.getByRole('cell', { name: 'Default' })).toHaveText('Default');
    await expect.soft(page.getByRole('cell', { name: 'typeCode' })).toHaveText('typeCode');
    await expect.soft(page.getByRole('cell', { name: 'The type code of instrument' })).toHaveText('The type code of instrument');
    await expect.soft(page.getByRole('cell', { name: '1,2,3,4,...' })).toHaveText('1,2,3,4,...');
    await expect.soft(page.getByRole('cell', { name: 'contractNo', exact: true })).toHaveText('contractNo');
    await expect.soft(page.getByRole('cell', { name: 'The Contract No. of instrument' })).toHaveText('The Contract No. of instrument');
    await expect.soft(page.getByRole('cell', { name: 'ContractNo001' })).toHaveText('ContractNo001');
    await expect.soft(page.getByRole('cell', { name: 'receiptNo', exact: true })).toHaveText('receiptNo');
    await expect.soft(page.getByRole('cell', { name: 'The Receipt No. of instrument' })).toHaveText('The Receipt No. of instrument');
    await expect.soft(page.getByRole('cell', { name: 'ReceiptNo001' })).toHaveText('ReceiptNo001');
    await expect.soft(page.getByRole('cell', { name: 'upload:', exact: true })).toHaveText('upload:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use upload date' })).toHaveText('A prefix to use upload date');
    await expect.soft(page.getByRole('cell', { name: 'upload:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('upload:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'submit:', exact: true })).toHaveText('submit:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use submit date' })).toHaveText('A prefix to use submit date');
    await expect.soft(page.getByRole('cell', { name: 'submit:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('submit:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'creation:', exact: true })).toHaveText('creation:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use creation date' })).toHaveText('A prefix to use creation date');
    await expect.soft(page.getByRole('cell', { name: 'creation:yyyyMMdd -> 20241231' })).toHaveText('creation:yyyyMMdd -> 20241231');
    await expect.soft(page.getByRole('cell', { name: 'expired:', exact: true })).toHaveText('expired:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use expired date' })).toHaveText('A prefix to use expired date');
    await expect.soft(page.getByRole('cell', { name: 'expired:yyyyMMdd -> 20241231' })).toHaveText('expired:yyyyMMdd -> 20241231');
    await expect.soft(page.getByRole('cell', { name: 'receipt:', exact: true })).toHaveText('receipt:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use receipt date' })).toHaveText('A prefix to use receipt date');
    await expect.soft(page.getByRole('cell', { name: 'receipt:yyyyMMdd -> 20241231' })).toHaveText('receipt:yyyyMMdd -> 20241231');
    await expect.soft(page.getByRole('cell', { name: 'yyyy', exact: true })).toHaveText('yyyy');
    await expect.soft(page.getByRole('cell', { name: 'Year as a four-digit Number' })).toHaveText('Year as a four-digit Number');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 2024' })).toHaveText('2024-12-31 -> 2024');
    await expect.soft(page.getByRole('cell', { name: 'yy', exact: true })).toHaveText('yy');
    await expect.soft(page.getByRole('cell', { name: 'Year , from 00 to 99' })).toHaveText('Year , from 00 to 99');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 24' })).toHaveText('2024-12-31 -> 24');
    await expect.soft(page.getByRole('cell', { name: 'MM', exact: true })).toHaveText('MM');
    await expect.soft(page.getByRole('cell', { name: 'Month, from 01 through 12' })).toHaveText('Month, from 01 through 12');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 12' })).toHaveText('2024-12-31 -> 12');
    await expect.soft(page.getByRole('cell', { name: 'dd', exact: true })).toHaveText('dd');
    await expect.soft(page.getByRole('cell', { name: 'Day, from 01 through 31' })).toHaveText('Day, from 01 through 31');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 31' })).toHaveText('2024-12-31 -> 31');
    await expect.soft(page.getByRole('cell', { name: 'HH', exact: true })).toHaveText('HH');
    await expect.soft(page.getByRole('cell', { name: 'The hour, using a 24-hour clock from 00 to 23' })).toHaveText('The hour, using a 24-hour clock from 00 to 23');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 01' })).toHaveText('01:45:30 -> 01');
    await expect.soft(page.getByRole('cell', { name: 'mm', exact: true })).toHaveText('mm');
    await expect.soft(page.getByRole('cell', { name: 'The minute, from 00 through 59' })).toHaveText('The minute, from 00 through 59');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 45' })).toHaveText('01:45:30 -> 45');
    await expect.soft(page.getByRole('cell', { name: 'ss', exact: true })).toHaveText('ss');
    await expect.soft(page.getByRole('cell', { name: 'The second, from 00 through 59' })).toHaveText('The second, from 00 through 59');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 30' })).toHaveText('01:45:30 -> 30');
    await expect.soft(page.getByRole('cell', { name: 'SSS', exact: true })).toHaveText('SSS');
    await expect.soft(page.getByRole('cell', { name: 'The milliseconds in a date and time value' })).toHaveText('The milliseconds in a date and time value');
    await expect.soft(page.getByRole('cell', { name: '01:45:30.617 -> 617' })).toHaveText('01:45:30.617 -> 617');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/03. Export Receipts/02. Path Convention.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('dialog').press('Escape');
    await page.waitForTimeout(500)
    await page.locator('label').filter({ hasText: 'File Name info' }).locator('mat-icon').click();
    await page.waitForTimeout(500)
  
  
  
  
    await expect.soft(page.getByRole('heading', { name: 'Naming Convention' })).toHaveText('Naming Convention');
    await expect.soft(page.getByText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}')).toHaveText('Place symbols inside the bracket { } ex. File_{yyyyMMdd}');
    await expect.soft(page.getByRole('cell', { name: 'Symbol' })).toHaveText('Symbol');
    await expect.soft(page.getByRole('cell', { name: 'Description' })).toHaveText('Description');
    await expect.soft(page.getByRole('cell', { name: 'Examples' })).toHaveText('Examples');
    await expect.soft(page.getByRole('cell', { name: 'companyTaxId' })).toHaveText('companyTaxId');
    await expect.soft(page.getByRole('cell', { name: 'Company Tax ID as a 13-digit' })).toHaveText('Company Tax ID as a 13-digit');
    await expect.soft(page.getByRole('cell', { name: '1234567890123' })).toHaveText('1234567890123');
    await expect.soft(page.getByRole('cell', { name: 'companyAbbr' })).toHaveText('companyAbbr');
    await expect.soft(page.getByRole('cell', { name: 'Company Abbreviation' })).toHaveText('Company Abbreviation');
    await expect.soft(page.getByRole('cell', { name: 'ABC, GKS,...' })).toHaveText('ABC, GKS,...');
    await expect.soft(page.getByRole('cell', { name: 'group', exact: true })).toHaveText('group');
    await expect.soft(page.getByRole('cell', { name: 'The name of group user' })).toHaveText('The name of group user');
    await expect.soft(page.getByRole('cell', { name: 'Default' })).toHaveText('Default');
    await expect.soft(page.getByRole('cell', { name: 'typeCode' })).toHaveText('typeCode');
    await expect.soft(page.getByRole('cell', { name: 'The type code of instrument' })).toHaveText('The type code of instrument');
    await expect.soft(page.getByRole('cell', { name: '1,2,3,4,...' })).toHaveText('1,2,3,4,...');
    await expect.soft(page.getByRole('cell', { name: 'contractNo', exact: true })).toHaveText('contractNo');
    await expect.soft(page.getByRole('cell', { name: 'The Contract No. of instrument' })).toHaveText('The Contract No. of instrument');
    await expect.soft(page.getByRole('cell', { name: 'ContractNo001' })).toHaveText('ContractNo001');
    await expect.soft(page.getByRole('cell', { name: 'receiptNo', exact: true })).toHaveText('receiptNo');
    await expect.soft(page.getByRole('cell', { name: 'The Receipt No. of instrument' })).toHaveText('The Receipt No. of instrument');
    await expect.soft(page.getByRole('cell', { name: 'ReceiptNo001' })).toHaveText('ReceiptNo001');
    await expect.soft(page.getByRole('cell', { name: 'upload:', exact: true })).toHaveText('upload:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use upload date' })).toHaveText('A prefix to use upload date');
    await expect.soft(page.getByRole('cell', { name: 'upload:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('upload:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'submit:', exact: true })).toHaveText('submit:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use submit date' })).toHaveText('A prefix to use submit date');
    await expect.soft(page.getByRole('cell', { name: 'submit:yyyyMMdd-HHmmssSSS -> 20241231-014530617' })).toHaveText('submit:yyyyMMdd-HHmmssSSS -> 20241231-014530617');
    await expect.soft(page.getByRole('cell', { name: 'creation:', exact: true })).toHaveText('creation:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use creation date' })).toHaveText('A prefix to use creation date');
    await expect.soft(page.getByRole('cell', { name: 'creation:yyyyMMdd -> 20241231' })).toHaveText('creation:yyyyMMdd -> 20241231');
    await expect.soft(page.getByRole('cell', { name: 'expired:', exact: true })).toHaveText('expired:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use expired date' })).toHaveText('A prefix to use expired date');
    await expect.soft(page.getByRole('cell', { name: 'expired:yyyyMMdd -> 20241231' })).toHaveText('expired:yyyyMMdd -> 20241231');
    await expect.soft(page.getByRole('cell', { name: 'receipt:', exact: true })).toHaveText('receipt:');
    await expect.soft(page.getByRole('cell', { name: 'A prefix to use receipt date' })).toHaveText('A prefix to use receipt date');
    await expect.soft(page.getByRole('cell', { name: 'receipt:yyyyMMdd -> 20241231' })).toHaveText('receipt:yyyyMMdd -> 20241231');
    await expect.soft(page.getByRole('cell', { name: 'yyyy', exact: true })).toHaveText('yyyy');
    await expect.soft(page.getByRole('cell', { name: 'Year as a four-digit Number' })).toHaveText('Year as a four-digit Number');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 2024' })).toHaveText('2024-12-31 -> 2024');
    await expect.soft(page.getByRole('cell', { name: 'yy', exact: true })).toHaveText('yy');
    await expect.soft(page.getByRole('cell', { name: 'Year , from 00 to 99' })).toHaveText('Year , from 00 to 99');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 24' })).toHaveText('2024-12-31 -> 24');
    await expect.soft(page.getByRole('cell', { name: 'MM', exact: true })).toHaveText('MM');
    await expect.soft(page.getByRole('cell', { name: 'Month, from 01 through 12' })).toHaveText('Month, from 01 through 12');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 12' })).toHaveText('2024-12-31 -> 12');
    await expect.soft(page.getByRole('cell', { name: 'dd', exact: true })).toHaveText('dd');
    await expect.soft(page.getByRole('cell', { name: 'Day, from 01 through 31' })).toHaveText('Day, from 01 through 31');
    await expect.soft(page.getByRole('cell', { name: '2024-12-31 -> 31' })).toHaveText('2024-12-31 -> 31');
    await expect.soft(page.getByRole('cell', { name: 'HH', exact: true })).toHaveText('HH');
    await expect.soft(page.getByRole('cell', { name: 'The hour, using a 24-hour clock from 00 to 23' })).toHaveText('The hour, using a 24-hour clock from 00 to 23');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 01' })).toHaveText('01:45:30 -> 01');
    await expect.soft(page.getByRole('cell', { name: 'mm', exact: true })).toHaveText('mm');
    await expect.soft(page.getByRole('cell', { name: 'The minute, from 00 through 59' })).toHaveText('The minute, from 00 through 59');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 45' })).toHaveText('01:45:30 -> 45');
    await expect.soft(page.getByRole('cell', { name: 'ss', exact: true })).toHaveText('ss');
    await expect.soft(page.getByRole('cell', { name: 'The second, from 00 through 59' })).toHaveText('The second, from 00 through 59');
    await expect.soft(page.getByRole('cell', { name: '01:45:30 -> 30' })).toHaveText('01:45:30 -> 30');
    await expect.soft(page.getByRole('cell', { name: 'SSS', exact: true })).toHaveText('SSS');
    await expect.soft(page.getByRole('cell', { name: 'The milliseconds in a date and time value' })).toHaveText('The milliseconds in a date and time value');
    await expect.soft(page.getByRole('cell', { name: '01:45:30.617 -> 617' })).toHaveText('01:45:30.617 -> 617');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/03. Export Receipts/03. File Name Convention.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('dialog').press('Escape');
    await page.waitForTimeout(1000);
    await page.getByLabel('Select Server SFTPzDOX').selectOption('SFTP');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/03. Export Receipts/04. Response SFTP.png' });
    await page.waitForTimeout(1000);
    await page.getByLabel('Select Server SFTPzDOX').selectOption('zDOX');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/GSD-265/03. Export Receipts/05. Response zDOX Details.png' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Cancel' }).click();
  
  
  });
  
  
  test('GSD-265 Delete Company ', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'settings' }).click();
    await page.getByRole('link', { name: 'Organization' }).click();
    await page.getByRole('row', { name: 'Automate Test ทดสอบอัตโนมัติ' }).getByRole('button').nth(1).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(500);
  
  
  });




test('TS-39 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-39/Auto_TS-39.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TS-39' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/TS-39/01. TS-39.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'typeCode' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-39/02. TS-39 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TS-39').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'typeCode' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' is required ข้อมูลบรรทัดที่ 1 column 'creationDate' overdueFlag is empty; therefore creationDate must be a date up to 15 days back. [R53.1] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-39/03. TS-39 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('row', { name: 'Auto_TS-39' }).getByRole('button').nth(1).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/TS-39/04. File Export.rar');
    await page.waitForTimeout(500);

    await page.getByText('Auto_TS-39').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-39/Auto_TS-39_Import.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-39/05. Import Success.png' });
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_TS-39 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TS-39  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.waitForTimeout(1500);


});







test('TS-40 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-40/Auto_TS-40.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TS-40' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/TS-40/01. TS-40.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-40/02. TS-40 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TS-40').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'instAmount' is an invalid number ข้อมูลบรรทัดที่ 1 column 'instAmount' typeCode is equal to 1, 2, 3, 4, 5, 10, 14, 16, 18, 19, 20, 92, 112, or 283; therefore, instAmount must be more than 0.00. [R11] ข้อมูลบรรทัดที่ 1 column 'arrayDetail' arrayDetail is invalid attAmount3 must be equal to instAmount Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-40/03. TS-40 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('row', { name: 'Auto_TS-40' }).getByRole('button').nth(1).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/TS-40/04. File Export.rar');
    await page.waitForTimeout(500);

    await page.getByText('Auto_TS-40').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-40/Auto_TS-40_Import.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-40/05. Import Success.png' });
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_TS-40 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TS-40  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.waitForTimeout(1500);


});





test('TS-41 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-41/Auto_TS-41.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TS-41' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/TS-41/01. TS-41.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-41/02. TS-41 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TS-41').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerBranchType' taxPayerBrachNo is empty; therefore, taxPayerBranchType must be 'O'. [R13] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-41/03. TS-41 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('row', { name: 'Auto_TS-41' }).getByRole('button').nth(1).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/TS-41/04. File Export.rar');
    await page.waitForTimeout(500);

    await page.getByText('Auto_TS-41').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-41/Auto_TS-41_Import.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-41/05. Import Success.png' });
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_TS-41 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TS-41  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.waitForTimeout(1500);


});





test('TS-42 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-42/Auto_TS-42.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_TS-42' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS13-Function/TS-42/01. TS-42.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerId' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-42/02. TS-42 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_TS-42').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerId' length is overflow ข้อมูลบรรทัดที่ 1 column 'taxPayerId' is an invalid TaxID format ข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-42/03. TS-42 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('row', { name: 'Auto_TS-42' }).getByRole('button').nth(1).click();
    const download = await downloadPromise;
    // Save downloaded file somewhere
    await download.saveAs('Output/TS13-Function/TS-42/04. File Export.rar');
    await page.waitForTimeout(500);

    await page.getByText('Auto_TS-42').first().click();
    await page.getByRole('button', { name: 'Import Fixes' }).click();
    await page.locator('#file').setInputFiles('Data Files/Function/TS-42/Auto_TS-42_Import.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS13-Function/TS-42/05. Import Success.png' });
    await page.waitForTimeout(500);
    await page.getByRole('row', { name: 'Auto_TS-42 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_TS-42  ' })).toBeHidden();
    await page.waitForTimeout(1500);
    await page.waitForTimeout(1500);


});






test('TS-544 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    
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
    await page.getByRole('row', { name: 'Completed [14831]' }).getByLabel('').click();
    await page.getByRole('button', { name: 'Receipts' }).first().click();
    await page.getByRole('button', { name: 'Go to Downloads' }).click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Output/TS13-Function/TS-544/01. Can Not Download.png' });


});






test('TS-548 ', async ({ page }) => {

    await page.waitForTimeout(3000);
    await page.locator('div').filter({ hasText: /^file_download$/ }).nth(1).click();
    await page.getByText('personkittisak.pGinkgo Soft Co., Ltd.').click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS13-Function/TS-548/01. GGS Company.png' });
    await page.waitForTimeout(2000);
    await page.getByText('logout').click();
    await page.waitForTimeout(2500);
    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForURL('/batch');
    await page.waitForTimeout(3000);
    await page.locator('div').filter({ hasText: /^file_download$/ }).nth(1).click();
    await page.getByText('persontest.gamekittisak2@gmail.comGinkgo Soft Co., Ltd. (Demo)').click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Output/TS13-Function/TS-548/02. GGT Company.png' });


});