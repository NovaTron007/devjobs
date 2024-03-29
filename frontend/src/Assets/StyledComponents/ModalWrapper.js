import styled from "styled-components";

const ModalWrapper = styled.section`
    display: block; 
    position: fixed; // Stay in place
    z-index: 2; // Sit on top
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    cursor: pointer;

    .modal-container {
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        width: calc(100% - 48px);
        max-width: 350px;
        background-color: var(--white);
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        
        .modal-filter-select-wrapper {
            padding: 0;
            border-bottom: 2px solid var(--lightGrey);
        }

        .modal-filter-checkbox-wrapper {
            padding: 20px;
        }

        .modal-search-button-wrapper {
            padding: 5px 20px 20px;
            
            button {
                display: block;
                width: 100%;
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

                &:hover {
                    background-color: var(--lightPurple);
                    cursor: pointer;
                }
            }
        }
    }
`

export default ModalWrapper 