const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
    };

const completado = {
    alias: 'c',
    default: false
};

const argv = require('yargs')

.command('crear', 'Crear una tarea nueva', {
    descripcion ,
     completado 
 }
  )
.command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion ,
        completado 
})
.command('borrar', 'Este comando borra una de las tareas', {
    descripcion 
} )
.help()
.argv;



module.exports = {
    argv
}
