const { Router } = require('express')
const comentariosController = require('../controllers/comentarios.controllers')

const router = Router()

router.get('/', comentariosController.obtenerComentarios)
router.get('/:id', comentariosController.obtenerComentario)
router.post('/', comentariosController.crearComentario)
router.put('/:id', comentariosController.editarComentario)
router.delete('/:id', comentariosController.eliminarComentario)

module.exports = router