import { expect, test } from "@playwright/test";

test("landing page shows the product promise", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Trade skills. Gain experience." })).toBeVisible();
  await expect(page.getByRole("main").getByRole("link", { name: "Join TradeU" })).toBeVisible();
});