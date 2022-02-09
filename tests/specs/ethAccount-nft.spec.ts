import test from "../fixtures/common";
import { expect } from "@playwright/test";
import { AccountsPage } from "../models/AccountsPage";
import { AccountPage } from "../models/AccountPage";
import { Layout } from "../models/Layout";

test.use({ userdata: "eth1nft" });

test("ethereum account with NFTs", async ({ page }) => {
  const layout = new Layout(page);
  const accountsPage = new AccountsPage(page);

  await test.step("NFT section should be present", async () => {
    await layout.goToAccounts();
    expect(accountsPage.addAccountButton).toBeTruthy();
    await accountsPage.selectAccount();
    expect(await page.screenshot()).toMatchSnapshot("ethereumNftAccount.png");
  });
});
