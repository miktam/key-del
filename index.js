// Copyright 2015 Andrei Karpushonak

"use strict";

var _ = require('lodash');

var deleteKeysFromObject = function (object, keys, options) {
  var keysToDelete;

  // deep copy by default
  var isDeep = true;

  // to preserve backwards compatibility, assume that only explicit options means shallow copy
  if (_.isUndefined(options) == false) {
    if (_.isBoolean(options.copy)) {
      isDeep = options.copy;
    }
  }

  // do not modify original object if copy is true (default)
  var finalObject;
  if (isDeep) {
    finalObject = _.clone(object, isDeep);
  } else {
    finalObject = object;
  }

  if (typeof finalObject === 'undefined') {
    throw new Error('undefined is not a valid object.');
  }
  if (arguments.length < 2) {
    throw new Error("provide at least two parameters: object and list of keys");
  }

  // collect keys
  if (Array.isArray(keys)) {
    keysToDelete = keys;
  } else {
    keysToDelete = [keys];
  }

  keysToDelete.forEach(function(elem) {
    for(var prop in finalObject) {
      if(finalObject.hasOwnProperty(prop)) {
        if (elem === prop) {
          delete finalObject[prop];
        } else {
          // check nested attributes, if it's an object, and not array (thank you, Javascript)
          if (_.isObject(finalObject[prop]) && !_.isArray(finalObject[prop])) {
            finalObject[prop] = deleteKeysFromObject(finalObject[prop], keysToDelete, options);
          }
        }
      }
    }
  });

  return finalObject;

};

module.exports = deleteKeysFromObject;

