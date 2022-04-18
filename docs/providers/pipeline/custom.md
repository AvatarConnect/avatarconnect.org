---
id: custom
title: Custom Stage
description: TODO
---

# `custom` stage

We're always welcoming proposals and pull-requests for new pipeline stages. However, if your needs aren't met by any of the available stages, you can create a custom stage.

### Properties

| Name | Description | Required |
|-|-|-|
| **`component`** | An imported Vue component implementing [this skeleton](#component-skeleton) | **`true`** |

### `component`

With the `component` property, you can import a custom Vue component to create

### Component Skeleton

```html title="/providers/MyProvider/component.vue"
<i18n locale="en" lang="json5">
{
  'example-string': "This is an example string"
}
</i18n>
<template>
  <div class="my-custom-component">
    <p v-t="'example-string'" class="my-custom-component__text"></p>
  </div>
</template>
<script>
import stage from '@/Bridge/ProviderManager/Stages/Common/mixins/stage'

export default {
  mixins: [stage],
  data() {
    return {
      exampleAttribute: null,
    }
  },
  mounted() {
    // Do stuff on component mount
  },
  methods: {
    onError(error) {
      this.$emit('error', error)
    },
    onResult(result) {
      this.$emit('result', result)
    },
  },
}
</script>
<style lang="postcss" scoped>
.my-custom-component {
  @apply flex justify-center items-center;

  &__text {
    @apply text-gray-500;
  }
}
</style>
```

### Usage
```javascript title="/providers/MyProvider/index.js"
import MyCustomComponent from  './component.vue'

export default {
  ...,
  pipeline: [
    ...,
    {
      component: MyCustomComponent,
      type: 'custom',
    },
  ]
  ...,

```