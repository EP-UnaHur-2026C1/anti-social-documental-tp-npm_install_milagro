const User = require("../models/User")

const obtenerFollows = async (req, res) => {

    try {

        const usuarios = await User.find()
            .populate("seguidos", "nickname")
            .select("nickname seguidos")

        res.status(200).json(usuarios)

    } catch (error) {

        res.status(500).json({
            error: `Hubo un error al obtener los follows: ${error.message}`
        })

    }

}

const obtenerFollowsDeUser = async (req, res) => {

    try {

        await req.user.populate("seguidos", "nickname")

        res.status(200).json(req.user.seguidos)

    } catch (error) {

        res.status(500).json({
            error: `Hubo un error al obtener los follows: ${error.message}`
        })

    }

}

const crearFollow = async (req, res) => {

    try {

        const seguidor = req.user
        const seguido = req.followedUser

        await User.findByIdAndUpdate(
            seguidor._id,
            {
                $addToSet: {
                    seguidos: seguido._id
                }
            }
        )

        await User.findByIdAndUpdate(
            seguido._id,
            {
                $addToSet: {
                    seguidores: seguidor._id
                }
            }
        )

        res.status(201).json({
            mensaje: "Seguimiento creado correctamente"
        })

    } catch (error) {

        res.status(500).json({
            error: `Hubo un error al registrar el follow: ${error.message}`
        })

    }

}

const eliminarFollow = async (req, res) => {

    try {

        const seguidor = req.user
        const seguido = req.followedUser

        await User.findByIdAndUpdate(
            seguidor._id,
            {
                $pull: {
                    seguidos: seguido._id
                }
            }
        )

        await User.findByIdAndUpdate(
            seguido._id,
            {
                $pull: {
                    seguidores: seguidor._id
                }
            }
        )

        res.status(200).json({
            mensaje: "Seguimiento eliminado"
        })

    } catch (error) {

        res.status(500).json({
            error: `Hubo un error al eliminar el follow: ${error.message}`
        })

    }

}

module.exports = {
    crearFollow,
    obtenerFollows,
    eliminarFollow,
    obtenerFollowsDeUser
}