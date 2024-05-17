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
            if (nodo === null) {
                return;
            }
            valores.push(nodo.getValor());
            for (let hijo of nodo.getHijos()) {
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

    //Funcion para verificar si un nodo es la raiz del arbol
    isRaiz(valor) {
        return this.raiz && this.raiz.getValor() === valor
    }

    // Funcion para verificar si un nodo es una rama
    isRama(valor) {
        const nodo = this.getNode(valor)
        return nodo !== null && nodo !== this.raiz && nodo.getHijos().length > 0
    }

    // Funcion para verificar si un nodo es una hoja
    isHoja(valor) {
        const nodo = this.getNode(valor)
        return nodo !== null && nodo.getHijos().length === 0
    }

    // Funcion para obtener el padre de un nodo dado su valor
    getParent(valor, nodoActual = this.raiz, padre = null) {
        if (nodoActual === null) {
            return null
        }
        if (nodoActual.getValor() === valor) {
            return padre
        }
        for (let hijo of nodoActual.getHijos()) {
            const resultado = this.getParent(valor, hijo, nodoActual)
            if (resultado) {
                return resultado
            }
        }
        return null
    }

    // Funcion para obtener los hijos de un nodo dado su valor
    getHijos(valor) {
        const nodo = this.getNode(valor);
        if (nodo === null) {
            return null
        }
        return nodo.getHijos()
    }

    // Funcion para obtener los hermanos de un nodo dado su valor
    getHermanos(valor) {
        const nodoActual = this.getNode(valor)
        if (!nodoActual) {
            return null
        }
        const nodoPadre = this.getParent(valor)
        if (!nodoPadre) {
            return null
        }
       return nodoPadre.getHijos().filter(hijo => hijo.getValor() !== valor)
    }

    // Funcion para obtener los descendientes de un nodo dado su valor
    getDescendientes(valor) {
        const nodo = this.getNode(valor)
        if (nodo === null) {
            return null
        }
        const descendientes = []
        function recorrer(nodo) {
            for (let hijo of nodo.getHijos()) {
                descendientes.push(hijo)
                recorrer(hijo)
            }
        }
        recorrer(nodo)
        return descendientes
    }

    // Funcion para obtener los ancestros de un nodo dado su valor
    getAncestros(valor) {
        const ancestros = [];
        let nodoActual = this.getNode(valor)
        if (!nodoActual) {
            return null
        }
        while (nodoActual !== this.raiz) {
            const nodoPadre = this.getParent(nodoActual.getValor())
            if (nodoPadre) {
                ancestros.push(nodoPadre)
                nodoActual = nodoPadre
            } else {
                break
            }
        }
        return ancestros
    }

    // Funcion para obtener el nivel de un nodo dado su valor
    getNivel(valor) {
        let nivel = 1
        const nodoActual = this.getNode(valor)

        if (!nodoActual) {
            return null
        }
        let nodoPadre = this.getParent(valor)
        while (nodoPadre !== null) {
            nivel++
            nodoPadre = this.getParent(nodoPadre.getValor());
        }
        return nivel
    }
}