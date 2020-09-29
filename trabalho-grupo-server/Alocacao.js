
var alocacoes = []

const getAlocacoesJSON = (idTrabalho, idAluno) => {return {idTrabalho: idTrabalho, idAluno: idAluno}}

exports.novo = function (idTrabalho, idAluno) {

    let ret = {erro: false, msg: 'OK'};
    console.log(`Cadastrando: ${idTrabalho} - ${idAluno}`, getAlocacoesJSON(idTrabalho, idAluno));
    alocacoes.push(getAlocacoesJSON(idTrabalho, idAluno));

    console.log(alocacoes);

    return ret;

}

exports.lista = function() {
    return alocacoes;
}