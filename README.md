# eslint-config-recats

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
yarn add eslint @recats/eslint-config --dev
```

## Usage
Add to your eslint config `.eslintrc`:

```json
{
  "extends": "@recats"
}
```

### Example of extending the configuration

```json
{
  "extends": "@recats",
  "rules": {
    ...
  }
}
```
