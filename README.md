# Appium Android Automation

Mobile automation project using Appium + WebdriverIO.

## Stack

- Node.js
- Appium
- WebdriverIO
- Mocha

## Project Structure

test/
  data
  screenobjects
  specs

## Tests

Login
- invalid credentials
- empty username
- empty password
- valid login

Catalog
- open product
- increase quantity
- add to cart
- remove item

Logout
- validate logout message

## Run tests

npm install
npx wdio run wdio.conf.js --spec ./test/specs/flow.e2e.js

## Credits

This project uses and automates the application from [My Demo App RN](https://github.com/saucelabs/my-demo-app-rn) by Sauce Labs.
