class catalogScreen {
    constructor() {
        this.cartButton = '~cart badge';
        this.addToCartButton = '~Add To Cart button';
        this.increaseQuantity = '//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView';
        this.removeItemButton = '//android.widget.TextView[@text="Remove Item"]'
        this.backToShoppingButton = '~Go Shopping button'
    }

    async selectItem(itemName) {
        const item = await $(`android=new UiSelector().text("${itemName}")`);
        await item.click();
    }

    async increaseItemQuantity() {
        await $(this.increaseQuantity).click();
    }

    async addItemToCart() {
        await $(this.addToCartButton).click();
    }

    async openCart() {
        await $(this.cartButton).click();
    }

    async removeItemFromCart() {
        await $(this.removeItemButton).click();
    }

    async backToShopping() {
        await $(this.backToShoppingButton).click();
    }
}

export default new catalogScreen();