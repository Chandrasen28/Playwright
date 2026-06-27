import { Page, Locator } from '@playwright/test';

export class SaleBillPage {
  private readonly page: Page;
  
  // Sale Bill Form Input Locators
  private readonly stateDropdown: Locator;
  private readonly monthDropdown: Locator;
  private readonly partyDropdown: Locator;
  private readonly addressDropdown: Locator;
  private readonly remarkInput: Locator;
  private readonly gcDropdown: Locator;
  private readonly gcCheckboxes: Locator;
  
  // Operational Buttons / Popups
  private readonly saveButton: Locator;
  private readonly saveConfirmPopup: Locator;
  private readonly printCancelButton: Locator;
  private readonly viewListButton: Locator;
  private readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.stateDropdown = page.locator("ng-select[formcontrolname='stateId'] input[role='combobox']");
    this.monthDropdown = page.locator("//ng-select[@placeholder='Select Month']//input[@role='combobox']");
    this.partyDropdown = page.locator("//ng-select[@id='billingPartyId']//input[contains(@role,'combobox')]");
    this.addressDropdown = page.locator("//ng-select[@id='billingAddressId']//input[contains(@role,'combobox')]");
    this.remarkInput = page.getByRole('textbox', { name: 'remark' });
    this.gcDropdown = page.locator("//div[@class='ng-select-container']//input[@role='combobox']");
    this.gcCheckboxes = page.getByRole('checkbox');
    
    this.saveButton = page.getByRole('button', { name: /Save/i });
    this.saveConfirmPopup = page.getByRole('button', { name: 'OK' });
    this.printCancelButton = page.locator('button.swal2-cancel.swal2-styled');
    this.viewListButton = page.getByRole('button', { name: /View List/i });
    this.updateButton = page.locator(':text-is("Update")');
  }

  async fillSaleBillForm(state: string, month: string, party: string, address: string, remarks: string) {
    await this.stateDropdown.click();
    await this.page.locator('span').filter({ hasText: state }).last().click();

    await this.monthDropdown.click();
    await this.page.locator('span').filter({ hasText: month }).last().click();

    await this.partyDropdown.fill(party);
    await this.page.locator('div').filter({ hasText: party }).last().click();

    await this.addressDropdown.click();
    await this.page.getByText(address, { exact: true }).click();
  
    await this.remarkInput.fill(remarks);
  }

  async selectGcDropdown() {
    await this.gcDropdown.click();
  }

  async checkRandomGcNumber() {
    await this.gcCheckboxes.first().waitFor({ state: 'visible', timeout: 120000 });
    const count = await this.gcCheckboxes.count();
    
    if (count === 0) throw new Error('No GC records found');
    
    const random = Math.floor(Math.random() * Math.min(count, 8));
    await this.gcCheckboxes.nth(random).check();
    console.log(`Selected GC Index: ${random}`);
  }

  async clickSaveAndConfirm() {
  await this.saveButton.waitFor({ state: 'visible', timeout: 120000 });
await this.saveButton.scrollIntoViewIfNeeded();    
await this.saveButton.click()
    await this.saveConfirmPopup.waitFor({ state: 'visible', timeout: 120000 });
    await this.saveConfirmPopup.click();
  }

  async dismissPrintAndGoToListView() {
    await this.printCancelButton.waitFor({ state: 'visible', timeout: 120000 });
    await this.printCancelButton.click();
    await this.viewListButton.click();
  }

  async editFirstCustomerRecord() {
    const firstRow = this.page.locator('datatable-scroller.datatable-scroll.ng-star-inserted').locator('datatable-row-wrapper').nth(0);
    await firstRow.locator('datatable-body-cell').first().locator('i.ft-edit').click();
  }

  async clickUpdate() {
    await this.updateButton.click();
  }
}