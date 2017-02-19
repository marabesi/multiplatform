var mongoose = require("mongoose");
var Curso = require("../models/Curso");
var Categoria = require("../models/Categoria");
var mongoose=  require("mongoose");

module.exports = function (app) {

    var CursosController = {
        menu: function (req, res) {
            var usuario = req.session.usuario,
                params = { usuario: usuario };
            res.render('cursos/menu', params);
        },
        cadastroUsuario: function (req, res) {
            var usuario = req.session.usuario,
                params = { usuario: usuario };
            res.render('cursos/cadUsuario', params);
        },
        cadastroCurso: function (req, res) {
            var usuario = req.session.usuario,
                params = { usuario: usuario };
            // app.models.Categoria.find().remove();
            app.models.Categoria.find((error, categorias) => {
                var params = {
                    usuario: usuario,
                    categorias: categorias
                };
                res.render('cursos/cadCursos', params);
            })

        },
        listaCursos: function (req, res) {
            var usuario = req.session.usuario;
            
            app.models.Curso.find((error, cursos) => {
                var params = { 
                    usuario: usuario,
                    cursos: cursos
                };
                console.log(cursos);
                res.render('cursos/listaCursos', params);
            }).populate('categoria');
            

            // mongoose.connect('mongodb://localhost/fiap');
            // var Curso = req.body.curso;

            // res.render('cursos/listaCursos', params);
        },
        novoCurso: function (request, response) {

            var curso = new app.models.Curso(request.body.curso);
            curso.save(err => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Cadastrado!");
                    response.redirect('/listaCursos');
                }
            });
            // var descricao = request.body.evento.descricao;
            // var data = request.body.evento.data.split('/');

            // var objDate = new Date(data[2], data[1] - 1, data[0]);
            // var responsavel = request.body.evento.responsavel;

        }
    };
    return CursosController;
}; 