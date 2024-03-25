import React, { useState } from "react";

const Addwhise = ({onNewWhise}) => {
    const [newWhise, setNewWhise] = useState('')

    const handleClickAdd = () =>{
        if(newWhise.length) {
            onNewWhise({ done: false, text: newWhise })
            setNewWhise('')
        }
    }
    
    return (
        <div className={'comp_addwhises'}>
            <label htmlFor="addwhise">Insert here your whises</label>
            <input 
                type="text" 
                placeholder='Insert your whise' 
                name="addwhise" 
                value={newWhise}
                onChange={e => setNewWhise(e.target.value)}
            />
            <button 
                type='button'
                onClick={handleClickAdd}            
            >Add</button>
        </div>
    )
}

export default Addwhise