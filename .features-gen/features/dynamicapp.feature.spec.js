/** Generated from: features\dynamicapp.feature */
import { test } from "../../steps/fixtures/fixture.ts";

test.describe("Package creation scenarios", () => {

  test("login and Navigate to the transaction page and create new work package", { tag: ["@smoke"] }, async ({ Then, loginuser, Navigation, addnewpackage }) => {
    await Then("login", null, { loginuser });
    await Then("navigate to the \"work assignment\" page link", null, { Navigation });
    await Then("click Add work package button", null, { addnewpackage });
    await Then("validate the Add work package form", null, { addnewpackage });
  });

  test("Validate the workflow page", { tag: ["@smoke"] }, async ({ Then, loginuser, Navigation, workflownavi }) => {
    await Then("login", null, { loginuser });
    await Then("navigate to the \"work assignment\" page link", null, { Navigation });
    await Then("double click the work package and open the workflow", null, { workflownavi });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\dynamicapp.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "login and Navigate to the transaction page and create new work package": {"pickleLocation":"4:5","tags":["@smoke"]},
  "Validate the workflow page": {"pickleLocation":"11:5","tags":["@smoke"]},
};