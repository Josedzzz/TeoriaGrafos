export class Nodo {
    constructor(nombre, posicionI, posicionJ) {
        this.nombre = nombre
        this.posicionI = posicionI // Agregar atributo para la posición en la matriz
        this.posicionJ = posicionJ
    }

    equals(otroNodo) {
        return this.nombre === otroNodo.nombre;
    }
}