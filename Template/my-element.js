class myElement extends HTMLElement {
    constructor(){
        super() // siempre llamar al super primero
        
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h2>Hola mundo</h2>
                <div>
                    <p>Soy mas texto de ejemplo</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true))
    }
    getStyles(){
        return `
            <style>
                h2{
                    color: red
                }
            </style>
        `
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define('my-element', myElement)

