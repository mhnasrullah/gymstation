import React from 'react'
import "./Button.scss"

export default function Button(props) {
  if(props.type=="submit"){
    return(
      <button type='submit' className={props.className+" btn-yellow"}>{props.children}</button>
    )
  }else{
    return (
      <a href="#" className={props.className+" btn-yellow"}>{props.children}</a>
    )
  }

}
