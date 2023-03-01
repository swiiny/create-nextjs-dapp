# Create Nextjs Dapp

[![npm version](https://img.shields.io/npm/v/create-nextjs-dapp?color=blue)](https://www.npmjs.com/package/create-nextjs-dapp)
[![npm downloads](https://img.shields.io/npm/dm/create-nextjs-dapp.svg?color=blue)](https://www.npmjs.com/package/create-nextjs-dapp)
[![GitHub stars](https://img.shields.io/github/stars/JeremyTheintz/create-nextjs-dapp.svg?label=Stars&style=flat&logo=github&color=blue)](https://www.npmjs.com/package/create-nextjs-dapp)
![contributions welcome](https://img.shields.io/badge/contributions-welcome-blue.svg?style=flat&logo=github)
![GitHub](https://img.shields.io/github/license/JeremyTheintz/create-nextjs-dapp?color=blue)

![image](https://github.com/JeremyTheintz/create-nextjs-dapp/raw/main/doc/tagline.png)

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

There are already base functions to add responsive padding, margin and frames to your components.

> See IPadding, IMargin and IFrames available at `./interfaces/layout.ts`

---

# Contributing

### Creating a new template

1. Create a new folder in `./packages` with the name of your template.
2. Create the following files, inspired by other templates (see `./packages/base` for an example):
   - `./packages/[template-name]/package.json`
   - `./packages/[template-name]/pages/index.tsx`
   - `./packages/[template-name]/tsconfig.json`
   - `./packages/[template-name]/next.config.js`
   - `./packages/[template-name]/next-env.d.ts`
3. Open `./scripts/build.js` and add your template to the `templates` array (the name has to be the same as the template directory name in `./packages`).
   - `const templates = ['base', 'mui', 'styled-components', 'new-template-name'];`
4. Go to the project root directory `./` and run `npm run build` to copy the template common files to the new template.
5. Go to your template (`cd ./packages/[template-name]`) and start development with `npm run dev`.
