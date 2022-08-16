import styled from "styled-components";

const CompanyHeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    padding: 0 20px;

    .company-header {
        width: 778px;
        height: 140px;
        display: flex;
        align-items: center;
        margin: -40px 0 30px;
        background-color: var(--white);
        border-top-right-radius: 6px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;

    }

    .company-header-column:nth-of-type(1){
        flex:1;
        max-width: 140px; // set width of column with pic
        height: 100%;
        padding: 30px;
        background-color: #2F4FC6;
        border-bottom-left-radius: 6px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    
    .company-header-column:nth-of-type(2) {
        flex: 2;
        padding: 20px 40px;
        flex-direction: column;
    }
    
    .company-header-column:nth-of-type(3) {
        display: flex;
        justify-content: right;
        flex: 1;
        margin-right: 50px;
    }
    
    .company-header-title {
        font-size: 24px;
        font-weight: 700;
        color: var(--black);
    }

    @media (max-width:500px) {
        .company-header {
            height: 200px;
            flex-direction: column;
        }
        .company-header-column:nth-of-type(1) {
            border-radius: 15px;
        }        
        .company-header-column-icon {
            width: 50px;
            height: 50px;
            border-radius: 15px;
            display: flex;
            align-items: center;
        }
    }

`

export default CompanyHeaderWrapper