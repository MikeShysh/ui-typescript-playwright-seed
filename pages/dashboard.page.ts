import { Page } from 'playwright-core';

export class DashboardPage {
    page: Page;

    constructor(page) {
        this.page = page;
    }

    async getTitleName() {
        await this.page.waitForSelector(".title");
        return await this.page.$eval(".title", (el: HTMLElement) => el.textContent);
    }
}