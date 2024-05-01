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

    encontrarRutaMasCorta(nodoInicio, nodoFin) {
        // Implementa la lógica para encontrar la ruta más corta entre dos nodos
        // Utiliza tu implementación de búsqueda de ruta más corta aquí
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
        
        return camino;
    }
}