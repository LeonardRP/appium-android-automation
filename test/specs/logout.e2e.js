import userData from '../data/userData.json' with { type: 'json' }
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import menuScreen from '../screenobjects/menu.screen.js'
import loginScreen from '../screenobjects/login.screen.js'

describe('My Logout Test', () => {
    it('login com credenciais validas', async () => {
        await menuScreen.acessLoginScreen();
        await loginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password);
    });

    it('logout', async () => {
        await menuScreen.logout();

        const message = await $(loginScreen.logoutMessage);
        await message.waitForDisplayed();
        await expect(message).toHaveText('You are successfully logged out.');
    });
});