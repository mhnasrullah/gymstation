import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import TypeWriterEffect from 'react-typewriter-effect';
import Img from "../../asset/imgheader.png"
import Button from '../../comp/Button'
import "./Header.scss"

export default function Header() {
  return (
    <section id='header' className='position-relative'>
        <div className="img-header">
            <img src={Img} className=""/>
        </div>
        <Container className='position-relative'>
            <Row>
                <Col md={6} className="text-center text-md-start">
                    {/* <h1>Get The Best Version Of You</h1> */}
                    <h1>
                        <TypeWriterEffect
                        text="Get The Best Version Of You"
                        cursorColor="#F8FA72"
                        />
                    </h1>
                    <p className='mt-3 mb-5'>Get the ideal shape and full health in your body with us and live a better life</p>
                    <Button >Join with us</Button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
