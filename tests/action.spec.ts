
import {test, expect } from '@playwright/test';

test('ACTION ',async ({page})=>{

    await page.goto('https://practice.expandtesting.com/inputs')

    await page.locator('#input-number').fill('11')
    await page.getByRole('textbox', { name: /Input: Text/i }).fill('cherry')
    page.getByRole('textbox', { name: /Input: Date/i }).click()
   
    })

    test.only('Checkbox',async({page})=>{
        await page.goto('https://practice.expandtesting.com/checkboxes')
        //// Check the checkbox
        //await page.getByRole('checkbox', { name: /Checkbox 1/i }).check();

       // Assert the checked state
         const checkbox=await page.getByRole('checkbox', { name: /Checkbox 1/i })
         await checkbox.check();
         
        //// Verify that the checkbox IS checked
       await expect(checkbox).toBeChecked()

       // Verify that the checkbox IS NOT checked
  await expect(checkbox).not.toBeChecked();
    })

