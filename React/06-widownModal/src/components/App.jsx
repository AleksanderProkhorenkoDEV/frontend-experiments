import '../assets/css/App.css'
import Modal from './Modal'
import { useState } from 'react'

const App = () => {
    const [isOpen, setOpen] = useState(false)

    const handlerClick = () => {
        setOpen(!isOpen)
    }

    return (
        <>
            <article className='app-container'>
                <h1>Hover the image</h1>
                <div className='container' onMouseEnter={handlerClick}></div>
                <Modal 
                    closeModal={handlerClick} 
                    isActive={isOpen}
                />
            </article>
            
        </>
    )
}

export default App