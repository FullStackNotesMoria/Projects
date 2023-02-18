import nba from "./nba.png";
import styled from "styled-components";

const DivStyles = styled.div` 
  padding: 1rem;
  text-align:center;
  img{
    width:200px;
  }
  h1{
    weight:50%;
    font-weight:700;
  }
  input{
    border-radius:8px;
    width:70%;
    height:40px;
    padding:10px;
    border: none;
  }
`;

const Header = () => {
  return (
    <DivStyles>
      <img src={nba} alt="nba"/>
      <h1 className="display-1">NBA Legends</h1>
      <input type="search" name="" id="" placeholder="Search Player..."/>

    </DivStyles>
  )
}

export default Header