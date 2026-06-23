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

    /* TODO: cambiar por el de mongo
    const comentario = await Comment.findByPk(id)
    */

    if (!comentario) {
        return res.status(404).json({
            mensaje: 'Comentario no encontrado'
        })
    }

    req.comentario = comentario

    next()
}

const validarPublicacionYComentarioId = async (req, res, next) => {

    const { postId, comentarioId } = req.params

    /* TODO: cambiar por el de mongo
    const comentario = await Comment.findOne({
        where: {
            id: comentarioId,
            post_id: postId
        }
    })
    */

    if (!comentario) {
        return res.status(404).json({
            mensaje: 'Comentario no encontrado o no esta en este post'
        })
    }

    req.comentario = comentario
    req.publicacion = postId

    next()
}

module.exports = {
    validarComentario,
    validarComentarioId,
    validarPublicacionYComentarioId
}