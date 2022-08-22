import { useRef, useState, useEffect } from "react"
import ModalWrapper from "../Assets/StyledComponents/ModalWrapper"
import FormInputCheckbox from "./FormInputCheckbox"
import FormInputSelect from "./FormInputSelect"
import Button from "./Button"
import locationImg from "../Assets/Images/location.svg"


const Modal = () => {
    const [showModal, setShowModal] = useState(true)
    const modalContainerRef = useRef(null)


    // show modal
    const handleModal = (e) => {
        if (modalContainerRef.current && !modalContainerRef.current.contains(e.target)) {
            setShowModal(false)
        }
    }

    if(showModal) {
        return (   
            <ModalWrapper onClick={(e) => handleModal(e)}>
                <div className="modal-container" ref={modalContainerRef}>
                    <div className="modal-filter-select-wrapper">
                        <FormInputSelect 
                            type="select" 
                            name="location" 
                            value=""
                            placeholder="Filter by location"
                            handleChange="location"
                            icon={locationImg}
                        />   
                    </div>
                    <div className="modal-filter-checkbox-wrapper">
                        <FormInputCheckbox text="full time only" />
                    </div>  
                    <div className="modal-search-button-wrapper">
                        <Button text="Search" />
                    </div>
                </div>
            </ModalWrapper>
        )
    }

    if(!showModal) {
        return (
            <></>
        )
    }

}

export default Modal