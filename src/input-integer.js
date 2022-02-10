const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = inputInteger

var id = 0

function inputInteger(data, notify) {
    const name = 'inputInteger_' + id++

    const { value = 0, placeholder = 'number' } = data

    const input = bel`<input 
        class=${css.inputInteger} 
        type="number" 
        value=${value} 
        placeholder=${placeholder} 
    >`

    input.onchange = e => {
        notify({ from: name, type: 'update', body: e.target.value })
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