const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require('./ServerPort');

ServerPortRouter.route('/add').post(function (req, res) {

    const serverport = new ServerPort(req.body);
    serverport.save()
        .then(serverport => {
            res.json('Product added successfully');
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

ServerPortRouter.route('/').get(function (req, res) {
    ServerPort.find(function (err, serverports) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(serverports);
        }
    });
});

ServerPortRouter.route('/delete/:id').delete(function (req, res) {

    ServerPort.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(result);
        }
    })
})



module.exports = ServerPortRouter;