import React from 'react'
import ReactDOM from 'react-dom/client'

const Button =  ({text}) =>{
  return (
    <button>{text}</button>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <Button text='Button one' />
    <Button text='Button two' />
    <Button text='Button thre' />
  </React.Fragment>
)
