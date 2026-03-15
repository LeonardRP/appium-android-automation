class menuScreen {

    constructor() {
        this.leftMenuSelector = "~open menu";
        this.loginButtonSelector = "//*[@text='Log In']";
        this.logoutButtonSelector = "//*[@text='Log Out']";
        this.logoutConfirmationButton = '//android.widget.Button[@resource-id="android:id/button1"]';
        this.logoutMessage = '//android.widget.TextView[@text="You are successfully logged out."]';
    }

    async acessLoginScreen() {
        await $(this.leftMenuSelector).click();
        await $(this.loginButtonSelector).click();
    }

    async logout() {
    const menu = await $(this.leftMenuSelector);
    await menu.waitForDisplayed();
    await menu.click();

    const logout = await $(this.logoutButtonSelector);
    await logout.waitForDisplayed();
    await logout.click();

    const confirm = await $(this.logoutConfirmationButton);
    await confirm.waitForDisplayed();
    await confirm.click();
    }
}

export default new menuScreen();