# Functional Tests using Playwright-TypeScript
This repository contains all of the files needed to start running your functional tests in Playwright

## Files
Most of the files are commented fully, but here are some quick notes:

### fixtures
These are the test fixtures used for running scenarios.

### tests
By default, the configuration looks for files ending in either spec.ts or test.ts in the folder `./tests`. If you move it or rename things, remember to change the configuration.

### playwright.config.ts
The configuration is mostly imported from common and all defaults are recommended you use.

### tsconfig.json
This file must be included for Typescript, but it is not really important to you. If you want to, you can of course make changes as needed to it.

## Run the tests
Run this command inside the project directory:
```
npx run playwright
```

[Useful link to run your tests in different config and modes](https://playwright.dev/docs/running-tests#running-tests)

