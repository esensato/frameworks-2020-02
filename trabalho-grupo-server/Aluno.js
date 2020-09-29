
var alunos = []

const getAlunoJSON = (id) => {return {id: id}}

const jaExiste = (id) => {

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].id == id) {
            return true;
        }
    }
    return false;
}

exports.novo = function (id) {

    let ret = {erro: false, msg: 'OK'};
    console.log(`Cadastrando: ${id} - ${jaExiste(id)}`, getAlunoJSON(id));
    if (!jaExiste(id)) {
        alunos.push(getAlunoJSON(id));
    } else {
        ret = {erro: true, msg: `${id} já existe!`};
    }
    console.log(alunos);

    return ret;

}

exports.lista = function() {
    return alunos;
}