import { makeAutoObservable } from "mobx"

class Favorites {

    public favorites: string[] = []

    constructor() {
        makeAutoObservable(this)
    }

    public setFavorites(id: string) {
        this.favorites.push(id)
    }

}

export default new Favorites()