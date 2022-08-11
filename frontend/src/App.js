import { useState } from "react"
import HeaderBg from "./Components/HeaderBg";
import MainWrapper from "./Assets/StyledComponents/MainWrapper"
import Header from "./Components/Header";
import JobsWrapper from "./Assets/StyledComponents/JobsWrapper";
import JobCard from "./Components/JobCard";
import dataFile from "../src/Assets/data.json" // json file with data

function App() {
  // destructure jobsData object in json file
  const [jobs, setJobs ] = useState(dataFile.jobsData)

  return (
    <div className="App">
        <HeaderBg />
        <MainWrapper>
          <Header />
          <JobsWrapper>
            { jobs.map((item, index) => {
              const { title, type, description, city, country, user, userImage  } = item
              return(
                <JobCard 
                  key={index}
                  title={title}  
                  type={type}
                  description={description}
                  city={city}
                  country={country}
                  user={user}
                  userImage={userImage}
                />
              ) 
            })}   
          </JobsWrapper>
        </MainWrapper>
    </div>
  );
}

export default App;
