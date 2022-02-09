import { expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class AccountsPage {
  readonly page: Page;
  readonly addAccountButton: Locator;
  readonly accountsPageTitle: Locator;
  readonly accountsList: Locator;
  readonly accountsRow: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.addAccountButton = page.locator("data-test-id=accounts-add-account-button");
    this.accountsPageTitle = page.locator("data-test-id=accounts-title");
    this.accountsList = page.locator("data-test-id=accounts-list");
    this.accountsRow = page.locator("#accounts-account-row-item");
  }

  async openAddAccountModal() {
    await this.addAccountButton.click();
  }

  async selectAccount() {
    const account = await this.accountsRow.first();
    await account.click();
  }
}
