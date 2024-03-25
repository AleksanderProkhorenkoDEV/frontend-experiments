import './assets/css/main.css'
import React, { useState } from 'react'
import Addwhise from './components/addWhise/Addwhise'
import Listwhise from './components/listWhise/ListWhise'


const whisesList = [
  {text: 'Learn React', done:true},
  {text: 'Finish my second app with React', done:false}
]

export const App = () => {

  const [whises, setWhises] = useState(whisesList)

  //We collect the whises that was modified by the index of the array, 
  //we create a copy of the list and modify the done state and use the set to update the list
  const changeWhisesDone = (index, done) => {
    const updateWhises = [...whises]
    updateWhises[index].done = done
    setWhises(updateWhises)
  }


  return (

    <div className={'main_box'}>
      <h1 className={'h1 main_header'}>Your Whises</h1>
      <div className={'table_components'}>
        <Addwhise 
          onNewWhise={wish => setWhises([...whises, wish])} 
        />
        <Listwhise 
          whisesList={whises}
          onChangeDone = {changeWhisesDone}
        />
      </div>
      <div>
        <button type='button' className='button-archive'>Archive whises done</button>
      </div>
    </div>

  )
}

