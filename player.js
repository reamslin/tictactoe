class Player {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    get element() {
        return document.getElementById(`player-${this.name}`)
    }
}
export default Player;