
const express = require('express');

const conexao = require('../db/conexao');
const userController = require('../controllers/userController');

var router = express.Router();

router.get('/', userController.index)

/*
exports.novo = (req, res) =>{

}

exports.buscarTodos = (req, res) =>{

}

exports.buscarPorID = (req, res) =>{
    let id = req.params.id;

    conexao.query(`CALL userById(${id})`, (err, result)=>{
        if(err) throw res.status(400).json({
            message: 'Falha no resultado da sua requisição',
            status: 400,
            error: err
        });
        res.status(200).json({
            message: 'Processado com sucesso',
            status:200,
            data: result
        });
    })

}*/

module.exports = router;