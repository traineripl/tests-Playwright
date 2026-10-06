// Importe les fonctions principales de Playwright Test :
// - test : permet de définir et d'exécuter les tests
// - expect : permet de vérifier les résultats attendus
import { test, expect } from "@playwright/test";

// Importe la constante URL_PAGE depuis le fichier helpers.
// Cette constante contient l'URL de la page à tester.
import { URL_PAGE } from "./helpers";

// beforeEach() est exécuté avant chaque test.
// Il permet de préparer un état identique pour chaque scénario.
test.beforeEach(async ({ page }) => {
  // Ouvre la page à tester.
  // URL_PAGE peut être une URL complète ou une URL configurée
  // par rapport au baseURL défini dans playwright.config.ts.
  await page.goto(URL_PAGE);
});

// Test 1 : vérifier que les deux liens de navigation sont affichés.
test("les deux liens de navigation sont affichés", async ({ page }) => {
  // Recherche d'abord l'élément ayant le rôle "navigation".
  // Puis recherche à l'intérieur de cette navigation tous les liens.
  //
  // getByRole("navigation") :
  //     sélectionne la zone de navigation HTML.
  //
  // getByRole("link") :
  //     sélectionne les éléments <a> présents dans cette navigation.
  //
  // toHaveText([...]) :
  //     vérifie que les textes des liens correspondent exactement
  //     à la liste attendue et dans le même ordre.
  await expect(page.getByRole("navigation").getByRole("link")).toHaveText([
    "Menu",
    "Contact",
  ]);
});

// Test 2 : vérifier que chaque lien possède la bonne destination.
test("les liens pointent vers les bonnes sections", async ({ page }) => {
  // Recherche le lien dont le nom accessible est "Menu".
  //
  // getByRole("link", { name: "Menu" })
  // permet de cibler le lien de manière sémantique,
  // sans utiliser de sélecteur CSS fragile.
  //
  // toHaveAttribute("href", "#menu")
  // vérifie que l'attribut href contient bien "#menu".
  await expect(page.getByRole("link", { name: "Menu" })).toHaveAttribute(
    "href",
    "#menu",
  );

  // Même principe pour le lien "Contact".
  // On vérifie qu'il pointe vers la section ayant l'identifiant "#contact".
  await expect(page.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "#contact",
  );
});

// Test 3 : vérifier le comportement du lien "Menu".
test("un clic sur « Menu » mène à la section du menu", async ({ page }) => {
  // Recherche le lien "Menu" puis simule un clic utilisateur.
  await page.getByRole("link", { name: "Menu" }).click();

  // Vérifie que l'URL de la page se termine par "#menu".
  //
  // /#menu$/ est une expression régulière :
  // - #menu : recherche "#menu"
  // - $ : indique que "#menu" doit être à la fin de l'URL
  //
  // Exemple attendu :
  // http://localhost:3000/#menu
  await expect(page).toHaveURL(/#menu$/);
});

// import { test, expect } from "@playwright/test";
// import { URL_PAGE } from "./helpers";

// test.beforeEach(async ({ page }) => {
//   await page.goto(URL_PAGE);
// });

// test("les deux liens de navigation sont affichés", async ({ page }) => {
//   await expect(page.getByRole("navigation").getByRole("link")).toHaveText([
//     "Menu",
//     "Contact",
//   ]);
// });

// test("les liens pointent vers les bonnes sections", async ({ page }) => {
//   await expect(page.getByRole("link", { name: "Menu" })).toHaveAttribute(
//     "href",
//     "#menu",
//   );
//   await expect(page.getByRole("link", { name: "Contact" })).toHaveAttribute(
//     "href",
//     "#contact",
//   );
// });

// test("un clic sur « Menu » mène à la section du menu", async ({ page }) => {
//   await page.getByRole("link", { name: "Menu" }).click();
//   await expect(page).toHaveURL(/#menu$/);
// });
