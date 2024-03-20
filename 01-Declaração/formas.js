class Forma {

    constructor() {
        this.tipoDeForma = 'Forma Abstrata';
    }

    // ao estar dentro o escopo de uma classe, ja é subentendido que é uma função, nao precisa da palavra reservada "function"
    imprimeForma() {

        // alert( 'Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}');
        alert(`Tipo de forma: ${this.tipoDeForma}`)
    }

    calculaArea() {
        throw new Error(`O método calculaArea() deve ser implementado na subclasse.`);
    }
}