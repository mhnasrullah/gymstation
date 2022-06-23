import React from 'react'
import "./Benefit.scss"

export default function Benefit(props) {
  return (
    <div className='card-benefit text-center text-lg-start'>
        <div className='img-benefit'>
            <img src={props.img}/>
        </div>
        <h6 className='mt-3 mx-lg-3'>{props.title}</h6>
        <p className='mx-auto mx-lg-3'>{props.text}</p>
    </div>
  )
}
