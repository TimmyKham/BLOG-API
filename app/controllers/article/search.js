// Core
const mock = require('../../models/article.js')

module.exports = class Search {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.ArticleModel = connect.model('Article', mock)

    this.run()
  }

  middleware () {
    this.app.get('/article/search/:id', (req, res) => {
      try {
        if (!req.params || !req.params.id.length) {
          res.status(404).json({
            code: 404,
            message: 'Not Found'
          })
        }
      this.ArticleModel.find(req.params.id,(err,results) => {
        if(err){
          res.status(400).json({
            'code': 400,
            'message': 'Bad request'
        })
      }
      res.status(200).json(results) || {};
    });
      } catch (e) {
        console.error(`[ERROR] article/search/:id -> ${e}`)
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
