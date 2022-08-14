import React from 'react'

const JobCard = ({title, type, description, city, user, country, userImage }) => {
  return (
    <div className="job-card">
        <div className="job-icon-container">
            <img src={`http://localhost:5000/uploads/${userImage}`} alt="" />
        </div>
        <div className="job-info">
            <p>2d ago </p> 
            <span></span> 
            <p>{type}</p>
        </div>
        <p className="job-title">{title}</p>
        <p className="job-text">{user}</p>
        <p className="job-country mt-40">{city}</p>
    </div>
  )
}

export default JobCard