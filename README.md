# Appium Android Automation

[![Node.js](https://img.shields.io/badge/node-v20-brightgreen)](https://nodejs.org/)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/LeonardRP/appium-android-automation/android-tests.yml?branch=main)](https://github.com/LeonardRP/appium-android-automation/actions)

Mobile automation project using **Appium** and **WebDriverIO** for Android applications.

---

## Stack

- Node.js
- Appium
- WebDriverIO
- Mocha

---

## Project Structure

```text
test/
├─ data/
├─ screenobjects/
└─ specs/
```

---

## Tests

### Login
- Invalid credentials
- Empty username
- Empty password
- Valid login

### Catalog
- Open product
- Increase quantity
- Add to cart
- Remove item

### Logout
- Validate logout message

---

## Requirements

- Node.js v20+
- NPM
- Android SDK & Emulator (API level 31+ recommended)
- Appium
- WebDriverIO

---

## Local Setup & Running Tests

1. Clone the repository:

```bash
git clone https://github.com/LeonardRP/appium-android-automation.git
cd appium-android-automation
```

2. Install project dependencies:

```bash
npm install
```

3. Install Appium globally:

```bash
npm install -g appium appium-doctor
```

4. Install Appium UIAutomator2 driver:

```bash
appium driver install uiautomator2
```

5. Start Appium server:

```bash
appium -p 4724
```

6. Run WebDriverIO tests:

```bash
npx wdio run wdio.conf.js --spec ./test/specs/flow.e2e.js
```

Test reports will be generated in the ./reports folder.

---

## GitHub Actions CI

Workflow is configured in .github/workflows/ci.yml.
It automatically:

- Installs Node.js and dependencies
- Installs Appium + UIAutomator2 driver
- Sets up Android SDK and Emulator
- Starts Appium in background
- Runs WebDriverIO tests
- Uploads test reports as artifacts (wdio-reports)

Workflow is triggered on:

- Push to main
- Pull requests

---

## Reports

After workflow runs, test reports are available as artifacts.
To download:

1. Go to the workflow run
2. Scroll to the Artifacts section
3. Click wdio-reports to download results

---

## Troubleshooting
- Driver UIAutomator2 not found
```bash
appium driver install uiautomator2
```
- Appium server port in use
Ensure no process is running on 4724.

- Android Emulator errors
Check the workflow logs and ensure API level 31 is installed.

---

## Credits

This project uses and automates the application from [My Demo App RN](https://github.com/saucelabs/my-demo-app-rn) by Sauce Labs.
