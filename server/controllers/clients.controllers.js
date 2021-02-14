const Account = require('../models/account.model');
const Client = require('../models/client.model')

module.exports.createNewClient = (req, res) => {
    const historial = {
        operation_amount: 0,
        operation_type: 'creation',
        successful_operation: true,
        operation_owner: req.body.rut
    }
    Client.create(req.body)
        .then(createdUser => {
            if (createdUser) {
                Account.create({ client_rut: req.body.rut, amount: 0, historial: [historial] })
                    .then(account => res.json({ user: createdUser, account: account }))
                    .catch(err => res.status(400).json(err))
            }
        })
        .catch(err => res.status(400).json(err))
};

module.exports.findAllClients = (req, res) => {
    Client.find()
        .then(allClients => res.json({ clients: allClients }))
        .catch(err => res.status(400).json(err));
};

module.exports.findOneSingleClient = (req, res) => {
    const password = req.header("Authorization");
    Client.findOne({ rut: req.params.rut, password: password })
        .then(oneSingleClient => res.json({ client: oneSingleClient }))
        .catch(err => res.status(400).json(err));
};