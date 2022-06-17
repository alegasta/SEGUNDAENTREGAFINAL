//Creo la clase de objeto producto como base para cargar los datos del participante     
class participante {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        }
    }

    //Inicializo un array para cargar los participantes
const listado = [];

let entrada = prompt("Ingresar nombre jugador");
let entrada2 = prompt("Ingresar apellido jugador");
listado.push(new participante(entrada, entrada2));

for (const participante of listado) {
    alert("PRIMER TURNO JUGADOR: " + participante.nombre + "  " + participante.apellido);
}


function opcion1(preg1){
    if (respuesta == "1"){
        alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
    }
    else if (respuesta !== "1") {
        for (let i = 0; i < 2; i++){
            alert(`INCORRECTO, VUELVA INTENTAR, TE QUEDAN ${2-i} INTENTOS`);
            let respuesta = prompt(preg1);
            if (respuesta == "1"){
                alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
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
        }
        else if (respuesta2 !== "2") {
            for (let i = 0; i < 2; i++){
                alert(`INCORRECTO, VUELVA INTENTAR, TE QUEDAN ${2-i} INTENTOS`);
                let respuesta2 = prompt(preg2);
                if (respuesta2 == "2"){
                    alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
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


let pregunta1 = "Vehículo de transporte aéreo provisto de alas. Escriba el numero de la opcion correcta: \n1-AVION\n2-TRACTOR\n3-DRONE\n4-HELICOPTERO" 
let respuesta = prompt(pregunta1);
opcion1(pregunta1);

let pregunta2 = "Local donde los hombres se cortaban y arreglaban el pelo, la barba y el bigote: \n1-CERVECERIA\n2-BARBERIA\n3-FERRETERIA\n4-RELOJERIA"
let respuesta2 = prompt(pregunta2);
opcion2(pregunta2);


