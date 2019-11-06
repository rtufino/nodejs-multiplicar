const { argv } = require('./config/yargs')
const colors = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicar');

let comando = argv._[0]

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e.red));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log("Comando no válido!");
}