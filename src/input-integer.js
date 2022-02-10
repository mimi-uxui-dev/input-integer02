const csjs = require('csjs-inject')

const parser = document.createElement('div')

module.exports = inputInteger

function inputInteger() {
    parser.innerHTML = `<input type="number" placeholder="0" >`
    const element = parser.children[0]

    return element
}