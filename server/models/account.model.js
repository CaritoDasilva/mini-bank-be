const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const HistorialSchema = new mongoose.Schema({
    operation_type: {
        type: String,
        unique: false,
        required: [true, 'Es obligatorio indicar el tipo de operación'],
    },
    operation_amount: {
        type: Number,
        unique: false,
        required: [true, 'Es obligatorio indicar el monto asignado a la operación'],
        min: [0, 'Cuenta no puede tener monto en negativo']
    },
    successful_operation: {
        type: Boolean,
        unique: false,
        required: [true, 'Debe indicar el resultado de la operación']
    },
    operation_owner: {
        type: String,
        unique: false,
        required: [true, 'Es obligatorio indicar rut de persona que realiza operación']
    }

})

const AccountSchema = new mongoose.Schema({
    client_rut: {
        type: String,
        unique: true,
        required: [true, 'Cuenta debe estar asociada al rut de un cliente']
    },
    amount: {
        type: Number,
        unique: false,
        required: [true, 'Cuenta debe tener un monto asociado'],
        min: [0, 'Cuenta no puede tener monto en negativo']
    },
    historial: [HistorialSchema]


})

AccountSchema.plugin(uniqueValidator);
const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;