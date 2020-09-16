import React from 'react';
import {useState, useEffect, useRef, useMemo} from 'react';

export default function TesteHook(props) {

    // a variavel mensagem inicia com o valor Boa Noite
    // para alterar o seu estado (valor atual) acionar o setMensagem
    // setMensagem força que o componente seja redesenhado
    const [mensagem, setMensagem] = useState('Boa Noite')

    // armazena ultima tecla informada pelo usuario
    const [tecla, setTecla] = useState("")

    // cria uma variavel de ligacao com um elemento do DOM
    const refBotao = useRef()

    // executa a funcao novaTecla somente se a variavel de estado tecla for alterada
    const novaTecla = useMemo(() => {
        console.log(`Tecla nova: ${tecla} em ${Date.now()}`)
        return `Tecla nova: ${tecla} em ${Date.now()}`
    }, [tecla])

    // acionada quando o usuario digita algo keydown
    const digitou = (e) => { setTecla(e.key) }

    // funcao que altera o estado da variavel mensagem e atualiza o texto na interface
    function alterar() {
        // como possui a referencia ao botao pode acionar propriedades DOM diretamente
        console.log(refBotao)
        refBotao.current.disabled = true
        refBotao.current.innerHTML = 'Texto Alterado'
        setMensagem(`Bom Dia ${Date.now()}`)
    }

    // todas as vezez que o componente for redesenhado exibe uma mensagem no console
    useEffect(() => {
        console.log(`Renderizacao executada ${Date.now()}`)
    }, [mensagem])

    // executa somente uma vez apos renderizacao
    useEffect(() => {
        console.log('Incluir o listener KeyDown')
        document.addEventListener('keydown', digitou)
        // executa uma vez ao remover o componente do DOM e remove o Listener
        return () => {window.removeEventListener("keydown", digitou)
                      console.log('Removido evento!')}

    }, [])

    return <div><div>{novaTecla}</div>
                <div>{tecla}</div>
                <div>{mensagem}</div>
                <button ref={refBotao} onClick={alterar}>Alterar Texto</button>
            </div>

}

