const csjs = require('csjs-inject')
const html = require('nanohtml')
const inputInteger = require("..")

function demo() {
    const page = html`<div class=${css.demo}>
        <h1>input intergerrr demo</h1>
        <div class=${css.container}>
            ${inputInteger()}
            ${inputInteger()}
            ${inputInteger()}
        </div>  
    </div>`

    return page
}

const css = csjs`
    .demo {
        padding: 20px; 
        margin: 20px; 
        border: 2px dashed green;
    }
    .container{
        display: flex; 
        flex-direction: column;
        width: 50%;
        gap: 24px ;
    }
`

document.body.appendChild(demo())