@smoke
Feature:Package creation scenarios
   
    Scenario:login and Navigate to the transaction page and create new work package
        Then login
        Then navigate to the "work assignment" page link
        Then click Add work package button
        Then validate the Add work package form
        # Then search for the created package
   
    Scenario:Validate the workflow page
        Then login
        Then navigate to the "work assignment" page link
        Then double click the work package and open the workflow 