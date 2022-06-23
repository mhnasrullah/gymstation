import React from 'react'
import "./Title.scss"

export default function Title(props) {
  return (
    <h6 className={props.className+" titleh6"}>{props.children}</h6>
  )
}
