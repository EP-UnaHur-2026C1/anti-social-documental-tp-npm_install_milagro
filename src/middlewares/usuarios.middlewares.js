const User = require("../models/User")
const schemaUsuarios = require("../schema/usuarios.schema")

const validarUsuarioSchema = (req, res, next) => {
    const { error } = schemaUsuarios.validate(req.body)

    if (error) {
        return res.status(400).json({
            error: `El body no cumple con los parametros solicitados: ${error.details[0].message}`
        })
    }

    next()
}

const validarUsuarioId = async (req, res, next) => {
    try {
        const { id } = req.params

        const usuario = await User.findOne({
            nickname: id
        }).select("nickname")

        if (!usuario) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            })
        }

        req.usuario = usuario

        next()

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

const validarUsuarioExistenteEnBody = async (req, res, next) => {
    try {
        const { user_nickname } = req.body

        const usuario = await User.findOne({
            nickname: user_nickname
        })

        if (!usuario) {
            return res.status(404).json({
                mensaje: "No se puede crear la publicación: el usuario no existe en la base de datos"
            })
        }

        req.usuario = usuario

        next()

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    validarUsuarioId,
    validarUsuarioSchema,
    validarUsuarioExistenteEnBody
}