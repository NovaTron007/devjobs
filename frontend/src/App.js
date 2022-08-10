import HeaderBg from "./Components/HeaderBg";
import MainWrapper from "./Assets/StyledComponents/MainWrapper"
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
        <HeaderBg />
        <MainWrapper>
          <Header />
        </MainWrapper>
    </div>
  );
}

export default App;
