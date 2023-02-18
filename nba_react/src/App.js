import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./Data/data"

function App() {
  
  return (
    <div style={{backgroundColor:"#F4D467", height:"100vh"}}>
      <Header/>
      <Main data={data}/>
    </div>
  );
}

export default App;
