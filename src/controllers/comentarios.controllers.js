const { Comment } = require('../models')

const obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await Comment.findAll()
        res.status(200).json(comentarios)
    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de obtener los comentarios: ${error.message}` })
    }
}

const obtenerComentario =  (req, res) => {
    try {
        const comentario = req.comentario

        res.status(200).json(comentario)

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de obtener un comentario por id: ${error.message}` })
    }
}

const crearComentario = async (req, res) => {
    try {
        const comentario = await Comment.create({
            text: req.body.text,
            is_visible: req.body.is_visible
        })

        res.status(201).json(comentario)

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de crear un comentario: ${error.message}` })
    }
}

const editarComentario = async (req, res) => {
    try {
        const {id} = req.comentario

        await Comment.update({
            text: req.body.text,
            is_visible: req.body.is_visible
        }, {
            where: {
                id:id
            }
        })

        res.status(200).json({ mensaje: `Mensaje actualizado con exito` })

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de editar el comentario: ${error.message}` })
    }
}

const eliminarComentario = async (req, res) => {
    try {
        const {id} = req.comentario

        await Comment.destroy({
            where: {
                id: id
            }
        })

        res.status(200).json({
            mensaje: 'Comentario eliminado'
        })

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de eliminar el comentario: ${error.message}` })
    }
}

module.exports = {
    obtenerComentarios,
    obtenerComentario,
    crearComentario,
    editarComentario,
    eliminarComentario
}