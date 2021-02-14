const Account = require('../models/account.model')
const accountService = require("../services/accounts.services");

module.exports.findOneSingleAccount = (req, res) => {
    const password = req.header("Authorization");
    Account.findOne({ rut: req.params.rut, password: password })
        .then(oneSingleAccount => res.json({ account: oneSingleAccount }))
        .catch(err => res.status(400).json(err));
};

module.exports.updateExistingAccount = (req, res) => {
    const password = req.header("Authorization");
    Account.findOne({ client_rut: req.params.rut })
        .then(account => {
            if (account) {
                console.log("🚀 ~ file: account.controllers.js ~ line 20 ~ user", account)
                const amountToUpdate = accountService.updateUserAccount(account.amount, req.body.amountToUpdate, req.body.isDeposit);
                account.amount = amountToUpdate;
                account.historial.push({
                    operation_amount: req.body.amountToUpdate,
                    operation_type: req.body.operation_type,
                    successful_operation: account.amount === amountToUpdate ? false : true
                })
                account.save()
                return res.json({ account: account })
            }
        })
        .catch(err => res.status(400).json(err));
};

module.exports.updateAccountByTransfer = (req, res) => {
    Account.findOne({ client_rut: req.body.operation_owner })
        .then(account => {
            if (account) {
                console.log("🚀 ~ file: account.controllers.js ~ line 35 ~ account", account)
                const amountToDiscount = accountService.updateUserAccount(account.amount, req.body.amount_to_update, false);
                const isSuccesful = account.amount === amountToDiscount ? false : true;
                console.log("🚀 ~ file: account.controllers.js ~ line 47 ~ isSuccesful", amountToDiscount)
                account.amount = amountToDiscount;
                account.historial.push({
                    operation_amount: req.body.amount_to_update,
                    operation_type: req.body.operation_type,
                    successful_operation: isSuccesful,
                    operation_owner: req.body.operation_owner
                })
                account.save()
                if (isSuccesful) {
                    Account.findOne({ client_rut: req.body.destination_client_account })
                        .then(destiny_account => {
                            if (destiny_account) {
                                console.log("🚀 ~ file: account.controllers.js ~ line 53 ~ destiny_account", destiny_account)
                                amountToTransfer = accountService.updateUserAccount(account.amount, req.body.amount_to_update, true);
                                destiny_account.amount = amountToTransfer;
                                destiny_account.historial.push({
                                    operation_amount: req.body.amount_to_update,
                                    operation_type: req.body.operation_type,
                                    successful_operation: true,
                                    operation_owner: req.body.operation_owner
                                })
                                destiny_account.save()
                                return res.json({ account: account })
                            }

                        })
                        .catch(err => res.json({ message: "Something went wrong", error: err }));
                }
            }
        })
        .catch(err => res.status(400).json(err));
}

module.exports.findAllAccounts = (req, res) => {
    Account.find()
        .then(allAccounts => res.json({ accounts: allAccounts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
