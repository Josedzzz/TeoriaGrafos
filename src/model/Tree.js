import { Node } from "./Node";

export class Tree {
    constructor(valorRaiz) {
        this.raiz = new Node(valorRaiz)
    }

    //Funcion para obtener la raiz del arbol
    getRaiz() {
        return this.raiz
    }

    //Funcion para añadirle a un nodo padre su hijo
    addHijo(nodoPadre, valorHijo, posicionI, posicionJ) {
        const nuevoHijo = new Node(valorHijo, posicionI, posicionJ)
        nodoPadre.addHijo(nuevoHijo)
    }

    //Funcion para obtener un nodo del arbol dado su valor
    getNode(valor, nodoActual = this.raiz) {
        if (nodoActual.getValor === valor) {
            return nodoActual
        }
        for (let hijo of nodoActual.obtenerHijos()) {
            const resultado = this.getNode(valor, hijo)
            if (resultado) {
                return resultado
            }
        }
        return null
    }
}