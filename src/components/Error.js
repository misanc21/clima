import React from 'react'
import PropTypes from 'prop-types'

const Error = ( {mensaje} ) => {
    return (
        <blockquote className="error-component">{ mensaje }</blockquote>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;