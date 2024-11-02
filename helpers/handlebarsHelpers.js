const Handlebars = require('handlebars');

Handlebars.registerHelper('formatDate', function (dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
});

Handlebars.registerHelper('isEqual', function (value1, value2, options) {
    if (value1 === value2) {
      return options.fn(this); // Retorna o conteúdo do bloco se a comparação for verdadeira
    } else {
      return options.inverse(this); // Retorna o conteúdo "else" se a comparação for falsa
    }
  }
)