import tokenService from "../services/token";

export default {
    verifyUsuario: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }

        const response = await tokenService.decode(req.headers.token);

        if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Bodeguero') {
            next();
        } else {
            res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

    verifyAdministrador: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }

        const response = await tokenService.decode(req.headers.token);

        if (response.rol == 'Administrador') {
            next();
        } else {
            res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

    verifyBodeguero: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }

        const response = await tokenService.decode(req.headers.token);

        if (response.rol == 'Administrador' || response.rol == 'Bodeguero') {
            next();
        } else {
            res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

    verifyVendedor: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }

        const response = await tokenService.decode(req.headers.token);

        if (response.rol == 'Administrador' || response.rol == 'Vendedor') {
            next();
        } else {
            res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
}