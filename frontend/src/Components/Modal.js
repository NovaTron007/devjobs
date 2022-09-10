import { useRef } from "react"
import ModalWrapper from "../Assets/StyledComponents/ModalWrapper"
import FormInputCheckbox from "./FormInputCheckbox"
import FormInputSelect from "./FormInputSelect"
import locationImg from "../Assets/Images/location.svg"
// store
import { useDispatch, useSelector } from "react-redux"
import { addFilters } from "../Store/filterSlice"


const Modal = ({ showModal, setShowModalCb, list }) => {
    // modal ref
    const modalContainerRef = useRef(null)
    // dispatch action
    const dispatch = useDispatch()
    // get filters state from store
    const { filters } = useSelector((state) => state.filters)

    // show modal: if ref is set and e.target is not modal container then close
    const handleModal = (e) => {
        if (modalContainerRef.current && !modalContainerRef.current.contains(e.target)) {
            setShowModalCb(!showModal)
        }
    }

  // set filter values from filter form inputs
    const handleInput = (e) => {
        // update checkbox: use state for controlled checkbox
        console.log("e.target.name: ", e.target.value)
        if (e.target.value === "fulltime") {
            dispatch(addFilters({ ...filters, [e.target.name]: !filters.fulltime }))
        } else {
            dispatch(addFilters({ ...filters, [e.target.name]: e.target.value }))
        }
    }

    // submit object to api
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit: ", filters)
    }


    if (showModal) {
        return (
            <form>
                <ModalWrapper onClick={(e) => handleModal(e)}>
                    <div className="modal-container" ref={modalContainerRef}>
                        <div className="modal-filter-select-wrapper">
                            <FormInputSelect
                                list={["", ...list]}
                                name="location"
                                value={filters && filters.location}
                                placeholder="Filter by location"
                                handleChange={handleInput}
                                icon={locationImg}
                            />
                        </div>
                        <div className="modal-filter-checkbox-wrapper">
                            <FormInputCheckbox
                                name="fulltime"
                                value="fulltime"
                                isChecked={filters && filters.fulltime}
                                labelText="Full time"
                                handleChange={handleInput}
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