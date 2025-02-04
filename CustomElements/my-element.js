const template = document.createElement("div")
template.innerHTML = `
    <style>
    p{
        color: blue;
    }
    .texto{
        color:red;
    }
    </style>
    <p class="texto">Hola Mundo 2</p>
    <p>texto de ejemplo</p>
`;


class myElement extends HTMLElement {
    constructor(){
        super() // siempre llamar al super primero
        this.p = document.createElement('p')
    }
    connectedCallback(){
        this.p.textContent = "Hola Mundoo"
        this.appendChild(this.p)
        this.appendChild(template)
    }
}
customElements.define('my-element', myElement)