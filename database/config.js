// import moongoose from "moongoose";
import mongoose from "mongoose";
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {

        });
        console.log('Connección exitosa');
    } catch (error) {
        console.error(error);
        throw new Error('Error al tratar de conectar con la base de datos');
    }
}

module.exports = {
    dbConnection
};