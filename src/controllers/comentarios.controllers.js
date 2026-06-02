const { Comment } = require('../models')

const obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await Comment.findAll()
        res.json(comentarios)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const obtenerComentario = async (req, res) => {
    try {
        const comentario = await Comment.findByPk(req.params.id)

        if (!comentario) {
            return res.status(404).json({
                mensaje: 'Comentario no encontrado'
            })
        }

        res.json(comentario)

    } catch (error) {
        res.status(500).json({ error: error.message })
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
        res.status(500).json({ error: error.message })
    }
}

const editarComentario = async (req, res) => {
    try {
        const comentario = await Comment.findByPk(req.params.id)

        if (!comentario) {
            return res.status(404).json({
                mensaje: 'Comentario no encontrado'
            })
        }

        await comentario.update({
            text: req.body.text,
            is_visible: req.body.is_visible
        })

        res.json(comentario)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const eliminarComentario = async (req, res) => {
    try {
        const comentario = await Comment.findByPk(req.params.id)

        if (!comentario) {
            return res.status(404).json({
                mensaje: 'Comentario no encontrado'
            })
        }

        await comentario.destroy()

        res.json({
            mensaje: 'Comentario eliminado'
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    obtenerComentarios,
    obtenerComentario,
    crearComentario,
    editarComentario,
    eliminarComentario
}