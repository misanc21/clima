import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Formulario = ({busqueda, setBusqueda, consultarApi}) => {

    const [error, setError] = useState (false)

    const {ciudad, pais} = busqueda

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (ciudad.trim() === '' || pais.trim() === ''){
            setError(true)
            return
        }
        consultarApi()
        setError(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            {error? <p className="red darken-4 error">Todos los campos son obligatorios</p>:null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Selecicone un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar</button>
            </div>
        </form>
    )
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    consultarApi: PropTypes.func.isRequired,
}
export default Formulario;