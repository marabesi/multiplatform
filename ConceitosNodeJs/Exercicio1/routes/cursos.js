module.exports = function (app) {
    var valida = require("./../middlewares/valida");
    var cursos = app.controllers.cursos;
    app.get("/menu",cursos.menu);
    app.get('/listaCursos', valida, cursos.listaCursos);
    app.get('/cadCurso', valida, cursos.cadastroCurso);
    app.post('/cadCurso', valida, cursos.novoCurso);
}; 
