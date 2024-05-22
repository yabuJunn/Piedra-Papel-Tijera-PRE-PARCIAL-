import "./export";
import { loadCss } from "./utilities/styles";
import { addObserver, dispatch, state } from "./store";
import styles from './appContainer.css'

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            loadCss(this, styles)

            const pageContainer = this.ownerDocument.createElement("div")
            pageContainer.setAttribute("id", "pageContainer")
            this.shadowRoot.appendChild(pageContainer)

            const pageTitle = this.ownerDocument.createElement("h1")
            pageTitle.innerText = "Piedra, papel o tijera"
            pageContainer.appendChild(pageTitle)

            const pageInfo = this.ownerDocument.createElement("p")
            pageInfo.innerText = "Esperando que comience el juego"
            pageContainer.appendChild(pageInfo)

            const buttonContainer = this.ownerDocument.createElement("div")
            buttonContainer.setAttribute("id", "buttonContainer")
            pageContainer.appendChild(buttonContainer)

            const rockButton = this.ownerDocument.createElement("div")
            rockButton.setAttribute("class", "button")
            rockButton.style.backgroundImage = "url('/src/assets/png/raised-fist_270a.png')"
            buttonContainer.appendChild(rockButton)

            const paperButton = this.ownerDocument.createElement("div")
            paperButton.setAttribute("class", "button")
            paperButton.style.backgroundImage = "url('/src/assets/png/hand-with-fingers-splayed_1f590-fe0f.png')"
            buttonContainer.appendChild(paperButton)

            const scissorsButton = this.ownerDocument.createElement("div")
            scissorsButton.setAttribute("class", "button")
            scissorsButton.style.backgroundImage = "url('/src/assets/png/victory-hand_270c-fe0f.png')"
            buttonContainer.appendChild(scissorsButton)
        }
    }
}

customElements.define('app-container', AppContainer)