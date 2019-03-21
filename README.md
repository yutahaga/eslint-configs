# eslint-configs

This is an easy-to-use package of ESLint presets.

---

- [Quickstart](#quickstart)
  - [NPM](#npm)
  - [Yarn](#yarn)
  - [.eslintrc.js](#eslintrcjs)
    - [without prettier](#without-prettier)
    - [with prettier](#with-prettier)
    - [Apply essential official preset for Vue.js](#apply-essential-official-preset-for-vuejs)
    - [All in One Preset for Vue.js](#all-in-one-preset-for-vuejs)
    - [All in One Preset for React.js](#all-in-one-preset-for-reactjs)
- [List of Presets](#list-of-presets)
- [License](#license)

---

## Quickstart

### NPM

```sh
npm install @yutahaga/eslint-config-standard \
            @yutahaga/eslint-config-typescript \
            @yutahaga/eslint-config-prettier -D
```

### Yarn

```sh
yarn add @yutahaga/eslint-config-standard \
         @yutahaga/eslint-config-typescript \
         @yutahaga/eslint-config-prettier -D
```

### .eslintrc.js

#### without prettier

```js
module.exports = {
  extends: [
    'eslint:recommended',
    '@yutahaga/standard',
    '@yutahaga/typescript'
  ]
}
```

#### with prettier

```js
module.exports = {
  extends: [
    '@yutahaga/standard/prettier',
    '@yutahaga/typescript/prettier',
    '@yutahaga/prettier' // "eslint:recommended" is included
  ]
}
```

#### Apply essential official preset for Vue.js

You can also apply `plugin:vue/essential` presets.

```js
module.exports = {
  extends: ['@yutahaga/vue/essential']
}
```

Of course, you can apply prettier too.

```js
module.exports = {
  extends: ['@yutahaga/vue/essential/prettier', '@yutahaga/prettier']
}
```

#### All in One Preset for Vue.js

This preset contains the following presets.

- [typescript](https://github.com/yutahaga/eslint-configs/tree/master/packages/typescript)
- [vue](https://github.com/yutahaga/eslint-configs/tree/master/packages/vue)
- [prettier](https://github.com/yutahaga/eslint-configs/tree/master/packages/prettier)

```js
module.exports = {
  extends: ['@yutahaga/vue-all-in-one']
}
```

#### All in One Preset for React.js

This preset contains the following presets.

- [typescript](https://github.com/yutahaga/eslint-configs/tree/master/packages/typescript)
- [react](https://github.com/yutahaga/eslint-configs/tree/master/packages/react)
- [prettier](https://github.com/yutahaga/eslint-configs/tree/master/packages/prettier)

```js
module.exports = {
  extends: ['@yutahaga/react-all-in-one']
}
```

## List of Presets

- [babel](https://github.com/yutahaga/eslint-configs/tree/master/packages/babel)
- [es-modules](https://github.com/yutahaga/eslint-configs/tree/master/packages/es-modules)
- [prettier](https://github.com/yutahaga/eslint-configs/tree/master/packages/prettier)
- [react](https://github.com/yutahaga/eslint-configs/tree/master/packages/react)
- [react-all-in-one](https://github.com/yutahaga/eslint-configs/tree/master/packages/react-all-in-one)
- [standard](https://github.com/yutahaga/eslint-configs/tree/master/packages/standard)
- [standard-all-in-one](https://github.com/yutahaga/eslint-configs/tree/master/packages/standard-all-in-one)
- [typescript](https://github.com/yutahaga/eslint-configs/tree/master/packages/typescript)
- [vue](https://github.com/yutahaga/eslint-configs/tree/master/packages/vue)
- [vue-all-in-one](https://github.com/yutahaga/eslint-configs/tree/master/packages/vue-all-in-one)

## License

MIT © 2018 Yuta Haga
