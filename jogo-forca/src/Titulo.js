import React from 'react';
//import Subtitulo from './Subtitulo.js';

import { CabecalhoCtx } from './index.js';

export default function Titulo(props) {

// ctx acesso as variaveis e valores presentes no provider
return <CabecalhoCtx.Consumer>{ ctx => {

        return <div><h1>{ctx.titulo}</h1></div>

        }}</CabecalhoCtx.Consumer>


//    return <div><h1>{props.titulo}</h1>
//            <Subtitulo subtitulo={props.subtitulo}/>
//            </div>
}