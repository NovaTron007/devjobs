import styled from "styled-components";

const CompanyHeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    height: 140px;
    padding: 0 20px;
    margin-top: -40px;
    margin-bottom: 30px;
    @media (max-width: 500px) {
        height: 200px;
        transform: translate(0,0);
    }

    .company-header {
        width: 778px;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: var(--white);
        border-top-right-radius: 6px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        @media (max-width: 500px) {
            border-radius: 6px;
            flex-direction: column;
        }
    }

    .company-header-column:nth-of-type(1){
        flex:1;
        max-width: 140px; // set width of column with pic
        height: 100%;
        padding: 30px;
        background-color: ${props => props.color};
        border-bottom-left-radius: 6px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 50px;
            max-height: 50px;
            height: auto;
            margin-top: -32px;
            border-radius: 15px;

            img {
                width: auto;
                height: auto;
                object-fit: contain;
            }
        }
    }
    
    .company-header-column:nth-of-type(2) {
        flex: 2;
        padding: 20px 40px;
        flex-direction: column;
        @media (max-width: 500px) {
            text-align: center;
            justify-content: center;
            align-items: center;
            display: flex;
        }
    }
    
    .company-header-column:nth-of-type(3) {
        display: flex;
        justify-content: right;
        flex: 1;
        margin-right: 50px;
        @media(max-width: 500px) {
            margin-right: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 30px;
        }
    }
    
    .company-header-title {
        font-size: 24px;
        font-weight: 700;
        color: var(--black);
    }

    @media (max-width:500px) {
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