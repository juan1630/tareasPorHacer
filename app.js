const arvg = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = arvg._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear(arvg.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (const tarea of listado ) {
            console.log("==========================".green);
            console.log( tarea.descripcion );
            console.log('Estado: ', tarea.completado);
            console.log("==========================".green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualiar(arvg.descripcion, arvg.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let itemDeleted = porHacer.borrar(arvg.descripcion);
        console.log(itemDeleted);
    default:
        console.log('Comando no valido');

}






