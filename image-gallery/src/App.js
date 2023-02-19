import Homepage from "./pages/Homepage";
import data from "./helper/data";
import "./styles/style.css";


function App() {
  console.log(data);
  return (
    <div >
      <h1 className="header">Albums</h1>
      <Homepage data={data}/>
    </div>
  );
}

export default App;
