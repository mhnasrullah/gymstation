import React from 'react'
import Title from '../../comp/Title'
import "./CardTrainer.scss"

export default function CardTrainer(props) {
  return (
    <div className='card-trainer'>
        <div className='box-trainer'>
            <div className='img-trainer'>
                <img src={props.img}/>
            </div>
            <div className="info-trainer">
                <Title className="position-relative">{props.name}</Title>
                <p className="position-relative text-center">“{props.motivation}”</p>
            </div>
        </div>
    </div>
  )
}
