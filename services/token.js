import jwt from 'jsonwebtoken';
import models from '../models';

async function checkToken(token) {
    let __id = null;
    try {
        const { _id } = jwt.decode(token);
        __id = _id;
    } catch (e) {
        return false;
    }
    const user = await models.Usuario.findOne({ _id: __id, estado: 1 });
    if (user) {
        const token = jwt.sign({ _id: __id }, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_EXPIRES_IN});
        return { token, rol: user.rol };
    } else {
        return false;
    }
}

export default {
    encode: async (_id) => {
        const token = jwt.sign({ _id: _id }, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_EXPIRES_IN});
        return token;
    },
    decode: async (token) => {
        try {
            const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await models.Usuario.findOne({ _id, estado: 1 });
            if (user) {
                return user;
            } else {
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}