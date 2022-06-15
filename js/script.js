function opcion1(){
    if (respuesta == "1"){
        alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
    }
    else if (respuesta !== "1") {
        for (let i = 0; i < 2; i++){
            alert(`INCORRECTO, VUELVA INTENTAR, TE QUEDAN ${2-i} INTENTOS`);
            let respuesta = prompt("Vuelva a intentar. Escriba su respuesta: ");
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

    function opcion2(){
        if (respuesta2 == "2"){
            alert("FELICITACIONES, SU RESPUESTA ES CORRECTA!");
        }
        else if (respuesta2 !== "2") {
            for (let i = 0; i < 2; i++){
                alert(`INCORRECTO, VUELVA INTENTAR, TE QUEDAN ${2-i} INTENTOS`);
                let respuesta2 = prompt("Vuelva a intentar. Escriba su respuesta: ");
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
        
let respuesta = prompt("Vehículo de transporte aéreo provisto de alas. Escriba el numero de la opcion correcta: \n1-AVION\n2-TRACTOR\n3-DRONE\n4-HELICOPTERO");

opcion1();

let respuesta2 = prompt("Local donde los hombres se cortaban y arreglaban el pelo, la barba y el bigote: \n1-CERVECERIA\n2-BARBERIA\n3-FERRETERIA\n4-RELOJERIA");

opcion2();


