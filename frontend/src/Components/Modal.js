import { useRef } from "react"
import ModalWrapper from "../Assets/StyledComponents/ModalWrapper"
import FormInputCheckbox from "./FormInputCheckbox"
import FormInputSelect from "./FormInputSelect"
import locationImg from "../Assets/Images/location.svg"


const Modal = ({showModal, setShowModal, locationValue, isFulltime, list, handleChange, handleSubmit}) => {
    // modal ref
    const modalContainerRef = useRef(null)
    
    // show modal: if ref is set and e.target is not modal then close
    const handleModal = (e) => {
        if (modalContainerRef.current && !modalContainerRef.current.contains(e.target)) {
            setShowModal(!showModal)
        }
    }

    if(showModal) {
        return (   
            <ModalWrapper onClick={(e) => handleModal(e)}>
                <div className="modal-container" ref={modalContainerRef}>
                    <div className="modal-filter-select-wrapper">
                        <FormInputSelect 
                            list={["", ...list]}
                            name="location"
                            value={locationValue}
                            placeholder="Filter by location"
                            handleChange={handleChange}
                            icon={locationImg}
                        />   
                    </div>
                    <div className="modal-filter-checkbox-wrapper">
                        <FormInputCheckbox 
                            text="full time only" 
                            name="fulltime"
                            isFulltime={isFulltime}
                            handleChange={handleChange} 
                        />
                    </div>  
                    <div className="modal-search-button-wrapper">
                        <button onClick={handleSubmit}>Search</button>
                    </div>
                </div>
            </ModalWrapper>
        )
    }
}

export default Modal