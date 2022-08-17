import { Link } from "react-router-dom"
import dataFile from "../Assets/data.json"
import JobsCardWrapper from "../Assets/StyledComponents/JobsCardWrapper"
import JobCard from "../Components/JobCard"
import Button from "../Components/Button"
import FilterBar from "../Components/FilterBar"

const Home = () => {
    const { jobsData } = dataFile // data json file
    
    return (
        <>
        <FilterBar />
        <JobsCardWrapper>
            <div className="jobs-grid">
                {jobsData.map((item, index) => {
                    // destruct
                    const { title, type, details, city, country, user, userImage } = item
                    return (
                        <Link to="/job/1234" key={index}>
                            <JobCard 
                                title={title} 
                                type={type} 
                                details={details} 
                                city={city} 
                                country={country} 
                                user={user} 
                                userImage={userImage}
                            />
                        </Link>
                    )})}
            </div>
        </JobsCardWrapper>
        <div className="footer-home">
            <Button text="Load More" link="#" />
        </div>
        </>
  )
}

export default Home