import React from 'react'
import Button from './Button'

const onClick = () => {
    console.log('Button clicked')
}
const Header = () => {
    return (
        <header className='header'>

            <h1>Task Tracker</h1>
            <Button title='Add New Task' onClick={onClick} />
        </header>
    )
}

export default Header
