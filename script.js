class Info {
    constructor(nom, pages, proprietaire) {
        this.nom = nom;
        this.pages = pages;
        this.proprietaire = proprietaire;
    }

    afficher() {
        console.log("Nom :", this.nom,"Pages :", this.pages,"Proprietaire :", this.proprietaire);
    }
}


class Queue {
    constructor() {
        this.elements = [];
    }
    ajouterInfo(nom, pages, proprietaire) {
        let objet = new Info(nom, pages, proprietaire);

        this.elements.unshift(objet);
    }
    isEmpty() {
        return this.elements.length === 0;
    }


    dequeue() {
        if (this.isEmpty()) {
            console.log("La file est vide");
            return null;
        }

        return this.elements.shift();
    }

    last() {
        if (this.isEmpty()) {
            console.log("La file est vide");
            return null;
        }

        return this.elements[0];
    }

    first() {
        if (this.isEmpty()) {
            console.log("La file est vide");
            return null;
        }

        let position = this.elements.length - 1;
        return this.elements[position];
    }

    size() {
        return this.elements.length;
    }

    display() {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].afficher();
        }
    }

    clear() {
        this.elements = [];
    }

    totalPages() {
        let total = 0;

        for (let i = 0; i < this.elements.length; i++) {
            total = total + this.elements[i].pages;
        }

        return total;
    }

    findByOwner(nom) {
        for (let i = 0; i < this.elements.length; i++) {

            if (this.elements[i].proprietaire === nom) {
                return this.elements[i];
            }

        }

        return null;
    }
}


let impression = new Queue();
impression.ajouterInfo("sfsadhf", 10, "test")
impression.ajouterInfo("sfsadhf", 20, "tssest")

console.log(impression)
