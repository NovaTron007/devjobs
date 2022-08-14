import styled from "styled-components";

const ButtonWrapper = styled.button`
    display: block;
    min-width: 120px;
    font-size: 16px;
    font-weight: 700;
    color: var(--white);
    background-color: var(--purple);
    border-radius: 5px;
    padding: 16px 20px;
    outline: none;
    border: none;
    transition: background-color 0.2s ease-out;

    &:hover {
        background-color: var(--lightPurple);
     
        cursor: pointer;
    }
`

export default ButtonWrapper