let edge = require('edge-js');

var soma = edge.func({
    source: function () {/*
        async (dynamic input) =>
        {
            var soma = new Matematica.OperacoesMatematicas().Soma(input.a, input.b);
            return soma;
        }
    */},
    references: ["Matematica.dll"]
});

soma({a: 10, b: 30}, function (error, result) {
    if (error) throw error;
    console.log(result);
});