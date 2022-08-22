import styled from "styled-components";

const FormInputTextWrapper = styled.div`
    justify-content: start;
    align-items: center;
    outline: none;
    display: flex;
    font-size: 14px;
    cursor: pointer;

    .form-icon {
        width: 18px;
        height: auto;
    }

    .form-input {
        width: 100%;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 32px 16px;
        border-right: 1px solid var(--lightGrey);
    }


`

export default FormInputTextWrapper