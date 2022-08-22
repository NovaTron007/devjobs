import styled from "styled-components";

const ButtonWrapper = styled.button`
    display: block;
    min-width: 120px;
    @media (max-width: 900px) {
        min-width: unset;
    }
    font-size: 16px;
    font-weight: 700;
    color: var(--white);
    background-color: var(--purple);
    border-radius: 5px;
    padding: 16px 20px;
    outline: none;
    border: none;
    letter-spacing: 1.3px;
    transition: background-color 0.2s ease-out;


    .search-btn-text {
        display: none;
        @media (min-width: 900px) {
            display: block;
        }
    }
    .search-btn-img {
        display: block;
        @media (min-width: 900px) {
            display: none;
        }
    }

    .form-icon {
        width: 18px;
        height: auto;
    }

    &:hover {
        background-color: var(--lightPurple);
     
        cursor: pointer;
    }
`

export default ButtonWrapper