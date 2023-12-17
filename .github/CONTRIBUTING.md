# Contributing

Thank you for considering contributing to this project! Your contributions are greatly appreciated. In this document, you'll find guidelines and tips for making the contribution process smooth and efficient.

## Creating a New Template

To efficiently contribute a new template to the project, you can utilize the automated script. Here's how to do it:

**Run the Template Creation Script**: Execute the script to automate the creation of the new template. Use the command `npm run new-template [template-name]`, replacing `[template-name]` with the desired name of your new template. This command performs the following tasks:

- Creates a new folder in `./packages` with the specified template name.
- Copies necessary files from the example template (located in `./packages/example`) to the new template folder. These files include `package.json`, `pages/index.tsx`, `tsconfig.json`, `next.config.js`, and `next-env.d.ts`.
- Adds the new template name to the `templates` array in `./scripts/build.js`.

This automated process simplifies the initial setup, allowing you to focus on developing the new template. Remember to replace `[template-name]` with the actual name of your template when executing the commands.

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
