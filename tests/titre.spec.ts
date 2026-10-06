// Importe les fonctionnalités principales de Playwright Test :
// - test : permet de définir les scénarios de test
// - expect : permet de réaliser les assertions
import { test, expect } from "@playwright/test";

// Importe l'URL de la page à tester depuis le fichier helpers.
import { URL_PAGE } from "./helpers";

// beforeEach() est exécuté avant chaque test.
// Il permet de charger la page avant chaque scénario.
test.beforeEach(async ({ page }) => {
  // Navigue vers la page définie dans URL_PAGE.
  await page.goto(URL_PAGE);
});

// Test 1 : vérifier le titre affiché dans l'onglet du navigateur.
test("le titre de l'onglet est « Café du Coin »", async ({ page }) => {
  // Vérifie le titre HTML de la page.
  //
  // Ce titre correspond à la balise :
  //
  // <title>Café du Coin</title>
  //
  // toHaveTitle() vérifie directement le titre de la page.
  await expect(page).toHaveTitle("Café du Coin");
});

// Test 2 : vérifier le titre principal visible sur la page.
test("le titre de la page est « Café du Coin »", async ({ page }) => {
  // Recherche un élément ayant le rôle "heading"
  // et correspondant au niveau 1.
  //
  // Cela cible généralement la balise :
  //
  // <h1>Café du Coin</h1>
  //
  // toHaveText() vérifie que le texte du titre correspond
  // exactement au texte attendu.
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Café du Coin",
  );
});

// Test 3 : vérifier que la balise meta description
// contient la bonne valeur.
test("la description de la page est renseignée", async ({ page }) => {
  // Recherche la balise <meta> ayant l'attribut :
  //
  // name="description"
  //
  // Le sélecteur CSS utilisé est :
  //
  // meta[name="description"]
  //
  // Puis vérifie que son attribut "content"
  // contient exactement la valeur attendue.
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Café artisanal au centre-ville",
  );
});

// Test 4 : vérifier que la page est déclarée en français.
test("la langue de la page est le français", async ({ page }) => {
  // Recherche l'élément racine <html>.
  //
  // locator("html") permet de cibler directement
  // la balise HTML racine du document.
  //
  // Vérifie ensuite que son attribut "lang" vaut "fr".
  //
  // Exemple HTML attendu :
  //
  // <html lang="fr">
  //
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
});

// import { test, expect } from "@playwright/test";
// import { URL_PAGE } from "./helpers";

// test.beforeEach(async ({ page }) => {
//   await page.goto(URL_PAGE);
// });

// test("le titre de l'onglet est « Café du Coin »", async ({ page }) => {
//   await expect(page).toHaveTitle("Café du Coin");
// });

// test("le titre de la page est « Café du Coin »", async ({ page }) => {
//   await expect(page.getByRole("heading", { level: 1 })).toHaveText(
//     "Café du Coin",
//   );
// });

// test("la description de la page est renseignée", async ({ page }) => {
//   await expect(page.locator('meta[name="description"]')).toHaveAttribute(
//     "content",
//     "Café artisanal au centre-ville",
//   );
// });

// test("la langue de la page est le français", async ({ page }) => {
//   await expect(page.locator("html")).toHaveAttribute("lang", "fr");
// });
