import { createBdd } from "playwright-bdd";
import {test} from './fixtures/fixture';
const {Given, When, Then}=createBdd(test)

    Then("click Add work package button",async({addnewpackage})=>{
        await addnewpackage.addpackagebtn();
        })
    Then("validate the Add work package form",async({addnewpackage})=>{
            await addnewpackage.addpackage();
        })
    //  Then("search for the created package",async({Navigation},)=>{
    //             await Navigation.transaction();
    //     })
    //  Then("double click the package and open the workflow page",async({Navigation},)=>{
    //                 await Navigation.transaction();
    //     })