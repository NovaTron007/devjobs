import styled from "styled-components";

const FilterBarRow = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--white);
    border-radius: 6px;
    height: 100%;
    max-width: 1180px;
    width: 1180px;
    padding: 0 20px;

    div:nth-of-type(1){
        flex: 2;
    }
    div:nth-of-type(2){
        flex: 1;
        .form-icon{
            margin: 4px 0 0 20px;
        }
    }
    div:nth-of-type(3){
        flex: 1;
        .checkbox-container {
            margin: 0 10px 10px 20px;
        }
    }
`

export default FilterBarRow