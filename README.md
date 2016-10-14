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

To clean the complied files in the build directory
```
npm run clean
```

To run build
```
npm run build
```

Testing production build before deployment. To test a production build locally, you need to setup a web server. Feel free to setup a web server of your choice locally or deploy the build to a test environment. In the following example, we have used http-server and started the app on port 8010
```
npm run build
cd build
http-server -p 8010
```

## Directory Layout
```
.
|____build 							# Directory for compiled files
|____node_modules					# 3rd-party libraries and utilities
|____src
| |____utils						# Directory for custom utils, helpers & libraries
| | |____async_action.js			# Redux async action helper util
| |____actions						# Directory for redux actions
| |____components					# Directory for react components
| |____containers					# Directory for react containers
| |____reducers						# Directory for redux reducers
| | |____index.js					# List of reducers combined here
| |____stylesheets
| | |____abstracts
| | | |_____variables.scss			# List of variables used in the app
| | |____base
| | | |_____typography.scss			# List of custom fonts (if necessary)
| | |____layout
| | | |____main.scss				# Base style and app layout css
| | |____main.scss					# Import all the scss here
| |____main.jsx						# App entry file
|____index.html						# App HTML file
|____tests
| |____actions						# Directory for actions test cases
| |____components					# Directory for components test cases
| |____containers					# Directory for containers test cases
| |____reducers						# Directory for reducers test cases
| |____test_helper.js				# Unit test helper util
|____webpack.config.js				# Configurations for client-side bundles
|____package.json					# List of 3rd party libraries and utilities
|____.eslintrc.js 					# We use eslint-config-airbnb with minor changes.
```

## Redux debugging
We have made necessary changes to the code to support [redux-devtools-extension](http://zalmoxisus.github.io/redux-devtools-extension/) in the development environment. Please feel free to install necessary add-on / extension to your browser, if you wish to use the redux devtools.

## SCSS guidelines
We follow [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern) for our development.

## AsyncAction util
We have created a util which prevents duplicate requests as well as simplifies the logic to make request and receive async actions. Feel free to use at your discretion.

## Unit Testing
We use following packages to write our unit test cases:
* [mocha](https://www.npmjs.com/package/mocha)
* [unexpected-react](https://www.npmjs.com/package/unexpected-react)
* [enzyme](https://www.npmjs.com/package/enzyme)
