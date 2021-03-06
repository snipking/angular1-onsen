# angular1-onsen

[![Dependency Status](https://david-dm.org/snipking/angular1-onsen/status.svg)](https://david-dm.org/snipking/angular1-onsen#info=dependencies) [![devDependency Status](https://david-dm.org/snipking/angular1-onsen/dev-status.svg)](https://david-dm.org/snipking/angular1-onsen#info=devDependencies)

A seed template for angular1 & onsenui project

This project is a starting point for building Angular 1.x applications with onsenui. Also for further

1. angular1-onsen  
2. [angular1-onsen-webpack](https://github.com/snipking/angular1-onsen-webpack.git)  
3. [angular1-onsen-typescript-webpack](https://github.com/snipking/angular1-onsen-typescript-webpack.git)  

learning course.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo

```bash
# clone repo
$ git clone https://github.com/snipking/angular1-onsen.git angular1-onsen

# change directory to app root
$ cd angular1-onsen

# install the dependencies with npm
$ npm install

# install the dependencies with bower
$ bower install

# run with dev mode
$ gulp run-dev
```

If everything goes right, chrome browser will open with url [http://localhost:8384/index.html](http://localhost:8384/index.html)
otherwise you should open it manually.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm`

## Installing

* `npm install` to install build environment dependencies
* `bower install` to install javascript library dependencies

## Running the app

Using NetBeans build-in server to run / debug

## Developing

### Build files

* developing build:
```bash
gulp build-dev
```
* production build:
```bash
gulp build-prod:
```
* clean distribution (www) folder
```bash
gulp clean:
```
* watch changes
```bash
gulp watch
```



### IDE

This project build with NetBeans 8.1, so the `nbproject` folder included. This is not required and if you are using other IDE, just delete it.

## Testing

#### 1. Unit Tests

_TODO_

# License

[APACHE](/LICENSE)
