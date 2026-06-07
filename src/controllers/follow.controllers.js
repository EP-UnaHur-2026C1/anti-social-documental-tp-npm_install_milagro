const { Follows, User } = require('../models');

const obtenerSeguidos = async (requestAnimationFrame, res) => {
    const Seguidos = follows.findAll({
        include: {
            model: user,
            as: ''
        }
    })
}