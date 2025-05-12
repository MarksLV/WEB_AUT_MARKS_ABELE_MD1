import { SelectablePage } from "../../pageObjects/selectablePage";

describe("Selectable Grid Test", () => {
  beforeEach(() => {
    SelectablePage.visit();
    SelectablePage.gridTab.click();
  });

  it("Selectability and validatation of the grid items", () => {
    // Click to test out the grid
    ["Two", "Four", "Six", "Eight"].forEach((item) => {
      SelectablePage.getItemByName(item).click();
    });

    // Validate highlight
    SelectablePage.getHighlightedItems().should(($items) => {
      // Extract text from highlighted elements
      const texts = $items.map((i, el) => Cypress.$(el).text()).get();
      // Checks if selected items are selected
      expect(texts).to.include.members(["Two", "Four", "Six", "Eight"]);
      // Checks if only correct options are selected and not any other options
      expect(texts).to.not.include.members(["One", "Three", "Five", "Seven", "Nine"]);
    });
  });
});
