import React from "react";

const Listwhise = ({ whisesList, onChangeDone}) => {

    //Function that uses the parent's callback to modify the state of the list in the parent
    const handlerClickCheck = (index, e) => {
        onChangeDone(index, e)
    } 

    return (
        <div className={'comp_whislist'}>
            <h1 className={'title_comp_position'}>List of your wishes</h1>
            <ul className={'list_wishes'}>
                {whisesList.map(({ text, done }, index) => (
                    <li key={`wish_${text}`}>
                        <p htmlFor={`wish_${text}`} className={'text-li'}>
                            <input
                                type="checkbox"
                                id={`wish${text}`}
                                checked={done}
                                //Capture the event and pass the index and target
                                onChange={e => handlerClickCheck(index, e.target.checked)} 
                            />
                            {done ? <del className='whise-done'>{text}</del> : text}
                        </p>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Listwhise