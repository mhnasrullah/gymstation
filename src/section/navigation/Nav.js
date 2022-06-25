import React,{useState,useRef} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Logo from "../../asset/logo.svg"
import Button from '../../comp/Button'
import "./Nav.scss"

export default function Nav(props) {
    const [nav,setNav] = useState("side-nav__non-ative");
    // const aboutRef = useRef(abo)
  return (
    <navbar className={props.bg==true || nav!="side-nav__non-ative" ? "bg-nav" :""}>
        <Container>
            <Row>
                
                    <Routes>
                        <Route exact path='/'
                        element={
                            <div className='nav-left d-flex align-items-center justify-content-between'>
                                <img className='logo-nav' src={Logo}/>
                                <button type='button' className='toggle d-flex flex-column align-items-end d-lg-none' onClick={()=>setNav("")}>
                                    <span className='toggle-1'></span>
                                    <span className='toggle-2'></span>
                                    <span className='toggle-3'></span>
                                </button>
                            </div>
                        }/>
                        <Route
                        path="member"
                        element={
                            <div className='nav-left d-flex w-100 align-items-center justify-content-between'>
                                <img className='logo-nav' src={Logo}/>
                                <Link to='/'>&larr; Home</Link>
                            </div>
                        }/>
                    </Routes>
                

                    <Routes>
                        <Route exact path="/" 
                        element={
                            <>
                            <div className={nav +' side-nav ps-4 ps-lg-5 ms-lg-5 d-lg-flex align-items-center'}>
                                <button type='button' className='toggle ms-auto mb-5 d-lg-none' onClick={()=>setNav("side-nav__non-ative")}>
                                    <span className='toggle-1'></span>
                                    <span className='toggle-2'></span>
                                </button>
                                <nav className='d-flex flex-column flex-lg-row gap-4 gap-lg-5 mb-5 mb-lg-0'>
                                    <a href='about'
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        props.setTo("about")}
                                    }
                                    >About</a>
                                    <a href='trainer' 
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        props.setTo("trainer")}
                                    }>Trainers</a>
                                    <a href='testimoni'
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        props.setTo("testi")}
                                    }>Testimoni</a>
                                </nav>
                                <Button className="ms-lg-auto" To="/member">Membership</Button>
                            </div>
                            </>
                        }/>
                    </Routes>
                
            </Row>
        </Container>
    </navbar>
  )
}
