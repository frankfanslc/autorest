/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.11.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the StorageAccountCheckNameAvailabilityParameters class.
 * @constructor
 * @member {string} [name] 
 *
 * @member {string} [type] 
 *
 */
function StorageAccountCheckNameAvailabilityParameters(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.name !== null && parameters.name !== undefined) {
      this.name = parameters.name;
    }
    if (parameters.type !== null && parameters.type !== undefined) {
      this.type = parameters.type;
    }
  }    
}


/**
 * Validate the payload against the StorageAccountCheckNameAvailabilityParameters schema
 *
 * @param {JSON} payload
 *
 */
StorageAccountCheckNameAvailabilityParameters.prototype.serialize = function () {
  var payload = {};
  if (this['name'] !== null && this['name'] !== undefined) {
    if (typeof this['name'].valueOf() !== 'string') {
      throw new Error('this[\'name\'] must be of type string.');
    }
    payload['name'] = this['name'];
  }

  if (this['type'] !== null && this['type'] !== undefined) {
    if (typeof this['type'].valueOf() !== 'string') {
      throw new Error('this[\'type\'] must be of type string.');
    }
    payload['type'] = this['type'];
  }
};

/**
 * Deserialize the instance to StorageAccountCheckNameAvailabilityParameters schema
 *
 * @param {JSON} instance
 *
 */
StorageAccountCheckNameAvailabilityParameters.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance.name !== null && instance.name !== undefined) {
      this.name = instance.name;
    }

    if (instance.type !== null && instance.type !== undefined) {
      this.type = instance.type;
    }
  }
  return instance;
};

module.exports = StorageAccountCheckNameAvailabilityParameters;
