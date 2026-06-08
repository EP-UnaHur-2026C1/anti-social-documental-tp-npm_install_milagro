const { Follows, User } = require('../models');
const { schemaFollows } = require('../schema/follows.schema');

const validarFollow = (req, res, next) => {

    const {error} = schemaFollows.validate(req.body)

    if (error) {
        return res.status(400).json({error: `El body no cumple con los parametros solicitados: ${error.details[0].message}`})
    }

    next()
}

const validarFollowingUser = async (req, res, next) => {
    const nickSeguidor = req.params.user


    const seguidos = await Follows.findOne({
        where: {
            following_user_nickname : nickSeguidor
        }
    })

    const seguidor = await  User.findByPk(nickSeguidor, {
        attributes: ["nickname"]
    })


    if (!seguidor || !seguidos) {
        return res.status(404).json({
            mensaje: 'Ususarios Seguidos no encontrados o Usuario inexistente'
        })
    }
    
    req.nicknameSeguidor = nickSeguidor

    next()
}

const validarFollowedUser = async (req, res, next) => {
    const {followedUser} = req.params

    const seguido = await User.findByPk(followedUser, {
        attributes: ["nickname"]
    })

    if (!seguido) {
        return res.status(404).json({
            mensaje: 'Usuario a seguir inexistente'
        })
    }
    
    req.nicknameSeguido = followedUser

    next()
}


module.exports = {
    validarFollow,
    validarFollowingUser,
    validarFollowedUser
}