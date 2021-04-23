import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ title, onClick }) => {
    return (
        <button
            className='btn'
            onClick={onClick}
        >
            {title}</button>
    )
}

Button.prototype = {
    title: PropTypes.string.isRequired
}

export default Button
