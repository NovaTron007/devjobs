import dataFile from "../Assets/data.json"
import JobsWrapper from "../Assets/StyledComponents/JobsWrapper"
import JobCard from "../Components/JobCard"

const Home = () => {
    const { jobsData } = dataFile // data json file
    
    return (
        <JobsWrapper>
            {jobsData.map((item, index) => {
                // destruct
                const { title, type, details, city, country, user, userImage } = item
                return (
                    <JobCard 
                        key={index}
                        title={title} 
                        type={type} 
                        details={details} 
                        city={city} 
                        country={country} 
                        user={user} 
                        userImage={userImage} />
                    )})}
        </JobsWrapper>
  )
}

export default Home