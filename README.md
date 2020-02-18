# cypress-cucumber-example
Example of cypress with cucumber and AssertThat BDD

1. Before the run replace ASSERTTHAT_ACCESSKEY and ASSERTTHAT_SECRET_KEY with corresponding values from project [configuration page](https://assertthat.atlassian.net/wiki/spaces/ABTM/pages/725385217/Configuration) 
2. Import the foloowing feature file into the plugin as described [here](https://assertthat.atlassian.net/wiki/spaces/ABTM/pages/725057639/Import+Features+and+Scenarios)

```
Feature: Searching for AssertThat in Google

    I want to find AssertThat in Google search results

    @AUTOMATED
    Scenario: Searching for AssertThat  in Google
        Given I am on Google home page
        When I search for "AssertThat bdd"
        Then I see that the first result is "AssertThat-BDD & Cucumber for Jira | Atlassian Marketplace"
```
3. Run ```npm test```
