const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resposta = new Schema({
    idPergunta: {type: Number},
    idResposta: {type: Number},

})

const UserSchema = new Schema({
    _id : { type: Number },
    nome : { type: String },
    apelido : { type: String },
    senha : { type: String },
    repostas : resposta
})



module.exports = mongoose.model('User', UserSchema);