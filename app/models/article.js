const Schema = require('mongoose').Schema;

module.exports = new Schema({
  'titre': String,
  'date_article': Date,
  'description': String
}, {
  'collection': 'articles',
  'versionKey': false
});