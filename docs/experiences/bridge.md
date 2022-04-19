---
id: bridge
title: Bridge SDK
description: TODO
---

# Bridge SDK (web)

A JavaScript sdk for integrating AvatarConnect into your web-based metaverse

:::info
Check out the source code at [github.com/AvatarConnect/sdk](https://github.com/AvatarConnect/sdk)
:::

## Installation

Via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@avatarconnect/sdk/dist/index.js"></script>
```

Using npm:

```bash
$ npm install @avatarconnect/sdk
```

Using bower:

```bash
$ bower install @avatarconnect/sdk
```

Using yarn:

```bash
$ yarn add @avatarconnect/sdk
```

## Usage

```javascript
import AvatarConnect from '@avatarconnect/sdk' // Injected into browser globals if using CDN

const connector = new AvatarConnect(
  [
    ['ready-player-me', { gateway: 'mona' }],
    ['crypto-avatars', { apiKey: '<Your CryptoAvatars API Key>' }],
    'meebits'
  ],
  { maxHeight: 610 }
)

// Display the AvatarConnect modal
connector.enable()

connector.on('close', handleClose)
connector.on('error', handleError)

// Pass the result into the AvatarConnect plugin for your game engine
connector.on('result', handleResult)

// Hide the AvatarConnect modal
connector.disable()
```

## API

```javascript
new AvatarConnect(<providers>[, <options>])
  .on('result', <result handler>)
  .on('close', <close handler>)
  .on('error', <error handler>)
```

### `providers`

A list of providers you want to offer your users. Check out our [**available providers here**](/docs/experiences/providers).

If a provider requires a configuration object, pass it in as a tuple with the provider ID:

```javascript
[
  'provider-id',
  ['provider-with-config', { apiKey: 'XXX' }]
]
```

### `.on('result', <result handler>)`

Here, you'll receive the result from the bridge and pass it to the Game Engine SDK of your choosing. The result handler will receive an object in the following format:

```typescript
interface BridgeResult {
  avatar: {
    format: string // 'glb' | 'vrm' | ...
    type: string // 'humanoid' | null
    uri: string // A downloadable avatar URI
  }
  metadata: unknown // An object containing any custom metadata for the provider used
  provider: string // The ID of the provider used
  version: string // The AvatarConnect Bridge version used
}
```

### `options`

| Option          | Description                                                                                                          | Default                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **`bridgeUrl`** | Pass in a custom url for your own hosted version of [@avatarconnect/bridge](https://github.com/AvatarConnect/bridge) | `https://v0.avatarconnect.org` |
| **`maxHeight`** | Max height of the modal's content (in pixels)                                                                        | `610`                          |
| **`maxWidth`**  | Max width of the modal's content (in pixels)                                                                         | `800`                          |
| **`padding`**   | The padding on the sides of the modal at full width (in pixels)                                                      | `6`                            |