# Dapp starter based on Nextjs, React and ethers

![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)
![GitHub](https://img.shields.io/github/license/JeremyTheintz/nextjs-web3-boilerplate)

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Setup](#setup)
- [Fast & Clean](#fast-clean)

## Introduction

This is a starter for building dapps with Nextjs, React and ethers.

## Technologies

Project is created with:

![npm](https://img.shields.io/npm/v/react?label=React)
![npm](https://img.shields.io/npm/v/next?label=Next)
![npm](https://img.shields.io/npm/v/typescript?label=TypeScript)
![npm](https://img.shields.io/npm/v/styled-components?label=Styled%20Components)
![ethers](https://img.shields.io/npm/v/ethers?style=flat&label=Ethers)

Working configuration:

- node 16.16.0
- npm 8.11.0

## Setup

To run the project using Make commands:

```
# Install dependencies and run the project
make init

# Run the project
make start
```

To run the project without Make commands:

```
npm install
npm run dev
```

There are some default components used to build the home page in the `./components/default`:

```
// run this command to delete the default components
rm -rf ./components/default
```

## Fast & Clean

The Makefile is ready to use for fast and clean development.
Creating all a component needs is as simple as:

```
// run this to create a component named "MyComponent"
make component name=MyComponent

// The commande will create the following files with minimum viable code to make the component work:
MyComponent
 |- index.ts
 |- MyComponent.tsx
 |- MyComponent.styles.ts
 |- MyComponent.type.ts
```

> if you are running on Windows then the command is "make win-component name=MyComponent"
