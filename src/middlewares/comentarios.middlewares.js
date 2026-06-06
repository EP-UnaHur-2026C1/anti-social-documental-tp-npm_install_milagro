const { Comment } = require('../models')
const schemaComentarios = require("../schema/comentarios.schema")


const validarComentario = (req, res, next) => {

    const {error} = schemaComentarios.validate(req.body)
    if (error) {
        return res.status(400).json({error: `El body no cumple con los parametros solicitados: ${error.details[0].message}`})
    }

    next()
}

const validarComentarioId = async (req, res, next) => {

    const { id } = req.params

    const comentario = await Comment.findByPk(id)

    if (!comentario) {
        return res.status(404).json({
            mensaje: 'Comentario no encontrado'
        })
    }

    req.comentario = comentario

    next()
}

module.exports = {
    validarComentario,
    validarComentarioId
}