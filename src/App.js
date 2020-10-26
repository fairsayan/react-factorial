import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function fact(n) {
    if (n <= 1) return n
    return n * fact( n - 1 )
}

function App() {
    const [text, setText] = useState('')
    let message = 'il testo inserito non è un numero: impossibile calcolare il fattoriale'

    if (!isNaN(text)) {
        const value = parseInt(text)
        if (value > 0)
            message = `${value}! = ${ fact(value) }`
    }

    return (
        <div className="App">
            <input value={ text } onChange={ (e) => setText( e.target.value ) } />
            <div>{ message }</div>
        </div>
    )
}

export default App
