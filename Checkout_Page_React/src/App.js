import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import data from "./Data/xmltojson.json"


function App() {
  const fetch = require('node-fetch');
  const convert = require('xml-js');
  let dataAsJson = {};

  fetch('http://www.bilgisayarim.com.tr/xml?clientcode=24284&username=admin&password=Ankara2020')
    .then(response => response.text())
    .then(str => {
        dataAsJson = JSON.parse(convert.xml2json(str))
    })
    .then(() => {
        console.log(`xx :${dataAsJson}`);
    });

  // console.log(data);
  return (
    <>
      <Navbar/>
      <Main data={data.Urunler.Urun}/>
    </>
  );
}

export default App;
