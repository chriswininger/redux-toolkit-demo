# Getting Started with Create React App

A simple demo of rtk-toolkit

## Goals

* Demonstrate how rtk queries behave when two components on a single page both try to request the same api resource
    * Explore how caching can be adjusted
    * Explore how manual refreshes can be triggered
* Explore how data can be cloned from the api into redux state for a particular page that will perform further operations
  on it
* Explore how caching behaves across page navigation
* Explore what testing looks like when using rtk
* Explore the use of custom sdks within the rtk query framework

## Running

### Start api server

```
cd ./api
npm install
npm start
```

### start the frontend

```
cd ./frontend
npm install
npm start
```