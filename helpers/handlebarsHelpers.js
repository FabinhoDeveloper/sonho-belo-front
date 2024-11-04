const Handlebars = require('handlebars');

Handlebars.registerHelper('formatDate', function (dateString) {
  const [year, month, day] = dateString.split('T')[0].split('-');
  return `${day}/${month}/${year}`;
});


Handlebars.registerHelper('isEqual', function (value1, value2, options) {
    if (value1 === value2) {
      return options.fn(this); // Retorna o conteúdo do bloco se a comparação for verdadeira
    } else {
      return options.inverse(this); // Retorna o conteúdo "else" se a comparação for falsa
    }
  }
)

Handlebars.registerHelper('isNotEqual', function (value1, value2, options) {
  if (value1 !== value2) {
    return options.fn(this); // Retorna o conteúdo do bloco se a comparação for verdadeira
  } else {
    return options.inverse(this); // Retorna o conteúdo "else" se a comparação for falsa
  }
}
)

Handlebars.registerHelper('canDelete', function (userId, loggedInUserId, options) {
  if (userId !== 1 && userId !== loggedInUserId) {
    return options.fn(this); // Retorna o conteúdo do bloco se ambas as condições forem verdadeiras
  } else {
    return options.inverse(this); // Retorna o conteúdo "else" se qualquer condição for falsa
  }
});