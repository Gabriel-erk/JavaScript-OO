class Quadrado extends Forma{

    constructor(lado){
        // entra no constructor da classe pai (Forma) e herda seus atributos
        // super();
        // utilizando atributo da classe pai (Forma), e definindo o tipo de forma, quadrado
        // this.tipoDeForma = 'Quadrado';

        // acessando um membro da classe pai (Forma) no caso o constructor da classe forma, passando como parametro 'quadrado' e atribui no 'tipoDeForma'
        super("Quadrado");
        // this.lado (atributo), é um membro da classe pois possui: "this."
        this.lado = lado;
    }

    /* todo metodo abstrato presente na classe Pai, tem que estar presente na classe filho */
    calculaArea() {
        return this.lado * this.lado;
    }
}