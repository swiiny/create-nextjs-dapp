# Dapp starter based on Nextjs, React and ethers

![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)
![GitHub](https://img.shields.io/github/license/JeremyTheintz/nextjs-web3-boilerplate)

## Table of Contents

- [Introduction](#introduction)
- [Quick start](#quick-start)
- [Technologies](#technologies)
- [Setup](#setup)
- [Remove Default UI Kit](#remove-default-ui-kit)
- [Fast & Clean](#fast-clean)

## Introduction

This is a starter for building dapps with Nextjs, React and ethers.

## Quick start

You can quickly start a new project with this start by using the following command:

```
npx create-nextjs-dapp my-dapp

```

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

## Remove default UI Kit

The default UI kit is built using `mui/base`, `mui/system` with `styled-components` as styled engine. If you want to remove it, you can follow these steps:

### 1. Remove MUI

#### package.json

```
{
  ...
  "dependencies": {
-    "@mui/base": "^5.0.0-alpha.98",
-    "@mui/styled-engine-sc": "^5.10.6",
-    "@mui/system": "^5.10.6",
    ...
-    "next-transpile-modules": "^9.0.0",
    ...
  }
  ...
}
```

#### next.config.json

```
- const withTM = require('next-transpile-modules')(['@mui/system', '@mui/base', '@mui/styled-engine-sc']);

...
-  const nextConfig = withTM({
+  const nextConfig = {
...
- webpack: (config) => {
-		 config.resolve.alias = {
-			 ...config.resolve.alias,
-			 '@mui/styled-engine': '@mui/styled-engine-sc'
-	  	};
-	 	 return config;
-	 }
- });
+ };
```

#### tsconfig.json

```
{
 "compilerOptions": {
  ...
  "paths": {
    ...
-   "@mui/styled-engine": ["./node_modules/@mui/styled-engine-sc"]
  }
 }
}
```

### 2. Remove Styled Components

#### package.json

```
{
  ...
  "dependencies": {
    ...
-    "styled-components": "^5.3.5"
    ...
  },
  ...
  "devDependencies": {
    ...
-    "@types/styled-components": "^5.1.26",
    ...
  }
}
```

#### pages/\_app.tsx

```
...
- import { ThemeProvider } from 'styled-components';
- import GlobalStyle from '@theme/GlobalStyles';
- import { darkTheme } from '@theme/theme';

  const DappBoilerplate = ({ Component, pageProps }: AppProps) => {
	  (
      ...
-      <ThemeProvider theme={theme}>
-       <GlobalStyle />
-
        <Component {...pageProps} />
-
-      </ThemeProvider>
  );
```

#### pages/\_document.tsx

```
...
- import { ServerStyleSheet } from 'styled-components';

...

- // @ts-ignore
- DappBoilerplateDocument.getInitialProps = async (ctx) => {
- 	const sheet = new ServerStyleSheet();
- 	const originalRenderPage = ctx.renderPage;
-
- 	try {
- 		ctx.renderPage = () =>
- 			originalRenderPage({
- 				// @ts-ignore
- 				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
- 			});
-
- 		// @ts-ignore
- 		const initialProps = await Document.getInitialProps(ctx);
- 		return {
- 			...initialProps,
- 			styles: (
- 				<>
- 					{initialProps.styles}
- 					{sheet.getStyleElement()}
- 				</>
- 			)
- 		};
- 	} finally {
- 		sheet.seal();
- 	}
- };
```

### 3. Run these commands to clean up files

```
rm -rf ./theme
rm -rf ./components/*
rm -rf ./pages/index.tsx
rm -rf ./webpack.alias.js
```

## Fast & Clean Components builder

The Makefile is ready to use for fast and clean development.

> It won't totally work if Styled Components is removed

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
