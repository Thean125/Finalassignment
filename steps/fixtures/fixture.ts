import { test as base } from 'playwright-bdd'
import { loginpage } from '../../src/pages/login-page';
import { navigation } from '../../src/pages/pagenavigation-page';
import { createpackage } from '../../src/pages/packagecreation-page';
import { workflow } from '../../src/pages/workflowpage-page';


type AllStepClass = {
    loginuser: loginpage
    Navigation:navigation
    addnewpackage:createpackage
    workflownavi:workflow
   
}
export const test = base.extend<AllStepClass>({
    loginuser: async ({page},use)=>{await use(new loginpage(page));},
    Navigation: async ({page},use)=>{await use(new navigation(page));},
    addnewpackage: async ({page},use)=>{await use(new createpackage(page));},
    workflownavi: async({page},use)=>{await use(new workflow(page));},   
})
