# eslint-plugin-loosely-restrict-imports

[![CircleCI](https://img.shields.io/circleci/project/mattgoucher/eslint-plugin-loosely-restrict-imports.svg?maxAge=2592000)](https://circleci.com/gh/mattgoucher/eslint-plugin-loosely-restrict-imports/tree/master) [![npm](https://img.shields.io/npm/v/eslint-plugin-loosely-restrict-imports.svg?maxAge=2592000)](https://www.npmjs.com/package/eslint-plugin-loosely-restrict-imports) [![David](https://img.shields.io/david/mattgoucher/eslint-plugin-loosely-restrict-imports.svg?maxAge=2592000)](https://github.com/mattgoucher/eslint-plugin-loosely-restrict-imports/blob/master/package.json)

Loosely restrict ES6 imports

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-loosely-restrict-imports`:

```
$ npm install eslint-plugin-loosely-restrict-imports --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-loosely-restrict-imports` globally.

## Usage

Add `loosely-restrict-imports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```yaml
plugins:
    - loosely-restrict-imports
```

Then configure the rules you want to use under the rules section.

```yaml
rules:
    loosely-restrict-imports/loosely-restrict-imports: [2, ".jsx"]
```
