# Contributing

Thank you for considering contributing to this project! Your contributions are greatly appreciated. In this document, you'll find guidelines and tips for making the contribution process smooth and efficient.

## Creating a new template

If you want to contribute a new template, follow these steps:

1. Create a new folder in `./packages` with the name of your template.

2. Create the following files, taking inspiration from other templates (see `./packages/base` for an example):

   - `./packages/[template-name]/package.json`
   - `./packages/[template-name]/pages/index.tsx`
   - `./packages/[template-name]/tsconfig.json`
   - `./packages/[template-name]/next.config.js`
   - `./packages/[template-name]/next-env.d.ts`

3. Open `./scripts/build.js` and add your template to the `templates` array (the name has to be the same as the template directory name in `./packages`).

   - `const templates = ['base', 'mui', 'styled-components', 'new-template-name'];`

4. Go to the project root directory `./` and run `npm run build` to copy the common files to the new template.

5. Navigate to your template folder (`cd ./packages/[template-name]`) and start development with `npm run dev`.

## Contribution Guidelines

Please follow these guidelines to ensure a smooth contribution process:

- Make sure your code follows the project's coding style and conventions.
- Test your changes locally before submitting a pull request.
- Keep your pull requests focused and limited to a single feature or bug fix.
- Provide a clear and concise description of your changes in the pull request.
- If your changes are related to an existing issue, reference the issue number in your pull request.

## Getting Help

If you need help or have questions about the project, feel free to open an issue or reach out to the maintainers.

Again, thank you for your interest in contributing to this project. Your contributions will help improve the project for everyone!
