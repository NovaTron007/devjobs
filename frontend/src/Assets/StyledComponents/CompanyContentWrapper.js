import styled from "styled-components";

const CompanyContentWrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: 0 20px;
    margin-bottom: 30px;

    .company-content {
        width: 778px;
        padding: 48px;
        border-radius: 6px;
        background-color: var(--white);
        @media(max-width: 500px) {
            padding: 40px 24px;
        }
    }

    .job-content-title {
        font-weight: 700;
        font-size: 28px;
        color: var(--black);
        margin-bottom: 16px;
        @media (max-width: 500px) {
            font-size: 20px;
            margin-bottom: 5px;
        }
    }
    
    .job-content-requirement {
        font-weight: 700;
        font-size: 20px;
        color: var(--black);
        margin: 40px 0 30px;
    }
    
    .job-country {
        font-size: 14px;
        color: var(--purple);
        font-weight: 700;
        @media (max-width: 500px) {
            margin-top: 0;
            margin-bottom: 54px;
        }
    }
    
    .job-content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        @media(max-width: 500px) {
            flex-direction: column;
            align-items: start;

            div:nth-of-type(2) {
                width: 100%;
            }
            button {
                width: 100%;
            }
        }
    }

    .job-info {
        @media (max-width: 500px) {
            margin-bottom: 5px;
        }
    }

    @media (max-width: 500px) {
        button {
            max-width: 100%;
        }
    }
`

export default CompanyContentWrapper