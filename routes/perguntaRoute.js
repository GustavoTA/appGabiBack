const express = require('express');
const _router = express.Router();
const perguntaSchema = require('../modules/pergunta');
_router.get('/', (res, req) => {
    perguntaSchema
        .find({},(erro, Data) => {
            if(Data.length === 0  || erro){
                return req.send({error : 'Não existem perguntas!'})
            }else{
                return req.send({data: Data})
            }
        })
})

_router.post('/add',(res, req) => {
    let pergunta = res.body;
    // res.send(req.body)
    perguntaSchema
        .insertMany(pergunta, err => {
            if(err){
                req.send({'message': "Ocorreu um erro", err})
            }else{
                req.send({'message': 'Deu certo'})
            }
        }) 
})

_router.get('/nivel/:nivel',(res, req) => {
    perguntaSchema.find({'nivel':res.params.nivel},(err, data)=>{
        if(err){
            req.send({"message": "Ocorreu algum problema", err});
        } else {
            if(data.length != 0){
                req.send(data)
            }else{
                req.send("Não existem perguntas, nesse nivel");
            }
        }
    })
})

_router.get('/id/:id',(res, req) => {
    perguntaSchema.findOne({'_id':res.params.id},(err, data)=>{
        if(err){
            req.send({"message": "Ocorreu algum problema", err});
        } else {
            if(data.length != 0){
                req.send(data)
            }else{
                req.send("Não existem pergunta com esse id");
            }
        }
    })
})

module.exports = _router;