## Pantheon Problem Statement 

- An Automation test script to test end to end checkout flow for purchasing product using credit card as payment method with success flow fail flow.

- Basic test for Dark Sky API & Inspection of data.

### Installing

- `npm install`

- cd /your/project/path `npm install cypress --save-dev`

- cd /your/project/path `yarn add cypress --dev`

### How to run cypress 

- to open cypress (cd /your/project/path) `./node_modules/.bin/cypress open` or `$(npm bin)/cypress open` or `npx cypress open` or `yarn run cypress open`

- to run cypress in headless or command line (cd /your/project/path) `node_modules/.bin/cypress run --headless`

### How to get Report

- install mochawesome dependencies (cd /your/project/path) `npm i --save-dev cypress-mochawesome-reporter` ( add in config file"reporter": "mochawesome" )

- we need to configure the reporter in your config file to skip the HTML report generation and save each individual JSON file in the cypress/results folder.
  
```  
"reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": false,
    "json": true
}
```

- to get report run these command (cd /your/project/path) `node_modules/.bin/cypress run --headless` 

- then we can combine them using the mochawesome-merge utility `npx mochawesome-merge "cypress/results/*.json" > mochawesome.json`

- we can now generate a combined HTML report from the mochawesome.json file using the `npx marge mochawesome.json`

### CI pipeline with GitHub Actions

- create a new repository on the command line
    - `echo "# pantheontest" >> README.md`
    - `git init`
    - `git add README.md`
    - `git commit -m "first commit"`
    - `git branch -M main`
    - `git remote add origin https://github.com/aakashmurnal/pantheontest.git`
    - `git push -u origin main`
