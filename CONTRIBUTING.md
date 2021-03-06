# Contributing

Important notes:

- Understand [the license](./LICENSE "GPLv3")
- Read [the code of conduct (CoC)](./CODE_OF_CONDUCT.md "Code of Conduct")
- Sign [the contributor license agreement (CLA)](https://www.clahub.com/agreements/bennett000/ts-dox "Contributor License Agreement"
- Respect the linter
- Test your code

This document may be extended at any time

## Workflow

- Create a branch named `feat-your-feature-name` or `fix-bug-name`
- The branch can be and in most cases should be on a fork
- Create a PR
- If CI Passes your branch will be reviewed on GitHub
- Once the review is complete the branch will be merged in and a new release will be issued

## Build Scripts:

There are several scripts in `package.json` the most relevant ones are documented here:

- `npm run build` will build a distributable bundle
- `npm run clean` will prune all temporary folders
- `npm run mocha` will run _just the base_ mocha tests (_only use this if you have a good reason_)
- `npm run test` will run the tests and generate coverage
- `npm run test:w` watch the source folders and files and run the tests when they change (_does not generate coverage_)

### Test Builds

The testing system generated js files from ts and stores them in `project-root/ts/` a temporary directory.  Tests are run on that ES5 output.  Coverage is then remapped from that code and written to `project-root/coverage`

### Production Builds

Production builds are done using the following pipeline:

Rollup + TS ---> `project-root/tmp/index.js` ---> Closure Compiler ---> `project-root/dist/index.js`

The build step also copies over the `project-root/templates` directory to `dist/templates`

*Bonus Opportunity* implement a tsickle like stage to get more out of Closure Compiler
