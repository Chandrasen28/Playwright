import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { MenuPage } from '../pages/MenuPage';
import { SaleBillPage } from '../pages/SalebillPage';

test('Complete E2E Business Flow: Create & Update Sale Bill', async ({ page }) => {
  test.setTimeout(180000);
  await page.setViewportSize({ width: 1366, height: 768 });

  // 1. Initialize Login Page
  const loginPage = new LoginPage(page);

  // --- STEP 1: AUTHENTICATION ---
  await page.goto('http://103.159.152.169:2062/pages/login');
  await loginPage.login('ACPL2317', '1234');
  
  // Handles the multi-tab logic and passes back the new active workspace tab
  const uatPage = await loginPage.clickUatDashboard();
  await expect(uatPage).toHaveURL('https://uat.etranscargo.in/dashboard/financialYear'); 


  // 2. Initialize remaining pages using the contextual 'uatPage' instance
  const dashboardPage = new DashboardPage(uatPage);
  const menuPage = new MenuPage(uatPage);
  const saleBillPage = new SaleBillPage(uatPage);

  // --- STEP 2: DASHBOARD SETTINGS & NAVIGATION ---
  await dashboardPage.selectBranches('AMD-AHMEDABAD CITY');
  await dashboardPage.submitBranchyear()
  await menuPage.navigateToSaleBill();

  // --- STEP 3: TRANSACTION CREATION ---
  await saleBillPage.fillSaleBillForm(
    'KARNATAKA',
    'June',
    '33AABCC1999C1ZW',
    'hyderabd',
    'OK'
  );
  await saleBillPage.selectGcDropdown();
  await saleBillPage.checkRandomGcNumber();
  await saleBillPage.clickSaveAndConfirm();
  

  // --- STEP 4: EDIT & UPDATE TRANSACTION ---
  await saleBillPage.dismissPrintAndGoToListView();
  await saleBillPage.editFirstCustomerRecord();
  await saleBillPage.selectGcDropdown();
  await saleBillPage.checkRandomGcNumber();
  await saleBillPage.clickUpdate();
});