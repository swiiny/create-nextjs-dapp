# Create Nextjs Dapp

[![npm version](https://img.shields.io/npm/v/create-nextjs-dapp?color=blue)](https://www.npmjs.com/package/create-nextjs-dapp)
[![npm downloads](https://img.shields.io/npm/dm/create-nextjs-dapp.svg?color=blue)](https://www.npmjs.com/package/create-nextjs-dapp)
[![GitHub stars](https://img.shields.io/github/stars/swiiny/create-nextjs-dapp.svg?label=Stars&style=flat&logo=github&color=blue)](https://www.npmjs.com/package/create-nextjs-dapp)
![contributions welcome](https://img.shields.io/badge/contributions-welcome-blue.svg?style=flat&logo=github)
![GitHub](https://img.shields.io/github/license/swiiny/create-nextjs-dapp?color=blue)

![image](https://github.com/swiiny/create-nextjs-dapp/raw/main/doc/tagline.png)

## Table of Contents

- [Introduction](#introduction)
- [Quick start](#quick-start)
- [Technologies](#technologies)
- [Templates](#templates)

## Introduction

This is a starter for building Dapps with Nextjs, React and ethers.  
By running `npx create-nextjs-dapp` you will be able to choose a **_project name_** and the **_template_** you want to use directly **_from your terminal_**.

Here is the list of the available templates:

- [Base](#base) (No UI kit)
- [MUI](#mui)
- [Styled Components](#styled-components)
- [Stylex](#stylex)
- [Tailwind](#tailwind)

## Quick start

You can quickly start a new project with this starter by using the following command:

```
npx create-nextjs-dapp
```

## Technologies

The project has been built using the following technologies:

![npm](https://img.shields.io/npm/v/react?label=React)
![npm](https://img.shields.io/npm/v/next?label=Next)
![npm](https://img.shields.io/npm/v/typescript?label=TypeScript)
![ethers](https://img.shields.io/npm/v/ethers?style=flat&label=Ethers)

Working configuration:

- node 16.16.0
- npm 8.11.0

## Templates

- [base](#base)
- [MUI](#mui)
- [Styled Components](#styled-components)
- [Stylex](#stylex)
- [Tailwind](#tailwind)

### Base

The base template has no UI framework configured. The default style is based on `.scss` with examples of how to use it.

### MUI

The MUI template is based on the [MUI](https://mui.com/) framework. It is configured with the [MUI System](https://mui.com/system/getting-started/overview/) and the [MUI Base](https://mui.com/base/getting-started/overview/).

All is configured to work with the [Material UI](https://mui.com/material-ui/getting-started/overview/).
You can run the following command to install it:

```
npm install @mui/material
```

### Styled Components

Styled components is a popular CSS-in-JS library developed for React. It is configured with the [Styled Components](https://styled-components.com/) library.

There are already base functions to add responsive padding, margin, and frames to your components.

> See IPadding, IMargin, and IFrames available at `./interfaces/layout.ts`

---

### Stylex

The Stylex template leverages [Stylex](https://stylexjs.com/) for styling, blending the benefits of inline styles and CSS without their limitations. It provides a simple JavaScript syntax and compiler for defining component-scoped styles, avoiding specificity issues while supporting media queries. Stylex utilizes atomic CSS to minimize output size, ensuring scalability and maintainability of styles in large projects. Please refer to the [Stylex documentation](https://stylexjs.com/docs/learn/) for more information on how to use the library.

### Tailwind

The Tailwind template is based on the [Tailwind CSS](https://tailwindcss.com/) framework. It is configured with the [Tailwind CSS](https://tailwindcss.com/docs/installation) library. This template utilizes the utility-first approach to styling, providing a highly customizable and efficient way to build your Dapp.

This template includes a base configuration file (`tailwind.config.js`) to get you started with customizing your styles. You can refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration) for more information on how to extend and modify the default configuration.
