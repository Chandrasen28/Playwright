import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private readonly page: Page;
  private readonly selectBranch: Locator;

  private readonly yearSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.selectBranch =page.getByRole('combobox').first();
    //this.branchNames=page.locator("ng-select[id='branch'] input[role='combobox']")
    this.yearSubmitButton = page.getByText('Submit')
  }

   async selectBranches(BranchName:string)
  {
    
    await this.selectBranch.click();
    //await this.BranchName.click()
   //clear await this.selectBranch.waitFor({ state: 'visible' });
    await this.selectBranch.fill(BranchName)
    await this.selectBranch.click()
    await this.selectBranch.press('Enter');
 
  }
  async submitBranchyear(){
    await this.yearSubmitButton.click()
  }
  }
