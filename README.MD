# Project Overview

This repository showcases a professional-grade mobile automation framework built with **WebdriverIO** and **Appium**. It targets the WebdriverIO Native Demo App to demonstrate a robust approach to testing modern mobile applications on real devices via BrowserStack.


## Technical Architecture

This project follows the Page Object Model (POM) to ensure a clean separation between test logic and UI interactions.

* **Cross-Platform Engine:** The framework is architected for both Android and iOS. I implemented conditional logic using driver.isAndroid to handle platform-specific locators dynamically.

* **Data-Driven Testing:** Test scenarios utilize externalized data objects (loginData.js) for scalable and repeatable validation.

* **Synchronization & Cloud Strategy:** To combat network latency in cloud environments, I implemented "Smart Waits" and custom graceful-failure logic (e.g., optional popup handling with .catch()).

## Tech Stack

* **Framework:** WebdriverIO v8+
* **Platform:** Appium 2.0 (UiAutomator2 & XCUITest ready)
* **Cloud Testing:** BrowserStack Real Device Cloud
* **Language:** JavaScript (ES6+)

## Key Test Scenarios

* **Login Flow:** Validates successful login and handles native success modals.

* **Negative Validations:** Tests boundary conditions such as malformed emails and minimum password length requirements.

* **Carousel Navigation:** Automates horizontal swipes through cards, verifying UI state changes.

* **Interaction Testing:** Implements coordinate-based math to perform precise Drag-and-Drop actions.

## Engineering Decisions & Challenges

* **Cloud-First Approach:** Due to hardware-optimized strategy (bypassing the 8GB+ RAM requirement for local emulators on a 4GB system), I utilized BrowserStack for high-performance real-device execution.

* **iOS Strategy:** While the code is "XCUITest ready," execution is currently focused on Android. In a professional CI/CD pipeline, signed .ipa files are provided by build teams; I have prepared the configuration and locators to be "Ready-to-Deploy" once those assets are available.

* **Sync Warnings:** Addressed 10s+ "Is Displayed" warnings on BrowserStack by optimizing waitForExist strategies to handle animation settling times.

## Running Tests Locally

* Clone the repository:
    
   * ```git clone https://github.com/mirayyilmaz-QA/mobile-automation-portfolio```
   * ```cd wdio-mobile-portfolio```

* Run ```npm install``` to install dependencies.
* Set your BrowserStack credentials as environment variables:

```text
export BROWSERSTACK_USER='your_username'
export BROWSERSTACK_KEY='your_access_key'
```

* Execute the tests using: ```npx wdio run wdio.conf.js```
