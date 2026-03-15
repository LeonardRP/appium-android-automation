import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import catalogScreen from '../screenobjects/catalog.screen.js'

describe('My Catalog Tests', () => {
    it('aumenta qtde de um item, add ao carrinho, remove e volta pra home', async () => {
        await catalogScreen.selectItem('Sauce Labs Backpack');
        await catalogScreen.increaseItemQuantity();
        await catalogScreen.addItemToCart();
        await catalogScreen.openCart();
        await catalogScreen.removeItemFromCart();
        await catalogScreen.backToShopping();
    });
});