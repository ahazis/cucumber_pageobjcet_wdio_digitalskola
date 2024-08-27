## Install
    npm init -y
    npm init wdio@latest . --force

## Setup Install
    ? A project named "cucumber" was detected at "C:\Users\lenov\OneDrive\Desktop\E-learning\Pert 11\Cucumber", correct? yes
    ? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
    ? Where is your automation backend located? On my local machine
    ? Which environment you would like to automate? Web - web applications in the browser
    ? With which browser should we start? Chrome
    ? Which framework do you want to use? Cucumber (https://cucumber.io/)
    ? Do you want to use Typescript to write tests? no
    ? Do you want WebdriverIO to autogenerate some test files? yes
    ? What should be the location of your feature files? C:\Users\lenov\OneDrive\Desktop\E-learning\Pert 11\Cucumber\features\**\*.feature
    ? What should be the location of your step definitions? C:\Users\lenov\OneDrive\Desktop\E-learning\Pert 11\Cucumber\features\step-definitions\steps.js   
    ? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? yes
    ? Where are your page objects located? C:\Users\lenov\OneDrive\Desktop\E-learning\Pert 11\Cucumber\features\pageobjects\**\*.js
    ? Which reporter do you want to use? spec, json, cucumber-json
    ? Do you want to add a plugin to your test setup?
    ? Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! no
    ? Do you want to add a service to your test setup?
    ? Do you want me to run `npm install` yes
   
## Tambahkan script wdio di package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "wdio": "wdio run wdio.conf.js"
    },

## Run test
	npm run wdio

## devDependencies
    "@wdio/allure-reporter": "^9.0.4",
    "@wdio/cli": "^9.0.7",
    "@wdio/cucumber-framework": "^9.0.6",
    "@wdio/local-runner": "^9.0.7",
    "@wdio/spec-reporter": "^9.0.7",
    "wdio-wait-for": "^3.0.11"

## Run with Cucumber Tag
	npx wdio run ./wdio.conf.js --cucumberOpts.tags "@LoginTest"
	npx wdio run ./wdio.conf.js --cucumberOpts.tags "@LoginTest and not @testCase2"

## Tambahkan code afterScenario untuk screenshoot jika failed testing

    const fs = require('fs');
    const path = require('path');

    afterScenario: async function (world, result, context) {
        console.log('Skenario selesai. Memeriksa hasil untuk mengambil tangkapan layar jika gagal.');

        if (!result.passed) {
            const date = new Date();
            const timestamp = date.toISOString().replace(/[:.]/g, '-');
            const scenarioName = world.pickle.name.replace(/\s+/g, '_').toLowerCase();
            const screenshotDir = path.join(process.cwd(), 'screenshots');
            const screenshotPath = path.join(screenshotDir, `${scenarioName}_${timestamp}.png`);
            
            // Pastikan folder screenshot ada
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }

            try {
                await browser.saveScreenshot(screenshotPath);
                console.log(`Tangkapan layar disimpan: ${screenshotPath}`);
            } catch (error) {
                console.error(`Gagal menyimpan tangkapan layar: ${error.message}`);
            }
        }
    },

