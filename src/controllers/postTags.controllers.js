const Post = require("../models/Post")

const agregarEtiqueta = async (req, res) => {
    /* #swagger.tags = ['Publicaciones']
    #swagger.summary = 'Agregar etiqueta por id a una publicacion por su ID'
    */

    try {

        const post = req.publicacion
        const tag = req.etiqueta

        const existe = post.etiquetas.some(
            id => id.toString() === tag._id.toString()
        )

        if (existe) {
            return res.status(400).json({
                mensaje: "La etiqueta ya está asociada a la publicación"
            })
        }

        post.etiquetas.push(tag._id)

        await post.save()

        res.status(201).json({
            mensaje: "Etiqueta asociada exitosamente"
        })

    } catch (error) {

        res.status(500).json({
            error: `Hubo un error a la hora de agregar una etiqueta al post: ${error.message}`
        })

    }
}

const obtenerEtiquetasDePost = async (req, res) => {
    /* #swagger.tags = ['Publicaciones']
    #swagger.summary = 'Obtener etiquetas de una publicacion por su ID'
    */

    try {

        const post = await Post.findById(req.publicacion._id)
            .populate("etiquetas", "name")

        const etiquetas = post.etiquetas.map(tag => tag.name)

        res.status(200).json({
            publicacion_id: post._id,
            etiquetas: etiquetas
        })

    } catch (error) {

        res.status(500).json({
            error: `Hubo un error a la hora de obtener etiquetas de un post: ${error.message}`
        })

    }
}

module.exports = {
    agregarEtiqueta,
    obtenerEtiquetasDePost
}