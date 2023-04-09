const fs = require('fs')
const colors = require('colors')

const crearArchivoTabla = async (number, listar, limite) => {
  try {

    const nombreArchivo = `salida/tabla-${number}.txt`
    let salida = ''
  
    for (let i = 1; i <= limite; i++) {
      salida += `${number} ${'x'.green} ${i} ${'='.green} ${number * i}\n`
    }

    if(listar){
      console.log('==============='.green)
      console.log('   Tabla del:'.green, colors.blue(number))
      console.log('==============='.green)
      console.log(salida)
    }

    fs.writeFileSync(nombreArchivo, salida)
    
    return nombreArchivo

  } catch (error) {
    return 'Error al crear archivo'
  }
}

module.exports = {
  crearArchivoTabla
}