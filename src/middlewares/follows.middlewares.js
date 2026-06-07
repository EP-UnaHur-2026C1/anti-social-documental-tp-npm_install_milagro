const { follows } = require('../models');
const { schemaFollows } = require('../schema/follows.schema');

const validarFollow = (req, res, next) => {

    const {error} = schemaFollows.validate(req.body)
    if (error) {
        return res.status(400).json({error: `El body no cumple con los parametros solicitados: ${error.details[0].message}`})
    }

    next()
}

const validarFollowing = (req, res, next) => {
    const {nickFollowing} = req.params

    const seguidos = follows.findAll({
        where: {
            following_user_nickname : nickFollowing
        }
    })

    if (!seguidos) {
        return res.status(404).json({
            mensaje: 'Ususarios Seguidos no encontrados o Usuario inexistente'
        })
    }

    //no se si iría algo aca entre medio

    next()
}