var cursos = [{
    "id": "curso-1",
    "titulo": "Desenvolvimento de Soluções"
}, {
    "id": "curso-2",
    "titulo": "Arquitetura Java"
}, {
    "id": "curso-3",
    "titulo": "Arquitetura .NET"
}, {
    "id": "curso-4",
    "titulo": "Projetos Integrados"
}, {
    "id": "curso-5",
    "titulo": "Gestão de Processos"
}, {
    "id": "curso-6",
    "titulo": "Compiladores"
}];

var lista = document.getElementById("curso");

function limparLista() {
    if (lista) {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    } 
}

function exibirCursos() {
    if (lista) {
        limparLista();

        for (var i = 0; i < cursos.length; i++) {
            var option = document.createElement("option");
            option.textContent = cursos[i].titulo;
            option.setAttribute("value", cursos[i].id);
            lista.appendChild(option);
        }
    }
}

exibirCursos();

var salvar = document.getElementById('salvar');
var db;

var request = window.indexedDB.open("cursos", 2);

request.onerror = function(event) {
    alert("Why didn't you allow my web app to use IndexedDB?!");
};

request.onsuccess = function(event) {
    db = event.target.result;
    console.log('onsucess');

    getAll();
};

request.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.createObjectStore('cursos', { keyPath: 'id', autoIncrement: true});

    console.log('onupgradeneeded');
};

if (salvar) {
    salvar.addEventListener('click', function() {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var curso = document.getElementById('curso').value;
    
        var transaction = db.transaction(["cursos"], "readwrite");
        var store = transaction.objectStore("cursos");
    
        var request = store.add({
            nome: nome,
            email: email,
            curso: curso,
        });
    
        request.onerror = function(e) {
            console.log("Error", e.target.error.name);
        }
    
        request.onsuccess = function(e) {
            alert('Obrigado pelo interesse!');

            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('curso').value = '';
        }
    }, false);
}

function getAll() {
    var tabela = document.getElementById('tabela');

    if (tabela) {
        var transaction = db.transaction(['cursos'], 'readonly');
        var obj = transaction.objectStore('cursos');

        var cursor = obj.openCursor();
        cursor.onsuccess = function(event) {
            var result = event.target.result;
            var html = '';
            
            if (result) {
                console.log(result)

                html += '<tr>' +
                            '<th scope="row">' + result.primaryKey + '</th>' +
                            '<td>' + result.value.nome + '</td>' +
                            '<td>' + result.value.email + '</td>' + 
                            '<td>' + result.value.curso + '</td>' +
                        '</tr>';

                result.continue();
            }
            
            tabela.innerHTML += html;
        }
    }
}