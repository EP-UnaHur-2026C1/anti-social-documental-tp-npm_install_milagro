const { User } = require('../models')

const obtenerUsuarios = async (req, res) => {
    /* #swagger.tags = ['Usuarios']
        #swagger.summary = 'Obtener todos los usuarios del sistema'
        #swagger.responses[200] = {
            description: 'Usuarios retornados exitosamente.'
        }
    */


    try {

        /*TODO: cambiar por el de mongo
        const usuarios = await User.findAll()
        */
    
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de obtener los usuarios: ${error.message}` })
    }
}

const obtenerUsuario = (req, res) => {
    /* #swagger.tags = ['Usuarios']
        #swagger.summary = 'Obtiene los detalles de un usuario por su ID'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID cadena de texto del usuario a buscar',
            required: true,
            type: 'string'
        }
        #swagger.responses[200] = {
            description: 'Usuario encontrado exitosamente.'
        }
        #swagger.responses[404] = {
            description: 'Usuario no encontrado.'
        }
    */


    try {
        const usuario = req.usuario

        res.status(200).json(usuario)

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de obtener el usuario: ${error.message}` })
    }
}


const crearUsuario = async (req, res) => {
    /* #swagger.tags = ['Usuarios']
        #swagger.summary = 'Crea un nuevo usuario en el sistema'
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UsuarioNuevo"
                    }
                }
            }
        }
        #swagger.responses[201] = {
            description: 'Usuario creado exitosamente.'
        }
        #swagger.responses[400] = {
            description: 'El nickname es obligatorio o está vacío.'
        }
    */


    try {

        /*TODO: cambiar por el de mongo
        const usuario = await User.create({
            nickname: req.body.nickname
        })*/

        res.status(201).json(usuario)

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de crear el usuario: ${error.message}` })
    }
}

const editarUsuario = async (req, res) => {
    /* #swagger.tags = ['Usuarios']
        #swagger.summary = 'Editar los datos de un usuario por su ID'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID cadena de texto del usuario a buscar',
            required: true,
            type: 'string'
        }
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UsuarioNuevo"
                    }
                }
            }
        }
        #swagger.responses[200] = {
            description: 'Usuario modificado con exito.'
        }
        #swagger.responses[400] = {
            description: 'El nickname es obligatorio o está vacío.'
        }
        #swagger.responses[404] = {
            description: 'Usuario no encontrado en la base de datos.'
        }
    */


    try {

        //nickname validado viejo
        const {nickname} = req.usuario

        /*TODO: cambiar por el de mongo
        await User.update({
            nickname: req.body.nickname //nickname nuevo
            }, {
                where: {
                    nickname: nickname //matchear con el viejo
                }
            }
        );*/

        res.status(200).json("Usuario actualizado con exito")

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de editar el usuario: ${error.message}` })
    }
}

const eliminarUsuario = async (req, res) => {
    /* #swagger.tags = ['Usuarios']
        #swagger.summary = 'Elimina un usuario del sistema por su id'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID cadena de texto del usuario a eliminar',
            required: true,
            type: 'string'
        }
        #swagger.responses[200] = {
            description: 'Usuario eliminado exitosamente.'
        }
        #swagger.responses[404] = {
            description: 'Usuario no encontrado.'
        }
    */


    try {

        const {nickname} = req.usuario

        /*TODO: cambiar por el de mongo
        await User.destroy({
            where: {
                nickname: nickname
            }
        })*/

        res.status(200).json({
            mensaje: 'Usuario eliminado exitosamente'
        })

    } catch (error) {
        res.status(500).json({ error: `Hubo un error a la hora de eliminar el usario: ${error.message}` })
    }
}

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
}