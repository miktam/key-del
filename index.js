// Copyright 2014 Andrei Karpushonak

var _ = require('lodash')

var deleteKeysFromObject = function (object, keys) {
  var keysToDelete;

  // do not modify original object
  var finalObject = _.clone(object, isDeep=true)

  if (typeof finalObject === 'undefined') throw new Error('undefined is not a valid object.')
  if (arguments.length != 2) throw new Error("provide two parameters: object and list of keys")

  // collect keys
  if (Array.isArray(keys)) {
    keysToDelete = keys
  } else {
    keysToDelete = [keys]
  }

  keysToDelete.forEach(function(elem) {
    for(var prop in finalObject) {
      if(finalObject.hasOwnProperty(prop))
        if (elem === prop) {
          var deleteResult = delete finalObject[prop]
        } else {
          // check nested attributes, if it's an object, and not array (thank you, Javascript)
          if (typeof(finalObject[prop]) == 'object' && !Array.isArray(finalObject[prop])) {
            finalObject[prop] = deleteKeysFromObject(finalObject[prop], keysToDelete)
          }
        }
    }
  })

  return finalObject

}

module.exports = deleteKeysFromObject

