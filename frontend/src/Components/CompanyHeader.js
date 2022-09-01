import React from 'react'
import CompanyHeaderWrapper from '../Assets/StyledComponents/CompanyHeaderWrapper'
import Button from './Button'

const CompanyHeader = ({company, website, photo, color}) => {

  const companyPhoto = photo === "no-photo.jpg" ? <h3 style={{color: "#fff"}}>No Photo</h3> : <img src={`http://localhost:5000/uploads/${photo}`} alt={`devjobs-${photo}`} />;
  return (
    <CompanyHeaderWrapper color={color} >
      <div className="company-header">
          <div className="company-header-column">
              {companyPhoto}
          </div>
          <div className="company-header-column">
              <h1 className="company-header-title">
                {company}
              </h1>
              <p>{website}</p>
          </div>
          <div className="company-header-column">
              <Button text="Company Site" />
          </div>
      </div>
    </CompanyHeaderWrapper>
  )
}

export default CompanyHeader