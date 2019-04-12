// Dependencies
const validator = require('node-validator');

// Schemas
module.exports = validator.isObject()
  .withOptional('titre', validator.isString())
  .withOptional('date_article', validator.isIsoDate())
  .withOptional('description', validator.isString())
