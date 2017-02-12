var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;

module.exports = function (app) {
    return mongoose.model("Categoria", new Schema({
        descricao: String
    }));
}; 