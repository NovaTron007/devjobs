import styled from "styled-components";

const JobsCardWrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: 0 20px;

    .jobs-grid {
        width: 1180px;
        display: grid;
        grid-template-columns: repeat(3, 1fr); // 3 cols
        grid-gap: 20px;

        @media (max-width:700px) {
            grid-template-columns: repeat(2, 1fr); // 2 cols
        }

        @media (max-width:500px) {
            grid-template-columns: 1fr; // 1 cols
        }
    }

    .job-card {
        background-color: var(--white);
        border-radius: 6px;
        margin: 25px 0;
        padding: 50px 32px 32px;
        transition: background-color 0.2s ease-out;
    }
    
    .job-card:hover {
        cursor: pointer;
        background-color: var(--offWhite);
    }
    
    .job-icon-container {
        width: 50px;
        height: 50px;
        position: absolute;
        margin-top: -75px;
        border-radius: 15px;
        background-color: var(--lightPurple);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .job-title {
        font-weight: 700;
        font-size: 20px;
        color: var(--black);
        padding: 0;
        margin-bottom: 16px;
    }

`

export default JobsCardWrapper