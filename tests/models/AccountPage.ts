import { Page, Locator } from "@playwright/test";

export class AccountPage {
  readonly page: Page;
  readonly buttonsGroup: Locator;
  readonly settingsButton: Locator;
  readonly seeGalleryButton: Locator;
  readonly receiveNftButton: Locator;
  readonly nftCollectionsList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonsGroup = page.locator("data-test-id=account-buttons-group");
    this.settingsButton = page.locator("data-test-id=account-settings-button");
    this.seeGalleryButton = page.locator("data-test-id=seeGalleryButton");
    this.receiveNftButton = page.locator("data-test-id=receiveNftButton");
    this.nftCollectionsList = page.locator("data-test-id=nft-collections-list");
  }

  async goToGallery() {
    await this.seeGalleryButton.click();
  }

  async openCollection(collectionName: string) {
    await this.nftCollectionsList.locator(`text="${collectionName}"`).click();
  }
}
