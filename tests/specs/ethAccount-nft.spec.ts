import test from "../fixtures/common";
import { expect } from "@playwright/test";
import { AccountsPage } from "../models/AccountsPage";
import { AccountPage } from "../models/AccountPage";
import { Layout } from "../models/Layout";
import { NftGalleryPage } from "../models/NftGalleryPage";
import { NftCollectionPage } from "../models/NftCollectionPage";

test.use({ userdata: "eth1nft", windowSize: {height: 1200, width: 1024}});

test("ethereum account with NFTs", async ({ page }) => {
  const layout = new Layout(page);
  const accountsPage = new AccountsPage(page);
  const accountPage = new AccountPage(page);
  const nftGalleryPage = new NftGalleryPage(page);
  const nftCollectionsPage = new NftCollectionPage(page);

  await test.step("go to account page", async () => {
    await layout.goToAccounts();
    expect(await accountsPage.accountsPageTitle.textContent()).toBe("Accounts");
  });

  await test.step("Ethereum account with NFTs", async () => {
    await accountsPage.openAccount("Ethereum1NFT");
    expect(await page.screenshot()).toMatchSnapshot("eth-account-nft.png");
  });

  await test.step("go to Gallery", async () => {
    await accountPage.goToGallery();
    expect(await page.screenshot()).toMatchSnapshot("gallery-page-card.png");
  });

  await test.step("show gallery list view", async () => {
    await nftGalleryPage.showListView();
    expect(await page.screenshot()).toMatchSnapshot("gallery-page-list.png");
  });

  await test.step("display a nft collection", async () => {
    await layout.goToAccounts();
    await accountsPage.openAccount("Ethereum1NFT");
    await accountPage.openCollection("Rarible");
    expect(await page.screenshot()).toMatchSnapshot("collection-page.png");
  });

  await test.step("display nft details", async () => {
    await nftCollectionsPage.openNftDetails("San francisco - Planet");
    expect(await page.screenshot()).toMatchSnapshot("nft-details.png");
  });
});
