const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = inputInteger

function inputInteger(data, notify) {
    const { value = 0, placeholder = 'number' } = data

    const input = bel`<input 
    class=${css.inputInteger} 
    type="number" 
    value=${value} 
    placeholder=${placeholder} 
    >`

    input.onchange = event => {
        notify({ type: 'update', body: event.target.value })
    }

    return input
}

const css = csjs`
    .inputInteger {
        background-color: pink;
        border: none;
        padding: 8px;
    }
`