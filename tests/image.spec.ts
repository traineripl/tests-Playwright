import { test, expect } from "@playwright/test";

import { URL_PAGE } from "./helpers";

// TODO: Ouvrir la page avant chaque test
test.beforeEach(async ({ page }) => {
  await page.goto(URL_PAGE);
});

// TODO: Vérifier que le logo est visible
test("le logo est visible", async ({ page }) => {
  await expect(
    page.getByRole("img", { name: "Logo du Café du Coin" }),
  ).toBeVisible();
});

// TODO: Vérifier que le logo utilise bien le fichier logo.svg
test("le logo pointe vers logo.svg", async ({ page }) => {
  await expect(
    page.getByRole("img", { name: "Logo du Café du Coin" }),
  ).toHaveAttribute("src", "logo.svg");
});

// TODO: Vérifier que le logo possède les dimensions 200x200
test("le logo a les bonnes dimensions", async ({ page }) => {
  const logo = page.getByRole("img", { name: "Logo du Café du Coin" });

  await expect(logo).toHaveAttribute("width", "200");
  await expect(logo).toHaveAttribute("height", "200");
});

// TODO: Vérifier que l'image du logo est réellement chargée
test("le logo est réellement chargé", async ({ page }) => {
  const logo = page.getByRole("img", { name: "Logo du Café du Coin" });

  await expect
    .poll(() => logo.evaluate((img) => img.complete && img.naturalWidth > 0))
    .toBe(true);
});
// import { test, expect } from "@playwright/test";
// import { URL_PAGE } from "./helpers";

// test.beforeEach(async ({ page }) => {
//   await page.goto(URL_PAGE);
// });

// test("le logo est visible", async ({ page }) => {
//   await expect(
//     page.getByRole("img", { name: "Logo du Café du Coin" }),
//   ).toBeVisible();
// });

// test("le logo pointe vers logo.svg", async ({ page }) => {
//   await expect(
//     page.getByRole("img", { name: "Logo du Café du Coin" }),
//   ).toHaveAttribute("src", "logo.svg");
// });

// test("le logo a les bonnes dimensions", async ({ page }) => {
//   const logo = page.getByRole("img", { name: "Logo du Café du Coin" });
//   await expect(logo).toHaveAttribute("width", "200");
//   await expect(logo).toHaveAttribute("height", "200");
// });

// test("le logo est réellement chargé", async ({ page }) => {
//   const logo = page.getByRole("img", { name: "Logo du Café du Coin" });
//   await expect
//     .poll(() => logo.evaluate((img) => img.complete && img.naturalWidth > 0))
//     .toBe(true);
// });
