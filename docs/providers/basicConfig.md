---
id: basic
title: 2. Basic Configuration
description: TODO
---
# Basic Configuration

TODO: describe this

### Example Provider Configuration

```javascript title="/providers/MyProvider/index.js"
import icon from './icon.svg'

export default {
  config: {
    apiKey: { required: true, validate: v => matchesAPIKeyRegex(v), type: String },
  },
  description: '10,000 unique avatars I made',
  icon,
  id: 'my-provider',
  name: 'My Avatar|My Avatars',
  pipeline: [
    ...
  ],
  title: 'My Provider',
}
```

| Name | Description | Type | Required? |
|-|-|-|-|
| **`config`** | See [Experience Configuration](#experience-configuration-config-object) | `object` |  *optional* |
| **`description`** | A brief description of your integration to show users when they're choosing a provider | `string` | **required** |
| **`icon`** | A reference to an imported SVG icon for your provider or a link to an external icon | `File|string` | **required** |
| **`id`** | A kebab-case, unique identifier for your provider  (i.e. `ready-player-me` or `crypto-avatars`) | `string` | **required** |
| **`name`** | What we'll call your individual avatar (i.e. "Body\|Bodies"). Use "\|" to separate plural name if necessary. | `string` | **required** |
| **`pipeline`** | See the [Pipeline](/docs/providers/pipeline/intro) section | `array` | **required** |
| **`title`** | The plaintext name for your provider | `string` | **required** |

## Experience Configuration (`config` object)

In some instances, it's helpful to have information about the specific game or application using the AvatarConnect bridge. This might be an API key or some other identifier for the game.

Any attributes described in your `config` will be accessible by any functions you define in your `pipeline`.

Your object should be structured as follows:

```javascript title="/providers/MyProvider/index.js"
export default {
  config: {
    <firstProperty>: {
      default: 'A default value', // Optional
      required: true | false, // Default `false`
      type: String | Object | Array | Number | null, // required
      validate: (inputValue) => isValid(inputValue), // return `true` or `false` (optional)
    },
    <anotherProperty>: {
      ...
    }
  },
  ...
}
```
