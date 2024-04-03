import '../assets/css/Modal.css'

const Modal = ( { closeModal, isActive } ) =>{

    return(
        <div className={`modal-container ${isActive ? 'active' : 'hidden'}`} onMouseLeave={closeModal}>
            <header>
                <h1>This is a modal window</h1>
            </header>
            <article>
                <p>Nice modal window</p>
            </article>
        </div>
    )
}

export default Modal