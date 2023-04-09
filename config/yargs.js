const argv = require('yargs')
  .options('b', {
    alias: 'base',
    type: 'number',
    describe: 'El número del cual se desea obtener la tabla',
    demandOption: true
  })
  .options('l', {
    alias: 'listar',
    type: 'boolean',
    describe: 'Listar la tabla',
    default: false,
  })
  .options('lm', {
    alias: 'limite',
    type: 'number',
    describe: 'Limite de la tabla',
    demandOption: true
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero'
    }
    if(isNaN(argv.lm)){
      throw 'El limite tiene que ser un numero'
    }
    return true
  })
  .argv

module.exports = {
  argv
}