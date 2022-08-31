import moment from "moment"

const JobCard = ({id, title, type, city, company, country, createdAt, photo }) => {
  
  const companyPhoto = photo === "no-photo.jpg" ? <span style={{color: "#fff", fontSize: "10px"}}>No Photo</span> : <img src={`http://localhost:5000/uploads/${photo}`} alt={`devjobs-${photo}`} />;

  return (
    <div className="job-card">
        <div className="job-icon-container">
            {companyPhoto}
        </div>
        <div className="job-info">
            <p>{moment(createdAt).format("Do MMM YYYY")}</p> 
            <span></span> 
            <p>{type}</p>
        </div>
        <p className="job-title">{title}</p>
        <p className="job-text">{company}</p>
        <p className="job-country mt-40">{country}, {city}</p>
    </div>
  )
}

export default JobCard