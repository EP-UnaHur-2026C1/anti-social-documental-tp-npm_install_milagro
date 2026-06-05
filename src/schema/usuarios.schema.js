const Joi = require("joi")

const schemaUsuarios = Joi.object( {
    nickname: Joi.string().min(3).max(50).required().messages({
        "string.base": "El campo nickname es obligatorio y debe ser texto",
        "string.empty": "El campo nickname es obligatorio",
        "string.min": "El campo nickname debe tener al menos 3 caracteres"
    })
})

module.exports = schemaUsuarios