import test from "../fixtures/common";
import { expect } from "@playwright/test";
import { AccountsPage } from "../models/AccountsPage";
import { AccountPage } from "../models/AccountPage";
import { Layout } from "../models/Layout";
import { toNumber } from "lodash";
import { NftGalleryPage } from "../models/NftGalleryPage";

test.use({ userdata: "eth1nft", windowSize: {height: 1200, width: 1024}});

test("ethereum account with NFTs", async ({ page }) => {
  const layout = new Layout(page);
  const accountsPage = new AccountsPage(page);
  const accountPage = new AccountPage(page);
  const nftGalleryPage = new NftGalleryPage(page);

  await test.step("go to account page", async () => {
    await layout.goToAccounts();
    expect(await accountsPage.accountsPageTitle.textContent()).toBe("Accounts");
  });

  await test.step("Ethereum account with NFTs", async () => {
    await accountsPage.openAccount("Ethereum1NFT");
    expect(await page.screenshot()).toMatchSnapshot("eth-account-nft.png");
  });

  await test.step("go To Gallery", async () => {
    await accountPage.goToGallery();
    expect(await page.screenshot()).toMatchSnapshot("gallery-list.png");
  });

  await test.step("show gallery cards view", async () => {
    await nftGalleryPage.showGridView();
    expect(await page.screenshot()).toMatchSnapshot("gallery-cards.png");
  });

  await test.step("display a nft collection", async () => {
    await layout.goToAccounts();
    await accountsPage.openAccount("Ethereum1NFT");
    await accountPage.openCollection("Rarible");
    expect(await page.screenshot()).toMatchSnapshot("collection-page.png")
  });
});
