import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Heading from '../../comp/Heading'
import CardTrainer from './CardTrainer'
import "./Trainer.scss"
import Jhon from "../../asset/trainer/Jhon.png"
import Nike from "../../asset/trainer/Nike.png"
import Bobby from "../../asset/trainer/Bobby.png"
import Jenny from "../../asset/trainer/Jenny.png"

export default function Trainer(props) {
  return (
    <>
    <section id="trainer" ref={props.refto}>
        <Container>
            <Row>
                <Col>
                    <Heading className="text-center">Our Best Trainer</Heading>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10} md={5} lg={3} className="mb-5 mb-lg-0">
                    <CardTrainer
                    delay="0"
                    img={Jhon}
                    name="Jhon Remy"
                    motivation="A great mind is in a strong soul"/>
                </Col>
                <Col xs={10} md={5} lg={3} className="mb-5 mb-lg-0">
                    <CardTrainer
                    delay="100"
                    img={Nike}
                    name="Lili Sherly"
                    motivation="Great people are stronger people"/>
                </Col>
                <Col xs={10} md={5} lg={3} className="mb-5 mb-lg-0">
                    <CardTrainer
                    delay="200"
                    img={Bobby}
                    name="Bobby Marlino"
                    motivation="live better with a strong soul"/>
                </Col>
                <Col xs={10} md={5} lg={3} className="mb-5 mb-lg-0">
                    <CardTrainer
                    delay="300"
                    img={Jenny}
                    name="Jenny Roselia"
                    motivation="body shape is form of self-confidence"/>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}
