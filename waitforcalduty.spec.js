// C10
await page.waitForURL('/batch');
await page.getByRole('button', { name: 'Upload' }).first().click();
await page.locator('#file').setInputFiles('Data Files/Input Validation/55. amount1/Auto_Amount1_C10.xlsx');
await page.getByRole('button', { name: 'Upload' }).click();
await page.getByLabel('Upload Success').click();
await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
await page.getByRole('button', { name: 'Close' }).click();
await page.reload();
await page.waitForTimeout(2500);
await page.waitForURL('/batch');
let mask_locator4 = await page.getByRole('row', { name: 'Auto_Amount1_C10' }).getByRole('cell').first();
await page.screenshot({ path: 'Output/TS11-Input Validation/TC55. Amount1/21. Case 10.png', mask: [mask_locator4], maskColor: '#00FF00' });
await page.waitForTimeout(1500);
await page.getByRole('button', { name: 'Search' }).first().click();
await page.waitForTimeout(500);
await page.reload();
await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
await expect.soft(page.getByLabel('Message')).toBeVisible();
await expect.soft(page.getByLabel('Message'))
    .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'amount1' length is overflow ข้อมูลบรรทัดที่ 1 column 'amount1' is digit overflow ");
await page.waitForTimeout(500);
await page.screenshot({ path: 'Output/TS11-Input Validation/TC55. Amount1/22. Case 10 Click Status Error Msg.png' });
await page.waitForTimeout(500);
await page.reload();
await page.getByText('Auto_Amount1_C10').first().click();
await expect.soft(page.locator('.card-error')).toBeVisible();
await expect.soft(page.locator('.card-error'))
    .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'amount1' length is overflow ข้อมูลบรรทัดที่ 1 column 'amount1' is digit overflow Import FixesExport FixesEdit");
await page.waitForTimeout(500);
await page.screenshot({ path: 'Output/TS11-Input Validation/TC55. Amount1/23. Case 10 Error Msg.png' });
await page.locator('a').filter({ hasText: 'Batch' }).click();
await page.getByRole('row', { name: 'Auto_Amount1_C10 ' }).first().getByText('delete').click();
await page.getByRole('button', { name: 'Confirm' }).click();
await expect.soft(page.getByRole('row', { name: 'Auto_Amount1_C10  ' })).toBeHidden();




