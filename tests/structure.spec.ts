// Importe les fonctionnalités principales de Playwright Test :
// - test : permet de créer et exécuter les tests
// - expect : permet de vérifier les résultats attendus
import { test, expect } from "@playwright/test";

// Importe l'URL de la page à tester depuis le fichier helpers.
import { URL_PAGE } from "./helpers";

// beforeEach() est exécuté avant chaque test.
// Il permet de charger la page avant chaque scénario,
// afin que chaque test démarre dans un état connu.
test.beforeEach(async ({ page }) => {
  // Navigue vers la page définie dans URL_PAGE.
  await page.goto(URL_PAGE);
});

// Test 1 : vérifier qu'il existe exactement un titre de niveau 1.
test("la page contient un seul titre de niveau 1", async ({ page }) => {
  // Recherche tous les éléments ayant le rôle "heading"
  // avec un niveau égal à 1.
  //
  // Cela correspond généralement aux éléments HTML :
  // <h1>...</h1>
  //
  // toHaveCount(1) vérifie qu'un seul élément correspond
  // au locator.
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
});

// Test 2 : vérifier la structure principale de la page.
test("la page contient un en-tête, un contenu principal et un pied de page", async ({
  page,
}) => {
  // Recherche l'en-tête de la page grâce au rôle ARIA "banner".
  //
  // Un élément <header> principal possède généralement
  // le rôle accessible "banner".
  //
  // toBeVisible() vérifie que l'en-tête est visible.
  await expect(page.getByRole("banner")).toBeVisible();

  // Recherche le contenu principal grâce au rôle "main".
  //
  // Cela correspond généralement à :
  // <main>...</main>
  //
  // Vérifie que le contenu principal est visible.
  await expect(page.getByRole("main")).toBeVisible();

  // Recherche le pied de page grâce au rôle "contentinfo".
  //
  // Cela correspond généralement à :
  // <footer>...</footer>
  //
  // Vérifie que le pied de page est visible.
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

// Test 3 : vérifier qu'il existe exactement une image sur la page.
test("la page contient une seule image", async ({ page }) => {
  // Recherche tous les éléments ayant le rôle accessible "img".
  //
  // Cela correspond généralement aux éléments :
  // <img ...>
  //
  // toHaveCount(1) vérifie qu'il existe exactement
  // une seule image correspondant à ce locator.
  await expect(page.getByRole("img")).toHaveCount(1);
});

// import { test, expect } from "@playwright/test";
// import { URL_PAGE } from "./helpers";

// test.beforeEach(async ({ page }) => {
//   await page.goto(URL_PAGE);
// });

// test("la page contient un seul titre de niveau 1", async ({ page }) => {
//   await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
// });

// test("la page contient un en-tête, un contenu principal et un pied de page", async ({
//   page,
// }) => {
//   await expect(page.getByRole("banner")).toBeVisible();
//   await expect(page.getByRole("main")).toBeVisible();
//   await expect(page.getByRole("contentinfo")).toBeVisible();
// });

// test("la page contient une seule image", async ({ page }) => {
//   await expect(page.getByRole("img")).toHaveCount(1);
// });
