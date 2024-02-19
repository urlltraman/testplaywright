
test('TC11 Search Event Log Search ', async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.getByRole('tab', { name: 'Event Log' }).click();
    await page.waitForTimeout(500);
    await page.getByLabel('Search').first().fill('process');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/01.Search Process.png'});
    await page.getByLabel('Search').first().fill('run');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/02.Search Run.png'});
    await page.getByLabel('Search').first().fill('checkPayment');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/03.Search Check Payment.png'});
    await page.getByLabel('Search').first().fill('init');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/04.Search Init.png'});
    await page.getByLabel('Search').first().fill('token');
    await page.getByRole('button', { name: 'Search' }).first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'Output/TS07-Support/TC11 Search Event Log/06.Search/05.Search Token.png'});
    
    
});
