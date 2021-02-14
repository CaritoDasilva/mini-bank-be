const ClientController = require("../controllers/clients.controllers");
const AccountController = require("../controllers/account.controllers")

module.exports = app => {
    //Clients Routes
    app.post("/api/clients/new", ClientController.createNewClient);
    app.get("/api/clients/", ClientController.findAllClients);
    app.get("/api/clients/:rut", ClientController.findOneSingleClient);

    //Acounts routes
    app.get("/api/accounts/:rut", AccountController.findOneSingleAccount);
    app.put("/api/accounts/:rut/update", AccountController.updateExistingAccount)
};