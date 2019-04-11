// Core
const mock = require('../../models/article.js')

module.exports = class Destroy {
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
    this.app.delete('/article/destroy/:id', (req, res) => {
      try {
        if (!req.params || !req.params.id.length) {
          res.status(404).json({
            code: 404,
            message: 'Not Found'
          })
        }
        this.ArticleModel.findOneAndDelete(req.params.id,(err,results) => {
          if(err){
            res.status(500).json({
            code: 500,
            message: 'Internal Server Error'
          })
        }
        res.status(200).json(results);
      });
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
