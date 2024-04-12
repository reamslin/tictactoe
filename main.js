import Gameboard from "./gameboard.js";
import Player from "./player.js";
import players from "./players.js";

const SIZE_MAX = 15;
const SIZE_DEFAULT = 3;

class GameController {
  constructor() {
    this.width = SIZE_DEFAULT;
    this.height = SIZE_DEFAULT;
    this.inarow = SIZE_DEFAULT;
    this.initButtons();
    this.drawPlayers();
    this.mainMenuElement.classList.toggle("hidden");
  }

  start() {
    console.log(this.width, this.height, this.inarow);
    this.cat = new Player("Cat", "images/cat.jpeg");
    this.gameboard = new Gameboard(
      this.player1,
      this.player2,
      this.cat,
      this.width,
      this.height,
      this.inarow
    );
  }

  restart() {
    this.gameboard.clearBoard();
    this.gameboard = new Gameboard(
      this.player1,
      this.player2,
      this.cat,
      this.width,
      this.height,
      this.inarow
    );
  }

  initButtons() {
    //START
    this.startButtonElement.addEventListener("click", () => {
      this.gameMenuElement.classList.toggle("hidden");
      this.mainMenuElement.classList.toggle("hidden");
      this.start();
    });
    //RESTART
    this.restartButtonElement.addEventListener("click", () => {
      this.restart();
    });
    //MENU
    this.menuButtonElement.addEventListener("click", () => {
      this.gameboard.clearBoard();
      document.querySelector(".player1").classList.remove("player1");
      this.player1 = null;
      document.querySelector(".player2").classList.remove("player2");
      this.player2 = null;
      this.gameMenuElement.classList.toggle("hidden");
      this.mainMenuElement.classList.toggle("hidden");
      this.chooseYourPlayersElement.innerText = "Choose your players";
      this.startButtonElement.classList.toggle("disabled");
      this.startButtonElement.disabled = true;
    });
    //SETTINGS
    this.settingsButtonElement.addEventListener("click", () => {
      this.mainMenuElement.classList.toggle("hidden");
      this.settingsMenuElement.classList.toggle("hidden");
    });
    //SAVE
    this.saveButtonElement.addEventListener("click", () => {
      this.settingsMenuElement.classList.toggle("hidden");
      this.mainMenuElement.classList.toggle("hidden");
    });
    //LEFT ARROW
    this.leftArrowButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("click");
        let setting = button.parentElement.id;
        let previousValue = +button.nextElementSibling.innerText;
        if (previousValue > 3) {
          this[setting] = previousValue - 1;
          button.nextElementSibling.innerText = previousValue - 1;
        }
        this.inarow = Math.min(this.inarow, Math.max(this.width, this.height));
        document.getElementById(
          "inarow"
        ).firstElementChild.nextElementSibling.innerText = this.inarow;
      });
    });
    //RIGHT ARROW
    this.rightArrowButtonElements.forEach((button) => {
      button.addEventListener("click", () => {
        let setting = button.parentElement.id;
        let previousValue = +button.previousElementSibling.innerText;
        if (setting === "inarow") {
          if (previousValue < this.width || previousValue < this.height) {
            this[setting] = previousValue + 1;
            button.previousElementSibling.innerText = previousValue + 1;
          }
        } else if (previousValue < SIZE_MAX) {
          this[setting] = previousValue + 1;
          button.previousElementSibling.innerText = previousValue + 1;
        }
      });
    });
  }

  drawPlayers() {
    for (let player of players) {
      let playerElem = document.createElement("div");
      playerElem.style.backgroundImage = `url(${player.image})`;
      playerElem.classList.add("player");
      playerElem.addEventListener("click", () => {
        if (!this.player1) {
          this.player1 = player;
          playerElem.classList.add("player1");
        } else if (!this.player2) {
          if (this.player1 === player) return;
          this.player2 = player;
          playerElem.classList.add("player2");
          this.startButtonElement.disabled = false;
          this.startButtonElement.classList.toggle("disabled");
          this.chooseYourPlayersElement.innerText = "";
        } else {
          this.startButtonElement.disabled = true;
          this.startButtonElement.classList.toggle("disabled");
          this.chooseYourPlayersElement.innerText = "Choose your players";
          this.player1 = player;
          document.querySelector(".player1").classList.toggle("player1");
          playerElem.classList.toggle("player1");
          this.player2 = null;
          document.querySelector(".player2").classList.toggle("player2");
        }
      });
      this.playerContainerElement.appendChild(playerElem);
    }
  }

  get mainMenuElement() {
    return document.getElementById("mainmenu");
  }

  get gameMenuElement() {
    return document.getElementById("gamemenu");
  }

  get settingsMenuElement() {
    return document.getElementById("settingsmenu");
  }

  get startButtonElement() {
    return document.getElementById("startbutton");
  }

  get restartButtonElement() {
    return document.getElementById("restartbutton");
  }

  get menuButtonElement() {
    return document.getElementById("menubutton");
  }

  get saveButtonElement() {
    return document.getElementById("savebutton");
  }

  get settingsButtonElement() {
    return document.getElementById("settingsbutton");
  }

  get chooseYourPlayersElement() {
    return document.getElementById("chooseyourplayers");
  }

  get playerContainerElement() {
    return document.getElementById("players");
  }

  get leftArrowButtonElements() {
    return document.querySelectorAll(".leftarrow");
  }

  get rightArrowButtonElements() {
    return document.querySelectorAll(".rightarrow");
  }
}

window.addEventListener("DOMContentLoaded", () => new GameController());
