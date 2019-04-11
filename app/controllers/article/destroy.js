// Core
const mock = require('../../models/get-article.js')

module.exports = class Destroy {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.delete('/article/destroy/:id', (req, res) => {
      try {
        if (!req.params || !req.params.id.length) {
          res.status(404).json({
            code: 404,
            message: 'Not Found'
          })
        }

        delete mock[req.params.id]

        res.status(200).json(mock || {})
      } catch (e) {
        console.error(`[ERROR] article/destroy/:id -> ${e}`)
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
