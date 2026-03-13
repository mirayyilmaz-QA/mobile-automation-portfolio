import dotenv from 'dotenv';
dotenv.config();

export const config = {

    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,

    services: ['browserstack'],

    capabilities: [{
        platformName: 'android',
        'appium:orientation': 'PORTRAIT',
        'appium:deviceName': 'Google Pixel 7',
        'appium:os_version': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': false,
        'appium:fullReset': false,

        'appium:app': 'bs://fa7d7342d3db06ed8be5dd5ca71c946f544ae691',
        'bstack:options': {
            projectName: "QA Mobile Portfolio",
            buildName: "Advanced-POM-Framework",
            sessionName: "Login Flow - Data Driven",
            realMobile: 'true',
            appiumVersion: '2.0.0'
        }
    },
        /*PRE-CONFIGURED: iOS capability (Awaiting signed .ipa build)
        {
            platformName: 'ios',
                'appium:deviceName': 'iPhone 14',
                'appium:os_version': '16',
                'appium:automationName': 'XCUITest',
                'appium:app': 'bs://<AWAITING_SIGNED_IPA_URL>',
                'bstack:options': { realMobile: 'true' }
        }
        */
    ],

    specs: ['./test/specs/**/*.js'],

    maxInstances: 1,

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    // Increased timeout for slower cloud/network connections
    connectionRetryTimeout: 180000,
    connectionRetryCount: 3,

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}