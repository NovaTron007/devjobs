import FooterWrapper from "../Assets/StyledComponents/FooterWrapper"
import Button from "./Button"

const Footer = () => {
  return (
    <FooterWrapper>
        <div className="footer-content">
            <div>
                <div className="footer-job-title">iOS Developer</div>
                <div className="footer-job-type">full time</div>
            </div>
            <Button>Button</Button>
        </div>

    </FooterWrapper>
  )
}

export default Footer