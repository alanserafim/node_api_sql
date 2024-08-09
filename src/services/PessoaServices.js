const Services = require("./Services.js")

class PessoaServices extends Services {
    constructor(){
       super("Pessoa");
    }

    async pegaMatriculasAtivasPorEstudante(id){
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas
    }

    async pegaPessoasEscopoTodos() {
        const listaPessoas = await super.pegaRegistroPorEscopo('todosOsRegistros');
        return listaPessoas;
    }


    async pegaTodasAsMatriculasPorEstudante(id){
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getTodasAsMatriculas();
        return listaMatriculas
    }
}

module.exports = PessoaServices