import React,{useEffect} from 'react'
import Title from '../../comp/Title'
import AOS from "aos";
import "aos/dist/aos.css"
import "./CardTrainer.scss"

export default function CardTrainer(props) {
  useEffect(()=>{
    AOS.init();
    AOS.refresh()
  })
  return (
    <div className='card-trainer'>
        <div className='box-trainer'>
            <div className='img-trainer'>
                <img src={props.img}/>
            </div>
            <div className="info-trainer">
                <Title className="position-relative">{props.name}</Title>
                <p className="position-relative text-center" data-aos="zoom-in-down" data-aos-delay={props.delay}>“{props.motivation}”</p>
            </div>
        </div>
    </div>
  )
}
