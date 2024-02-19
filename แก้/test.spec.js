

test('GSD-109_TC7 ', async ({ page }) => {

    await page.waitForURL('/batch');
    await page.getByRole('button', { name: 'Upload' }).first().click();
    await page.locator('#file').setInputFiles('Data Files/Fix Bug/GSD-109/Auto_GSD-109_TC7.xlsx');
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByLabel('Upload Success').click();
    await expect(page.getByRole('heading', { name: 'Upload Success' })).toHaveText('Upload Success');
    await page.getByRole('button', { name: 'Close' }).click();
    await page.reload();
    await page.waitForTimeout(2500);
    await page.waitForURL('/batch');
    let mask_locator3 = await page.getByRole('row', { name: 'Auto_GSD-109_TC7' }).getByRole('cell').first();
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109_TC7/01. GSD-109_TC7.png', mask: [mask_locator3], maskColor: '#00FF00' });
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.reload();
    await page.locator('button').filter({ hasText: 'Input Error' }).first().click();
    await expect.soft(page.getByLabel('Message')).toBeVisible();
    await expect.soft(page.getByLabel('Message'))
        .toHaveText("Messageข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] ");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109_TC7/02. GSD-109_TC7 Click Status Error Msg.png' });
    await page.waitForTimeout(500);
    await page.reload();
    await page.getByText('Auto_GSD-109_TC7').first().click();
    await expect.soft(page.locator('.card-error')).toBeVisible();
    await expect.soft(page.locator('.card-error'))
        .toHaveText("errorInput Errorข้อมูลบรรทัดที่ 1 column 'actionType' typeCode is one of 7,111,271,272; therefore, attachDetail.actionType must be equal to 1, 2, or 3. [E07265] Import FixesExport FixesEdit");
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS12-Fix Bug/GSD-109_TC7/03. GSD-109_TC7 Error Msg.png' });
    await page.locator('a').filter({ hasText: 'Batch' }).click();
    await page.getByRole('row', { name: 'Auto_GSD-109_TC7 ' }).first().getByText('delete').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect.soft(page.getByRole('row', { name: 'Auto_GSD-109_TC7  ' })).toBeHidden();
    await page.waitForTimeout(1500);


});