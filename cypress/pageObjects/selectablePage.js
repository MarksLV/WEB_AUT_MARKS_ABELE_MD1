import { BasePage } from "./basePage";

export class SelectablePage extends BasePage {
  static get url() {
    return "https://demoqa.com/selectable";
  }

  static get gridTab() {
    return cy.get(".nav-item").contains("Grid");
  }
  static get gridItems() {
    return cy.get("#gridContainer .list-group-item");
  }
  static getHighlightedItems() {
    return cy.get("#gridContainer .list-group-item.active");
  }
  static getItemByName(name) {
    return cy.contains("#gridContainer .list-group-item", name);
  }
  
}