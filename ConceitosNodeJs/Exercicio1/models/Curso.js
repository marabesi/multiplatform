var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;

module.exports = function (app) {
    return mongoose.model("Curso", new Schema({
        codigo: String,
        descricao: String,
        CH: String,
        _categoria: { type: String, ref: "Categoria" }
    }));
}