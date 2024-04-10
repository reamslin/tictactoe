import Gameboard from './gameboard.js';
import Player from './player.js';
import players from './players.js';

class GameController {
    constructor() {
        this.initButtons();
        this.drawPlayers();
        this.mainMenuElement.classList.toggle('hidden')
    }

    initButtons() {
        let startButton = document.getElementById('startbutton');
        startButton.addEventListener('click', () => {
            this.gameMenuElement.classList.toggle('hidden')
            this.mainMenuElement.classList.toggle('hidden')
            this.start();
        });

        let restartButton = document.getElementById('restartbutton');
        restartButton.addEventListener('click', () => {
            this.restart();
        });

        let menuButton = document.getElementById('menubutton');
        menuButton.addEventListener('click', () => {
            this.gameboard.clearBoard();
            document.querySelector('.player1').classList.remove('player1')
            this.player1 = null;
            document.querySelector('.player2').classList.remove('player2')
            this.player2 = null;
            this.gameMenuElement.classList.toggle('hidden')
            this.mainMenuElement.classList.toggle('hidden')
            document.getElementById('startbutton').classList.toggle("hidden");

        });
    }

    drawPlayers() {
        let playerContainer = document.getElementById('players');
        for (let player of players) {
            console.log(player)
            let playerElem = document.createElement('div');
            playerElem.style.backgroundImage = `url(${player.image})`;
            playerElem.id = player;
            playerElem.classList.add("player");
            playerElem.addEventListener("click", () => {
                if (!this.player1) {
                    this.player1 = player;
                    playerElem.classList.add('player1');
                } else if (!this.player2) {
                    if (this.player1 === player) return;
                    this.player2 = player;
                    playerElem.classList.add('player2');
                    document.getElementById('startbutton').classList.toggle("hidden");
                } else {
                    return;
                }
            })
            playerContainer.appendChild(playerElem);
        } 
    }

    start() {
        this.cat = new Player('Cat', '/images/cat.jpeg');
        this.gameboard = new Gameboard(this.player1, this.player2, this.cat);
    }

    restart() {
        this.gameboard.clearBoard();
        this.gameboard = new Gameboard(this.player1, this.player2, this.cat);
    }

    get mainMenuElement() {
        return document.getElementById('mainmenu');
    }

    get gameMenuElement() {
        return document.getElementById('gamemenu');
    }

}

window.addEventListener('DOMContentLoaded', () => new GameController());

