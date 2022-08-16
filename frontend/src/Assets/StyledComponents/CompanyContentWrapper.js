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
    }

    .job-content-title {
        font-weight: 700;
        font-size: 28px;
        color: var(--black);
        margin-bottom: 16px;
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
        margin-top: 40px;
    }
    
    .job-content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default CompanyContentWrapper