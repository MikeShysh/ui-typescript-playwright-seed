import { LoginPage } from "../pages/login.page"
import { DashboardPage } from '../pages/dashboard.page'
import { Page } from 'playwright-core'

export class PageProvider {
  page: Page

  constructor(page) {
    this.page = page
  }
  loginPage(): LoginPage { return new LoginPage(this.page) }
  dashboardPage(): DashboardPage { return new DashboardPage(this.page) }
}
/*
const pageProvider = (page) => {
    return {
      loginPage(): LoginPage  { return new LoginPage(page) },
      dashboardPage(): DashboardPage { return new DashboardPage(page) }
    }
}
*/
export const pageProvider = (page) => { new PageProvider(page) }