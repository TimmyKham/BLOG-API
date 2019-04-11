const Create = require('./user/create.js')
const Show = require('./user/show.js')
const Search = require('./user/search.js')
const Update = require('./user/update.js')
const Destroy = require('./user/destroy.js')
const CreateA = require('./article/create.js')
const ShowA = require('./article/show.js')
const SearchA = require('./article/search.js')
const UpdateA = require('./article/update.js')
const DestroyA = require('./article/destroy.js')

module.exports = {
  user: {
    Create,
    Show,
    Search,
    Update,
    Destroy
  },
  article: {
    CreateA,
    ShowA,
    SearchA,
    UpdateA,
    DestroyA
  }
}
