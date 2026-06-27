import { Page, Locator, expect } from '@playwright/test';

export class Identity {
  private readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submit: Locator;
  readonly errorMessageUsername: Locator;
  readonly errorMessagePassword: Locator;
  readonly credentialsError: Locator;
  readonly userLogout: Locator;
  readonly logout:Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username'); 
    this.password = page.getByPlaceholder('Password'); 
    this.submit = page.locator(':text("Login")');
    this.errorMessageUsername = page.getByText('Please enter username');
    this.errorMessagePassword = page.getByText('Please enter password');
    this.credentialsError = page.getByText("doesn't exist or credentials are incorrect");
    this.userLogout = page.locator(':text("SG")');
    this.logout=page.locator(':text-is("Logout")')

  }

  // Navigates directly to the page
  async navigate() {
    await this.page.goto('http://103.159.152.169:2062/pages/login');
  }

  async enterUsername(username: string) {
    await this.username.fill(username);
  }

  async enterPassword(password: string) {
    await this.password.fill(password);
  }

  async clickSubmit() {
    await this.submit.click();
  }

  // Unified login helper method to reuse across test setups
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }

  async previousLogout() {
    await this.userLogout.click();
  }

  async LastLogout()
  {
    await this.logout.click();
  }

  async verifyPasswordIsMasked() {
    await expect(this.password).toHaveAttribute('type', 'password');
  }
}