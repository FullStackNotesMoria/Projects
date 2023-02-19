import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./Data/data"
import styled from "styled-components";
import imgg from "./Data/nbaa.jpg"


const DivStyles = styled.div` 
  background-image:url(${imgg});
  // background-image:url("https://c4.wallpaperflare.com/wallpaper/596/179/749/basketball-4k-nba-michael-jordan-wallpaper-preview.jpg");
  // background-position: -100px;
  background-repeat:no-repeat;
  background-size:cover;
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
