import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Pagination, Mousewheel, Autoplay} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react'
import Heading from '../../comp/Heading'
import CardTestimoni from './CardTestimoni'
import Christensen from "../../asset/testi/Christensen.png"
import Paula from "../../asset/testi/Paula.jpg"
import 'swiper/css';
import 'swiper/css/pagination'
import "swiper/css/mousewheel"
import "./Testimoni.scss"

export default function Testimoni(props) {
  return (
    <section id='testimoni' ref={props.refto}>
        <Container>
            <Row>
                <Col>
                    <Heading className="text-center">Don't think anymore</Heading>
                </Col>
            </Row>
            <Row>
                <Swiper
                modules={[Pagination,Mousewheel,Autoplay]}
                className='py-3 custom-swiper'
                pagination={{ clickable: true }}
                mousewheel
                loop
                autoplay
                >
                    <SwiperSlide className='d-flex justify-content-center'>
                        <Col xs={10} lg={6}>
                            <CardTestimoni
                            img={Christensen}
                            name="Christensen"
                            job="Junior Basketball Player">Intense exercise with the Gym Station can improve my balance when playing basketball. I can also be more professional as a basketball player
                            </CardTestimoni>
                        </Col>
                    </SwiperSlide>
                    <SwiperSlide className='d-flex justify-content-center'>
                        <Col xs={10} lg={6}>
                            <CardTestimoni
                            img={Paula}
                            name="Paula Brissy"
                            job="Graphic Desainer">Some of the exercise methods used are very suitable for me. Honestly, I didn't expect to have a body like this. I recommend gymstation to you guys
                            </CardTestimoni>
                        </Col>
                    </SwiperSlide>
                </Swiper>
            </Row>
        </Container>
    </section>
  )
}
