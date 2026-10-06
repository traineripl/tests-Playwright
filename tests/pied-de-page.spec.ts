// Importe les fonctionnalités principales de Playwright Test :
// - test : permet de définir les scénarios de test
// - expect : permet de vérifier les résultats attendus
import { test, expect } from "@playwright/test";

// Importe l'URL de la page à tester depuis le fichier helpers.
import { URL_PAGE } from "./helpers";

// beforeEach() est exécuté avant chaque test.
// Il permet de repartir à chaque fois de la même page et du même état.
test.beforeEach(async ({ page }) => {
  // Ouvre la page correspondant à l'URL définie dans URL_PAGE.
  await page.goto(URL_PAGE);
});

// Test 1 : vérifier que le pied de page est bien affiché.
test("le pied de page est affiché", async ({ page }) => {
  // Recherche le pied de page grâce à son rôle ARIA "contentinfo".
  //
  // Un élément HTML <footer> possède généralement
  // automatiquement le rôle accessible "contentinfo".
  //
  // Exemple HTML :
  // <footer>
  //     ...
  // </footer>
  //
  // toBeVisible() vérifie que le pied de page est réellement visible
  // à l'écran pour l'utilisateur.
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

// Test 2 : vérifier que le pied de page contient l'adresse e-mail.
test("le pied de page contient l'adresse e-mail", async ({ page }) => {
  // Recherche le pied de page avec le rôle "contentinfo".
  //
  // toContainText() vérifie que le texte recherché
  // est présent quelque part dans le contenu du pied de page.
  //
  // Ici, on vérifie la présence de :
  // "bonjour@cafe-du-coin.example"
  //
  // Contrairement à toHaveText(), toContainText()
  // ne demande pas que tout le contenu corresponde exactement.
  await expect(page.getByRole("contentinfo")).toContainText(
    "bonjour@cafe-du-coin.example",
  );
});
// import { test, expect } from "@playwright/test";
// import { URL_PAGE } from "./helpers";

// test.beforeEach(async ({ page }) => {
//   await page.goto(URL_PAGE);
// });

// test("le pied de page est affiché", async ({ page }) => {
//   await expect(page.getByRole("contentinfo")).toBeVisible();
// });

// test("le pied de page contient l'adresse e-mail", async ({ page }) => {
//   await expect(page.getByRole("contentinfo")).toContainText(
//     "bonjour@cafe-du-coin.example",
//   );
// });
