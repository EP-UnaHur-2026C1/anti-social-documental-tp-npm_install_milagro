const { Router } = require('express')
const followController = require('../controllers/follow.controllers')

const {
    validarFollow,
    validarFollowUsers
} = require("../middlewares/comentarios.middlewares")

const router = Router()
router.get('/', followController,followController.obtenerFollows)
router.get('/:user', validarUser, followController.obtenerFollowsDeUser)
router.post('/',validarFollow, validarFollowingUser, validarFollowedUser, followController.crearFollow)
router.delete('/',validarFollow, validarFollowingUser, validarFollowedUser, followController.eliminarFollow)

module.exports = router