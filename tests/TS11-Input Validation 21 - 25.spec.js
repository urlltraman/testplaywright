import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Runs Uat

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('kittisak.p@ginkgosoft.co.th');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

  });






test('TC21 Building Name 1 - 4  ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/21. buildingname/Auto_BuildingName_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_BuildingName_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingName_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingName_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/21. buildingname/Auto_BuildingName_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_BuildingName_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingName_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingName_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/21. buildingname/Auto_BuildingName_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_BuildingName_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingName_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingName_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/21. buildingname/Auto_BuildingName_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_BuildingName_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingName_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingName_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);

});



test('TC21 Building Name 5 - 8  ', async ({ page }) => {


    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/21. buildingname/Auto_BuildingName_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_BuildingName_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingName_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingName_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/21. buildingname/Auto_BuildingName_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_BuildingName_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingName_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingName_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/21. buildingname/Auto_BuildingName_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_BuildingName_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingName_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingName_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/21. buildingname/Auto_BuildingName_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_BuildingName_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'buildingName' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_BuildingName_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'buildingName' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC21. Building Name/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_BuildingName_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingName_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});


test('TC22 Room No 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/22. roomno/Auto_RoomNo_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_RoomNo_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_RoomNo_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_RoomNo_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/22. roomno/Auto_RoomNo_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_RoomNo_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_RoomNo_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_RoomNo_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/22. roomno/Auto_RoomNo_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_RoomNo_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_RoomNo_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_RoomNo_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/22. roomno/Auto_RoomNo_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_RoomNo_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_RoomNo_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_RoomNo_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);



});


test('TC22 Room No 5 - 8 ', async ({ page }) => {
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/22. roomno/Auto_RoomNo_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_RoomNo_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_RoomNo_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_RoomNo_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/22. roomno/Auto_RoomNo_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_RoomNo_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_RoomNo_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_RoomNo_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/22. roomno/Auto_RoomNo_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_RoomNo_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_RoomNo_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_RoomNo_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/22. roomno/Auto_RoomNo_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_RoomNo_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'roomNo' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_RoomNo_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'roomNo' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC22. Room No/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_RoomNo_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_RoomNo_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});




test('TC23 Floor No 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/23. floorno/Auto_FloorNo_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_FloorNo_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FloorNo_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FloorNo_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/23. floorno/Auto_FloorNo_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_FloorNo_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FloorNo_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FloorNo_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/23. floorno/Auto_FloorNo_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_FloorNo_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FloorNo_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FloorNo_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/23. floorno/Auto_FloorNo_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_FloorNo_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FloorNo_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FloorNo_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});




test('TC23 Floor No 5 - 8 ', async ({ page }) => {
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/23. floorno/Auto_FloorNo_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_FloorNo_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FloorNo_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FloorNo_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/23. floorno/Auto_FloorNo_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_FloorNo_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FloorNo_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FloorNo_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/23. floorno/Auto_FloorNo_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_FloorNo_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FloorNo_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FloorNo_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/23. floorno/Auto_FloorNo_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_FloorNo_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'floorNo' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_FloorNo_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'floorNo' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC23. Floor No/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_FloorNo_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FloorNo_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});

test('TC24 Village Name 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/24. villagename/Auto_VillageName_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_VillageName_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_VillageName_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_VillageName_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/24. villagename/Auto_VillageName_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_VillageName_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_VillageName_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_VillageName_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/24. villagename/Auto_VillageName_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_VillageName_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_VillageName_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_VillageName_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/24. villagename/Auto_VillageName_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_VillageName_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_VillageName_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_VillageName_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});

test('TC24 Village Name 5 - 8 ', async ({ page }) => {
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/24. villagename/Auto_VillageName_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_VillageName_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_VillageName_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_VillageName_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/24. villagename/Auto_VillageName_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_VillageName_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_VillageName_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_VillageName_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/24. villagename/Auto_VillageName_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_VillageName_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_VillageName_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_VillageName_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/24. villagename/Auto_VillageName_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_VillageName_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'villageName' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_VillageName_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'villageName' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC24. Village Name/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_VillageName_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_VillageName_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});




test('TC25 Building Number 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/25. buildingnumber/Auto_BuildingNumber_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_BuildingNumber_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingNumber_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingNumber_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/25. buildingnumber/Auto_BuildingNumber_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_BuildingNumber_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingNumber_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingNumber_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/25. buildingnumber/Auto_BuildingNumber_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_BuildingNumber_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingNumber_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingNumber_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/25. buildingnumber/Auto_BuildingNumber_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_BuildingNumber_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingNumber_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingNumber_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});




test('TC25 Building Number 5 - 8 ', async ({ page }) => {
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/25. buildingnumber/Auto_BuildingNumber_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_BuildingNumber_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingNumber_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingNumber_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/25. buildingnumber/Auto_BuildingNumber_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_BuildingNumber_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingNumber_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingNumber_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/25. buildingnumber/Auto_BuildingNumber_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_BuildingNumber_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_BuildingNumber_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingNumber_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/25. buildingnumber/Auto_BuildingNumber_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_BuildingNumber_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'buildingNumber' length is overflow ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/09. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_BuildingNumber_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'buildingNumber' length is overflow Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC25. Building Number/10. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_BuildingNumber_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_BuildingNumber_C8  ' })).toBeHidden();
    await page.waitForTimeout(1000);
});

