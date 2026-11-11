class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.inventoryList = page.getByTestId('inventory-list');
  }

  // True if the inventory page (title "Products" + product list) is visible.
  async isLoaded() {
    try {
      await this.title.waitFor({ state: 'visible', timeout: 5000 });
      await this.inventoryList.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = { InventoryPage };
