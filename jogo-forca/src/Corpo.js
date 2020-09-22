import React from 'react'

// componente para representar o corpo na forca
export default function Corpo(props) {

    let componente = <div></div>

    if (props.erros == 1) {

        componente = <div><img src="cabeca.png"/></div>
    
    } else if (props.erros == 2) {
            componente = <div>
                         <div><img src="cabeca.png"/></div>
                         <div><img src="corpo.png"/></div>
                         </div>
    }  else if (props.erros == 3) {
        componente = <div>
                     <div><img src="cabeca.png"/></div>
                     <div><img src="corpo.png"/></div>
                     <div><img src="pernas.png"/></div>
                     </div>
}

    return <div style={{width: "400px", height: "300px", border: "solid"}}>{componente}</div>;

}