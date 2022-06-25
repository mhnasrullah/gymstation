import React,{useState} from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap'
import Alert from '../../comp/Alert'
import Heading from '../../comp/Heading'
import Letter from '../../asset/newsletter.svg'
import Logo from "../../asset/logo.svg"
import Fb from "../../asset/icon/fb.svg"
import Ig from "../../asset/icon/ig.svg"

import Button from '../../comp/Button'
import "./Footer.scss"

export default function Footer() {
    const [focus,setFocus] = useState("");
    const [alert,setAlert] = useState(false);

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
    <footer>
        {alert &&
            <Alert 
            upState={
                (b)=>{ setAlert(b);
                console.log("clickalert");}
            }>
                <Heading className="text-center mb-2">Thankyou!</Heading>
                <img src={Letter} className="mx-auto" width={100}/>
                <p className='mt-4 text-center mx-auto w-75'>We will provide the best information and offers to all gymstation mail customers</p>
            </Alert>
        }
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={4} className="d-flex flex-column align-items-center">
                    <img src={Logo}/>
                    <Form className="mt-4" onSubmit={handleSubmit}>
                        <div className={focus+" newsletter d-flex"}>
                            <Form.Control type="email" required placeholder="rudi@gmail.com" onBlur={()=>setFocus("")} onFocus={()=>setFocus("newsletter-focus")} className="border-0 form-input" />
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
