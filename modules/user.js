const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    _id : { type: Number },
    nome : { type: String },
    apelido : { type: String },
    senha : { type: String },
    repostas : resposta
})

const resposta = new Schema({
    idPergunta: {type: Number},
    idResposta: {type: Number},

})

module.exports = mongoose.model('User', UserSchema);