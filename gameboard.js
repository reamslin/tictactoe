import Play from "./play.js";

class Gameboard {
  constructor(player1, player2, cat, width, height, inarow) {
    this.cat = cat;
    this.width = width;
    this.height = height;
    this.spaces = this.initGameboard();
    this.currentPlayer = player1;
    this.nextPlayer = player2;
    this.plays = 0;
    this.inarow = inarow;
    console.log(this.width, this.height, this.inarow);
    this.drawBoard();
  }

  initGameboard() {
    return Array(this.width)
      .fill(null)
      .map(() => Array(this.height).fill(null));
  }

  get element() {
    return document.getElementById("game");
  }

  drawBoard() {
    for (let i = 0; i < this.height; i++) {
      let row = document.createElement("tr");
      this.element.appendChild(row);
      for (let j = 0; j < this.width; j++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
        cell.id = `space:${j}-${i}`;
        cell.classList.add("unplaced");
        cell.style.width = `min(calc(85vw / ${this.width}), calc(60vh / ${this.height})`;
        cell.style.height = cell.style.width;
        this.element.style.width = cell.style.width * this.width;
        this.element.style.aspectRatio = `${this.width} / ${this.height}`;
        cell.style.animationDelay = `${
          (this.height - (i + j / this.width)) / 4
        }s`;
        cell.addEventListener("click", this.clickEventListener(j, i));
      }
    }
  }

  clickEventListener(x, y) {
    return () => {
      if (this.spaces[x][y] || this.winner || this.tie) return;

      let play = new Play(x, y, this.currentPlayer, this.plays++);
      this.handlePlay(play);
    };
  }

  handlePlay(play) {
    this.lastPlay = play;
    this.spaces[play.x][play.y] = play.player;

    if (this.isOver) {
      if (this.winner) {
        this.showWinner();
      }
      if (this.tie) {
        this.showTie();
      }
    } else {
      this.switchPlayers();
    }
  }

  switchPlayers() {
    [this.currentPlayer, this.nextPlayer] = [
      this.nextPlayer,
      this.currentPlayer,
    ];
  }

  get isOver() {
    if (this.plays < this.inarow) {
      return false;
    } else if (
      this.checkDiagonal() ||
      this.checkVertical() ||
      this.checkHorizontal()
    ) {
      this.winner = this.lastPlay.player;
      return true;
    } else if (this.plays >= this.width * this.height) {
      this.tie = true;
      return true;
    } else {
      return false;
    }
  }

  showWinner() {
    this.lastPlay.drawWinner();
  }

  showTie() {
    this.lastPlay.player = this.cat;
    this.showWinner();
  }

  clearBoard() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }

  checkDiagonal() {
    return (
      this.spacesToUpperRight + this.spacesToLowerLeft + 1 >= this.inarow ||
      this.spacesToUpperLeft + this.spacesToLowerRight + 1 >= this.inarow
    );
  }
  checkHorizontal() {
    return this.spacesToRight + this.spacesToLeft + 1 == this.inarow;
  }

  checkVertical() {
    return this.spacesToLower + this.spacesToUpper + 1 == this.inarow;
  }

  get spacesToLowerRight() {
    return this.spacesTo("right", "down");
  }

  get spacesToLowerLeft() {
    return this.spacesTo("left", "down");
  }

  get spacesToUpperLeft() {
    return this.spacesTo("left", "up");
  }

  get spacesToUpperRight() {
    return this.spacesTo("right", "up");
  }

  get spacesToLeft() {
    return this.spacesTo("left", "none");
  }

  get spacesToRight() {
    return this.spacesTo("right", "none");
  }

  get spacesToLower() {
    return this.spacesTo("none", "down");
  }

  get spacesToUpper() {
    return this.spacesTo("none", "up");
  }

  spacesTo(xDir, yDir) {
    let { x, y, player } = this.lastPlay;

    let bumpY = {
      up: () => y--,
      down: () => y++,
      none: () => y,
    }[yDir];

    let bumpX = {
      left: () => x--,
      right: () => x++,
      none: () => x,
    }[xDir];

    let yCondition = {
      up: () => y >= 0,
      down: () => y < this.height,
      none: () => true,
    }[yDir];

    let xCondition = {
      left: () => x >= 0,
      right: () => x < this.width,
      none: () => true,
    }[xDir];

    let spaces = 0;

    bumpY();
    bumpX();
    while (yCondition() && xCondition()) {
      if (this.spaces[x][y] === player) {
        spaces++;
        bumpY();
        bumpX();
      } else {
        break;
      }
    }

    return spaces;
  }
}

export default Gameboard;
