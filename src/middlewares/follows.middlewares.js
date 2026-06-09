const { Follows, User } = require('../models');
const { schemaFollows } = require('../schema/follows.schema');

const validarFollow = (req, res, next) => {

    const {error} = schemaFollows.validate(req.body)

    if (error) {
        return res.status(400).json({error: `El body no cumple con los parametros solicitados: ${error.details[0].message}`})
    }

    next()
}

const validarUser = async (req,res,next) => {
    const { user } = req.params

    const following = await  User.findByPk(user, {
        attributes: ["nickname"]
    })

    if (!following) {
        return res.status(404).json({
            mensaje: 'Usuario inexistente'
        })
    }

    next()
}

const validarFollowingUser = async (req, res, next) => {
    const { following_user_nickname  } = req.body


    const seguidos = await Follows.findOne({
        where: {
            following_user_nickname : following_user_nickname 
        }
    })

    const seguidor = await  User.findByPk(following_user_nickname , {
        attributes: ["nickname"]
    })


    if (!seguidor || !seguidos) {
        return res.status(404).json({
            mensaje: 'Ususarios Seguidos no encontrados o Usuario inexistente'
        })
    }
    
    req.following_user_nickname  = following_user_nickname 

    next()
}

const validarFollowedUser = async (req, res, next) => {
    const {followed_user_nickname } = req.body

    const seguido = await User.findByPk(followed_user_nickname, {
        attributes: ["nickname"]
    })

    if (!seguido) {
        return res.status(404).json({
            mensaje: 'Usuario a seguir inexistente'
        })
    }
    
    req.followed_user_nickname = followed_user_nickname

    next()
}


module.exports = {
    validarFollow,
    validarUser,
    validarFollowingUser,
    validarFollowedUser
}