import React,{useRef} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./About.scss"
import Benefit from './Benefit'
import Extrainer from "../../asset/benefit/extrainer.png"
import Comeq from "../../asset/benefit/comeq.png"
import Fullsup from "../../asset/benefit/fullsup.png"
import Heading from '../../comp/Heading'

export default function About(props) {
  return (
    <section id='about' ref={props.refto}>
        <Container>
            <Row className="justify-content-center">
                <Col className="text-center" md={8} lg={5}>
                    <Heading>How About Us?</Heading>
                    <p>We are the party that provides special training to get the ideal shape and help you in taking care of your body to be better. We have prepared trainers, places and tools for you to the fullest</p>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={12} md={4}>
                    <Benefit
                    delay="100"
                    img={Extrainer}
                    title="Experienced Trainer"
                    text="Have a high experience in the field of body building"/>
                </Col>
                <Col xs={12} md={4}>
                    <Benefit
                    delay="200"
                    img={Comeq}
                    title="Complete Equipment"
                    text="The best equipment will be served to help you maximally"/>
                </Col>
                <Col xs={12} md={4}>
                    <Benefit
                    delay="300"
                    img={Fullsup}
                    title="Full Support"
                    text="Get full support while being a member of our team"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
