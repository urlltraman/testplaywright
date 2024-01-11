
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Runs Uat

    await page.goto('/auth/login');
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();
    await page.getByRole('link', { name: 'Administrator' }).click();
     await page.waitForURL('admin/company');
});



// test.beforeEach(async ({ page }) => {
//   // Runs Dev

//   await page.goto('/auth/login');
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
  // await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  // await page.locator('input[name="password"]').click();
  // await page.locator('input[name="email"]').click();
  // await expect(page.getByText('Password is required')).toHaveText('Password is required');
  // await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/04.No Password.png' });
  // await page.getByRole('button', { name: 'Cancel' }).click();
  // await page.getByRole('button', { name: 'Add' }).click();
  // await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  // await page.locator('input[name="cPassword"]').click();
  // await page.locator('input[name="email"]').click();
  // await expect(page.getByText('Confirm Password is required')).toHaveText('Confirm Password is required');
  // await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/05.No Confirm Password.png' });
  // await page.getByRole('button', { name: 'Cancel' }).click();
  // await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('select[name="defaultCompany"]').click();
  await page.locator('input[name="email"]').click();
  await expect(page.getByText('Default company is required')).toHaveText('Default company is required');
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/04.No Select Company.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('select[name="defaultCompany"]').click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="email"]').click();
  // await page.locator('input[name="cPassword"]').click();
  // await page.locator('input[name="password"]').click();
  await page.locator('input[name="name"]').click();
  await expect(page.getByText('Email is required')).toHaveText('Email is required');
  await expect(page.getByText('Name is required')).toHaveText('Name is required');
  // await expect(page.getByText('Password is required')).toHaveText('Password is required',{ exact: true });
  // await expect(page.getByText('Confirm Password is required')).toHaveText('Confirm Password is required');
  await expect(page.getByText('Default company is required')).toHaveText('Default company is required');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/05.No Input All.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('select[name="company"]').selectOption('1');
  await page.locator('select[name="role"]').selectOption('2');
  await page.getByRole('button', { name: 'Assign' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/06.Add Assign.png' });
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด Approver' }).getByRole('button').click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/07.Delete Assign.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  // //Google
  // await page.getByRole('button', { name: 'Add' }).click();
  // await page.locator('select[name="formAuthMethod"]').selectOption('Google');
  // await page.locator('input[name="email"]').click();
  // await page.locator('input[name="name"]').click();
  // await expect(page.getByText('Email is required')).toHaveText('Email is required');
  // // await expect(page.getByText('Email invalid gmail account')).toHaveText('Email invalid gmail account');
  // await page.waitForTimeout(800);
  // await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/10.No Email Google.png' });
  // await page.getByRole('button', { name: 'Cancel' }).click();
  // await page.getByRole('button', { name: 'Add' }).click();
  // await page.locator('select[name="formAuthMethod"]').selectOption('Google');
  // await page.locator('input[name="name"]').click();
  // await page.locator('input[name="email"]').click();
  // await expect(page.getByText('Name is required')).toHaveText('Name is required');
  // await page.waitForTimeout(800);
  // await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/11.No Name Google.png' });
  // await page.getByRole('button', { name: 'Cancel' }).click();
  // await page.getByRole('button', { name: 'Add' }).click();
  // await page.locator('select[name="formAuthMethod"]').selectOption('Google');
  // await page.locator('select[name="defaultCompany"]').click();
  // await page.locator('input[name="email"]').click();
  // await expect(page.getByText('Default company is required')).toHaveText('Default company is required');
  // await page.waitForTimeout(800);
  // await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/12.No Select Company Google.png' });
  // await page.waitForTimeout(800);
  // await page.getByRole('button', { name: 'Cancel' }).click();
  //Full Input Cancel
  // await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
  await page.locator('input[name="name"]').fill('Auto Add User');
  // await page.locator('input[name="password"]').fill('Qwerty123');
  // await page.locator('input[name="cPassword"]').fill('Qwerty123');
  // await page.locator('div').filter({ hasText: /^Passwordvisibility_off$/ }).locator('mat-icon').click();
  // await page.locator('div').filter({ hasText: /^Confirm Passwordvisibility_off$/ }).locator('mat-icon').click();
  await page.locator('select[name="role"]').selectOption('3');
  await page.getByRole('button', { name: 'Assign' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/08.Input Full Click Cancel.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/09.After Click Cancel.png' });

});








test('TC01 Administrator Add User Completed ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();

  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('select[name="formAuthMethod"]').selectOption('Basic');
  await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
  await page.locator('input[name="name"]').fill('Auto Add User');
  // await page.locator('input[name="password"]').fill('ZXcv.!234');
  // await page.locator('input[name="cPassword"]').fill('ZXcv.!234');
  await page.locator('select[name="company"]').selectOption('1');
  await page.locator('select[name="role"]').selectOption('3');
  await page.getByRole('button', { name: 'Assign' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/10.Completed User Details.png' });
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(15000);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/11.All User.png' });
  await page.reload()
  await page.waitForTimeout(1000);


});



// test('TC01 Administrator Set Password ', async ({ page }) => {
//   await page.getByRole('link', { name: 'User Accounts' }).click();
//   await page.getByRole('combobox').selectOption('50');
//   await page.reload();
//   await page.getByRole('row', { name: 'Au*****er te*****om GDM' }).getByRole('button').first().click();
//   await page.locator('input[name="password"]').click();
//   await page.locator('input[name="cPassword"]').click();
//   await expect(page.getByText('Password is required')).toHaveText('Password is required');
//   await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/12.No Input Password.png' });
//   await page.locator('input[name="password"]').click();
//   await expect(page.getByText('Confirm Password is required')).toHaveText('Confirm Password is required');
//   await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/13.No Input Confirm Password.png' });
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.getByRole('row', { name: 'Au*****er te*****om GDM' }).getByRole('button').first().click();
//   await page.getByText('visibility_off').first().click();
//   await page.getByText('visibility_off').click();
//   await page.locator('input[name="password"]').fill('ZXcv.!234')
//   await page.locator('input[name="cPassword"]').fill('ZXcv.!234')
//   await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/13.Set Password.png' });
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(2000);


// });





// test('TC01 Administrator User Login ', async ({ page }) => {
//   await page.getByText('logout').click();
//   await page.goto('/auth/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
//   await page.locator('input[name="password"]').fill('ZXcv.!234');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   await page.waitForTimeout(2000);
//   await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/14.User Login.png' });


// });




test('TC02 Edit User ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.getByRole('combobox').selectOption('50');
  await page.waitForTimeout(800);
  await page.getByRole('row', { name: 'Au*****er te*****om GGS' }).getByRole('button').first().click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/01.Before Edit.png' });
  // await page.locator('input[name="email"]').clear();
  // await page.locator('input[name="email"]').fill('4kasittikemag@gmail.com');
  // await page.waitForTimeout(800);
  // await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/02.Edit Email.png' });
  await page.locator('input[name="name"]').clear();
  await page.locator('input[name="name"]').fill('Auto Edit User');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/02.Edit Name.png' });
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด Preparer' }).getByRole('button').click();
  await page.locator('select[name="company"]').selectOption('2');
  await page.locator('select[name="role"]').selectOption('2');
  await page.getByRole('button', { name: 'Assign' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/03.Change Assign.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/04.After Click Cancel.png' });

});



test('TC02 Edit User Completed ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.getByRole('combobox').selectOption('50');
  await page.getByRole('row', { name: 'Au*****er te*****om GGS' }).getByRole('button').first().click();
  await page.locator('input[name="name"]').fill('Auto Edit User');
  await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด Preparer' }).getByRole('button').click();
  await page.locator('select[name="company"]').selectOption('2');
  await page.locator('select[name="role"]').selectOption('2');
  await page.getByRole('button', { name: 'Assign' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/05.Edit Completed.png' });


});






// test('TC02 Edit User Login ', async ({ page }) => {
//   await page.getByText('logout').click();
//   await page.goto('/auth/login');
//   await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
//   await page.locator('input[name="password"]').fill('ZXcv.!234');
//   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//   await page.waitForTimeout(2000);
//   await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/08.Edit User Login.png' });


// });




test('TC03 Delete User ', async ({ page }) => {
  await page.getByRole('link', { name: 'User Accounts' }).click();
  await page.getByRole('combobox').selectOption('50');
  await page.getByRole('row', { name: 'Au*****er te*****om GDM' }).getByRole('button').nth(1).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/01.Before Delete User Click Cancel.png' });
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/02.After Delete User Click Cancel.png' });
  await page.getByRole('row', { name: 'Au*****er te*****om GDM' }).getByRole('button').nth(1).click();
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
  await page.getByText('AllLog type').click();
  await page.getByRole('option', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/01.None.png' });
  await page.getByText('AllLog type').click();
  await page.getByRole('option', { name: 'Authentication' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/02.Authen.png' });
  await page.getByText('AuthenticationLog type').click();
  await page.getByRole('option', { name: 'Administration' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/03.Admin.png' });
  await page.getByText('AdministrationLog type').click();
  await page.getByRole('option', { name: 'BatchService' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/04.BatchService.png' });
  await page.getByText('BatchServiceLog type').click();
  await page.getByRole('option', { name: 'Transaction' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/05.Transaction.png' });
  await page.getByText('TransactionLog type').click();
  await page.getByRole('option', { name: 'ProcessService' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/01.Log Type/06.ProcessService.png' });
  await page.getByText('ProcessServiceLog type').click();
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
  await page.getByText('AllCompany').click();
  await page.getByRole('option', { name: 'All' }).locator('span').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/04.Company/01.All Company.png' });
  await page.getByText('AllCompany').click();
  await page.getByRole('option', { name: 'Ginkgo Soft Co., Ltd.', exact: true }).locator('span').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'Output/TS05-Administrator/TC08 Company Audit Log Log Type/04.Company/02.GGS Company.png' });
  await page.getByText('Ginkgo Soft Co., Ltd.Company').click();
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