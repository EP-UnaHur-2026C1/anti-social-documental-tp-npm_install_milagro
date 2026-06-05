const { Router } = require('express')
const usuariosController = require('../controllers/usuarios.controllers')

const {
    validarUsuarioSchema,
    validarUsuarioId
} = require("../middlewares/usuarios.middlewares")

const router = Router()

router.get('/', usuariosController.obtenerUsuarios)
router.get('/:id', validarUsuarioId, usuariosController.obtenerUsuario)
router.post('/', validarUsuarioSchema, usuariosController.crearUsuario)
router.put('/:id', validarUsuarioId, validarUsuarioSchema, usuariosController.editarUsuario)
router.delete('/:id', validarUsuarioId, usuariosController.eliminarUsuario)


module.exports = router