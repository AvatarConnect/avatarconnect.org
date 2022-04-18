---
id: web3
title: Web3 Stage
description: TODO
---

## Usage
```javascript title="/providers/MyProvider/index.js"
export default {
  ...,
  pipeline: [
    {
      format(result) {
        const [address] = result
        return address // Passes the user's Ethereum address as the `aggregate` for the next stage
      },
      method: 'eth_requestAccounts',
      type: 'web3',
    },
    ...
  ]
}
```


## Example