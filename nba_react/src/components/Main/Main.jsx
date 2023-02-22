import Card from "../Card/Card"
import styled from "styled-components";
import { useState } from "react";


const DivStyles = styled.div` 
  width:100%;
  padding:30px 80px;
  margin:0 auto;
  border-radius:20px;
  text-align:center;
  input{
    border-radius:8px;
    width:40%;
    height:40px;
    padding:10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const Main = ({data}) => {
  // console.log(data);
  const [search, setSearch] = useState('');
  const handleSearch = (e)=>{
    setSearch(e.target.value.toLowerCase())
  }
  let filteredData = data.filter((player) =>
    player.name.toLowerCase().includes(search)
  );
  if ( setSearch === "") {
    filteredData = data;
  }
  return (
    <DivStyles >
      <input type="text" name="search" value={search} id="search" placeholder="Search Player..." onChange={handleSearch}/>
      <div className="row">
        {filteredData.map((player)=>(
          <Card key={player.name} {...player}/>))}
      </div>
    </DivStyles>
  )
}

export default Main