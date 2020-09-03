import React from 'react'

const Error = ( {mensaje} ) => {
    return (
        <blockquote className="error-component">{ mensaje }</blockquote>
    )
}

export default Error;