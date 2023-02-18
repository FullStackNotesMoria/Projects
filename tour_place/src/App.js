import Main from "./components/Main/Main";
import Navbarx from "./components/Navbar/Navbar";
import data from "./Data/data"


function App() {
  console.log(data);
  return (
    <>
      <Navbarx/>
      <Main data={data}/>
    </>
  );
}

export default App;
