import { Nodo } from "./Nodo";
import { Arista } from "./Arista";

export class Grafo {
    constructor() {
        this.nodos = new Set() // Conjunto de nodos
        this.aristas = [] // Lista de aristas
    }

    addNodo(nombre, posicionI, posicionJ) {
        if (!this.existeNodo(nombre)) {
            const nodo = new Nodo(nombre, posicionI, posicionJ);
            this.nodos.add(nodo);
        } 
    }

    addArista(nodoInicio, nodoFin, camino) {
        const arista = new Arista(nodoInicio, nodoFin, camino)
        this.aristas.push(arista)
    }

    existeNodo(nombre) {
        for (const nodo of this.nodos) {
            if (nodo.nombre === nombre) {
                return true;
            }
        }
        return false;
    }

    getNodeByName(nombreNodo) {
        for (const nodo of this.nodos) {
            if (nodo.nombre === nombreNodo) {
                return nodo;
            }
        }
        return null; 
    }

    encontrarCaminoEntreNodos(nodoInicio, nodoFin) {
        // Coordenadas del nodo de inicio
        let i = nodoInicio.posicionI;
        let j = nodoInicio.posicionJ;
        
        // Coordenadas del nodo de fin
        const endI = nodoFin.posicionI;
        const endJ = nodoFin.posicionJ;
        
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
    
    
    //Función para obtener el grado de un nodo dado su nombre
    gradoDelNodo(nombreNodo) {
        const nodo = this.getNodeByName(nombreNodo);
        if (!nodo) {
            return 0; // Si el nodo no existe en el grafo, el grado es cero.
        }

        let grado = 0;
        for (const arista of this.aristas) {
            if (arista.nodoInicio.equals(nodo) || arista.nodoFin.equals(nodo)) {
                grado++;
            }
        }
        return grado;
    }
    /*
    Función para obtener un diccionario con el siguiente orden: nombreNodo: grado nodo
    Esto para obtener el grado de todos los vertices. 
    */
    obtenerGradosDeNodos() {
        const grados = {};
        for (const nodo of this.nodos) {
            const nombreNodo = nodo.nombre;
            const grado = this.gradoDelNodo(nombreNodo);
            grados[nombreNodo] = grado;
        }
        return grados;
    }

}