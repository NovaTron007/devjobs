import React from 'react'
import HeaderBgWrapper from "../Assets/StyledComponents/HeaderBgWrapper"
import NavBarWrapper from '../Assets/StyledComponents/NavBarWrapper'

const Header = () => {
  return (
    <>
      <HeaderBgWrapper />
      <NavBarWrapper>
        <h1 className="h1-header">devjobs</h1>
        <h1>toggle dark mode</h1>
      </NavBarWrapper>
    </>
  )
}

export default Header