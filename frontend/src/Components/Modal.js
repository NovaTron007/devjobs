import { useRef } from "react"
import ModalWrapper from "../Assets/StyledComponents/ModalWrapper"
import FormInputCheckbox from "./FormInputCheckbox"
import FormInputSelect from "./FormInputSelect"
import locationImg from "../Assets/Images/location.svg"
// store
import { useDispatch, useSelector } from "react-redux"
import { addFilters } from "../Store/jobsSlice"


const Modal = ({ showModal, setShowModalCb, list, values, handleChange }) => {
    // modal ref
    const modalContainerRef = useRef(null)

    // show modal: if ref is set and e.target is not modal container then close
    const handleModal = (e) => {
        if (modalContainerRef.current && !modalContainerRef.current.contains(e.target)) {
            setShowModalCb(!showModal)
        }
    }

    // submit object to api
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit")
    }


    if (showModal) {
        return (
            <form>
                <ModalWrapper onClick={(e) => handleModal(e)}>
                    <div className="modal-container" ref={modalContainerRef}>
                        <div className="modal-filter-select-wrapper">
                            <FormInputSelect
                                list={["All", ...list]}
                                name="country"
                                value={values?.country}
                                placeholder="Filter by location"
                                handleChange={handleChange}
                                icon={locationImg}
                            />
                        </div>
                        <div className="modal-filter-checkbox-wrapper">
                            <FormInputCheckbox
                                name="fulltime"
                                value={values?.fulltime}
                                labelText="Full time"
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="modal-search-button-wrapper">
                            <button type="submit" onClick={handleSubmit}>Search</button>
                        </div>
                    </div>
                </ModalWrapper>
            </form>
        )
    }
}

export default Modal