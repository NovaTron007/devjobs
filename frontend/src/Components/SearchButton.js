import ButtonWrapper from "../Assets/StyledComponents/ButtonWrapper"
import SearchWhite from "../Assets/Images/search-white.svg"
import FilterIcon from "../Assets/Images/filter-icon.svg"

const SearchButton = ({text, showModal, setShowModalCb,handleSubmitCb}) => {
    // search button and mobile filter icon
    return(
        <div className="filter-buttons-wrapper">
            <img src={FilterIcon} alt="filter" className="form-icon" onClick={() => setShowModalCb(!showModal)}/> {/* toggle modal */}
            <ButtonWrapper onClick={handleSubmitCb}>
                <span className="search-btn-text">{text}</span>
                <img className="search-btn-img form-icon" src={SearchWhite} />
            </ButtonWrapper>
        </div>

    )
}

export default SearchButton