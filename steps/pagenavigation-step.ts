import { createBdd } from "playwright-bdd";
import {test} from './fixtures/fixture';
const {Given, When, Then}=createBdd(test)
Then("navigate to the {string} page link",async({Navigation},menu:string)=>{
    await Navigation.transaction(menu);
    })