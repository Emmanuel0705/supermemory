```JavaScript
const response = await fetch('https://api.tau.network/v1/context', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer tau_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: 'User swapped 5 ETH for TAU',
    metadata: {
      wallet: '0xabc123...',
      chain: 'Ethereum'
    }
  })
})

const data = await response.json()

```
