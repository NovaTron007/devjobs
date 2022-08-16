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

    div:nth-child(1){
        flex: 2;
    }
    div:nth-child(2){
        flex: 1;
    }
    div:nth-child(3){
        flex: 1;
    }
`

export default FilterBarRow