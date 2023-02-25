import Main from "./pages/Main";
import data from "./helper/data"
import Header from "./components/Header";

function App() {
  console.log(data);
  return (
    <>
      <Header/>
      <Main data={data}/>
    </>
  );
}

export default App;
