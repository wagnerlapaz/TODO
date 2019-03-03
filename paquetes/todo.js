const fs = require('fs');

let arraytodo = [];

const guardarDB = () => {
    let data = JSON.stringify(arraytodo);
    fs.writeFile('database/data.json', data, (err) => {
        if (err) {
            throw new Error('Error al Guardar', err);
        }
    })
}

const cargarDB = () => {
    try {
        arraytodo = require('../database/data.json');
    } catch (error) {
        arraytodo = [];
    }

}

const getListado = () => {


    let getarray = [];
    try {

        getarray = require('../database/data.json');
        if (JSON.stringify(getarray) == '{}' || JSON.stringify(getarray) == '[]') {
            let otodo = {
                descripcion: 'No hay tareas por hacer',
                completado: true
            };
            getarray.push(otodo);

        }

    } catch (error) {
        getarray = [];
        let otodo = {
            descripcion: 'No hay tareas por hacer',
            completado: true
        };
        getarray.push(otodo);
    }

    return getarray;

    //cargarDB()
    //return arraytodo;

}

const mcrear = (descripcion) => {

    cargarDB();

    let otodo = {
        descripcion,
        completado: false
    };

    arraytodo.push(otodo);
    guardarDB();
    return otodo;
}

const mactualizar = (descripcion, completado) => {
    cargarDB();

    let index = arraytodo.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        arraytodo[index].completado = completado;
        guardarDB();
        return true;
    } else { false }


}

const mborrar = (descripcion) => {
    cargarDB();

    let index = arraytodo.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        arraytodo.splice(index, 1);
        guardarDB();
        return true;
    } else { false }

}


module.exports = {
    mcrear,
    guardarDB,
    cargarDB,
    getListado,
    mactualizar,
    mborrar
}