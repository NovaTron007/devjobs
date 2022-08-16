import {BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage"
import JobPage from "./Pages/JobPage"
import Error from "./Pages/Error"
import dataFile from "../src/Assets/data.json" // json file with data


function App() {
  // destructure jobsData object in json file
  const [jobs, setJobs ] = useState(dataFile.jobsData)

  return (  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/job/:id" element={<JobPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
