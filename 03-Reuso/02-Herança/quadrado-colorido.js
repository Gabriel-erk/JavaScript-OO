class QuadradoColorido extends Quadrado {

    constructor(lado, cor = 'Preto'){
        super(lado);
        this.cor = cor;
    }

    // sobescrevendo a classe imprime forma (baseado na caixa pai)
    imprimeForma() {

        try {
            alert( `Tipo de forma: ${this.tipoDeForma} - Cor: ${this.cor} - Área: ${this.calculaArea()}`);
            console.log("codigo funcionou");
        } 
        catch (error) {
            alert("O código está com erro");
        }
       
    }
}