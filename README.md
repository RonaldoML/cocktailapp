# React Native app

## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
Developed in a windows environment.

## Usage

- Open an android emulator or xcode, if iOs using
- Open terminal in coktail folder and run the next command

```
$ npm install
```

- if using macOs run:

```
$ pod install
```

- Run the next command to deploy

```
$ npx react-native run-android
```

- if using macOs run:

```
$ npx react-native run-ios
```

## Libraries

The app uses [React Navigation](https://reactnavigation.org/docs/stack-navigator/), [Stack Navigator](https://reactnavigation.org/docs/stack-navigator) to manage the app navigation between pages. [Redux](https://redux.js.org/) for states and [react-native-elements](https://reactnativeelements.com/) for the button.

## Performance

In order to improve the performance we use the keys to track the item re-ordering, keep using the basic components as much as possible. Use backend pagination.
