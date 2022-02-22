import { Page, Locator } from "@playwright/test";

export class NftDetailsDrawer {
  readonly page: Page;
  readonly nftDrawerContent: Locator;
  readonly nftImage: Locator;
  readonly nftImageFull: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nftDrawerContent = page.locator("data-test-id=nft-details-drawer");
    this.nftImage = page.locator("data-test-id=nft-drawer-image");
    this.nftImageFull = page.locator("data-test-id=nft-image-full");
  }
}
