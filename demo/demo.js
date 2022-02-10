const csjs = require('csjs-inject')

const inputInteger = require("..")

const parser = document.createElement('div')

/* const x = inputInteger() */
/* document.body.innerHTML = `<h1>${x} You good? Wow that was fast!</h1>` */

function start(css) {

    parser.innerHTML = `<div>
        <h1>This is working! Super Fast🔥</h1>
           <div class=${css.container}></div> 
           <div class=${css.output}>I am the output</div> 
    </div>`

    const page = parser.children[0]
    const container = page.children[1]
    const output = page.children[2]


    const input1 = inputInteger()
    const input2 = inputInteger()

    container.appendChild(input1)
    container.appendChild(input2)

    document.body.appendChild(page)

}

start(csjs`
    .output{
        border: 1px solid red;
    }
    .container{
        border: 1px solid blue;
    }
`)