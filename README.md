# Delete (nested) keys from JSON object 

[![Build Status](https://travis-ci.org/avrora/key-del.svg?branch=master)](https://travis-ci.org/avrora/key-del) [![Dependency Status](https://david-dm.org/avrora/key-del.svg)](https://david-dm.org/avrora/key-del)

[![NPM](https://nodei.co/npm/key-del.png?downloads=true&stars=true)](https://nodei.co/npm/key-del/)

## Assumptions
* original object shall not be modified
* modified object is returned
* nested keys shall be deleted as well

## Usage
* takes two parameters (object, and keys to delete)
* second parameter is a string (for single key), or array (for multiple keys)

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

console.log(originalObject)
// { one: 1, two: 2, three: { nestedOne: 3, nestedTwo: 4 } }

var result = deleteKey(originalObject, ['one', 'nestedOne'])

console.log(result)
// {two: 2, three: {nestedTwo: 4}}
```

## Licence

The MIT License (MIT)

Copyright (c) 2014, Andrei Karpushonak aka @miktam, http://avrora.io