import { BrowserContext,Locator,Page, expect } from '@playwright/test';
export class loginpage{
    page:Page;
    url:string;
    username:Locator;
    password:Locator;
   // logoutbutton:Locator;
    
    constructor(page:Page){
        this.page=page;
        this.url='https://adaptiveqat.caresoftglobal.com/'
        this.username=this.page.locator('[id="txtUserID"][class="form-control"]')
        this.password=this.page.locator('[id="txtPassword"][class="form-control"]')
       // this.logoutbutton=this.page.locator('[id="lnkLogout"][class="nav-link"]')
    }
    
    public async login(){  
        await this.page.goto(this.url)
        await this.username.fill('102331')
        await this.password.fill('Thean@14@')
        await this.password.press('Enter')
        await this.page.waitForLoadState('load')
        //await this.logoutbutton.click()
       // await this.page.waitForTimeout(2000)
        
    }
    }