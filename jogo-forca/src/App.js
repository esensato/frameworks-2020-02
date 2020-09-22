import React from 'react'

import { useState, useEffect } from 'react'

// importar os componentes

import Corpo from './Corpo.js'
import {Palavra, iniciar} from './Palavra.js'

iniciar()

// cria e exporta o componente principal App
export default function App(props) {

    // ultima letra digitada
    const [letra, setLetra] = useState("")

    // total de erros
    const [erros, setErros] = useState(0)
    
    // altera o estado da ultima letra digitada
    const digitou = (e) => {
        setLetra(e.key)
    }

    const errou = () => {
        setErros(erros + 1)

    }

    // executa somente uma vez apos a primeira renderizacao
    useEffect(() => {
        // executa uma vez no render inicial
        window.addEventListener("keydown", digitou)
        // executa uma vez ao remover o componente do DOM e remove o Listener
        return () => window.removeEventListener("keydown", digitou)
        }, [])    // captura eventos de teclado - tecla pressionada

    // obtem o valor da propriedade mensagem
    // <> e </> agrupa componentes
    return <div style={{padding: "30px"}}>
           <div>{props.mensagem}</div>
           <Corpo erros={erros}/>
           <div style={{height: "10px"}}/>
           <Palavra letra={letra} callback={errou}/>
           </div>

}