// Core
const mock = require('../../models/get-article.js')

module.exports = class Show {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.get('/article/show/:id', (req, res) => {
      try {
        if (!req.params || !req.params.id.length) {
          res.status(404).json({
            code: 404,
            message: 'Not Found'
          })
        }

        res.status(200).json(mock[req.params.id] || {})
      } catch (e) {
        console.error(`[ERROR] article/show/:id -> ${e}`)
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
