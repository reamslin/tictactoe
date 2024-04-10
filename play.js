let playCount = 0;

class Play {
    constructor(x, y, player) {
        this.x = x;
        this.y = y;
        this.player = player;
        this.draw();
    }

    get element() {
        return document.getElementById(`spaces${this.x}-${this.y}`)
    }

    draw() {
        this.element.classList.remove('unplaced')
        this.element.classList.add('placed')
        this.element.style.animationDelay = '0s';
        this.element.style.zIndex = ++playCount;
        this.element.style.backgroundImage = `url(${this.player.image}`;
    }

    drawWinner() {
        this.element.classList.add('winner');
        this.element.style.animationDelay = '0s, 0.5s';
        this.element.style.backgroundImage = `url(${this.player.image}`;

        let tds = document.querySelectorAll('td');
        for (let td of tds) {
            td.style.borderColor = 'black'
        }
    }
}

export default Play;