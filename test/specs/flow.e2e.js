import userData from '../data/userData.json' with { type: 'json' }
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import menuScreen from '../screenobjects/menu.screen.js'
import loginScreen from '../screenobjects/login.screen.js'
import catalogScreen from '../screenobjects/catalog.screen.js'

describe('Fluxo completo', () => {
    
    // logins tests
    it('login com credenciais invalidas', async () => {
        await menuScreen.acessLoginScreen();
        await loginScreen.fillLoginForm(userData.userFail.username, userData.userFail.password);
        await expect($(loginScreen.errorMessage)).toHaveText('Provided credentials do not match any user in this service.');
    });
    it('login com username vazio', async () => {
        await menuScreen.acessLoginScreen();
        await loginScreen.fillLoginForm('', userData.userSuccess.password);
        const error = await loginScreen.getErrorMessage('Username is required');
        await expect(error).toHaveText('Username is required');
    });
    it('login com senha vazia', async () => {
        await menuScreen.acessLoginScreen();
        await loginScreen.fillLoginForm(userData.userSuccess.username, '');
        const error = await loginScreen.getErrorMessage('Password is required');
        await expect(error).toHaveText('Password is required');
    });
    it('login com credenciais validas', async () => {
        await menuScreen.acessLoginScreen();
        await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password);
    });

    // catalog test
    it('aumenta qtde de um item, add ao carrinho, remove e volta pra home', async () => {
        await catalogScreen.selectItem('Sauce Labs Backpack');
        await catalogScreen.increaseItemQuantity();
        await catalogScreen.addItemToCart();
        await catalogScreen.openCart();
        await catalogScreen.removeItemFromCart();
        await catalogScreen.backToShopping();
    });

    // logout test
    it('logout', async () => {
        await menuScreen.logout();

        const message = await $(loginScreen.logoutMessage);
        await message.waitForDisplayed();
        await expect(message).toHaveText('You are successfully logged out.');
    });
});