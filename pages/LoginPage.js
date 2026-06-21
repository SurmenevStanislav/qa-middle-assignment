export class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(
            'https://the-internet.herokuapp.com/login'
        );
    }

    async login(username, password) {
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('button[type="submit"]').click();
    }

    getMessage() {
        return this.page.locator('#flash');
    }

}