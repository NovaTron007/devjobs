import styled from "styled-components";
import bgImg from "../Images/bg-header.svg"

const HeaderWrapper = styled.section`
    width: 100%;
    min-height: 162px;
    background-image: url(${bgImg});
    background-repeat: no-repeat; 
    background-size: cover; // whole width
    background-position: 0 100%; // stop image from getting cut off (bottom) on large screen
    z-index:1;
`

export default HeaderWrapper