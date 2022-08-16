import styled from "styled-components";

const FooterWrapper = styled.footer`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    background-color: var(--white);


    .footer-content {
        width: 778px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:var(--white);
    }
    
    .footer-job-title {
        font-size: 20px;
        font-weight: 700;
        padding-bottom: 10px;
        color: var(--black);
    }
    .footer-job-type {
        font-size: 16px;
        font-weight: 700;
        color: var(--textGrey);
    }    
`

export default FooterWrapper