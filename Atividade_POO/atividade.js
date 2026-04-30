class pessoas {
    #salario
    constructor(nome,funcao , salario){
        this.nome = nome;
        this.funcao = funcao;
        this.#salario = salario;
    };
}
class aluno extends pessoas{
falar = () => console.log (`Olá meu nome é ${this.nome} e sou um ${this.funcao} mas não tenho salário`)
}
class professor extends pessoas{
    falar = () => console.log (`Olá meu nome é ${this.nome} e sou um ${this.funcao} e meu salário é ${this.salario} `)
}
class diretor extends pessoas{
    falar = () => console.log (`Olá meu nome é ${this.nome} e sou um ${this.funcao} e meu salário é ${this.salario} `)
}

class funcionario extends pessoas{
    falar = () => console.log (`Olá meu nome é ${this.nome} e sou um ${this.funcao} e meu salário é ${this.salario} `)
}

const paloma = new aluno ("Paloma", " Aluno");
const mago = new professor("Raul", "Professor",10.000);
const marcos = new diretor ("Marcos Alves","Diretor",26.000);
const elisa = new funcionario ("Elisa","Funcionario", 2.500);

paloma.falar ();
mago.falar ();
marcos.falar ();
elisa.falar ();