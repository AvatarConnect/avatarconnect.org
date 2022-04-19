---
id: intro
title: Overview
description:
  How to use the identity pipeline to allow users to link and provide their avatars with your platform.
---

# Identity Pipeline

The identity pipeline describes how users link their avatars from your platform.

:::tip

Pipeline creation is quick and painless. Most pipelines are under 20 lines of code 😍

:::

## Stage-based Aggregation

We make it easy for you to create your integration by configuring your data acquisition and transformations in simple-to-use, prebuilt stages. Each stage accepts an **`aggregate`** from the previous stage and performs some operation on that before passing it to the next stage.

## Example Flow

<img src="/illustrations/pipeline.svg" alt="Pipeline.svg" style={{ margin: '0 auto', width: '100%', 'max-width': '1000px' }}/>

## Available Stages

We've created several stages to help you easily create your integration.

- [**`web3` stage**](./web3) - perform web3 operations like requesting signed messages or a user's address
- [**`iframe` stage**](./iframe) - Load and communicate with an external page
- [**`oauth` stage**](./oauth) - Use a standard OAuth 2.0 redirect flow
- [**`select`** stage](./select) - Display a list of avatars for the user to select from
- [**`transform`** stage](./transform) - Perform arbitrary operations in the background
- [**`custom`** stage](./custom) - Use a custom Vue component for total control of the pipeline


## Returning the Result

Your final stage **must** return data in the following format:

```json
{
  "avatar": {
    "uri": "https://exampleavatars.com/my-avatar.vrm", // The URI to a downloadable avatar
    "format": "glb" | "fbx" | "vrm" | ..., // The file format
    "type": "humanoid" | null // A generic animation type for your avatar (if applicable)
  },
  "metadata": {
    // Add attributes needed for your Game engine integration(s)
    ...,
  }
}
```

## CryptoAvatars Example

```javascript title="/providers/CryptoAvatars/index.js"
export default {
  ...,
  // This is the game configuration object for CryptoAvatars (used in STEP 2)
  config: {
    apiKey: { required: true, type: String },
  },
  pipeline: [
    /**
     * STEP 1
     * 
     * Request the user's ethereum address
     */
    {
      // Format the `aggregate` to an individual address rather than array
      format(result) {
        const [address] = result
        return address
      },
      method: 'eth_requestAccounts',
      type: 'web3',
    },
    
    /**
     * STEP 2
     * 
     * Call the CryptoAvatars API asking for a list of the avatars for the ethereum address provided
     */
    {
      async transform() {
        const { data } = await this.$axios.get(
          `https://api.cryptoavatars.io/nfts/avatars/${this.aggregate}?skip=0&limit=20`,
          {
            headers: {
              'API-KEY': this.config.apiKey, // This is provided in the game's AvatarConnect configuration
              accept: 'application/json',
            },
          }
        )
        return data
      },
      type: 'transform',
    },

    /**
     * STEP 3
     * 
     * Present a list of avatars for the user to select from
     */
    {
      // RETURN THE RESULT
      format({ metadata: { asset } }) {
        return { avatar: { format: 'vrm', type: 'humanoid', uri: asset } }
      },
      // Given a list-item, return its image
      image({ metadata: { image } }) {
        return image
      },
      // Given a list-item, return its title
      name({ metadata: { name } }) {
        return name
      },
      type: 'select',
    },
  ],
}
```

### Result

<img src="/demos/crypto-avatars.gif" alt="Pipeline Demo" style={{ margin: '0 auto', width: '100%', 'max-width': '800px' }}/>