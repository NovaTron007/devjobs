import CompanyHeader from "../Components/CompanyHeader"
import CompanyContent from "../Components/CompanyContent"
import Footer from "../Components/Footer"
import dataFile from "../Assets/data.json" // json file with data


const JobPage = () => {

  const { jobsData } = dataFile // data json file

  return (
    <>
            <CompanyHeader jobsData={jobsData} />
            <CompanyContent />
        <Footer />
    </>
  )
}

export default JobPage