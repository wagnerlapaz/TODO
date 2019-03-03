const descripcion = {
    alias: 'd',
    demand: true
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crear una Tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una Tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}