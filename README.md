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
npx wdio run wdio.conf.js
