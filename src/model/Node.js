export class Node {
    constructor(valor, posicionI, posicionJ) {
        this.valor = valor
        this.hijos = []
        this.posicionI = posicionI // Agregar atributo para la posición en la matriz
        this.posicionJ = posicionJ
    }

    //Metodo para agregar un hijo al nodo
    addHijo(hijo) {
        this.hijos.push(hijo);
    }

    //Metodo para obtener el valor de un nodo
    getValor() {
        return this.valor
    }

    //Metodo para obtener los hijos de un nodo
    getHijos() {
        return this.hijos
    }

    getPosicionI() {
        return this.posicionI
    }

    getPosicionJ() {
        return this.posicionJ
    }
}