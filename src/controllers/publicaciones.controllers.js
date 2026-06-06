const { Post, User } = require('../models')

const obtenerPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Post.findAll({
            include: {
                model: User,
                as: 'user'
            }
        })

        const publicacionesMapeadas = publicaciones.map(publi => {
            return {
                id: publi.id ,
                text: publi.text,
                description: publi.description,
                user_nickname: publi.user_nickname
            }
        })

        res.status(200).json(publicacionesMapeadas)

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de obtener las publicaciones: ${error.message}` })
    }
}

const obtenerPublicacion = async (req, res) => {
    try {
        const publicacion = req.publicacion

        res.status(200).json(publicacion)

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de obtener la publicacion por ID: ${error.message}` })
    }
}

const crearPublicacion = async (req, res) => {
    try {

        const publicacion = await Post.create({
            user_nickname: req.body.user_nickname,
            text: req.body.text,
            description: req.body.description
        })

        res.status(201).json(publicacion)

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de crear una publicacion: ${error.message}` })
    }
}

const editarPublicacion = async (req, res) => {
    try {
        const {id} = req.publicacion

        await Post.update({
            text: req.body.text,
            description: req.body.description
        }, {
            where: {
                id: id
            }
        })

        res.status(200).json("Publicacion actualizada con exito")

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de editar la publicacion: ${error.message}` })
    }
}

const eliminarPublicacion = async (req, res) => {
    try {
        const {id} = req.publicacion

        await Post.destroy({
            where: {
                id: id
            }
        })

        res.status(200).json("Publicacion eliminada")

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la eliminar la publicacion: ${error.message}` })
    }
}

module.exports = {
    obtenerPublicaciones,
    obtenerPublicacion,
    crearPublicacion,
    editarPublicacion,
    eliminarPublicacion
}