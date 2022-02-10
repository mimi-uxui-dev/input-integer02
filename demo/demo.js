const csjs = require('csjs-inject')
const bel = require('bel')
const inputInteger = require("..")

function demo() {
    const output = bel`<div class=${css.output}>011</div>`

    const page = bel`<div class=${css.demo}>
        <h1>input intergerrr demo</h1>
        ${output}
        <div class=${css.container}>
            ${inputInteger({ value: 1, placeholder: 'integer' }, listen)}
            ${inputInteger({ value: 2, placeholder: 'integer' }, listen)}
            ${inputInteger({ value: 3, placeholder: 'integer' }, listen)}
        </div>  
    </div>`

    return page

    function listen(message) {
        const { type, body } = message
        if (type === 'update') output.textContent = body
    }
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
    .output {
        font-size: 24px;
        background-color: green;
        color: white;
        margin-bottom: 16px; 
        padding: 8px 0;
        width: 50%;
    }
`

document.body.appendChild(demo())