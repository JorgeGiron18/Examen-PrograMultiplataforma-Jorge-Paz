const fs = require('fs');
const btnguardar = document.getElementById('btnguardar');
    
    const txtidentidad = document.getElementById('identidad');
    const txtnombre_completo = document.getElementById('nombre_completo');
    const txtcorreo = document.getElementById('correo');
    const txtnumero = document.getElementById('numero');
    const txtfecha = document.getElementById('fecha')

    btnguardar.addEventListener('click', function(e) {
        e.preventDefault()      
            fs.open("./personas.csv", 'a' , function(erro, archivo){
                if (erro) {
                    console.log("Error al abrir el archivo");
                    console.log(error);
                    return;
                }
     
                const linea = `\n ${txtidentidad.value}, ${txtnombre_completo.value}, ${txtcorreo.value}, ${txtnumero.value}, ${txtfecha.value}`;


            fs.write(archivo, linea, function(err, written, string){
                if (erro){
                    console.log ('Datos no ingresados');
                    console.log(erro);
                }
                    console.log('Datos ingresados correctamente');
            })
        });
    });  
        



















