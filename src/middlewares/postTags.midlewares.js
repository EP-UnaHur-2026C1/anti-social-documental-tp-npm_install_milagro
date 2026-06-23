const {Tag, Post} = require("../models")

const validarPublicacionIdYEtiquetaId = async (req, res, next) => {
    const {postId, tagId} = req.params

    /*TODO: cambiar por el de mongo
    const etiqueta = await Tag.findByPk(tagId)
    */

    if (!etiqueta) {
        return res.status(404).json({
            mensaje: 'Etiqueta no encontrada'
        })
    }

    /*TODO: cambiar por el de mongo
    const publicacion = await Post.findByPk(postId)
    */

    if (!publicacion) {
        return res.status(404).json({
            mensaje: 'Publicacion no encontrada'
        })
    }

    req.etiqueta = etiqueta
    req.publicacion = publicacion

    next()
}

module.exports = validarPublicacionIdYEtiquetaId