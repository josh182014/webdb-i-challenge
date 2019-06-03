const express = require('express');

const server = express();
const Accounts = require('./data/accounts-model');

server.use(express.json());

server.get('/', (req, res) => {
    const accounts = Accounts.find()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        })
});

server.post('/', (req, res) => {
    const account = Accounts.add(req.body)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
})

server.get('/:id', (req, res) => {
    const account = Accounts.findById(req.params.id)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
});

server.put('/:id', (req, res) => {
    const updatedAccount = Accounts.update(req.params.id, req.body)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
});

server.delete('/:id', (req, res) => {
    const deleteAccount = Accounts.remove(req.params.id)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
});


module.exports = server;