import { BrowserContext,Locator,Page, expect } from '@playwright/test';
export class createpackage{
    page:Page;
    addbtn:Locator;
    formtitle:Locator;
    service:Locator;
    selectservice:Locator;
    packagedesc:Locator;
    RDD:Locator;
    RDDchoosedate:Locator;
    projectlocation:Locator;
    selectprojectloc:Locator;
    plannedstartdate:Locator;
    createbtn:Locator;
    logoutbutton:Locator;
    addsuccess:Locator;

    constructor(page:Page){
        this.page=page;
        this.addbtn=this.page.locator('[buttonid="6ED492D1-553E-4531-9805-4F2C79F5B1DA"]')
        this.formtitle=this.page.locator('[class="modal-title"]').nth(0)
        this.service=this.page.locator('[class="select2-selection select2-selection--single"]').nth(0)
        this.selectservice=this.page.getByRole('option', { name: 'Authoring', exact: true })
        this.packagedesc=this.page.locator('[formid="618F9209-9707-4186-A8DC-A3F69D68F560"][name="Package Description"]')
        this.RDD=this.page.locator('[formid="618F9209-9707-4186-A8DC-A3F69D68F560"][name="Requested Delivery Date"]')
        this.RDDchoosedate=this.page.getByRole('link', { name: '30' })
        this.projectlocation=this.page.getByRole('textbox',{ name:'Select Project location'})
        this.selectprojectloc=this.page.getByRole('option', { name: 'Chennai'}).nth(0)
        this.plannedstartdate=this.page.locator('[formid="618F9209-9707-4186-A8DC-A3F69D68F560"][name="Planned Start Date"]')
        this.createbtn=this.page.locator('[id="Create"][formid="618F9209-9707-4186-A8DC-A3F69D68F560"]')
        this.addsuccess=this.page.locator('[class="swal-button swal-button--confirm"]')
        this.logoutbutton=this.page.locator('[id="lnkLogout"][class="nav-link"]')

    }
    public async addpackagebtn(){
        await this.addbtn.click()
    }
    public async addpackage(){
         // Validate the page title using if condition
         const title = await this.page.title();
         if (title === 'Work Package') {
         console.log('Page title is correct.');
             } else {
                console.error(`Page title is incorrect. Expected 'Expected Title' but got '${title}'.`);
             }
            await this.page.waitForTimeout(2000)
            await this.service.click()
            await this.selectservice.click()
            await this.page.waitForTimeout(2000)
            await this.packagedesc.fill('QA description')
            await this.RDD.click()
            await this.page.waitForTimeout(2000)
            await this.RDDchoosedate.click()
            await this.projectlocation.click()
            await this.selectprojectloc.click()
            await this.plannedstartdate.click()
            await this.page.getByRole('cell', { name: '16' }).click();
            await this.page.locator('div:nth-child(41) > div:nth-child(2) > .table-sm > tbody > tr > td > span:nth-child(16)').click();
            await this.page.locator('div:nth-child(41) > div > .table-sm > tbody > tr > td > span:nth-child(9)').first().click();
            await this.createbtn.click()
            await this.addsuccess.click()
            await this.page.waitForTimeout(4000)
            await this.logoutbutton.click()
            await this.page.waitForTimeout(2000)

    }
        
}