# mobiliteit.lu profile for `hafas-client`

[*mobiliteit.lu*](https://www.mobiliteit.lu) provides public transport data for Luxembourg.

## Usage

```js
const createClient = require('hafas-client')
const mobiliteitProfile = require('hafas-client/p/mobiliteit-lu')

// create a client with mobiliteit.lu profile
const client = createClient(mobiliteitProfile)
```


## Customisations

- parses *mobiliteit.lu*-specific products
