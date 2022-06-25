import React,{useState} from 'react'
import { Container,Row,Col,Form} from 'react-bootstrap'
import TypeWriterEffect from 'react-typewriter-effect';
import Img from "../../asset/member.png"
import Button from '../../comp/Button'
import Heading from '../../comp/Heading';
import "./Member.scss"

export default function Member() {

    const [focus,setFocus] = useState(null);

  return (
    <section id='member' className='position-relative'>
        <div className="img-member">
            <img src={Img} className=""/>
        </div>
        <Container className='position-relative'>
            <Row className='justify-content-end'>
                <Col md={6} className="text-start">
                    <div className='box-form-member p-4 p-lg-5
                    '>
                        <div className='member-top'>
                            <Heading className="heading-member text-center text-md-start">Don't wait anymore</Heading>
                            <p className='text-center text-md-start mt-3 mb-5'>Build your soul strong with us, Get our services by joining this membership</p>
                        </div>
                    
                        <Form>
                            <div className='d-flex gap-3'>
                                <Form.Group className="mb-3">
                                    <Form.Label className={(focus == "fname" ? "label-focus" : null)+' text-start' }>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Rudi" onBlur={()=>{setFocus(null)}} onFocus={()=>{setFocus("fname")}} className={(focus == "fname" ? "input-focus" : null)+' border-0 rounded-0 py-2' }/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className={(focus == "lname" ? "label-focus" : null)+' text-start' }>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Wirawan" onBlur={()=>{setFocus(null)}} onFocus={()=>{setFocus("lname")}} className={(focus == "lname" ? "input-focus" : null)+' border-0 rounded-0 py-2' }/>
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3">
                                <Form.Label className={(focus == "email" ? "label-focus" : null)+' text-start' }>Email</Form.Label>
                                <Form.Control type="email" placeholder="rudi@gmail.com" onBlur={()=>{setFocus(null)}} onFocus={()=>{setFocus("email")}} className={(focus == "email" ? "input-focus" : null)+' border-0 rounded-0 py-2 input-email' }/>
                            </Form.Group>

                            <div className='d-flex gap-3'>
                                <Form.Group className="mb-3">
                                    <Form.Label className={(focus == "pass" ? "label-focus" : null)+' text-start' }>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Rudi" onBlur={()=>{setFocus(null)}} onFocus={()=>{setFocus("pass")}} className={(focus == "pass" ? "input-focus" : null)+' border-0 rounded-0 py-2' }/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className={(focus == "repass" ? "label-focus" : null)+' text-start' }>Re-type Password</Form.Label>
                                    <Form.Control type="text" placeholder="Wirawan" onBlur={()=>{setFocus(null)}} onFocus={()=>{setFocus("repass")}} className={(focus == "repass" ? "input-focus" : null)+' border-0 rounded-0 py-2' }/>
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3">
                                <Form.Label className={(focus == "birth" ? "label-focus" : null)+' text-start' }>Date of Birth</Form.Label>
                                <Form.Control type="date" placeholder="rudi@gmail.com" onBlur={()=>{setFocus(null)}} onFocus={()=>{setFocus("birth")}} className={(focus == "birth" ? "input-focus" : null)+' border-0 rounded-0 py-2 input-birth' }/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I accept all the policies given by Gymstation" />
                            </Form.Group>

                            <Button className="mt-3" type="submit">Join with us</Button>
                        </Form>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
