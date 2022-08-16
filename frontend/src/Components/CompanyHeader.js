import React from 'react'
import CompanyHeaderWrapper from '../Assets/StyledComponents/CompanyHeaderWrapper'
import Button from './Button'

const CompanyHeader = ({jobsData}) => {
  return (
    <CompanyHeaderWrapper>
        <div className="company-header-column">
          <img src={`http://localhost:5000/uploads/${jobsData[0].userImage}`} alt="" />
        </div>
        <div className="company-header-column">
            <h1 className="company-header-title">
              Techland
            </h1>
            <p>www.techland-example.com</p>
        </div>
        <div className="company-header-column">
            <Button text="hello" />
        </div>
    </CompanyHeaderWrapper>
  )
}

export default CompanyHeader