const { Router } = require('express')
const { newsController } = require('../controllers/news.controller')

const router = Router()

router.get('/', newsController.getNews)
router.get('/:id', newsController.getNewsById)
router.get('/category/:categoryID', newsController.getNewsByCategory)
router.post('/', newsController.addNews)
router.patch('/:id', newsController.updateNews)
router.delete('/:id', newsController.deleteNews)

module.exports = router;