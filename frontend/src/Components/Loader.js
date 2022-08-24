import LoaderWrapper from "../Assets/StyledComponents/LoaderWrapper"

const Loader = () => {
  return (
    <LoaderWrapper>
        <div className="loader-container">
            <span className="loader-spinner"></span>
        </div>    
    </LoaderWrapper>
  )
}

export default Loader