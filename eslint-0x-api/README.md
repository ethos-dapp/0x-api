# eslint-plugin-0x-api

Custom eslint plugin

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-0x-api`:

```sh
npm install eslint-plugin-0x-api --save-dev
```

## Usage

Add `0x-api` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "0x-api"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "0x-api/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


