const { Post } = require('../models')
const schemaPublicaciones = require("../schema/publicaciones.schema")


const validarPublicacion = (req, res, next) => {

    const {error} = schemaPublicaciones.validate(req.body)
    if (error) {
        return res.status(400).json({error: `El body no cumple con los parametros solicitados: ${error.details[0].message}`})
    }

    next()
}

const validarPublicacionId = async (req, res, next) => {

    const { id } = req.params

    const publicacion = await Post.findByPk(id)

    if (!publicacion) {
        return res.status(404).json({
            mensaje: 'Publicación no encontrada'
        })
    }

    req.publicacion = publicacion

    next()
}

module.exports = {
    validarPublicacion,
    validarPublicacionId
}