import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import data from "./Data/xmltojson.json"


function App() {

  const postTutorial = async (newTutorial) => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
    try {
      await axios.post(BASE_URL, newTutorial)
    } catch (error) {
      console.log(error)
    }
    getTutorials()
  }

  // console.log(data);
  return (
    <>
      <Navbar/>
      <Main data={data.Urunler.Urun}/>
    </>
  );
}

export default App;
