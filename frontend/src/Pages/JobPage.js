import CompanyHeader from "../Components/CompanyHeader"
import CompanyContent from "../Components/CompanyContent"
import Footer from "../Components/Footer"
import { useParams } from "react-router-dom"
import { useGetSingleJobQuery } from "../Features/Api/jobsSlice"
import Loader from "../Components/Loader"
// import dataFile from "../Assets/data.json" // json file with data


const JobPage = () => {

  // const { jobsData } = dataFile // data json file
  // get job id from url
  const { id } = useParams()
  // get single job using slice
  const { data, isSuccess, isLoading, isError, error } = useGetSingleJobQuery(id)

  console.log("data: ", data)

  // loading
  if(isLoading){
    return <div className="container-center"><p><Loader /></p></div>
  }
  // error
  if(isError) {
      return <div><h2>An error ocurred: {error}</h2></div>
  }
  if(data.job.length === 0) {
    return <div className="container-center"><h2>There are currently no jobs!</h2></div>
  }
  // putput data
  if(isSuccess) {
    return (
      <>
          <CompanyHeader company={data.job.company} website={data.job.website} photo={data.job.user.photo} jobId={id} />
          <CompanyContent job={data.job} />
          <Footer title={data.job.title} type={data.job.type} />
      </>
    )
  }

}

export default JobPage