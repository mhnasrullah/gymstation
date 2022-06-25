import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.scss"

export default function Button(props) {

  if(props.type=="submit"){
    return(
      <button
      type='submit'
      className={(props.className != undefined ? props.className : "")+" btn-yellow"}
      onClick={props.onClick}
      >{props.children}</button>
    )
  }else{
    if(props.To != undefined){
      return (
        <Link to={props.To} className={props.className+" btn-yellow"}>{props.children}</Link>
        )
      }else{
        <a href="#" className={props.className+" btn-yellow"}>{props.children}</a>
    }
  }

}
