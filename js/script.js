//Creo la clase de objeto producto como base para cargar los datos del participante     
class participante {
    constructor(nombre, apellido, puntaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.puntaje = puntaje;
        }
    }

    //Inicializo un array para cargar los participantes
const listado = [];

let playername = prompt("Ingresar nombre jugador N°1");
let playerlastname = prompt("Ingresar apellido jugador N°1");
let player2name = prompt("Ingresar nombre jugador N°2");
let player2lastname = prompt("Ingresar apellido jugador N°2");
let punt =0;
let pun = 0;
listado.push(new participante(playername, playerlastname, pun));
listado.push(new participante(player2name, player2lastname, punt));

for (const jugador of listado) {
    alert("JUGADORES: " + jugador.nombre + "  " + jugador.apellido);
}

for (let i = 1; i < 3; i++){
function opcion1(preg1){
    
    if (respuesta == "1"){
        alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
        
        return 1;
    }
    else if (respuesta !== "1") {
        for (let i = 0; i < 2; i++){
            alert(`INCORRECTO, VUELVA INTENTAR, TE QUEDAN ${2-i} INTENTOS`);
            let respuesta = prompt(preg1);
            if (respuesta == "1"){
                alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
                
                return 1;
                break;
            }
            else if (respuesta !== "1"){
                if(i==1){
                    alert("AGOTO TODOS SUS INTENTOS");
                }
            }
            
    }
    
    }
    
    }

    function opcion2(preg2){
        
        if (respuesta2 == "2"){
            alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
            
            return 1;
        }
        else if (respuesta2 !== "2") {
            for (let i = 0; i < 2; i++){
                alert(`INCORRECTO, VUELVA INTENTAR, TE QUEDAN ${2-i} INTENTOS`);
                let respuesta2 = prompt(preg2);
                if (respuesta2 == "2"){
                    alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
                    
                    return 1;
                    break;
                }
                else if (respuesta2 !== "2"){
                    if(i==1){
                        alert("AGOTO TODOS SUS INTENTOS");
                    }
                }
                
        }
        
        }
        }

        
let puntos = 0

    alert(`TURNO JUGADOR N° ${i}`);
let pregunta1 = "Vehículo de transporte aéreo provisto de alas. Escriba el numero de la opcion correcta: \n1-AVION\n2-TRACTOR\n3-DRONE\n4-HELICOPTERO" 
let respuesta = prompt(pregunta1);
puntos = opcion1(pregunta1);


let pregunta2 = "Local donde los hombres se cortaban y arreglaban el pelo, la barba y el bigote: \n1-CERVECERIA\n2-BARBERIA\n3-FERRETERIA\n4-RELOJERIA"
let respuesta2 = prompt(pregunta2);
puntos = puntos + opcion2(pregunta2);
alert ("SU PUNTAJE FUE DE: "+puntos);
if (i === "1"){
    pun = puntos;
}
else if (i === "2"){
    punt = puntos;
}

}
for (const jugador of listado) {
    alert("JUGADORES: " + jugador.nombre + "  " + jugador.apellido+ "  PUNTAJE: " +jugador.puntaje);
}

const total = listado. reduce((acc, el) => acc + el. apellido, 0)
console. log(total) 


const players = listado. map((player) => player.nombre)
console. log(players)


//comentario
