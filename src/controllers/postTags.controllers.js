const {Post, Tag} = require("../models")

const agregarEtiqueta = async (req, res) => {
    /* #swagger.tags = ['Publicaciones']
        #swagger.summary = 'Agrega una etiqueta por su id a una publicacion del sistema por su id'
        #swagger.parameters['postId'] = {
            in: 'path',
            description: 'ID de la publicación',
            required: true,
            type: 'integer'
        }
        #swagger.parameters['tagId'] = {
            in: 'path',
            description: 'ID de la etiqueta',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Etiqueta asociada exitosamente.'
        }
        #swagger.responses[404] = {
            description: 'Publicacion no encontrada.'
        }
        #swagger.responses[404] = {
            description: 'Etiqueta no encontrada.'
        }
    */

    try {
        const post = req.publicacion
        const tag = req.etiqueta

        await post.addTag(tag)

        res.json({
            mensaje: 'Etiqueta asociada exitosamente'
        })

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de agregar una etiqueta al post: ${error.message}` })
    }
}

const obtenerEtiquetasDePost = async (req, res) => {
    /* #swagger.tags = ['Publicaciones']
        #swagger.summary = 'Obtener todas las etiquetas de una publicacion del sistema por su id'
        #swagger.parameters['postId'] = {
            in: 'path',
            description: 'ID de la publicación',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Etiquetas de la publicacion.'
        }
        #swagger.responses[404] = {
            description: 'Publicacion no encontrada.'
        }
    */

    try {
        const {id} = req.publicacion

        const etiquetas = await Post.findByPk(id, {
            attributes: [],
            include: {
                model: Tag,
                as: "tags",
                attributes: ["name"],
                through:{
                    attributes: []
                }
            }
        })

        const etiquetasMapeadas = etiquetas.tags.map(e => e.name)
        const return_final = {
            publicacion_id: id,
            etiquetas: etiquetasMapeadas
        }

        res.json(return_final)

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de obtener etiquetas de un post por id: ${error.message}` })
    }
}

module.exports = {
    agregarEtiqueta,
    obtenerEtiquetasDePost
}