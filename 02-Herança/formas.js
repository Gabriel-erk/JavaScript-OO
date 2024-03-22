//esta classe abstrata reune caracteristicas de classes concretas(classes que agrupam caracteristicas do mundo real) (com classes abstratas nao se pode instanciar)
class Forma {

    // definindo um valor padrão para caso nao seja passado nenhum parametro
    constructor(tipoDeForma = 'FormaAbstrata') {
        this.tipoDeForma = tipoDeForma;
        // this.tipoDeForma = 'Forma Abstrata';
    }

    // ao estar dentro o escopo de uma classe, ja é subentendido que é uma função, nao precisa da palavra reservada "function"
    imprimeForma() {

        /* estrutura de try - catch, estrutura de tratamento de erro */
        // try (do ingles, 'tente'), executar este codigo (dentro do escopo de try)
        try {
            alert( `Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
            console.log("codigo funcionou");
        } 
        /* catch (pegue) - pegue o erro, caso, de qualquer tipo de erro dentro do try, ele executara oq esta dentro do escopo de catch, se nao der nenhum tipo de erro no escopo do try, ele nao sera executado - ao inves de so parar a execução do programa ao encontrar um erro, sera passada esta mensagem tratada */        
        catch (error) {
            alert("O código está com erro");
        }
       
    }

    // throw: jogar, new: novo, cria uma novo objeto da classe erro e passo o parametro: `O método calculaArea() deve ser implementado na subclasse.` 
    // função abstrata, pois nao sabe calcular a area, e sempre que for chamada diretamente pelo form, criara uma "exceção", e gerara este erro
    calculaArea() {
        throw new Error(`O método calculaArea() deve ser implementado na subclasse.`);
    }
}