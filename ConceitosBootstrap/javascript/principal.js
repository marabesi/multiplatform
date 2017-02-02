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
    if (lista.firstChild != null) {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    } 
}

function exibirCursos() {
    limparLista();

    for (var i = 0; i < cursos.length; i++) {
        var option = document.createElement("option");
        option.textContent = cursos[i].titulo;
        option.setAttribute("value", cursos[i].id);
        lista.appendChild(option);
    }
}

exibirCursos();

var salvar = document.getElementById('salvar');
salvar.addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var curso = document.getElementById('curso').value;

    var request = window.indexedDB.open("cursos", 1);

    request.onerror = function(event) {
        alert("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function(event) {
        db = event.target.result;
    };

    request.onupgradeneeded = function(event) {
        var db = event.target.result;

         // Create an objectStore to hold information about our customers. We're
        // going to use "ssn" as our key path because it's guaranteed to be
        // unique - or at least that's what I was told during the kickoff meeting.
        var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

        // Create an index to search customers by name. We may have duplicates
        // so we can't use a unique index.
        objectStore.createIndex("name", "name", { unique: false });

        // Create an index to search customers by email. We want to ensure that
        // no two customers have the same email, so use a unique index.
        objectStore.createIndex("email", "email", { unique: true });

        // Use transaction oncomplete to make sure the objectStore creation is 
        // finished before adding data into it.
        objectStore.transaction.oncomplete = function(event) {
            // Store values in the newly created objectStore.
            var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
            for (var i in customerData) {
            customerObjectStore.add(customerData[i]);
            }
        };
    };
    
});

function store(db) {

}