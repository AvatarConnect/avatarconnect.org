---
id: context
title: Function Context
description: TODO
---

# Function context

All functions you use in the provider stage can make use of `this`. We provide the following properties for you to leverage:

### `aggregate`

This is the cumulative result of your pipeline operations at the current stage. You can use this to use or transform the values of the previous stage.

### `config`

If applicable, this is an object containing all of the configuration variables required by your provider.

### `$debug(...args)`

This allows you to console log via iframe messages.

#### Usage

```javascript
this.$debug('Hello', 'World')
```

### `$axios`

This is a standard `axios` instance to help with making any API requests in your pipeline.

#### Usage

```javascript
const { data } = await this.$axios.post('https://my-api.com/test?query=test', {
  bodyAttribute: 1
})
```

### `provider`

This is the exported configuration for your provider. Normally only used by generic components and stages, so not likely needed for any `custom` stages.

### `ethereumAddress`

This is the current user's Ethereum address. This will **ONLY** be set after a `web3` stage has been successfully used.