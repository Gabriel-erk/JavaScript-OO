//esta classe abstrata reune caracteristicas de classes concretas(classes que agrupam caracteristicas do mundo real) (com classes abstratas nao se pode instanciar)
class Forma {

    constructor() {
        this.tipoDeForma = 'Forma Abstrata';
    }

    // ao estar dentro o escopo de uma classe, ja é subentendido que é uma função, nao precisa da palavra reservada "function"
    imprimeForma() {
        alert( `Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
        // alert(`Tipo de forma: ${this.tipoDeForma}`)
    }

    // throw: jogar, new: novo, cria uma novo objeto da classe erro e passo o parametro: `O método calculaArea() deve ser implementado na subclasse.` 
    // função abstrata, pois nao sabe calcular a area, e sempre que for chamada diretamente pelo form, criara uma "exceção", e gerara este erro
    calculaArea() {
        throw new Error(`O método calculaArea() deve ser implementado na subclasse.`);
    }
}