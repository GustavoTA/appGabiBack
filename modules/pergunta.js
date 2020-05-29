const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alternativa = new Schema({
    correto: {type: Boolean},
    descricao: { type: String }
})

const PerguntaSchema = new Schema({
    nivel: {type: Number},
    pergunta: {type: String},
    justificativa: {type: String},
    moeda: {type: Number},
    alternativa: [{ type: alternativa}]

})

module.exports = mongoose.model('Pergunta', PerguntaSchema);