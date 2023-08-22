// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Runs before each test and signs in each page.

    await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByRole('link', { name: 'Administrator' }).click();
    await page.waitForURL('http://gestamp.ddns.net/gestamp/admin');
});





test('TC01 Administrator  ', async ({ page }) => {
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/01.Administrator Page.png' });
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('input[name="name"]').fill('Auto Add User');
    await expect(page.getByText('Email is required')).toHaveText('Email is required');
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/02.No Email.png' });
    await page.locator('input[name="name"]').clear();
    await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
    await page.locator('input[name="name"]').click();
    await expect(page.getByText('Name is required')).toHaveText('Name is required');
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/03.No Name.png' });
    await page.locator('input[name="email"]').clear();
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="email"]').click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/04.No Email And Name.png' });
    await page.locator('select[name="company"]').selectOption('3');
    await page.locator('select[name="role"]').selectOption('2');
    await page.getByRole('button', { name: 'Assign' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/05.Add Assign.png' });
    await page.getByRole('row', { name: 'GinkgoTest กิงโกะเทส Approver' }).getByRole('button').click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/06.Delete Assign.png' });
    await page.getByRole('button', { name: 'Cancel' }).click();
    //Full Input Cancel
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
    await page.locator('input[name="name"]').fill('Auto Add User');
    await page.locator('select[name="role"]').selectOption('3');
    await page.getByRole('button', { name: 'Assign' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/07.Input Full Click Cancel.png' });
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/08.After Click Cancel.png' });

});




test('TC01 Administrator Add User Completed ', async ({ page }) => {

    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
    await page.locator('input[name="name"]').fill('Auto Add User');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.locator('input[name="cPassword"]').fill('ZXcv.!234');
    await page.locator('select[name="role"]').selectOption('3');
    await page.getByRole('button', { name: 'Assign' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/09.Completed User Details.png' });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/10.All User.png' });


});

test('TC01 Administrator User Login ', async ({ page }) => {
    await page.getByText('logout').click();

    await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC01 Administrator/11.User Login.png' });


});




test('TC02 Edit User ', async ({ page }) => {

    await page.getByRole('row', { name: 'Auto Add User test.gamekittisak4@gmail.com GGS' }).getByRole('button').nth(1).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/01.Before Edit.png' });
    await page.locator('input[name="email"]').clear();
    await page.locator('input[name="email"]').fill('4kasittikemag@gmail.com');
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/02.Edit Email.png' });
    await page.locator('input[name="name"]').clear();
    await page.locator('input[name="name"]').fill('Auto Edit User');
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/03.Edit Name.png' });
    await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด Preparer' }).getByRole('button').click();
    await page.locator('select[name="company"]').selectOption('4');
    await page.locator('select[name="role"]').selectOption('7');
    await page.getByRole('button', { name: 'Assign' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/04.Change Assign.png' });
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/05.After Click Cancel.png' });

});



test('TC02 Edit User Completed ', async ({ page }) => {

    await page.getByRole('row', { name: 'Auto Add User test.gamekittisak4@gmail.com GGS' }).getByRole('button').nth(1).click();
    await page.locator('input[name="name"]').fill('Auto Edit User');
    await page.getByRole('row', { name: 'Ginkgo Soft Co., Ltd. บริษัท กิงโกะ ซอฟต์ จำกัด Preparer' }).getByRole('button').click();
    await page.locator('select[name="company"]').selectOption('4');
    await page.locator('select[name="role"]').selectOption('7');
    await page.getByRole('button', { name: 'Assign' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/07.Edit Completed.png' });


});






test('TC02 Edit User Login ', async ({ page }) => {
    await page.getByText('logout').click();
    await page.goto('http://gestamp.ddns.net/gestamp/auth/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak4@gmail.com');
    await page.locator('input[name="password"]').fill('ZXcv.!234');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.goto('http://gestamp.ddns.net/gestamp/batch');
    await page.waitForTimeout(1800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC02 Edit User/08.Edit User Login.png' });


});




test('TC03 Delete User ', async ({ page }) => {

    await page.getByRole('row', { name: 'Auto Edit User test.gamekittisak4@gmail.com NPD' }).getByRole('button').nth(2).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/01.Before Delete User Click Cancel.png' });
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/02.After Delete User Click Cancel.png' });
    await page.getByRole('row', { name: 'Auto Edit User test.gamekittisak4@gmail.com NPD' }).getByRole('button').nth(2).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/03.Before Delete User Click Confirm.png' });
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'Output/TS05-Administrator/TC03 Delete User/04.Before Delete User Click Confirm.png' });
});



