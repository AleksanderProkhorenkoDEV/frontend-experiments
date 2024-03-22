import React from 'react'
import './assets/css/main.css'


const whisesList = [
  { text: 'Learn React', done: true },
  { text: 'Its easy', done: false }
]

export const App = () => {
  return (

    <div className={'main_box'}>
      <h1 className={'h1 main_header'}>Your Whises</h1>
      <div className={'table_components'}>
        <div className={'comp_addwhises'}>
          <input type="text" placeholder='Insert your whise' />
          <button type='button'>Add</button>
        </div>
        <div className={'comp_whislist'}>
          <h1 className={'title_comp_position'}>List of your wishes</h1>
          <ul className={'list_wishes'}>
            {whisesList.map(({ text, done }) => (
              <li key={`wish_${text}`}>
                <p htmlFor={`wish_${text}`} className={'text-li'}>
                  <input type="checkbox" id={`wish${text}`} checked={done} />
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button type='button'>Archive whises done</button>
      </div>
    </div>

  )
}

