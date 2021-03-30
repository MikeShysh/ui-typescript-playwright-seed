import { Page } from 'playwright-core';


export class LoginPage {
    page: Page;

    constructor(page) {
        this.page = page;
    }

    async login(options: { login: string; password: string; }) {
        await this.page.type('[placeholder="Login"]', options.login);
        await this.page.click('"Next"');
        await this.page.type('[placeholder="Password"]', options.password);
        await this.page.click('"Sign in"');
    }

    async getNotificationMessage() {
        await this.page.waitForSelector(".notification.error");
        return await this.page.$eval(".notification.error", (el: HTMLElement) => el.innerText); 
    }

}