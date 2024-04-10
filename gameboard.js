import Play from "./play.js"

const IN_A_ROW = 3;
const WIDTH = 3;
const HEIGHT = 3;

const INIT_GAMEBOARD = () => Array(WIDTH).fill(null).map(() => Array(HEIGHT).fill(null))

class Gameboard {
    constructor(player1, player2, cat) {
        this.player1 = player1;
        this.player2 = player2;
        this.cat = cat;
        this.spaces = INIT_GAMEBOARD();
        this.currentPlayer = player1;
        this.nextPlayer = player2;
        this.plays = 0;
        this.drawBoard();
    }

    get element() {
        return document.getElementById('game');
    }

    drawBoard() {
        for (let i = 0; i < WIDTH; i++) {
            let row = document.createElement('tr');
            this.element.appendChild(row);
            for (let j = 0; j < HEIGHT; j++) {
                let cell = document.createElement('td');
                row.appendChild(cell)
                cell.id = `spaces${i}-${j}`
                cell.classList.add('unplaced');
                cell.style.width = `min(calc(90vw / ${WIDTH}), calc(70vh / ${HEIGHT})`;
                cell.style.height = `min(calc(90vw / ${WIDTH}), calc(70vh / ${HEIGHT})`;;
                cell.style.animationDelay = `${((WIDTH - (i + j/HEIGHT))/4)}s`
                cell.addEventListener("click", this.clickEventListener(i,j))
            }
        }
    }

    clickEventListener(x,y) {
        return () => {        
            if (this.spaces[x][y] || this.winner || this.tie) return;

            let play = new Play(x, y, this.currentPlayer);
            this.handlePlay(play);  
        }
    }

    handlePlay(play) {
        this.lastPlay = play;
        this.spaces[play.x][play.y] = play.player;
        this.plays++

        if (this.isOver()) {
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
        [this.currentPlayer, this.nextPlayer] = [this.nextPlayer, this.currentPlayer]
    }
    
    isOver() {
        if (this.plays < IN_A_ROW){
            return false;
        } else if (this.checkDiagonal() || this.checkVertical() || this.checkHorizontal()) {
            this.winner = this.lastPlay.player;
            return true;
        } else if (this.plays >= WIDTH * HEIGHT) {
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
        while(this.element.firstChild){
            this.element.removeChild(this.element.firstChild);
        }
    }

    checkDiagonal() {
        return (
            this.spacesToUpperRight + this.spacesToLowerLeft + 1 >= IN_A_ROW
            || this.spacesToUpperLeft + this.spacesToLowerRight + 1 >= IN_A_ROW
        )
    }
    checkHorizontal() {
        return (
            this.spacesToRight + this.spacesToLeft + 1 == IN_A_ROW
        )
    }

    checkVertical() {
        return (
            this.spacesToLower + this.spacesToUpper + 1 == IN_A_ROW 
        )
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
        let {x, y, player} = this.lastPlay;

        let bumpY = { 
            "up"   : () => y--, 
            "down" : () => y++, 
            "none" : () => y,
        }[yDir];

        let bumpX = { 
            "left"  : () => x--, 
            "right" : () => x++, 
            "none"  : () => x,
        }[xDir];

        let yCondition = { 
            "up"    : () => y >= 0, 
            "down"  : () => y < HEIGHT, 
            "none"  : () => true,
        }[yDir];

        let xCondition = {
            "left"  : () => x >= 0,
            "right" : () => x < WIDTH,
            "none"  : () => true,
        }[xDir];

        let spaces = 0;
        
        bumpY();
        bumpX();
        while (yCondition() && xCondition()) {
            if (this.spaces[x][y] === player) {
                spaces++
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