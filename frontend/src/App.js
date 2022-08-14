import { useState } from "react"
import HeaderBg from "./Components/HeaderBg";
import Navbar from "./Components/Navbar";
import CompanyHeader from "./Components/CompanyHeader";
import dataFile from "../src/Assets/data.json" // json file with data
import CompanyContent from "./Components/CompanyContent";



function App() {
  // destructure jobsData object in json file
  const [jobs, setJobs ] = useState(dataFile.jobsData)

  return (  
    <div className="App">
      <HeaderBg />
      <Navbar />
      <CompanyHeader />
      <CompanyContent />
    </div>
  );
}

export default App;
