import React,{useEffect} from 'react'
import Title from '../../comp/Title'
import AOS from "aos";
import "aos/dist/aos.css"
import "./Benefit.scss"

export default function Benefit(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })
  return (
    <div className='card-benefit text-center text-lg-start'>
        <div className='img-benefit'>
            <img src={props.img}/>
        </div>
        <Title className="mt-3 mx-lg-3 title-benefit">{props.title}</Title>
        <p className='mx-auto mx-lg-3' data-aos="zoom-in-down" data-aos-delay={props.delay}>{props.text}</p>
    </div>
  )
}
