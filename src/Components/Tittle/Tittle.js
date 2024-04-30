import React from 'react'
import './Tittle.css'
export default function Tittle(props) {
  return (
    <div className='title'>
      <p>{props.subTitle}</p>
      <h1>{props.Title}</h1>
    </div>
  )
}
