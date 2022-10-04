import mongoose, { Schema } from "mongoose";

const ventaSchema = new Schema({
    usuario:
    {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    persona:
    {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
        required: true
    },
    tipo_comprobante:
    {
        type: String,
        maxlength: 20,
        required: true
    },
    serie_comprobante:
    {
        type: String,
        maxlength: 7
    },
    num_comprobante:
    {
        type: String,
        maxlength: 10,
        required: true
    },
    impuesto:
    {
        type: Number,
        required: true
    },
    total:
    {
        type: Number,
        required: true
    },
    detalles:
        [
            {
                _id:
                {
                    type: String,
                    required: true
                },
                articulo:
                {
                    type: String,
                    required: true
                },
                cantidad:
                {
                    type: Number,
                    required: true
                },
                precio:
                {
                    type: Number,
                    required: true
                },
                descuento:
                {
                    type: Number,
                    required: true
                }
            }
        ],
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

const Venta = mongoose.model('Venta', ventaSchema);

export default Venta;