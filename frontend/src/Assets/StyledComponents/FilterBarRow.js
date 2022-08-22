import styled from "styled-components";

const FilterBarRow = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    background-color: var(--white);
    border-radius: 6px;
    height: 100%;
    max-width: 1180px;
    padding: 0 20px;

    div:nth-of-type(1) {
        flex: 2;
        
        .form-input {
            @media(max-width: 830px) {
                border-right: none;
            }
        }
    }

    div:nth-of-type(2) {
        display: none;
        @media(min-width: 830px) {
            display: flex;
            flex: 1;
            .form-icon{
                margin: 4px 0 0 20px;
            }
        }
    }

    div:nth-of-type(3) {
        display: none;
        .checkbox-container {
            margin: 0 10px 10px 20px;
        }
        @media(min-width: 830px) {
            display: flex;
            flex: 1;
        }
    }
`

export default FilterBarRow