const ClientController = require("../controllers/clients.controllers");
const AccountController = require("../controllers/account.controllers");
const Account = require("../models/account.model");

module.exports = app => {
    //Clients Routes
    app.post("/api/clients/new", ClientController.createNewClient);
    app.get("/api/clients/", ClientController.findAllClients);
    app.get("/api/clients/:rut", ClientController.findOneSingleClient);

    //Acounts routes
    app.get("/api/accounts/:rut", AccountController.findOneSingleAccount);
    app.get("/api/accounts", AccountController.findAllAccounts)
    app.put("/api/accounts/transfer", AccountController.updateAccountByTransfer)
    app.put("/api/accounts/update/:rut/", AccountController.updateExistingAccount)
};