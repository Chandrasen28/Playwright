import { Page, Locator } from '@playwright/test';

export class Gc {
  private readonly page: Page;
  private readonly transaction: Locator;
  private readonly GcMenu: Locator;
  private readonly GPart1: Locator;
  private readonly loadTypeDropdown: Locator;
  private readonly collectionTypeDropdown: Locator;
  private readonly EwayBillPopup: Locator;
  private readonly vehicleNoDropdown: Locator;
  private readonly ConsignorDropdown: Locator;
  private readonly ConsignorAddressDropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    this.transaction = page.locator(':text-is("TRANSACTION")');
    this.GcMenu = page.locator(':text-is("GC")');
    this.GPart1 = page.getByText('GC PART 1');

    this.loadTypeDropdown = page.locator(
      "ng-select[id='gcType'] input[role='combobox']"
    );

    this.collectionTypeDropdown = page.locator(
      "ng-select[id='colletionType'] input[role='combobox']"
    );

    this.EwayBillPopup =page.locator(':text-is("No")')

    this.vehicleNoDropdown = page.locator(
      "ng-select[id='vehicleId'] input[role='combobox']"
    );

    this.ConsignorDropdown = page.locator(
      "ng-select[id='consignorId'] input[role='combobox']"
    );

    this.ConsignorAddressDropdown = page.locator(
      "ng-select[id='consignorAddressId'] input[role='combobox']"
    );
  }

  // Navigate to GC PART 1
  async transactioMenu() {
    await this.transaction.hover();
    await this.GcMenu.hover();
    await this.GPart1.click();
  }

  // Fill GC details
  async gcPart1(
    loadType: string,
    collectionType: string,
    vehicleNo: string,
    consignorName: string,
    address: string
  ) {
    await this.loadTypeDropdown.click();
    await this.page.locator('.ng-option')
      .filter({ hasText: loadType })
      .click();

    await this.collectionTypeDropdown.click();
    await this.page.locator('.ng-option')
      .filter({ hasText: collectionType })
      .click();

    await this.EwayBillPopup.click();

    await this.vehicleNoDropdown.click();
    await this.vehicleNoDropdown.fill(vehicleNo);

    await this.page.locator('.ng-option')
      .filter({ hasText: vehicleNo })
      .click();

    await this.ConsignorDropdown.click();
    await this.ConsignorDropdown.pressSequentially(consignorName);

    await this.page.locator('.ng-option')
      .filter({ hasText: consignorName })
      .click();

    // Select address coming from API
    await this.ConsignorAddressDropdown.click();

    await this.page.locator('.ng-option')
      .filter({ hasText: address })
      .click();
  }

  // Get selected address from UI
  async getSelectedAddress() {
    return await this.page
      .locator('ng-select[id="consignorAddressId"] .ng-value-label')
      .textContent();
  }
}