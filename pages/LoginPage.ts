import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly uatDashboardLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username'); 
    this.passwordInput = page.getByPlaceholder('Password'); 
    this.loginButton = page.locator(':text("Login")');
    this.uatDashboardLink = page.locator(':text("ETransUAT")');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Clicks the UAT dashboard link, waits for the multi-tab redirection,
   * and returns the context of the newly opened tab.
   */
  async clickUatDashboard(): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.uatDashboardLink.click(),
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }
}