let opt = {
    base: {
        demand: true,
        alias: 'b',
        description: 'La base de la tabla de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'El límite de la tabla de multiplicar'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opt)
    .command('listar', 'Lista una tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
};