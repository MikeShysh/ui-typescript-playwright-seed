import { Browser } from "playwright-core";

declare global {
    namespace NodeJS {
        interface Global {
            browser: Browser,
            config: {
                baseUrl: string,
                user: string,
                password: string
            }
        }
    }
}