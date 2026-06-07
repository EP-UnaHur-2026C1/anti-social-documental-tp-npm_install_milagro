const { follows } = require('../models');
const { schemaFollows } = require('../schema/follows.schema');

const validarFollow = (req, res, next) => {

    const {error} = schemaFollows.validate(req.body)
    if (error) {
        return res.status(400).json({error: `El body no cumple con los parametros solicitados: ${error.details[0].message}`})
    }

    next()
}

const validarFollow = (req, res, next) => {
    const {nicknameSeguidor, nicknameSeguido} = req.params

    const seguidos = await follows.findOne({
        where: {
            following_user_nickname : nicknameSeguidor
        }
    })

    if (!seguidos) {
        return res.status(404).json({
            mensaje: 'Ususarios Seguidos no encontrados o Usuario inexistente'
        })
    }

    req.nicknameSeguidor = nicknameSeguidor
    req.nicknameSeguido = nicknameSeguido

    next()
}