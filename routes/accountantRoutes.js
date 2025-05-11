const express = require('express')
const router = express.Router()
const accoutantController = require('../controllers/accountantController')
const { verifyToken, verifyRole } = require('../middlewares/authMiddleware')

router.get('/hello', verifyToken, verifyRole(['user']), accoutantController.hello)

module.exports = router