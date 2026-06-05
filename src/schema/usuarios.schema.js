const Joi = require("joi")

const schemaUsuarios = Joi.object( {
    nickname: Joi.string().min(3).max(50).required().messages({
        "string.base": "El nickname es obligatorio y debe ser texto",
        "string.empty": "El nickname es obligatorio",
        "string.min": "El nickname debe tener al menos 3 caracteres"
    })
})

module.exports = schemaUsuarios