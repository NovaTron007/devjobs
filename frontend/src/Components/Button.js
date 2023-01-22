import React from 'react'
import ButtonWrapper from "../Assets/StyledComponents/ButtonWrapper"
import { Link } from "react-router-dom"

const Button = ({text, link, onClickCb}) => {

  // button with link or not
  const Btn = link ? <Link to={link}>
      <ButtonWrapper>{text}</ButtonWrapper></Link>
      : onClickCb ? <ButtonWrapper onClick={onClickCb}>{text}</ButtonWrapper>
        : <ButtonWrapper>{text}</ButtonWrapper>

  // return btn
  return (
    Btn
  )

}

export default Button