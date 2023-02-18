import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./Data/data"
import styled from "styled-components";
import imgg from "./Data/nbaa.jpg"
import "./App.scss"


const DivStyles = styled.div` 
  background-image:url(${imgg});
  // background-positionX: 150px;
  background-repeat:repeat-y;
  background-size:100vw;
  background-attachment: fixed;

`;
function App() {
  
  return (
    <DivStyles className="App">
      <Header/>
      <Main data={data}/>
    </DivStyles>
  );
}

export default App;
