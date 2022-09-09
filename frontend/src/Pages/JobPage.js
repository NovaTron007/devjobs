import CompanyHeader from "../Components/CompanyHeader"
import CompanyContent from "../Components/CompanyContent"
import Footer from "../Components/Footer"
import { useParams } from "react-router-dom"
import { useGetSingleJobQuery } from "../Store/Api/apiSlice"
import Loader from "../Components/Loader"


const JobPage = () => {
  // get job id from url
  const { id } = useParams()
  // get single job using slice
  const { data, isSuccess, isLoading, isError, error } = useGetSingleJobQuery(id)

  console.log("data: ", data)

  // loading
  if(isLoading){
    return <div className="container-center"><Loader /></div>
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
          <CompanyHeader company={data.job.company} website={data.job.website} photo={data.job.user.photo} color={data.job.user.color} />
          <CompanyContent job={data.job} />
          <Footer title={data.job.title} type={data.job.type} />
      </>
    )
  }

}

export default JobPage