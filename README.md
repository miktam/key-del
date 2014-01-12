# Delete keys from Javascript object


[![NPM](https://nodei.co/npm/key-del.png?downloads=true&stars=true)](https://nodei.co/npm/key-del/)


## Assumptions

* original object shall not be modified, only the result of the invocation
* nested keys shall be deleted as well


## Installation

`npm install key-del`

## Examples

```javascript
var deleteKey = require('key-del')

var originalObject = {
	one: 1,
	two: 2,
	three: {
	  nestedOne: 3,
	  nestedTwo: 4
	}
}

var result = deleteKey(originalObject, ['one', 'nestedOne'])

console.log(result)
// {two: 2, three: {nestedTwo: 4}}
```