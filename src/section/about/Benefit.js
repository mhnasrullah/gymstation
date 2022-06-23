import React from 'react'
import Title from '../../comp/Title'
import "./Benefit.scss"

export default function Benefit(props) {
  return (
    <div className='card-benefit text-center text-lg-start'>
        <div className='img-benefit'>
            <img src={props.img}/>
        </div>
        <Title className="mt-3 mx-lg-3">{props.title}</Title>
        <p className='mx-auto mx-lg-3'>{props.text}</p>
    </div>
  )
}
