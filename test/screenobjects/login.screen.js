class loginScreen {
    constructor() {
        this.usernameInput = "~Username input field";
        this.passwordInput = "~Password input field";
        this.loginButton = "~Login button";
        this.errorMessage = '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView';
        this.logoutMessage = '//android.widget.TextView[@text="You are successfully logged out."]';
    }

    async fillLoginForm(username, password) {
        await $(this.usernameInput).setValue(username);
        await $(this.passwordInput).setValue(password);
        await $(this.loginButton).click();
    }

    async getErrorMessage(expectedText) {
        const error = await $(`android=new UiSelector().text("${expectedText}")`);
        await error.waitForDisplayed();
        return error;
    }
}

export default new loginScreen();