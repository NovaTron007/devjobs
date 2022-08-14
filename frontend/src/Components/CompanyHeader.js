import React from 'react'
import CompanyHeaderWrapper from '../Assets/StyledComponents/CompanyHeaderWrapper'
import Button from './Button'

const CompanyHeader = () => {
  return (
    <CompanyHeaderWrapper>
        <div className="company-header-column">
            hello
        </div>
        <div className="company-header-column">
            hello
        </div>
        <div className="company-header-column">
            <Button />
        </div>
    </CompanyHeaderWrapper>
  )
}

export default CompanyHeader