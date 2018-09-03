# eslint-config-recats

[![npm](https://img.shields.io/npm/v/@recats/eslint-config.svg)](https://www.npmjs.com/package/@recats/eslint-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/recats/eslint-config-recats.svg)](https://greenkeeper.io/)
![Recats Digital](https://img.shields.io/badge/recats-digital-1abc9c.svg?style=flat)

Plugins and configs used:
* [eslint-config-airbnb](https://yarnpkg.com/en/package/eslint-config-airbnb)
* [eslint-plugin-flowtype](https://yarnpkg.com/en/package/eslint-plugin-flowtype)
* [eslint-plugin-jest](https://yarnpkg.com/en/package/eslint-plugin-jest)

Additionally, it sets these environments:
```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  }
}
```

## Installation
```
yarn add eslint @recats/eslint-config eslint --dev
```

## Usage
Add to your eslint config `.eslintrc`:

```json
{
  "extends": "@recats/eslint-config"
}
```

### Example of extending the configuration

```json
{
  "extends": "@recats/eslint-config",
  "rules": {
    ...
  }
}
```
