import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { MenuPage } from '../pages/MenuPage';

export class CommonFlow {
  static async loginAndNavigate(page: Page) {

    const loginPage = new LoginPage(page);

    await page.goto('http://103.159.152.169:2062/pages/login');
    await loginPage.login('ACPL2317', '1234');

    const uatPage = await loginPage.clickUatDashboard();

    const dashboardPage = new DashboardPage(uatPage);
    const menuPage = new MenuPage(uatPage);

    await dashboardPage.selectBranches('AMD-AHMEDABAD CITY');
    await dashboardPage.submitBranchyear()

    return {
      uatPage,
      menuPage,
      dashboardPage

    };
  }
}