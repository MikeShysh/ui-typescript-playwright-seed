import { expect } from 'chai';
import { pageProvider } from '../lib/pageProvider';

describe('Login spec', () => {

    let page: any;
    let context: any;
  
    beforeEach(async () => {
      context = await global.browser.newContext({ ignoreHTTPSErrors: true });
      page = await context.newPage();
    });
  
    afterEach(async () => {
      await page.close();
      await context.close();
    });
  
    it('successful login', async () => {
      await page.goto(global.config.baseUrl);
      const loginPage = pageProvider(page).loginPage();
    
      await loginPage.login({
        login: global.config.user,
        password: global.config.password
      });
      const title = await pageProvider(page).dashboardPage().getTitleName();
      expect(title).to.be.equal("Dashboard");
    });

    it('failed login', async () => {
      await page.goto(global.config.baseUrl);
      const loginPage = pageProvider(page).loginPage();
      await loginPage.login({
        login: global.config.user,
        password: "fake_password"
      });
      const error = await loginPage.getNotificationMessage();
      expect(error).to.be.equal("Login or password is incorrect. Your password is case sensitive, so be sure to use the correct lower-case and upper-case letters.");
    });
  });