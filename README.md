# eslint-plugin-loosely-restrict-imports

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

```json
{
    "plugins": [
        "loosely-restrict-imports"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "loosely-restrict-imports/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





