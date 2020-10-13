import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'


console.log(data)

function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <p className="sass">
        Esto es Sass
      </p>
      <p className="less">
        Esto es less
      </p>
      <p className="stylus">
        Esto es stylus
      </p>
      <p className="post-css">
        Esto es postcss
      </p>
      ¡Qué linda app hecha en React.js!
      <p>
        <img src={logo} alt="" width={40}/>
      </p>
      <ul>
        {
          loaderList.map((item) => <Loader {...item} key={item.id}/>)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </div>
  )
}

export default App