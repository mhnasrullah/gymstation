import React,{useState,useEffect} from 'react'
import "./Alert.scss"
import X from "../asset/x.svg"

export default function Alert(props) {
  return (
    <div className="d-flex alert-success justify-content-center align-items-center position-fixed">
        <div className='box-alert position-relative text-center p-4 p-md-5 d-flex justify-align-content-center align-content-center flex-column'>
            {props.children}
            <button className='position-absolute x-alert p-2' onClick={()=>{
                props.upState(false);
            }} type='button'>
                <img src={X}/>
            </button>
        </div>
    </div>
  )
}
