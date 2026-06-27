import { Page, Locator } from '@playwright/test';

export class MenuPage {
  private readonly page: Page;
  private readonly financeMenu: Locator;
  private readonly saleBillMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.financeMenu = page.locator(':text-is("FINANCE")');
    this.saleBillMenu = page.getByText('SALE BILL');
  }

  async navigateToSaleBill() {
    await this.financeMenu.click();
    await this.saleBillMenu.click();
  }
}