import { chromium } from "playwright-chromium";

before(async () => {
  global.browser = await chromium.launch({ headless: false });
});
after(async () => {
  await global.browser.close();
});