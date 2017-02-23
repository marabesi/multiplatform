$('.collection-item').on('click', function () {
    var $badge = $('.badge', this);
    
    if ($badge.length == 0) {
        $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
    }
    
    $badge.text(parseInt($badge.text()) + 1);
});

$('.modal-trigger').leanModal(); 

$('#confirmar').on('click', function() {
    var texto = '';

    $('.badge').parent().each(function(){
        var produto = this.firstChild.textContent;
        var quantidade = this.lastChild.textContent;
            texto += produto + ': ' + quantidade + ', ';
    });
    $('#resumo').text(texto);
}); 

$('.collection').on('click', '.badge', function(){
    $(this).remove();
    return false;
}); 

$('.acao-limpar').on('click', function() {
    $('#numero-vendedor').val('');
    $('.badge').remove();
}); 

$('.acao-finalizar').click(function () {
    $.ajax({
        url: 'http:/meuservico.com/novo-pedido',
        data: {
            vendedor: $('#numero-vendedor').val(),
            pedido: $('#resumo').text
        },
        success: function (resposta) {
            Materialize.toast(resposta, 2000);
            $('#numero-mesa').val('');
            $('.badge').remove();
        },
        error: function (erro) {
            Materialize.toast(erro.responseText, 3000, `red-text`);
        }
    })
}); 