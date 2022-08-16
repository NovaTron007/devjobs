import { Link } from "react-router-dom"
import HeaderBgWrapper from "../Assets/StyledComponents/HeaderBgWrapper"
import NavBarWrapper from '../Assets/StyledComponents/NavBarWrapper'
import moonImg from "../Assets/Images/moon.svg"
import sunImg from "../Assets/Images/sun.svg"


const Header = () => {
  return (
    <>
      <HeaderBgWrapper />
      <NavBarWrapper>
        <Link to="/">
          <h1 className="h1-header">devjobs</h1>
        </Link>
        <div className="dark-mode-container">
          <img src={sunImg} width="18" height="18" alt="light-mode" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <img src={moonImg} width="12" height="12" alt="dark-mode" />
        </div>

      </NavBarWrapper>
    </>
  )
}

export default Header