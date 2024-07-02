import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     // Runs Uat

//     await page.goto('/login');
//     await page.locator('input[name="email"]').fill('test.gamekittisak2@gmail.com');
//     await page.locator('input[name="password"]').fill('ZXcv.!234');
//     await page.getByRole('button', { name: 'Sign In', exact: true }).click();
//     // await page.getByRole('button', { name: 'Accept' }).click();

//   });



test.beforeEach(async ({ page }) => {
    // Runs Dev

    await page.goto('/login');
    await page.locator('input[name="email"]').fill('test.gamekittisak@gmail.com');
    await page.locator('input[name="password"]').fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    // await page.getByRole('button', { name: 'Accept' }).click();

});



test('TC36 FillingNo 1 - 4 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_FillingNo_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_FillingNo_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_FillingNo_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_FillingNo_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C4  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('TC36 FillingNo 5 - 9 ', async ({ page }) => {
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_FillingNo_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_FillingNo_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_FillingNo_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_FillingNo_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_FillingNo_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/09. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/36. fillingno/Auto_FillingNo_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_FillingNo_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC36. Filling No/10. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FillingNo_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FillingNo_C10  ' })).toBeHidden();
    await page.waitForTimeout(1500);



});




test('TC37 Entity ID 1 - 5 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_EntityID_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_EntityID_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_EntityID_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_EntityID_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_EntityID_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);

    
});
    
    
    
 
test('TC37 Entity ID 6 - 10 ', async ({ page }) => {   
      
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_EntityID_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_EntityID_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_EntityID_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator9 = await page.getByRole('row', { name: 'Auto_EntityID_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/09. Case 9.png', mask: [mask_locator9], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/10. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EntityID_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/11. Case 09 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/37. entityid/Auto_EntityID_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator10 = await page.getByRole('row', { name: 'Auto_EntityID_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/12. Case 10.png', mask: [mask_locator10], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/13. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_EntityID_C10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'taxPayerId' senderRole is equal to 1; therefore, taxPayer and entityId must be the same as sender.id. [R12] Import FixesExport FixesEdit");
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC37. Entity ID/14. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_EntityID_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_EntityID_C10  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});


test('TC38 Sender Role 1 - 6 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/38. senderrole/Auto_SenderRole_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_SenderRole_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC38. Sender Role/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_SenderRole_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SenderRole_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/38. senderrole/Auto_SenderRole_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_SenderRole_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC38. Sender Role/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_SenderRole_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SenderRole_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/38. senderrole/Auto_SenderRole_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_SenderRole_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC38. Sender Role/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_SenderRole_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SenderRole_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/38. senderrole/Auto_SenderRole_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_SenderRole_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC38. Sender Role/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_SenderRole_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SenderRole_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/38. senderrole/Auto_SenderRole_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_SenderRole_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC38. Sender Role/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_SenderRole_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SenderRole_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/38. senderrole/Auto_SenderRole_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_SenderRole_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC38. Sender Role/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_SenderRole_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_SenderRole_C6  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('TC39 Form Type 1 - 8 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/39. formtype/Auto_FormType_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_FormType_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC39. Form Type/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FormType_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FormType_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/39. formtype/Auto_FormType_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_FormType_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC39. Form Type/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FormType_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FormType_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/39. formtype/Auto_FormType_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_FormType_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC39. Form Type/03. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FormType_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FormType_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/39. formtype/Auto_FormType_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_FormType_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC39. Form Type/04. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FormType_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FormType_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/39. formtype/Auto_FormType_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_FormType_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC39. Form Type/05. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FormType_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FormType_C5  ' })).toBeHidden();
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/39. formtype/Auto_FormType_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator6 = await page.getByRole('row', { name: 'Auto_FormType_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC39. Form Type/06. Case 6.png', mask: [mask_locator6], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FormType_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FormType_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/39. formtype/Auto_FormType_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator7 = await page.getByRole('row', { name: 'Auto_FormType_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC39. Form Type/07. Case 7.png', mask: [mask_locator7], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FormType_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FormType_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/39. formtype/Auto_FormType_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator8 = await page.getByRole('row', { name: 'Auto_FormType_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC39. Form Type/08. Case 8.png', mask: [mask_locator8], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_FormType_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_FormType_C8  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});







test('TC40 ActionType Case 1 1 - 5 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/04. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/05. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/06. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/07. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/08. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/09. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/10. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/11. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC5  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC40 ActionType Case 1 6 - 8 ', async ({ page }) => {
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/12. Case 6.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/13. Case 7.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/14. Case 8.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC8  ' })).toBeHidden();
    await page.waitForTimeout(1500);




});





test('TC40 ActionType Case 1 9.1 - 9.2 ', async ({ page }) => {
    // C9.1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC91.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC91' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/19. Case 9.1.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/20. Case 9.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC91').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/21. Case 9.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC91 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC91  ' })).toBeHidden();
    // C9.2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC92.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC92' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/22. Case 9.2.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/23. Case 9.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC92').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/24. Case 9.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC92 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC92  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});








test('TC40 ActionType Case 1 10 - 13 ', async ({ page }) => {
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/25. Case 10.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/26. Case 10 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC10').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/27. Case 10 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC10  ' })).toBeHidden();
    // C11.1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC111.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC111' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/28. Case 11.1.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC111 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC111  ' })).toBeHidden();
    // C11.2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC112.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC112' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/29. Case 11.2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/30. Case 11.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC112').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/31. Case 11.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC112 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC112  ' })).toBeHidden();
    // C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/32. Case 12.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/33. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/34. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC12  ' })).toBeHidden();
    // C13
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/35. Case 13.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/36. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/37. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC13  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC40 ActionType Case 1 14 - 18 ', async ({ page }) => {
    // C14
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/38. Case 14.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC14  ' })).toBeHidden();
    // C15
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/39. Case 15.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC15  ' })).toBeHidden();
    // C16
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/40. Case 16.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/41. Case 16 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC16').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/42. Case 16 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC16  ' })).toBeHidden();
    // C17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/43. Case 17.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC17  ' })).toBeHidden();
    // C18
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/44. Case 18.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC18  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC40 ActionType Case 1 19 - 272', async ({ page }) => {
    // C19
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/45. Case 19.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/46. Case 19 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC19').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/47. Case 19 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC19  ' })).toBeHidden();
    // C20
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/48. Case 20.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/49. Case 20 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case1_TC20').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 1,4,5,91,92,10,112,12,13,16,19 or 20; therefore, actionType must be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/50. Case 20 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC20  ' })).toBeHidden();
    // C21
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/51. Case 21.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC21  ' })).toBeHidden();
    // C271
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC271.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC271' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/52. Case 27.1.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC271 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC271  ' })).toBeHidden();
    // C272
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case1/Auto_ActionType_Case1_TC272.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC272' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 1/53. Case 27.2.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case1_TC272 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case1_TC272  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});






test('TC40 ActionType Case 2 1 - 5 ', async ({ page }) => {
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/02. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/03. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/04. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/05. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/06. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/07. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/08. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/09. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC5  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC40 ActionType Case 2 6 - 9.2 ', async ({ page }) => {
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/10. Case 6.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 6; therefore, actionType must be equal to 1,2,3,4,5 or 6. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/11. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 6; therefore, actionType must be equal to 1,2,3,4,5 or 6. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/12. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/13. Case 7.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/14. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/15. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/16. Case 8.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/17. Case 8 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/18. Case 8 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC8  ' })).toBeHidden();
    // C9.1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC91.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC91' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/19. Case 9.1.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC91 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC91  ' })).toBeHidden();
    // C9.2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC92.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC92' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/20. Case 9.2.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC92 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC92  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});








test('TC40 ActionType Case 2 10 - 13 ', async ({ page }) => {
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/21. Case 10.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC10  ' })).toBeHidden();
    // C11.1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC111.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC111' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/22. Case 11.1.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 11.1; therefore, actionType must be equal to 1,2 or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/23. Case 11.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC111').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 11.1; therefore, actionType must be equal to 1,2 or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/24. Case 11.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC111 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC111  ' })).toBeHidden();
    // C11.2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC112.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC112' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/25. Case 11.2.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC112 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC112  ' })).toBeHidden();
    // C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/26. Case 12.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC12  ' })).toBeHidden();
    // C13
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/27. Case 3.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC13  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC40 ActionType Case 2 14 - 18 ', async ({ page }) => {
    // C14
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/28. Case 14.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/29. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/30. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC14  ' })).toBeHidden();
    // C15
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC15.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC15' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/31. Case 15.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/32. Case 15 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC15').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/33. Case 15 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC15 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC15  ' })).toBeHidden();
    // C16
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC16.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC16' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/34. Case 16.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC16 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC16  ' })).toBeHidden();
    // C17
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC17.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC17' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/35. Case 17.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC17 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC17  ' })).toBeHidden();
    // C18
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC18.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC18' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/36. Case 18.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/37. Case 18 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC18').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/38. Case 18 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC18 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC18  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC40 ActionType Case 2 19 - 272', async ({ page }) => {
    // C19
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC19.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC19' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/39. Case 19.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC19 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC19  ' })).toBeHidden();
    // C20
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC20.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC20' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/40. Case 20.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC20 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC20  ' })).toBeHidden();
    // C21
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC21.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC21' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/41. Case 21.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/42. Case 21 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC21').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/43. Case 21 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC21 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC21  ' })).toBeHidden();
    // C271
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC271.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC271' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/44. Case 27.1.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/45. Case 27.1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC271').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/46. Case 27.1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC271 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC271  ' })).toBeHidden();
    // C272
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case2/Auto_ActionType_Case2_TC272.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC272' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/47. Case 27.2.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/48. Case 27.2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case2_TC272').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2, 3, 6, 7, 8, 111, 14, 15, 17, 18, 21, 271, or 272; therefore, actionType must not be empty. [R21] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 2/49. Case 27.2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case2_TC272 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case2_TC272  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});



test('TC40 ActionType Case 3 1 - 5 ', async ({ page }) => {
    
    // C1
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C1.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C1' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/01. Case 1.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' length is overflow ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/02. Case 1 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C1').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' length is overflow ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/03. Case 1 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C1 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C1  ' })).toBeHidden();
    // C2
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C2.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C2' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/04. Case 2.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/05. Case 2 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C2').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/06. Case 2 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C2 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C2  ' })).toBeHidden();
    // C3
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C3.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C3' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/07. Case 3.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/08. Case 3 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C3').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/09. Case 3 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C3 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C3  ' })).toBeHidden();
    // C4
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C4.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C4' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/10. Case 4.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 6; therefore, actionType must be equal to 1,2,3,4,5 or 6. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/11. Case 4 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C4').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 6; therefore, actionType must be equal to 1,2,3,4,5 or 6. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/12. Case 4 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C4 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C4  ' })).toBeHidden();
    // C5
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C5.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C5' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/13. Case 5.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/14. Case 5 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C5').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/15. Case 5 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C5 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C5  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});





test('TC40 ActionType Case 3 6 - 10 ', async ({ page }) => {
    
    // C6
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C6.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C6' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/15. Case 6.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/17. Case 6 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C6').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/18. Case 6 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C6 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C6  ' })).toBeHidden();
    // C7
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/19. Case 7.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 11.1; therefore, actionType must be equal to 1,2 or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/20. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is 11.1; therefore, actionType must be equal to 1,2 or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/21. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C7  ' })).toBeHidden();
    // C8
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C8.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C8' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/22. Case 7.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/23. Case 7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C8').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/24. Case 7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C8 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C8  ' })).toBeHidden();
    // C9
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C9.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C9' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/25. Case 9.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/26. Case 9 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C9').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/27. Case 9 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C9 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C9  ' })).toBeHidden();
    // C10
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C10.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator5 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C10' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/28. Case 10.png', mask: [mask_locator5], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    // await page.waitForTimeout(500);
    // await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    // await expect.soft(page.getByLabel('Message')).toBeVisible();
    // await expect.soft(page.getByLabel('Message'))
    //     .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'relateContract' typeCode is equal to 2, 5, 8, 10, 16, 17, 111, or 271; therefore, relateContractBranchNo and relateContractBranchType must be empty. [R24] ข้อมูลบรรทัดที่ 1 column 'actionType1' typeCode is one of 2, 111; therefore, actionType1 must be equal to 1, 2, or 3. [R55] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/29. Case 10 Click Status Error Msg.png' });
    // await page.waitForTimeout(500);
    // await page.reload();
    // await page.getByText('Auto_ActionType_Case3_C10').first().click();
    // await expect.soft(page.locator('.card-error')).toBeVisible();
    // await expect.soft(page.locator('.card-error'))
    //     .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'relateContract' typeCode is equal to 2, 5, 8, 10, 16, 17, 111, or 271; therefore, relateContractBranchNo and relateContractBranchType must be empty. [R24] ข้อมูลบรรทัดที่ 1 column 'actionType1' typeCode is one of 2, 111; therefore, actionType1 must be equal to 1, 2, or 3. [R55] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    // await page.waitForTimeout(500);
    // await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/30. Case 10 Error Msg.png' });
    // await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C10 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C10  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  


  test('TC40 ActionType Case 3 11 - 14 ', async ({ page }) => {
    
    // C11
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C11.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator1 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C11' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/29. Case 11.png', mask: [mask_locator1], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/30. Case 11 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C11').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/31. Case 11 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C11 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C11  ' })).toBeHidden();
    // C12
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C12.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator2 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C12' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/32. Case 12.png', mask: [mask_locator2], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/33. Case 12 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C12').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 8,14,15,18,21; therefore, attachDetail.actionType must be equal to 1 or 2. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 3,8,14,15,18,21; therefore, actionType must be equal to 1 or 2. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/34. Case 12 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C12 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C12  ' })).toBeHidden();
    // C13
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C13.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C13' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/35. Case 13.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/36. Case 13 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C13').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/37. Case 13 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C13 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C13  ' })).toBeHidden();
    // C14
    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Input Validation/40. actiontype/Case3/Auto_ActionType_Case3_C14.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(1500);
    await page.waitForURL('/batch');
    let mask_locator4 = await page.getByRole('row', { name: 'Auto_ActionType_Case3_C14' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/38. Case 14.png', mask: [mask_locator4], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/39. Case 14 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_ActionType_Case3_C14').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is equal to 2,7,111,271,272; therefore, actionType must be equal to 1, 2, or 3. R21 Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS11-Input Validation/TC40. Action Type/Case 3/40. Case 14 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_ActionType_Case3_C14 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_ActionType_Case3_C14  ' })).toBeHidden();
    await page.waitForTimeout(1500);
  
  
  });
  
    