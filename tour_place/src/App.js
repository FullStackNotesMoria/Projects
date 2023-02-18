import Main from "./components/Main/Main";
import Navbarx from "./components/Navbar/Navbar";
import data from "./Data/data";
import "./App.scss";

function App() {
  // console.log(data);
  return (
    <>
      <Navbarx/>
      <Main data={data}/>
    </>
  );
}

export default App;
