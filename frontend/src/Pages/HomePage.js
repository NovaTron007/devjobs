import { Link } from "react-router-dom"
import JobsCardWrapper from "../Assets/StyledComponents/JobsCardWrapper"
import Header from "../Components/Header"
import JobCard from "../Components/JobCard"
import Button from "../Components/Button"
import FilterBar from "../Components/FilterBar"
import Loader from "../Components/Loader"
// store
import { useSelector } from "react-redux"
// slices
import { useGetJobsQuery } from "../Store/Api/apiSlice"

const Home = () => {
    // get filters state from store
    const { filters } = useSelector((state) => state.filters)
    // get data from slice
    const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery(filters)
    
    // loading
    if(isLoading){
        return (
            <div className="container-center"><Loader /></div>
        )
    }

    // error
    if(isError) {
        return <div><h2>An error ocurred: {error}</h2></div>
    }

    // no jobs
    if(data.jobs.length === 0) {
        return (
            <>
                <Header />
                <FilterBar /><div className="container-center"><h2>There are currently no jobs!</h2></div>
            </>
        )
    }

    // success
        return(
            <>
                
                { isLoading && isSuccess ? <div className="container-center"><Loader /></div> :
                <>
                <Header /><FilterBar />
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
                }
            </>
        )
}

export default Home