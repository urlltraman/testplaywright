import { test, expect } from '@playwright/test';




test('Upload To zDOX ', async ({ page }) => {


  await page.goto('https://zdox.ginkgosoft.co.th/login');
  await page.getByLabel('Email').fill('prawprairat1@gmail.com');
  await page.getByLabel('Password').fill('bookbook080#');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Close').click();
  await page.waitForTimeout(1000);
  await page.locator('#apps-button-hint').click();
  await page.locator('#cabinet-hint').click();
  await page.getByText('Close').click();
  await page.waitForTimeout(1000);



await page.getByRole('link', { name: 'gestamp-zdox' }).click();
await page.waitForTimeout(100);
await page.locator('#link_openItem2_1').click();
await page.waitForTimeout(100);
await page.locator('#link_openItem2_0').click();
await page.waitForTimeout(100);
await page.getByText('GGS').click();
await page.waitForTimeout(100);
await page.getByText('Default Ginkgo').click();
await page.waitForTimeout(100);
await page.locator('#link_openItem2_2').click();
await page.waitForTimeout(100);
















  // await page.getByRole('link', { name: 'gestamp-zdox' }).click();
  // await page.waitForTimeout(1000);
  // await page.locator('div').filter({ hasText: /^geStamp$/ }).first().click();
  // await page.waitForTimeout(1000);
  // await page.locator('#link_openItem2_0').click();
  // await page.waitForTimeout(1000);
  // await page.getByText('GGS').click();
  // await page.waitForTimeout(1000);
  // await page.getByText('Default Ginkgo').click();
  // await page.waitForTimeout(1000);
  // await page.locator('#link_openItem2_2').click();
  // await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForTimeout(1000);
  let [fileChooser1] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('menuitem', { name: 'File' }).click()
  ]);
  await fileChooser1.setFiles([`Data Files/zDox/Auto_zDOX_FileSupportCSV.csv`]);
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForTimeout(1000);
  let [fileChooser2] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('menuitem', { name: 'File' }).click()
  ]);
  await fileChooser2.setFiles([`Data Files/zDox/Auto_zDOX_FileSupportJSON.json`]);
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForTimeout(1000);
  let [fileChooser3] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('menuitem', { name: 'File' }).click()
  ]);
  await fileChooser3.setFiles([`Data Files/zDox/Auto_zDOX_FileSupportTXT.txt`]);
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForTimeout(1000);
  let [fileChooser4] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('menuitem', { name: 'File' }).click()
  ]);
  await fileChooser4.setFiles([`Data Files/zDox/Auto_zDOX_FileSupportXLSX.xlsx`]);
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForTimeout(1000);
  let [fileChooser5] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('menuitem', { name: 'File' }).click()
  ]);
  await fileChooser5.setFiles([`Data Files/zDox/Auto_zDOX_InputError.xlsx`]);
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForTimeout(1000);
  let [fileChooser6] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('menuitem', { name: 'File' }).click()
  ]);
  await fileChooser6.setFiles([`Data Files/zDox/Auto_zDOX_zDuplicateJSON.json`]);
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForTimeout(1000);
  let [fileChooser7] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('menuitem', { name: 'File' }).click()
  ]);
  await fileChooser7.setFiles([`Data Files/zDox/Auto_zDOX_zDuplicateXLSX.xlsx`]);
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Upload' }).click();
  await page.waitForTimeout(1000);
  let [fileChooser8] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('menuitem', { name: 'File' }).click()
  ]);
  await fileChooser8.setFiles([`Data Files/zDox/Auto_zDOX_zDuplicateCSV.csv`]);
  await page.waitForTimeout(1000);



});
