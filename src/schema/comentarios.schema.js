const Joi = require("joi")

const schemaComentarios = Joi.object( {
    text: Joi.string().min(3).max(50).required().messages({
        "string.base": "El campo text es obligatorio y debe ser texto",
        "string.empty": "El campo text es obligatorio",
        "string.min": "El campo text debe tener al menos 3 caracteres"
    }),
    is_visible: Joi.boolean().required().messages({
        "boolean.base": "El campo is_visible debe ser booleano",
        "boolean.empty": "El campo is_visible es obligatorio"
    })
})

module.exports = schemaComentarios