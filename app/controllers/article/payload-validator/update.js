// Dependencies
const validator = require('node-validator');

// Schemas
module.exports = validator.isObject()
  .withOptional('titre', validator.isString())
  .withOptional('description', validator.isString())
