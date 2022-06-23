import React from 'react'
import "./Heading.scss"

export default function Heading(props) {
  return (
    <h2 className={props.className+" h2heading mb-5"}>{props.children}</h2>
  )
}
