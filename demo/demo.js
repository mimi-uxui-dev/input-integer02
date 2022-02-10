const csjs = require('csjs-inject')
const bel = require('bel')
const inputInteger = require("..")

const state = {
    from: { value: 0 }
}

function demo() {
    const output = bel`<div class=${css.output}>0</div>`

    const page = bel`<div class=${css.demo}>
        <h1>input intergerrr demo</h1>
        ${output}
        <div class=${css.container}>
            ${inputInteger({ value: 0, placeholder: 'integer' }, listen)}
            ${inputInteger({ value: 0, placeholder: 'integer' }, listen)}
            ${inputInteger({ value: 0, placeholder: 'integer' }, listen)}
        </div>  
    </div>`

    return page

    function listen(message) {
        const { from, type, body } = message
        if (type === 'update') {
            if (!state[from]) state[from] = { value: Number(body) }
            else state[from].value = Number(body)

            const values = Object.keys(state).map(from => state[from].value)

            const sum = values.reduce((s, x) => s + x, 0)

            output.textContent = sum
        }
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