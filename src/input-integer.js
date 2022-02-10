const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = inputInteger

function inputInteger() {
    return bel`<input class=${css.inputInteger} type="number" placeholder="0" >`
}

const css = csjs`
    .inputInteger {
        background-color: pink;
        border: none;
        padding: 8px;
    }
`