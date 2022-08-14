import React from 'react'
import CompanyContentWrapper from "../Assets/StyledComponents/CompanyContentWrapper";
import Button from './Button';

const CompanyContent = () => {
  return (
    <CompanyContentWrapper>
      <div className="job-content-header">
        <div>
          <div className="job-content-info">
            <p>2d ago </p> 
              <span></span> 
              <p>Full time</p>
          </div>
          <h1 className="job-content-title">Frontend Developer</h1>
          <p className="job-content-country">United Kingdom</p>
        </div>
        <div>
          <Button>hello</Button>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime dicta laboriosam inventore et laborum, possimus quam accusantium temporibus omnis voluptatum animi magni error fugit iste itaque reprehenderit, harum facere nisi non, eius iusto hic voluptates molestiae. 
        Inventore itaque at minus?
      </p>    
      <div className="job-content-requirement">
        Requirements
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime dicta laboriosam inventore et laborum, possimus quam accusantium temporibus omnis voluptatum animi magni error fugit iste itaque reprehenderit, harum facere nisi non, eius iusto hic voluptates molestiae. 
        Inventore itaque at minus?
      </p>  
    </CompanyContentWrapper>
  )
}

export default CompanyContent