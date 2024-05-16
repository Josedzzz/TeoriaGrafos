import { Node } from "./Node";

export class Tree {
    constructor() {
        this.raiz = null
    }

    //Funcion para obtener la raiz del arbol
    getRaiz() {
        return this.raiz
    }

    //Funcion para agregarle la raíz al arbol
    addRaiz(valorRaiz, posicionI, posicionJ) {
        this.raiz = new Node(valorRaiz, posicionI, posicionJ)
    }

    //Funcion para añadirle a un nodo padre su hijo
    addHijo(nodoPadre, valorHijo, posicionI, posicionJ) {
        const nuevoHijo = new Node(valorHijo, posicionI, posicionJ)
        const nodoP = this.getNode(nodoPadre)
        nodoP.addHijo(nuevoHijo)
    }

    //Funcion para obtener un nodo del arbol dado su valor
    getNode(valor, nodoActual = this.raiz) {
        if (nodoActual.getValor() === valor) {
            return nodoActual
        }
        for (let hijo of nodoActual.getHijos()) {
            const resultado = this.getNode(valor, hijo)
            if (resultado) {
                return resultado
            }
        }
        return null
    }

    //Funcion que obtiene los valores de los nodos
    getListaValores() {
        const valores = [];
        
        function recorrer(nodo) {
            valores.push(nodo.obtenerValor());
            for (let hijo of nodo.obtenerHijos()) {
                recorrer(hijo);
            }
        }
        
        recorrer(this.raiz);
        return valores;
    }

    //Funcion para verificar si un valor existe en el arbol
    existeValor(valor, nodoActual = this.raiz) {
        if (nodoActual.getValor() === valor) {
            return true
        }

        for (let hijo of nodoActual.getHijos()) {
            if (this.existeValor(valor, hijo)) {
                return true
            }
        }

        return false
    }

    encontrarCaminoEntreNodos(nodo1, i, j) {
        // Coordenadas del nodo de inicio

        let endI = nodo1.getPosicionI()
        let endJ = nodo1.getPosicionJ()

        // Camino entre los nodos
        const camino = [];
        
        // Mientras no se alcance el nodo de fin
        while (i !== endI || j !== endJ) {
            // Agregar las coordenadas actuales al camino
            camino.push({ i, j });
            
            // Moverse hacia el nodo de fin
            if (i < endI) {
                i++;
            } else if (i > endI) {
                i--;
            }
            
            if (j < endJ) {
                j++;
            } else if (j > endJ) {
                j--;
            }
        }
        
        // Agregar el nodo de fin al camino
        camino.push({ i, j });

        // Remover el primer y el último elemento del camino (los nodos de inicio y fin)
        camino.shift();
        camino.pop();
        
        return camino;
    }
}