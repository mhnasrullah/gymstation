import React from 'react'
import Title from '../../comp/Title'
import "./CardTestimoni.scss"

export default function CardTestimoni(props) {
  return (
    <div className='card-testi d-flex flex-column flex-md-row align-items-md-center gap-5 gap-md-4'>
        <div className='img-testi'>
            <img src={props.img} className="w-100"/>
        </div>
        <div className='text-testi px-2 px-md-0'>
            <p><span className='testi-quote'>"</span>{props.children}</p>
            <Title className="m-0 mt-5">{props.name}</Title>
            <p className='job-testi'>{props.job}</p>
        </div>
    </div>
  )
}
