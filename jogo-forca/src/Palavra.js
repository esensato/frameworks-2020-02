import React, { useEffect } from 'react'

// lista das palavras a serem sorteadas
const palavras = ['ORANGE', 'LEMON', 'LIME', 'PEACH', 'STRAWBERRY']

//array contendo a letra sorteada
var letras = []

//array com as posicoes das letras acertadas
var acertos = []

// inicia o jogo com o sorteio da palavra
export function iniciar() {

    // sorteia a palavra
    let idxPalavraSorteada = Math.floor(Math.random() * palavras.length)
    
    // criar um array para armazenar as letras da palavra
    // ... converte uma String em um array de chars
    letras = [...palavras[idxPalavraSorteada]]

    console.log(`Palavra sorteada: ${letras}`)

    // inicia o array com false - para cada letra
    acertos = letras.map((item, i) => false)

    console.log(`Acertos: ${acertos}`)

}

// verifica se a letra esta contida na palavra sorteada
function verificaLetra(letraDigitada, callback) {

    if (letraDigitada != "") {

        console.log(`Verificando a letra digitada ${letraDigitada}`)

        let nenhumaLetra = true
    
        for (let i = 0; i < letras.length; i++) {
            if (letras[i] == letraDigitada) {
                acertos[i] = true
                nenhumaLetra = false
                console.log(`Acerto na posição: ${i}`)
    
            }
        }
    
        console.log(`Array de acertos: ${acertos}`)
    
        if (nenhumaLetra) {
            console.log('Não acertou nenhuma letra... Chamando callback')
            callback()
        }
    
    }

}

// componente para representar as letras acertadas da palavra
export function Palavra(props) {

    useEffect(() => {
        verificaLetra(props.letra.toUpperCase(), props.callback)
    }, [props.letra])

    return <div>{
        acertos.map((item, idx) => {
            if (item) {
                return <span key={idx} style={{padding: "5px", border: "solid"}}>{letras[idx]}</span>
            } else {
                return <span key={idx} style={{padding: "5px", border: "solid"}}> </span>
            }
        })
    }</div>

}
