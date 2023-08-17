class Pessoa {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }

    apresentar() {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
    }

    apresentar() {
    return `${super.apresentar()} Sou estudante de ${this.curso}.`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
    super(nome, idade);
    this.disciplina = disciplina;
    }

    apresentar() {
    return `${super.apresentar()} Sou professor de ${this.disciplina}.`;
    }
}

const estudante1 = new Estudante("João", 20, "Engenharia");
const professor1 = new Professor("Maria", 35, "Matemática");
const estudante2 = new Estudante("Pedro", 22, "Medicina");

console.log(estudante1.apresentar());
console.log(professor1.apresentar());
console.log(estudante2.apresentar());
