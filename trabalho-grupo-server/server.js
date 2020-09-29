const express = require('express');
const cors = require('cors');

const aluno = require('./Aluno.js');
const trabalho = require('./Trabalho.js');
const alocacao = require('./Alocacao.js');

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());  
app.use(cors())

app.get("/", (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send({mensagem: "Olá"})

})

app.post("/aluno", (request, response) => {
  
    response.setHeader('Content-Type', 'application/json');
    const ret = aluno.novo(request.body.username);
    response.send(ret);

})

app.get("/aluno", (request, response) => {
  
    response.setHeader('Content-Type', 'application/json');
    const ret = aluno.lista();
    response.send(ret);

})

app.post("/trabalho", (request, response) => {
  
    response.setHeader('Content-Type', 'application/json');
    console.log(`server::recebido ${request.body.titulo}`);
    const ret = trabalho.novo(request.body.titulo);
    response.send(ret);

})

app.get("/trabalho", (request, response) => {
  
    response.setHeader('Content-Type', 'application/json');
    const ret = trabalho.lista();
    response.send(ret);

})

app.put("/trabalho/percentual/:trabalhoid/:percentual", (request, response) => {
  
    response.setHeader('Content-Type', 'application/json');
    const ret = trabalho.percentual(request.params.trabalhoid, request.params.percentual);
    response.send(ret);

})

app.put("/alocacao/:trabalhoid/:alunoid", (request, response) => {
  
    response.setHeader('Content-Type', 'application/json');
    const ret = alocacao.novo(request.params.trabalhoid, request.params.alunoid);
    response.send(ret);

})

app.get("/alocacao", (request, response) => {
  
    response.setHeader('Content-Type', 'application/json');
    const ret = alocacao.lista();
    response.send(ret);

})

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
