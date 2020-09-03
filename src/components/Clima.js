import React from 'react'

const Clima = ({ resultado }) => {
    
    const {name, main} = resultado
    
    if (!name) return null

    return (
        <div className="card-panel light-blue lighten-3 col s12">
            <div className="black-text">
                <h2>El clima de {name} es</h2>
                <p className="temperatura azul">
                    {main.temp} <span>&#x2103;</span>
                </p>
                <p className="temps">Temp. minima: {main.temp_min}</p>
                <p className="temps">Temp. maxima: {main.temp_max}</p>
            </div>
        </div>
    )
}

export default Clima;