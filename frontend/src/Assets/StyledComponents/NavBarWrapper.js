import styled from "styled-components";

const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    color: var(--white);
    margin: -120px 0 90px;
    padding: 0 20px;
    
    div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        width: 1180px;
        align-items: center;
    }

    .dark-mode-container {
        display: flex;
        align-items: center;
    }
    
    .switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 24px;
        margin: 0 16px;
      }
      
      .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--white);
        -webkit-transition: .4s;
        transition: .4s;
      }
      /* slider switch */
      .slider:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        left: 4px;
        bottom: 5px;
        background-color: var(--purple);
        -webkit-transition: .4s;
        transition: .2s;
      }
    
      .switch:hover .slider.round:before {
        background-color: var(--lightPurple);
      }
    
      input:checked + .slider {
        background-color: var(--white);
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px var(--lightPurple);
      }
      
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      
      /* round slider */
      .slider.round {
        border-radius: 34px;
      }
      
      .slider.round:before {
        border-radius: 50%;
      }    
`
export default NavWrapper