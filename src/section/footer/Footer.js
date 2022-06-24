import React,{useState} from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap'
import Logo from "../../asset/logo.svg"
import Fb from "../../asset/icon/fb.svg"
import Ig from "../../asset/icon/ig.svg"
import Button from '../../comp/Button'
import "./Footer.scss"

export default function Footer() {
    const [focus,setFocus] = useState("");
  return (
    <footer>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={4} className="d-flex flex-column align-items-center">
                    <img src={Logo}/>
                    <Form className="mt-4">
                        <div className={focus+" newsletter d-flex"}>
                            <Form.Control type="email" placeholder="rudi@gmail.com" onBlur={()=>setFocus("")} onFocus={()=>setFocus("newsletter-focus")} className="border-0 form-input" />
                            <Button
                            type="submit">Newsletter</Button>
                        </div>
                    </Form>
                    <div className='social-media d-flex gap-4 mt-4'>
                        <a href='#'>
                            <img src={Ig}/>
                        </a>
                        <a href='#'>
                            <img src={Fb}/>
                        </a>
                    </div>
                    <p className='mt-5 rights'>Exploration by Muhammad Hasan Nasrullah</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
