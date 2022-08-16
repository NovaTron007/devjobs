import { Link } from "react-router-dom"
import dataFile from "../Assets/data.json"
import JobsWrapper from "../Assets/StyledComponents/JobsWrapper"
import JobCard from "../Components/JobCard"
import Button from "../Components/Button"

const Home = () => {
    const { jobsData } = dataFile // data json file
    
    return (
        <>
        <JobsWrapper>
            {jobsData.map((item, index) => {
                // destruct
                const { title, type, details, city, country, user, userImage } = item
                return (
                    <Link to="/job/1234">
                        <JobCard 
                            key={index}
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
        </JobsWrapper>
        <div className="footer-home">
            <Button text="Load More" link="#" />
        </div>
        </>
  )
}

export default Home