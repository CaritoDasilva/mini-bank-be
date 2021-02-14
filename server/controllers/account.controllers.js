const Account = require('../models/account.model')

module.exports.findOneSingleAccount = (req, res) => {
    const password = req.header("Authorization");
    Account.findOne({ rut: req.params.rut, password: password })
        .then(oneSingleAccount => res.json({ account: oneSingleAccount }))
        .catch(err => res.status(400).json(err));
};

module.exports.updateExistingAccount = (req, res) => {
    Account.findOneAndUpdate({ rut: req.params.rut }, req.body, { new: true })
        .then(updateAccount => res.json({ account: updateAccount }))
        .catch(err => res.status(400).json(err));
};
