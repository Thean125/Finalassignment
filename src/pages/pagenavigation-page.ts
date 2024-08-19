import { BrowserContext,Locator,Page, expect } from '@playwright/test';
export class navigation{
    page:Page;

    constructor(page:Page){
        this.page=page;
    }
    public async transaction(temp:any){ 
        await this.page.locator('[screenid="542C70CF-9C9F-492F-B0A1-ABE0C7CCDBBD"]').hover()
        await this.page.waitForTimeout(2000)
        await this.page.locator('[screenid="542C70CF-9C9F-492F-B0A1-ABE0C7CCDBBD"]').click()
        await this.page.waitForTimeout(3000)  
        await this.page.getByRole('link', { name: temp }).click()
        await this.page.waitForTimeout(7000)
    }
}