//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const ctoodo = require('./paquetes/todo');
const color = require('colors');

let comando = argv._[0].toLowerCase();


const verlista = () => {
    let listado = ctoodo.getListado();

    console.log('============ Tareas por Hacer ============'.green);
    for (let tarea of listado) {

        if (tarea.completado) {
            console.log(tarea.descripcion.blue);
        } else {
            console.log(tarea.descripcion.red);
        }

    }
    console.log('=========================================='.green);
    console.log('=== '.green, 'En azul: Tareas Completas'.blue);
    console.log('=== '.green, 'En rojo: Tareas Pendientes'.red);
    console.log('================== FIN ==================='.green);
}

switch (comando) {
    case 'crear':
        let tarea = ctoodo.mcrear(argv.descripcion);
        verlista();
        //console.log(tarea);
        break;

    case 'listar':

        verlista();
        break;

    case 'actualizar':

        let act = ctoodo.mactualizar(argv.descripcion, argv.completado);

        if (act) {
            verlista();
        } else {
            console.log('La actualizacion no fue completada');
        }

        break;

    case 'borrar':
        let bor = ctoodo.mborrar(argv.descripcion);

        if (bor) {
            verlista();
        } else {
            console.log('El borrado no fue completado');
        }

        break;

    default:
        console.log('Comando invalido');



}