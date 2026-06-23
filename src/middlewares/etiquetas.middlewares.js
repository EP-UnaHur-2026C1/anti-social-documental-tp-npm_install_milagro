const {Tag} = require("../models")
const schemaEtiquetas = require("../schema/etiquetas.schema")

const validarEtiquetaSchema = (req, res, next) => {
    const {error} = schemaEtiquetas.validate(req.body)
    if (error) {
        return res.status(400).json({error: `El body no cumple con los parametros solicitados: ${error.details[0].message}`})
    }

    next()
}

const validarEtiquetaId = async (req, res, next) => {
    const {id} = req.params

    /* TODO: Cambiar por el de Mongo
    const etiqueta = await Tag.findByPk(id)
    */

    if (!etiqueta) {
        return res.status(404).json({
            mensaje: 'Etiqueta no encontrada'
        })
    }

    req.etiqueta = etiqueta

    next()
}

module.exports = {
    validarEtiquetaSchema,
    validarEtiquetaId
}