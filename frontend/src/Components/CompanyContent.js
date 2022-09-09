import React from 'react'
import moment from "moment"
import CompanyContentWrapper from "../Assets/StyledComponents/CompanyContentWrapper";
import Button from './Button';

const CompanyContent = (props) => {
  // destructure job object 
  const { createdAt, type, title, country, city, details } = props.job

  return (
    <CompanyContentWrapper>
      <div className="company-content">
        <div className="job-content-header">
          <div>
            <div className="job-info">
              <p>{moment(createdAt).format("Do MMM YYYY")}</p> 
              <span></span> 
              <p>{type}</p>
            </div>
            <h1 className="job-content-title">{title}</h1>
            <p className="job-country">{country}, {city}</p>
          </div>
          <div>
            <Button text="Apply Now" />
          </div>
        </div>


        <div className="job-content-requirement">Description</div>
        <p>{details.description}</p> 

        <div className="job-content-requirement">Requirements</div>
        <p>{details.requirements}</p>

        <div className="job-content-requirement">Tasks</div>
        {/* map to return array, for each return nothing */}
        <p>{details.tasks.map((item, index) => 
          <li key={index}>{item}</li>
        )}</p>
  
      </div>
    </CompanyContentWrapper>
  )
}

export default CompanyContent