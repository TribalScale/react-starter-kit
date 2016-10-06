# React Starter Kit

## Description

A boiler plate built on top of React and Redux using Webpack tool and NPM packages.

## Requirements

- Mac OS X, Windows, or Linux
- Node.js v4.4.4 or newer
- npm v2.15.1 or newer


## Getting Started
### 1. Get the latest version

```
$ git clone -b master --single-branch https://github.com/TribalScale/react-starter-kit.git <APP_NAME>
$ cd <APP_NAME>
```

### 2. Install project dependencies

```
$ npm install
```

### 3. Run the app locally
```
$ npm run dev
```
The app will be listening to port 8080: [http://localhost:8080/](http://localhost:8080/)

### 4. Remove sample code
Sample code has been placed just for your reference and to give an idea of the scafolding. Please make sure you remove them from your project.


## How to test, lint and build

To run lint (please lint & test before every commit). We use [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with minor changes.
```
npm run lint
```

To run unit test cases
```
npm run test
```

To run build
```
npm run build
```

## SCSS guidelines
We follow [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern) for our development.

## AsyncAction util
We have created a util which prevents duplicate requests as well as simplifies the logic to make request and receive async actions. Feel free to use at your discretion.

## Pending list
- add directory layout
