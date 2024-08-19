import { createBdd } from "playwright-bdd";
import {test} from './fixtures/fixture';
const {Given, When, Then}=createBdd(test) 
Then("double click the work package and open the workflow",async({workflownavi})=>{
    await workflownavi.workflownav();
    })
 