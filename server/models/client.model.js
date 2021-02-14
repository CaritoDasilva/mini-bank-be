const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ClientSchema = new mongoose.Schema({
    // numberAcount: {
    //     type: Number,
    //     unique: false,
    //     required: [true, "Cliente debe tener un número de cuenta asociado"],
    // },
    rut: {
        type: String,
        unique: true,
        required: [true, "Cliente debe tener un rut válido"],
        validate: {
            validator: (v) => {
                return /^[0-9]+-[0-9kK]{1}$/.test(v)
            },
            message: props => `${props.value} no es un rut válido. Ingresar rut sin puntos y con dígito verifificador`
        }
    },
    name: {
        type: String,
        unique: false,
        required: [true, 'Cliente debe ingresar un nombre'],
    },
    password: {
        type: String,
        unique: false,
        required: [true, 'Cliente debe ingresar una contraseña']
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Usuario debe tener registrar un email"],
        minlength: [3, "Email debe tener mínimo 3 caracteres"]
    },
})


ClientSchema.plugin(uniqueValidator);
const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;