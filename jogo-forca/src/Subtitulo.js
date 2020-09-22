import React from 'react';

import { CabecalhoCtx } from './index.js';

export default function Subtitulo(props) {

    return <CabecalhoCtx.Consumer>{ ctx => {

        return <div><h2>{ctx.subtitulo}</h2></div>

        }}</CabecalhoCtx.Consumer>

//    return <h2>{props.subtitulo}</h2>
}