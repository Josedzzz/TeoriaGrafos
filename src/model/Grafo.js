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
    
    //Funcion para obtener el grado de un nodo dado su nombre
    getGradoNodo(nombreNodo) {
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

    //Funcion para obtener los vecinos de un nodo dado su nombre
    getVecinosNodo(nombreNodo) {
        const nodo = this.getNodeByName(nombreNodo)
        if (!nodo) return 'Error'
        let vecinos = '{ '
        for (const arista of this.aristas) {
            if (arista.nodoInicio.equals(nodo)) {
                vecinos = vecinos + ' ' + arista.nodoFin.nombre
            } else if (arista.nodoFin.equals(nodo)) {
                vecinos = vecinos + ' ' + arista.nodoInicio.nombre
            }
        }
        return vecinos + ' }'
    }

    //Funcion para saber si el grafo es un multigrafo
    isMultigrafo() {
        const aristasUnicas = new Set()
        for (const arista of this.aristas) {
            const key = `${arista.nodoInicio.nombre}-${arista.nodoFin.nombre}`
            const key1 = `${arista.nodoFin.nombre}-${arista.nodoInicio.nombre}`
            if (aristasUnicas.has(key) || aristasUnicas.has(key1)) {
                return true
            }
            aristasUnicas.add(key)
            aristasUnicas.add(key1)
        }
        return false
    }

    //Funcion para saber si el grafo es regular
    isRegular() {
        const grados = this.obtenerGradosDeNodos()
        const primerGrado = Object.values(grados)[0]
        for (const grado of Object.values(grados)) {
            if (grado !== primerGrado) {
                return false;
            }
        }
        return true
    }

    //Funcion para saber si el grafo es conexo
    isConexo() {
        const nodos = Array.from(this.nodos)
        const visitados = new Set()
        const pila = [nodos[0]] // Comenzamos desde el primer nodo
    
        while (pila.length > 0) {
            const nodoActual = pila.pop();
            visitados.add(nodoActual);
    
            for (const arista of this.aristas) {
                if (arista.nodoInicio === nodoActual && !visitados.has(arista.nodoFin)) {
                    pila.push(arista.nodoFin)
                }
                if (arista.nodoFin === nodoActual && !visitados.has(arista.nodoInicio)) {
                    pila.push(arista.nodoInicio)
                }
            }
        }
        return visitados.size === nodos.length
    }

    //Obtiene el numero de nodos del grafo
    getNumNodos() {
        return this.nodos.size
    }

    //Obtiene el numero de aristas del grafo
    getNumEdges() {
        return this.aristas.length
    }

    //Obtiene el ciclo euleriano del grafo si es que existe
    getCicloEuleriano() {
        return []
    }

    //Obtiene el ciclo hamiltoniano del grafo si es que existe
    getCicloHamiltoniano() {
        return []
    }

    /*
    Función para obtener un diccionario con el siguiente orden: nombreNodo: grado nodo
    Esto para obtener el grado de todos los vertices. 
    */
    obtenerGradosDeNodos() {
        const grados = {};
        for (const nodo of this.nodos) {
            const nombreNodo = nodo.nombre;
            const grado = this.getGradoNodo(nombreNodo);
            grados[nombreNodo] = grado;
        }
        return grados;
    }

    obtenerNombresNodos() {
        const nombresNodos = [];
        for (const nodo of this.nodos) {
            nombresNodos.push(nodo.nombre);
        }
        return nombresNodos;
    }

    obtenerNombresAristas() {
        const nombresAristas = [];
        for (const arista of this.aristas) {
            const nombreArista = `${arista.nodoInicio.nombre}-${arista.nodoFin.nombre}`;
            nombresAristas.push(nombreArista);
        }
        return nombresAristas;
    }

}