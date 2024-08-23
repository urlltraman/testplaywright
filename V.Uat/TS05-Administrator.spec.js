
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs Uat

  await page.goto('/login');
  await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Administrator' }).click();
  await page.waitForURL('admin/company');
});



// test.beforeEach(async ({ page }) => {
//   // Runs Dev

//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
//   await page.locator('input[name="password"]').fill('P@ssw0rd');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   // await page.getByRole('button', { name: 'Accept' }).click();
//   await page.getByRole('link', { name: 'Administrator' }).click();
//   await page.waitForURL('admin/company');
// });







test('TC01 Administrator Add Basic ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/01.Administrator Page.png' });
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="name"]').click();
  await expect(page.getByText('Email is required')).toHaveText('Email is required');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/02.No Email.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="email"]').click();
  await expect(page.getByText('Name is required')).toHaveText('Name is required');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/03.No Name.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="name"]').click();
  await expect(page.getByText('Email is required')).toHaveText('Email is required');
  await expect(page.getByText('Name is required')).toHaveText('Name is required');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/04.No Input All.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.getByRole('tab', { name: 'Roles' }).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. (Demo) บริษัท กิงโกะ ซอฟต์ จำกัด (Demo) -' }).getByRole('cell').nth(1).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. (Demo) บริษัท กิงโกะ ซอฟต์ จำกัด (Demo) -' }).getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Approver' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/05.Add Role.png' });
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
  await page.locator('input[name="name"]').fill('Auto Add User');
  await page.getByRole('tab', { name: 'Roles' }).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. (Demo) บริษัท กิงโกะ ซอฟต์ จำกัด (Demo) -' }).getByRole('cell').nth(1).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. (Demo) บริษัท กิงโกะ ซอฟต์ จำกัด (Demo) -' }).getByRole('button').click();
  await page.getByText('Approver').click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/06.Input Full Click Cancel.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/07.After Click Cancel.png' });

});








test('TC01 Administrator Add User Completed ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
  await page.locator('input[name="name"]').fill('Auto Add User');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/08.Completed User Details.png' });
  await page.getByRole('tab', { name: 'Roles' }).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. (Demo) บริษัท กิงโกะ ซอฟต์ จำกัด (Demo) -' }).getByRole('cell').nth(1).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. (Demo) บริษัท กิงโกะ ซอฟต์ จำกัด (Demo) -' }).getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Preparer' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/09.Completed User Details.png' });
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(15000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/10.All User.png' });
  await page.reload()
  await page.waitForTimeout(1000);


});





test('TC02 Edit User ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.getByRole('combobox').selectOption('50');
  await page.waitForTimeout(1800);
  await page.getByRole('row', { name: 'Au*****er te*****om GDM' }).getByRole('button').first().first().click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/01.Before Edit.png' });
  await page.locator('input[name="name"]').clear();
  await page.locator('input[name="name"]').fill('Auto Edit User');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/02.Edit Name.png' });
  await page.getByRole('tab', { name: 'Roles' }).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด' }).getByRole('cell').nth(1).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด' }).getByRole('button').click();
  await page.getByText('Viewer').click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/03.Change Role.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/04.After Click Cancel.png' });

});



test('TC02 Edit User Completed ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.getByRole('combobox').selectOption('50');
  await page.waitForTimeout(1800);
  await page.getByRole('row', { name: 'Au*****er te*****om GDM' }).getByRole('button').first().first().click();
  await page.locator('input[name="name"]').fill('Auto Edit User');
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/05.Edit General.png' });
  await page.getByRole('tab', { name: 'Roles' }).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. (Demo) บริษัท กิงโกะ ซอฟต์ จำกัด (Demo) Preparer' }).getByRole('button').click();
  await page.locator('button').filter({ hasText: /^-$/ }).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด' }).getByRole('cell').nth(1).click();
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด' }).getByRole('button').click();
  await page.getByText('Approver').click();
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/06.Edit Role.png' });
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/05.Edit Completed.png' });

});






// test('TC02 Edit User Login ', async ({ page }) => {
//   await page.getByText('logout').click();
//   await page.goto('/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
//   await page.locator('input[name="password"]').fill('ZXcv.!234');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   await page.waitForTimeout(2000);
//   await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/08.Edit User Login.png' });


// });




test('TC03 Delete User ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.getByRole('combobox').selectOption('50');
  await page.getByRole('row', { name: 'Au*****er te*****om GGS' }).getByRole('button').nth(1).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/01.Before Delete User Click Cancel.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/02.After Delete User Click Cancel.png' });
  await page.getByRole('row', { name: 'Au*****er te*****om GGS' }).getByRole('button').nth(1).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/03.Before Delete User Click Confirm.png' });
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/04.Before Delete User Click Confirm.png' });
});





test('TC04 Click Learn More ', async ({ page }) => {


  await page.waitForTimeout(3000);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Learn More' }).click();
  const page1 = await page1Promise;
  await page1.waitForURL('https://www.gestampduty.com/docs/user-management/');
  await expect(page1.getByText('Home Docs Others User management User management User Role # ในระบบ GeStamp Duty')).toBeEnabled();
  await page.waitForTimeout(1000);
  await page1.screenshot({ path: 'Output/TS05-Administrator/TC04 Click Learn More/01.Click Learn More.png' });
  await page.waitForTimeout(1000);

});


test('TC05 Click Up To ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.getByRole('combobox').selectOption('50');
  await page.waitForTimeout(3000);
  await page.keyboard.press('End');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC05 Click Up To/01.Before Click.png' });
  await page.getByRole('img', { name: 'Stockholm-icons / Navigation / Up-2' }).click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC05 Click Up To/02.After Click.png' });
  await page.waitForTimeout(1000);


});




test('TC06 Company Details ', async ({ page }) => {

  await page.getByText('logout').click();
  await page.waitForTimeout(2500);
  await page.goto('/login');
  await page.locator('input[name="email"]').fill('test.gamekittisak7@gmail.com');
  await page.locator('input[name="password"]').fill('P@ssw0rd');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.waitForURL('/batch');
  await page.getByRole('link', { name: 'Administrator' }).click();
  await page.waitForURL('admin/company');
  await page.getByRole('link', { name: 'Company' }).click();
  await expect(page.getByText('Company ManagerManage company accountsAdd')).toBeEnabled();
  await page.getByRole('button', { name: 'ACCOUNT' }).first().click();
  await expect(page.locator('div').filter({ hasText: /^Account InformationEntity ID\*Password\*$/ })).toBeEnabled();
  await page.screenshot({ path: 'Output/TS05-Administrator/TC06 Company/01.Account.png' });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC06 Company/02.Account Click Cancle.png' });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'INFO' }).first().click();
  await expect(page.locator('div').filter({ hasText: 'General InformationName (English)*Name (Thai)*Tax ID*Company Abbreviation*Approv' }).nth(3)).toBeEnabled();
  await page.screenshot({ path: 'Output/TS05-Administrator/TC06 Company/03.Info.png' });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC06 Company/04.Info Click Cancle.png' });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'KEY' }).first().click();
  await expect(page.locator('div').filter({ hasText: /^Key InformationKey Store Path\*Expire DateKey Store Key\*Key Store Pass\*$/ })).toBeEnabled();
  await page.screenshot({ path: 'Output/TS05-Administrator/TC06 Company/05.Key.png' });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC06 Company/06.Key Click Cancle.png' });
  await page.waitForTimeout(1000);

});




test('TC07 Schedule Submit ', async ({ page }) => {

  await page.getByRole('link', { name: 'Schedule Submit' }).click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC07 Schedule Submit/01.Default page Page.png' });

});



test('TC08 Company Audit Log Log Type ', async ({ page }) => {

  await page.getByRole('link', { name: 'Audit Log' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Log typeAll$/ }).nth(1).click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/01.None.png' });
  await page.locator('div').filter({ hasText: /^Log typeAll$/ }).nth(1).click();
  await page.getByRole('option', { name: 'Authentication' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/02.Authen.png' });
  await page.locator('div').filter({ hasText: /^Log typeAuthentication$/ }).nth(1).click();
  await page.getByRole('option', { name: 'Administration' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/03.Admin.png' });
  await page.locator('div').filter({ hasText: /^Log typeAdministration$/ }).nth(1).click();
  await page.getByRole('option', { name: 'BatchService' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/04.BatchService.png' });
  await page.locator('div').filter({ hasText: /^Log typeBatchService$/ }).nth(1).click();
  await page.getByRole('option', { name: 'Transaction' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/05.Transaction.png' });
  await page.locator('div').filter({ hasText: /^Log typeTransaction$/ }).nth(1).click();
  await page.getByRole('option', { name: 'ProcessService' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/06.ProcessService.png' });
  await page.locator('div').filter({ hasText: /^Log typeProcessService$/ }).nth(1).click();
  await page.getByRole('option', { name: 'WatcherService' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/07.WatcherService.png' });
  await page.waitForTimeout(1500);


});




test('TC08 Company Audit Log Date Form ', async ({ page }) => {

  await page.getByRole('link', { name: 'Audit Log' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('1 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/02.Date Form/01.Date From Valid.png' });
  await page.locator('div').filter({ hasText: /^Date From$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2033').click();
  await page.getByLabel('August 2033').click();
  await page.getByLabel('12 August 2033', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/02.Date Form/02.Date From InValid.png' });


});




test('TC08 Company Audit Log Date To ', async ({ page }) => {

  await page.getByRole('link', { name: 'Audit Log' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2023').click();
  await page.getByLabel('August 2023').click();
  await page.getByLabel('1 August 2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/03.Date To/01.Date To Valid.png' });
  await page.locator('div').filter({ hasText: /^Date To$/ }).getByLabel('Open calendar').click();
  await page.getByLabel('Choose month and year').click();
  await page.getByLabel('2033').click();
  await page.getByLabel('August 2033').click();
  await page.getByLabel('12 August 2033', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/03.Date To/02.Date To InValid.png' });


});



test('TC08 Company Audit Log Company ', async ({ page }) => {

  await page.getByRole('link', { name: 'Audit Log' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^CompanyAll$/ }).nth(1).click();
  await page.getByRole('option', { name: 'All' }).locator('span').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/04.Company/01.All Company.png' });
  await page.locator('div').filter({ hasText: /^CompanyAll$/ }).nth(1).click();
  await page.getByRole('option', { name: 'Ginkgo Soft Co., Ltd.', exact: true }).locator('span').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/04.Company/02.GGS Company.png' });
  await page.locator('div').filter({ hasText: /^CompanyGinkgo Soft Co\., Ltd\.$/ }).nth(1).click();
  await page.getByText('Ginkgo Soft Co., Ltd. (Demo)').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/04.Company/03.GDM Company.png' });





});




test('TC08 Company Audit Log Batch ID ', async ({ page }) => {

  await page.getByRole('link', { name: 'Audit Log' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Batch ID').fill('1');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/05.Batch ID/01.ID 1.png' });
  await page.getByLabel('Batch ID').fill('147');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/05.Batch ID/02.ID 147.png' });
  await page.getByLabel('Batch ID').fill('32000');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/05.Batch ID/03.ID 32000.png' });
  await page.getByLabel('Batch ID').fill('-100');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/05.Batch ID/04.ID -100.png' });



});



test('TC08 Company Audit Log Search ', async ({ page }) => {

  await page.getByRole('link', { name: 'Audit Log' }).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Search').fill('test.gamekittisak@gmail.com');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/06.Search/01.Search Email.png' });
  await page.getByLabel('Search').fill('Finish check payment');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/06.Search/02.Search check payment.png' });
  await page.getByLabel('Search').fill('Set permission');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/06.Search/03.Search Set permission.png' });
  await page.getByLabel('Search').fill('Login google');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/06.Search/04.Search Login google.png' });

});