import "./export";
import styles from "./appContainer.css"
import { loadCss } from "./utilities/styles";
import { addObserver, dispatch, state } from "./store";
import { exampleAction } from "./store/actions";

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
            const help = this.ownerDocument.createElement("h1")
            help.innerText = state.example
            this.shadowRoot?.appendChild(help)

            const exampleInput = this.ownerDocument.createElement("input")
            this.shadowRoot?.appendChild(exampleInput)

            const exampleButton = this.ownerDocument.createElement("button")
            exampleButton.innerText = "Example"
            this.shadowRoot?.appendChild(exampleButton)
            exampleButton.addEventListener('click', () => {
                dispatch(
                    exampleAction(exampleInput.value, true)
                )
            })


            const examplePage = this.ownerDocument.createElement("example-page")
            this.shadowRoot.appendChild(examplePage)
        }
    }
}

customElements.define('app-container', AppContainer)