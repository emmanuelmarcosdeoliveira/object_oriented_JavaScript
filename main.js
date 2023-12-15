/*A entrega deste exercício consiste em:
• Crie uma classe de uma abstração;
• Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
• Crie pelo menos três instâncias de objetos;
• No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.
• Envie o link do repositório através da plataforma. 
*/

const telefone = {
  fabricante: "Telecon",
  modelo: "plus",
  anoFabricacao: 2019,
  fazerLigacao: function () {
    console.log("fazendo uma ligação");
  },
};
//Acima criei um objeto na forma literal telefone

function Telefone(tipo) {
  this.tipo = tipo;
  this.fazLigacao = function () {
    console.log(this.tipo + "faz ligaçào");
  };
}

// Acima criei a Função construtora de Telefone

function Celular(tipo, fabricante, modelo) {
  this.fabricante = fabricante;
  this.modelo = modelo;
  Telefone.call(this, tipo);
}

const telefoneDaMaria = new Celular("Movel", "Motorola", "Light");
const telefoneDoEmmanuel = new Celular("Movel", "Sansung", "S22");
const telefoneDoJoao = new Celular("Movel", "Xiaomi 13 lite");

console.log(telefoneDaMaria);
telefoneDaMaria.fazLigacao()