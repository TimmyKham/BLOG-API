// Core
const Schema = require('../../models/article.js')
const validator = require('node-validator')
const check = require('./payload-validator/update.js')

module.exports = class Destroy {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.check = check
    this.ArticleModel = connect.model('Article', Schema)

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
        this.ArticleModel.findOneAndReplace({_id : req.params.id},{titre: req.body.titre, description: req.body.description},(err,results) => {
        if(err){
          res.status(400).json({
            'code': 400,
            'message': 'Bad request'
          })
        } 
        res.status(200).json(results);
        });
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
