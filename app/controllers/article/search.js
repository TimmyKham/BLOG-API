// Core
const mock = require('../../models/article.js')
const validator = require('node-validator')

const check = validator.isObject()
  .withRequired('id', validator.isArray())

module.exports = class Search {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.ArticleModel = connect.model('Article', mock)
    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.post('/article/search', validator.express(check), (req, res) => {
      try {
        const result = {}
        const id = req.body.id

        for (let i = 0, len = id.length; i < len; i += 1) {
          Object.assign(result, {
            [id[i]]: mock[id[i]]
          })
        }

        res.status(200).json(result)
      } catch (e) {
        console.error(`[ERROR] article/search -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}
