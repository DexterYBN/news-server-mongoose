const { Router } = require('express')
const { categoriesController } = require('../controllers/categories.controller')

const router = Router()

router.get('/', categoriesController.getCategory)
router.post('/', categoriesController.addCategory)
router.delete('/:id', categoriesController.deleteCategory)

module.exports = router;