import { test, expect } from '@playwright/test';
import { CommonFlow } from '../utils/LoginCommon';
import { Gc } from '../pages/GcPage';

test('API + UI Validation for Consignor', async ({ page, request }) => {

  test.setTimeout(180000);

  // =======================
  // API Validation
  // =======================

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODIiLCJ1c2VySWQiOiI2MDgyIiwiZmlyc3ROYW1lIjoiQ0hBTkRSQVNFTiIsImxhc3ROYW1lIjoiS0FEQU0iLCJuYW1lIjoiQ0hBTkRSQVNFTiBCSEFSQVQgS0FEQU0iLCJsb2dpbklkIjoiQUNQTDM0MTkiLCJlbWFpbCI6IiIsInVzZXJUeXBlIjoiRW1wbG95ZWUiLCJicmFuY2hJZCI6IjQ3OSIsImFyZWFJZCI6IjkiLCJkaXN0cmljdElkIjoiNzQiLCJyZXBvcnRpbmdBdXRob3JpdHlJZCI6IjE1MTYiLCJkYXRlT2ZCaXJ0aCI6IjI4LzA1LzE5OTkiLCJkZXNpZ25hdGlvbklkIjoiNSIsImRlc2lnbmF0aW9uIjoiU2VuaW9yIEV4ZWN1dGl2ZSIsInJvbGUiOiIyIiwiaXNFbWFpbFZlcmlmaWVkIjoiVHJ1ZSIsImVtcGxveWVlQ29kZSI6IkFDUEwzNDE5IiwiZGVwYXJ0bWVudElkIjoiNjEiLCJkZXBhcnRtZW50IjoiSVQiLCJkYXRlT2ZKb2luaW5nIjoiMjAvMDEvMjAyMyIsImJyYW5jaE5hbWUiOiJIRUFEIE9GRklDRSBJVCAiLCJhY2Nlc3NDbGFzc0lkcyI6IjQzLDEsMzIsMjAsMiw0Miw4Miw2Myw4NCIsInJvbGVJZHMiOiIzNTYsMzEwLDMyNywzNDEsMzQyIiwidGVhbUlkIjoiIiwiZ3JvdXBlZENpdHkiOiIiLCJnZW5kZXIiOiJNQUxFIiwiaXNQYXNzd29yZENoYW5nZWQiOiJUcnVlIiwicGFzc3dvcmRDaGFuZ2VkRGF0ZSI6IjA1LzAzLzIwMjYiLCJkZXNpZ25hdGlvblJvbGVJZCI6IjcxMCIsImRlc2lnbmF0aW9uUm9sZSI6IiIsImlzSE9EIjoiRmFsc2UiLCJjYW5kaWRhdGVJZCI6IjEwMDg0IiwiaWRlbnRpZmllciI6IjFhOTA5NWM2LTk5MmItNGE5NC04OTY1LWU2MWY4YWUxNDc1NyIsImxvY2F0aW9uIjoiaGVhZCBvZmZpY2UgaXQiLCJpc0hSQWNjZXNzIjoiRmFsc2UiLCJpc0FkbWluQWNjZXNzIjoiVHJ1ZSIsImlzRFZSQWNjZXNzIjoiVHJ1ZSIsImlzTENMQWNjZXNzIjoiRmFsc2UiLCJpc1RydWNrQWNjZXNzIjoiRmFsc2UiLCJpc0NvbnRhaW5lckFjY2VzcyI6IkZhbHNlIiwidHJhdmVsbGluZ01vZGUiOiIiLCJidWRnZXQiOiIwIiwicm9sZUtleSI6IiIsImN1cnJlbnREYXRlIjoiMjEvMDYvMjAyNiIsImV4cGlyeURhdGVUaW1lIjoiIiwiYWNjZXNzVHlwZSI6IjAiLCJzdGF0dXMiOiIwIiwibmJmIjoxNzgyMDE3Njk0LCJleHAiOjE3ODIwMjQ4OTQsImlhdCI6MTc4MjAxNzY5NCwiaXNzIjoiaHR0cDovLzEwMy4xNTkuMTUyLjE2OToyMDYyLyIsImF1ZCI6IjQ4QUUzQzI3LTQ4RUUtNENEQS1BRkFBLUM5RThENEQwMjg4MiJ9.fIMVtlLTW7JvEPgh04tgsN6N1mQCT9AH_CR4vv4ZS3w';

  const response = await request.get(
    'https://uat.etranscargo.in/operation/api/gc/getGcPartyAddressDetailById?id=4605&branchId=420',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  // Validate status code
  expect(response.status()).toBe(200);

  // Parse response
  const data = await response.json();

  // Validate party name
  expect(data.partyName).toBe(
    'CONTINENTAL CARRIERS PVT. LTD.'
  );

  // Find address whose customerBelongsBranch is AMD-AHMEDABAD CITY
  const addressData = data.gcDetails.find(
    (item: any) =>
      item.customerBelongsBranch === 'AMD-AHMEDABAD CITY'
  );

  // Validate branch
  expect(addressData.customerBelongsBranch)
    .toBe('AMD-AHMEDABAD CITY');

  expect(addressData.customerBelongsBranchId)
    .toBe(420);

  // =======================
  // UI Validation
  // =======================

  const { uatPage } =
    await CommonFlow.loginAndNavigate(page);

  const gcPage = new Gc(uatPage);

  await gcPage.transactioMenu();

  // Pass address from API
  await gcPage.gcPart1(
    'Special Load',
    'Door Collection',
    'HR55AT8263',
    'CONTI',
    addressData.address
  );
clear
  // Get address selected on UI
  const uiAddress =
    await gcPage.getSelectedAddress();

  // Validate UI address with API address
  expect(uiAddress?.trim())
    .toBe(addressData.address);
});