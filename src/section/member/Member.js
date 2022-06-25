import React,{useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import { Container,Row,Col,Form} from 'react-bootstrap'
import Img from "../../asset/member.png"
import Button from '../../comp/Button'
import Heading from '../../comp/Heading';
import Check from "../../asset/checklist.svg"
import "./Member.scss"
import Alert from '../../comp/Alert';

export default function Member() {

    const [focus,setFocus] = useState("");
    const [alert,setAlert] = useState(false);
    useEffect(()=>{
        AOS.init();
        AOS.refresh()
      })

      function handleSubmit(e){
        const f = e.currentTarget;
        if (f.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }
          e.preventDefault();
          e.stopPropagation();
          setAlert(true);
          f.reset();
      }


  return (
    <section id='member' className='position-relative'>
        {alert &&
            <Alert 
            upState={
                (b)=>{ setAlert(b);
                console.log("clickalert");}
            }>
                <Heading className="text-center mb-2">Congrats!</Heading>
                <img src={Check} className="mx-auto" width={100}/>
                <p className='mt-4 text-center mx-auto'>Wait a minute, our team will contact you via email. Confirm there and follow the next steps</p>
            </Alert>
        }
        <div className="img-member">
            <img src={Img} className=""/>
        </div>
        <Container className='position-relative'>
            <Row className='justify-content-end'>
                <Col md={6} className="text-start">
                    <div className='box-form-member p-4 p-lg-5'>
                        <div className='member-top'>
                            <Heading className="heading-member text-center text-md-start">Don't wait anymore</Heading>
                            <p className='text-center text-md-start mt-3 mb-5' data-aos="zoom-in-down">Build your soul strong with us, Get our services by joining this membership</p>
                        </div>
                    
                        <Form onSubmit={handleSubmit}>
                            <div className='d-flex gap-3'>
                                <Form.Group className="mb-3">
                                    <Form.Label className={(focus == "fname" ? "label-focus" : "")+' text-start' }>First Name</Form.Label>
                                    <Form.Control type="text" required placeholder="Rudi" onBlur={()=>{setFocus("")}} onFocus={()=>{setFocus("fname")}} className={(focus == "fname" ? "input-focus" : "")+' border-0 rounded-0 py-2' }/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className={(focus == "lname" ? "label-focus" : "")+' text-start' }>Last Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Wirawan" onBlur={()=>{setFocus("")}} onFocus={()=>{setFocus("lname")}} className={(focus == "lname" ? "input-focus" : "")+' border-0 rounded-0 py-2' }/>
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3">
                                <Form.Label className={(focus == "email" ? "label-focus" : "")+' text-start' }>Email</Form.Label>
                                <Form.Control required type="email" placeholder="rudi@gmail.com" onBlur={()=>{setFocus("")}} onFocus={()=>{setFocus("email")}} className={(focus == "email" ? "input-focus" : "")+' border-0 rounded-0 py-2 input-email' }/>
                            </Form.Group>

                            <div className='d-flex gap-3'>
                                <Form.Group className="mb-3">
                                    <Form.Label className={(focus == "pass" ? "label-focus" : "")+' text-start' }>Password</Form.Label>
                                    <Form.Control required type="password" placeholder="******" minLength={6} onBlur={()=>{setFocus("")}} onFocus={()=>{setFocus("pass")}} className={(focus == "pass" ? "input-focus" : "")+' border-0 rounded-0 py-2' }/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className={(focus == "repass" ? "label-focus" : "")+' text-start' }>Re-type Password</Form.Label>
                                    <Form.Control required type="password" placeholder="******" minLength={6} onBlur={()=>{setFocus("")}} onFocus={()=>{setFocus("repass")}} className={(focus == "repass" ? "input-focus" : "")+' border-0 rounded-0 py-2' }/>
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3">
                                <Form.Label className={(focus == "birth" ? "label-focus" : "")+' text-start' }>Date of Birth</Form.Label>
                                <Form.Control required type="date" placeholder="rudi@gmail.com" onBlur={()=>{setFocus("")}} onFocus={()=>{setFocus("birth")}} className={(focus == "birth" ? "input-focus" : "")+' border-0 rounded-0 py-2 input-birth' }/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check required type="checkbox" label="I accept all the policies given by Gymstation" />
                            </Form.Group>

                            <Button
                            className="mt-3" type="submit">Join with us</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
