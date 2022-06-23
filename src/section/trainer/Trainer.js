import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Heading from '../../comp/Heading'
import CardTrainer from './CardTrainer'
import "./Trainer.scss"
import Jhon from "../../asset/trainer/Jhon.png"
import Nike from "../../asset/trainer/Nike.png"
import Bobby from "../../asset/trainer/Bobby.png"
import Jenny from "../../asset/trainer/Jenny.png"

export default function Trainer() {
  return (
    <section id="trainer">
        <Container>
            <Row>
                <Col>
                    <Heading className="text-center">Our Best Trainer</Heading>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10} md={5} lg={3} className="mb-5 mb-lg-0">
                    <CardTrainer
                    img={Jhon}
                    name="Jhon Remy"
                    motivation="A great mind is in a strong soul"/>
                </Col>
                <Col xs={10} md={5} lg={3} className="mb-5 mb-lg-0">
                    <CardTrainer
                    img={Nike}
                    name="Jhon Remy"
                    motivation="Great people are stronger people"/>
                </Col>
                <Col xs={10} md={5} lg={3} className="mb-5 mb-lg-0">
                    <CardTrainer
                    img={Bobby}
                    name="Bobby Marlino"
                    motivation="live better with a strong soul"/>
                </Col>
                <Col xs={10} md={5} lg={3} className="mb-5 mb-lg-0">
                    <CardTrainer
                    img={Jenny}
                    name="Jenny Roselia"
                    motivation="body shape is form of self-confidence"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
