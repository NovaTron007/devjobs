import FooterWrapper from "../Assets/StyledComponents/FooterWrapper"
import Button from "./Button"

const Footer = ({title, type}) => {
  return (
    <FooterWrapper>
        <div className="footer-content">
            <div>
                <div className="footer-job-title">{title}</div>
                <div className="footer-job-type">{type}</div>
            </div>
            <Button text="Apply Now" />
        </div>

    </FooterWrapper>
  )
}

export default Footer