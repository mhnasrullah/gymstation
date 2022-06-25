import React, { useEffect, useState,useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./section/header/Header";
import "./var.scss"
import "./app.scss"
import About from "./section/about/About";
import Trainer from "./section/trainer/Trainer";
import Testimoni from "./section/testimoni/Testimoni";
import Footer from "./section/footer/Footer";
import Nav from "./section/navigation/Nav";
import Member from './section/member/Member';

function App() {
  const [offset, setOffset] = useState(0);

  const aboutRef = useRef();
  const trainerRef = useRef();
  const testiRef = useRef();

  function handleTo(v) {
    if(v=="about"){
      aboutRef.current.scrollIntoView()
    }
    if(v=="trainer"){
      trainerRef.current.scrollIntoView()
    }
    if(v=="testi"){
      testiRef.current.scrollIntoView()
    }
  }
  

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className="App">
      <Router>
        {offset > 100 ? <Nav setTo={handleTo} bg/> : <Nav setTo={handleTo}/>}

          <Routes>
            <Route
            exact path='/'
            element={
              <>
                <Header/>
                <section id="body">
                  <About refto={aboutRef} />
                  <Trainer refto={trainerRef} />
                  <Testimoni refto={testiRef} />
                </section>
                </>} 
              />

            <Route
            path='member'
            element={
              <Member/>
            }/>
              

          </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
