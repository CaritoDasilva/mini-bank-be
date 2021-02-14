const Client = require('../models/client.model')

module.exports.createNewClient = (req, res) => {
    Client.create(req.body)
        .then(createdUser => res.json({ user: createdUser }))
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