import React, { useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import JobsCardWrapper from "../Assets/StyledComponents/JobsCardWrapper"
import Header from "../Components/Header"
import JobCard from "../Components/JobCard"
import Button from "../Components/Button"
import FilterBar from "../Components/FilterBar"
import Loader from "../Components/Loader"

// slices
import { useGetJobsQuery } from "../Store/Api/jobsApi"
import { useSelector } from "react-redux"
import { addFilters } from "../Store/jobsSlice"

const Home = () => {
    // redux state
    const { filters } = useSelector((state) => state.filters)

    const [localFilters, setLocalFilters] = useState({})

    // call api
    const { data, isLoading, isSuccess, isError, error } = useGetJobsQuery(localFilters)

    // update redux
    const dispatch = useDispatch()

    // page
    const [pageNo, setPageNo] = useState(1)


    // paginate
    const loadMore = () => {
        console.log("load more posts")
        setPageNo((prev) => prev + 1)

        setLocalFilters({...localFilters, page: pageNo})
        dispatch(addFilters({...filters, page: pageNo}))

    }
    
    
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
    if(data?.jobs?.length === 0) {
        return (
            <>
                <Header setLocalFiltersCb={setLocalFilters} localFilters={localFilters} pageNo={pageNo} setPageNoCb={setPageNo} />
                <FilterBar /><div className="container-center"><h2>There are currently no jobs!</h2></div>
            </>
        )
    }


    // loading
    if(isLoading) {
        return(
            <div className="container-center"><Loader /></div>
        )
    }
    
    // success
        return(
            <>
            <Header />
            <FilterBar />
                <JobsCardWrapper>
                <div className="jobs-grid">
                    {data?.jobs?.map((item, index) => {
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
                    <Button text="Load More" onClickCb={loadMore} />
                </div>
            </>
        )
}
export default React.memo(Home)