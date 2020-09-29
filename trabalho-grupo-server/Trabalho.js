
var trabalhos = []

const getTrabalhoJSON = (id, titulo, percentual) => {return {id:id, titulo: titulo, percentual: percentual}}

const geraId = () => {

    return `${Date.now()}-${Math.floor(Math.random() * 100)}`;

}

exports.novo = function (titulo) {

    let id = geraId();
    let ret = {id: id};
    let novoTrabalho = getTrabalhoJSON(id, titulo, 0);
    console.log(`Cadastrando: ${id}`, novoTrabalho);
    trabalhos.push(novoTrabalho);
    console.log(trabalhos);
    return trabalhos;

}

exports.percentual = function (id, percentual) {

    for (let i = 0; i < trabalhos.length; i++) {
        if (trabalhos[i].id == id) {
            trabalhos[i].percentual = percentual;
        }
    }
    return trabalhos;

}

exports.lista = function() {
    return trabalhos;
}