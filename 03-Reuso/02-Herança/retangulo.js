class Retangulo extends Forma {

    constructor(base, altura) {
        // precisa especificar o tipo da forma, ou ela ficara como forma abstrata
        super("Retangulo");
        this.base = base;
        this.altura = altura;
    }

    calculaArea(){
        return this.base * this.altura;
    }

}