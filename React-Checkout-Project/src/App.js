import Main from "./pages/Main";
import data from "./helper/data"
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  console.log(data);
  return (
    <>
      <Header/>
      <Button/>
      <Main data={data}/>
    </>
  );
}

export default App;
