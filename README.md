# Playwright Template

This repository contains the Playwright framework template. You can use it as the basis of your project.

## Tech stack

-   [NodeJS](https://nodejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Playwright](https://playwright.dev/);

## Install

-   Install [NodeJS](https://nodejs.org/)

-   Install [Git](https://git-scm.com/)

-   Clone this repo:

```bash
git clone https://github.com/self-deception-at-its-finest/LQ_Task_2
```

-   Go to the project folder

```bash
cd LQ_Task_2
```

-   Install dependencies:

```bash
npm i
```

-   Install playwright browsers:

```bash
npm playwright install
```

-   Copy the `.env.example` file and rename it to `.env`. Please note that in a real project, the `.env.example` file will not have filled values, you will have to fill them in yourself.

## Steps to run

To run all tests use the following commands:

-   In headless mode (without showing the browser):

```bash
npx playwright test
```

-   In headed mode (with showing the browser):

```bash
npx playwright test --headed
```

## Reports

### Locally

When the tests are completed, an HTML report is generated. To open it, run the following command:

```bash
npx playwright show-report
```

### CI

When running the `playwright.yml` workflow, the HTML report is deployed to the `test-reports` branch. The GitHub Pages feature is enabled in this branch, and you can view the deployed report by following this [link](https://self-deception-at-its-finest.github.io/LQ_Task_2/).

## GitHub Actions

In this Task, I use GitHub Actions to run all the tests and then deploy the report in the `test-reports` branch.