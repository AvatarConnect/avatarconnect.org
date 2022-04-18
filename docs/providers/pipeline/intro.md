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