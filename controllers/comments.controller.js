const Comment = require('../Models/Comment.model')

module.exports.commentsController = {

    addCom: (req, res) => {
        Comment.create({
            comAuthor: req.body.comAuthor,
            comText: req.body.comText,
            newsId: req.params.newsId
        }).then((Comment) => {
            res.json(Comment);
        })
    },

    getCom: (req, res) => {
        Comment.find({ newsId: req.params.newsId }).then((Comment) => {
            res.json(Comment)
        })
    },
    
    deleteCom: function (req, res) {
        Comment.findByIdAndDelete(req.params.comId).then(() => {
            res.json("Комментарий удалён.")
        })
    }
}