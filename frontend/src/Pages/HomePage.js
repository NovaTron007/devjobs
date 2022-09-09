import { Link } from "react-router-dom"
import JobsCardWrapper from "../Assets/StyledComponents/JobsCardWrapper"
import JobCard from "../Components/JobCard"
import Button from "../Components/Button"
import FilterBar from "../Components/FilterBar"
import Loader from "../Components/Loader"

// slices
import { useGetJobsQuery } from "../Store/Api/apiSlice"

const Home = () => {
    
    // get data from slice
    const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery()
    
    // loading
    if(isLoading){
        return <div className="container-center"><Loader /></div>
    }
    // error
    if(isError) {
        return <div><h2>An error ocurred: {error}</h2></div>
    }

    if(data.jobs.length === 0) {
        return <div className="container-center"><h2>There are currently no jobs!</h2></div>
    }

    // success
    if(isSuccess) {
        return(
            <>
                <FilterBar />
                <JobsCardWrapper>
                <div className="jobs-grid">
                    {data.jobs.map((item, index) => {
                        // destruct each item object and nested user 
                        const { _id: id , company, title, type, details, city, country, createdAt, user: { photo }, user: { color }  } = item
                        
                        return (
                            <Link to={`/job/${id}`} key={index}>
                                <JobCard 
                                    id={id}
                                    title={title} 
                                    type={type} 
                                    details={details} 
                                    city={city} 
                                    country={country} 
                                    company={company}
                                    createdAt={createdAt}
                                    photo={photo}
                                    color={color}
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

}

export default Home