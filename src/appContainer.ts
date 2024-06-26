import "./export";
import { loadCss } from "./utilities/styles";
import { addObserver, dispatch, state } from "./store";
import styles from './appContainer.css'
import './utilities/socket'
import { makeAMove } from "./utilities/makeAMove";

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

            const idInfo = this.ownerDocument.createElement("p")
            if (state.myId) {
                idInfo.innerText = `Conectado con ID ${state.myId}`
                if (state.playerType === "player0") {
                    idInfo.innerText += `Tu eres player0, no puedes jugar`
                }
                if (state.player1) {
                    idInfo.innerText += `Tu eres player1`
                } else if (state.player2) {
                    idInfo.innerText += `Tu eres player2`
                }
            } else {
                idInfo.innerText = "Esperando que comience el juego"
            }

            pageContainer.appendChild(idInfo)

            const pageInfo = this.ownerDocument.createElement("p")
            if (state.currentTurn) {
                pageInfo.innerText = `Es el turno de ${state.currentTurn}`
            }
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

            const winsTexts = this.ownerDocument.createElement("p")
            winsTexts.innerText = `El jugador 1 ha ganado ${state.wins.player1Wins} veces y el jugador 2 ha ganado ${state.wins.player2Wins} veces`
            pageContainer.appendChild(winsTexts)

            if (state.playing) {
                if (state.currentTurn === state.playerType) {
                    if (state.playerType === "player1") {
                        rockButton.addEventListener('click', () => {
                            // console.log("rockButton")
                            // console.log(state.currentTurn)
                            makeAMove({
                                currentTurn: state.currentTurn,
                                player1Move: "rock",
                            })
                        })

                        paperButton.addEventListener('click', () => {
                            console.log("paperButton")
                            makeAMove({
                                currentTurn: state.currentTurn,
                                player1Move: "paper",
                            })
                        })

                        scissorsButton.addEventListener('click', () => {
                            console.log("scissorsButton")
                            makeAMove({
                                currentTurn: state.currentTurn,
                                player1Move: "scissors",
                            })
                        })
                    }

                    if (state.playerType === "player2") {
                        rockButton.addEventListener('click', () => {
                            console.log("rockButton")
                            makeAMove({
                                currentTurn: state.currentTurn,
                                player2Move: "rock",
                            })
                        })

                        paperButton.addEventListener('click', () => {
                            console.log("paperButton")
                            makeAMove({
                                currentTurn: state.currentTurn,
                                player2Move: "paper",
                            })
                        })

                        scissorsButton.addEventListener('click', () => {
                            console.log("scissorsButton")
                            makeAMove({
                                currentTurn: state.currentTurn,
                                player2Move: "scissors",
                            })
                        })
                    }
                }
            }
        }
    }
}

customElements.define('app-container', AppContainer)