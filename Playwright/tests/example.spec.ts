import {test, expect} from '@playwright/test'
import rawData from '../JSON/testData.json' 
import type { User } from '../common/types/UserData';

const testData: User[] = rawData;

testData.forEach(({Fname, PhoneNumber, Email, notes})=>{

  test(`Test for each customer saved and grouped by ${Fname}`, async ({page})=>{
    await page.goto('https://quality-engineering-labs.vercel.app/customers.html')
    await page.getByRole('button', { name: 'Add Customer' }).click()
    await page.getByTestId('cust-name').fill(Fname)
    await page.getByTestId('cust-phone').fill(PhoneNumber)
    await page.getByTestId('cust-email').fill(Email)
    await page.getByTestId('cust-notes').fill(notes)
    await page.getByRole('button', { name: 'Save Customer'}).click()
    const customerCard = page.locator('.customer-card').filter({hasText: Fname});
    await expect(customerCard).toBeVisible();
  })
})

