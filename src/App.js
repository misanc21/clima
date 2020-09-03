import React, {Fragment, useState, useEffect} from 'react';

import axios from 'axios'

import Header from './components/Header'
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
  })

  const [resultado, setResultado] = useState({})

  const {ciudad, pais} = busqueda

  const [error, setError] = useState(false)


  const consultarApi = async () =>{
      const appId = '99e66bdd9cd081550cad110adbb6d8a2'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric`

      await axios.get(url)
      .then(res => setResultado(res.data))
      .catch(err => setError(true))
  }

  useEffect(()=>{
      setError(false)
  }, [resultado])

  return (
    <Fragment>
      <Header
        titulo = "Clima react app"
      />
      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                      <Formulario
                        busqueda = {busqueda}
                        setBusqueda = {setBusqueda}
                        consultarApi = {consultarApi}
                      />
                  </div>
                  <div className="col m6 s12">
                      {
                        error ? <Error mensaje="No se encontraron datos"/> : <Clima resultado = {resultado}/>
                      }
                  </div>
              </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
