import mongoose, { Schema } from "mongoose";

const articuloSchema = new Schema({
    categoria:
    {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    codigo:
    {
        type: String,
        maxlength: 64,
    },
    nombre:
    {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    descripcion:
    {
        type: String,
        maxlength: 255
    },
    precio_venta:
    {
        type: Number,
        required: true
    },
    stock:
    {
        type: Number,
        required: true
    },
    estado:
    {
        type: Number,
        default: 1
    },
    createdAt:
    {
        type: Date,
        default: Date.now()
    }
});

const Articulo = mongoose.model('Articulo', articuloSchema);

export default Articulo;