const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = ()=> {
    let data =JSON.stringify(listadoPorHacer);
    // esta funcion convierte un objeto a un json valido

    fs.writeFile('./db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo grabar la tarea')
    })
}

// Creamos una nueva tarea

const crear = ( descripcion )=> {

    cargarDB();
   
    let porHacer = {
       descripcion,
       completado : false
   } 


   listadoPorHacer.push(porHacer);

   guardarDB();

   return porHacer;

}


const cargarDB = ()=> {

    try {
        
        listadoPorHacer = require('../db/data.json');
    
    } catch (error) {
        listadoPorHacer = [];    
    }

    console.log(listadoPorHacer);
}


const getListado = () => {
    cargarDB()
    return listadoPorHacer;


}


const actualiar = ( descripcion, completado = true )=> {
    cargarDB()
    
    let index = listadoPorHacer.findIndex( tarea =>  tarea.descripcion === descripcion );
    if( index >= 0 ){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
}

const borrar = (desc)=> {
    cargarDB();

    let itemDeleted = listadoPorHacer.filter( item => {
        return item.descripcion !== desc; 
    });

    if(listadoPorHacer.length === itemDeleted.length ){
        return false;
    } else {
        listadoPorHacer = itemDeleted;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualiar,
    borrar
}

