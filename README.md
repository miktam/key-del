# Delete keys from Javascript object


[![NPM](https://nodei.co/npm/key-del.png?downloads=true&stars=true)](https://nodei.co/npm/key-del/)


## Assumptions
* takes two parameters (object, and keys to delete)
* second parameter (keys to delete) could be string for single key, or array of strings (for multiple keys)
* original object shall not be modified
* modified object is returned as a result of the invocation
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

console.log(originalObject) // { one: 1, two: 2, three: { nestedOne: 3, nestedTwo: 4 } }

var result = deleteKey(originalObject, ['one', 'nestedOne'])

console.log(result) // {two: 2, three: {nestedTwo: 4}}
```