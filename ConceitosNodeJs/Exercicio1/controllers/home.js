module.exports = function (app) {
    var HomeController = {
        index: function (req, res) {
            res.render('home/index');
        },
        login: function (req, res) {
            var nome = req.body.usuario.nome;
            var senha = req.body.usuario.senha;
            if (nome == 'admin' && senha == 'admin') {
                var usuario = req.body.usuario;
                req.session.usuario = usuario;
                res.redirect('/menu');
            }
            else {
                res.redirect('/');
            }
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        },
        novoUsuario: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirma = request.body.usuario.confirma;

            //código a ser implementado
            response.redirect('/menu');
        }
    };
    return HomeController;
}; 