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

}