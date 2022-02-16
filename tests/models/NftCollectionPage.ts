import { Page, Locator } from "@playwright/test";

export class NftCollectionPage {
  readonly page: Page;
  readonly collectionItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.collectionItem = page.locator("data-test-id=collection-nft-item");
  }

  async openNftDetails(nftName: string) {
    await this.collectionItem.locator(`text="${nftName}"`).click();
  }
}
