import '../css/index.css'

import text from './text'   // Importamos text del archivo text.js (se omite la extensión porque se espera por default un js)

text()

// En react y veu la modularización es automática
if (module.hot) {
  module.hot.accept('./text.js', function() {
    console.log('He recargado en caliente')
    text()
  })
}