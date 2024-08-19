import { BrowserContext,Locator,Page, } from '@playwright/test';
import {test,expect} from "@playwright/test"
const { Promises }= require ('dns');
const {chromium}= require ('playwright');

export class workflow{
  page:Page;

constructor(page:Page){
  this.page=page;
}
 public  async workflownav() {
        const pagepromise=this.page.waitForEvent('popup');
        await this.page.pause();
        await this.page.locator('[class="pq-grid-cell pq-align-center ui-state-default"][pq-col-indx="1"]').nth(0).dispatchEvent('dblclick');
        const newpage = await pagepromise;
        await this.page.waitForTimeout(3000);

}
}

  
    
  