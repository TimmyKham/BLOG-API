// Core
const mock = require('../../models/get-article.js')
const validator = require('node-validator')

const check = validator.isObject()
  .withRequired('name', validator.isString())

module.exports = class Update {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.put('/article/update/:id', validator.express(check), (req, res) => {
      try {
        if (!req.params || !req.params.id.length) {
          res.status(404).json({
            code: 404,
            message: 'Not Found'
          })
        }

        const name = req.body.name
        const article = mock[req.params.id]

        article.name = name

        res.status(200).json({
          [req.params.id]: article
        })
      } catch (e) {
        console.error(`[ERROR] article/update -> ${e}`)
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
