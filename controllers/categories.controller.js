const Category = require('../Models/Category.model')

module.exports.categoriesController = {

    addCategory: (req, res) => {
        Category.create({
            name: req.body.name,
        }).then((cat) => {
            res.json(cat);
        })
    },

    getCategory: (req, res) => {
        Category.find().then((cat) => {
            res.json(cat)
        })
    },

    deleteCategory: function (req, res) {
        Category.findByIdAndDelete(req.params.id).then(() => {
            res.json("Категория удалена.")
        })
    }
}