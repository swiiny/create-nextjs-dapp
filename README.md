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
- [Tests](#tests)

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

## Tests

The testing setup uses **Playwright** for end-to-end tests and supports both local and CI testing workflows. Below are the details of the test implementation and available commands.

### Test Implementation

The project tests are designed to:

1. Validate that all templates render correctly on both desktop and mobile environments.
2. Compare snapshots to detect unintended UI changes.
3. Verify template-specific logic to ensure functionality.

The tests are configured in the `playwright.config.ts` file with the following projects:

- **`chromium_desktop`**: Tests templates on a desktop environment using Chromium.
- **`safari_mobile`**: Tests templates on a mobile environment using Safari emulation (iPhone 13).

Additionally, the project uses **Act** to simulate GitHub Actions workflows for testing in CI-like environments locally.

---

### Test Commands

Here are the available test commands in `package.json`:

#### **Local Testing**

1. **Run Desktop Template Tests**

   ```bash
   npm run test:desktop:templates
   ```

   - Runs all template tests for the desktop environment using Playwright.
   - Saves the HTML report in `playwright-report-desktop`.

2. **Run Mobile Template Tests**

   ```bash
   npm run test:mobile:templates
   ```

   - Runs all template tests for the mobile environment using Playwright.
   - Saves the HTML report in `playwright-report-mobile`.

#### **GitHub Actions Simulation**

1. **Run Desktop Template Tests in CI-like Environment**

   ```bash
   npm run test:gh:test:desktop:templates
   ```

   - Uses Act to simulate the `test-desktop-templates` job from the GitHub Actions workflow.
   - Runs the tests using the `ubuntu-24.04` environment with `linux/amd64` architecture.

2. **Run Mobile Template Tests in CI-like Environment**

   ```bash
   npm run test:gh:test:mobile:templates
   ```

   - Uses Act to simulate the `test-mobile-templates` job from the GitHub Actions workflow.
   - Runs the tests using the `ubuntu-24.04` environment with `linux/amd64` architecture.

---

### Reports

- Each test generates an HTML report for detailed insights into test results. The report paths are defined by the `PLAYWRIGHT_HTML_REPORT` environment variable:

  - **Desktop Report**: `playwright-report-desktop`
  - **Mobile Report**: `playwright-report-mobile`

- In CI-like environments, logs and outputs are captured by Act and displayed in the terminal for debugging.

---

### Example Usage

#### Running All Desktop Tests Locally

```bash
npm run test:desktop:templates
```

#### Simulating GitHub Actions for Mobile Templates

```bash
npm run test:gh:test:mobile:templates
```

---

This setup ensures consistency and reliability across different environments, enabling you to test templates effectively during local development and CI workflows.
