import styled from "styled-components"

const LoaderWrapper = styled.div`

.loader-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px 20px;

    .loader-spinner {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: conic-gradient(#0000 10%, #5964e0);
        -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
        animation: load-spin 0.8s infinite linear;
        display: flex;
      }
    
      @keyframes load-spin {
        to {
          transform: rotate(1turn);
        }
      }    
}


`

export default LoaderWrapper