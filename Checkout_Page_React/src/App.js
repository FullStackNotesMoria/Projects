import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import data from "./Data/xmltojson.json"


function App() {
  // console.log(data);
  return (
    <>
      <Navbar/>
      <Main data={data.Urunler.Urun}/>
    </>
  );
}

export default App;
