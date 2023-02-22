
import nba from "../../Data/nba.png";
import styled from "styled-components";


const DivStyles = styled.div` 
  padding: 1rem;
  text-align:center;
  img{
    width:300px;
  }
  h1{
    color:black;
    weight:50%;
    font-weight:700;
  }
  // input{
  //   border-radius:8px;
  //   width:40%;
  //   height:40px;
  //   padding:10px;
  //   border: none;
  //   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  // }
`;

const Header = () => {
  return (
    <DivStyles>
      <img src={nba} alt="nba"/>
      <h1 className="display-1">NBA Legends</h1>
      {/* <input type="search" name="search" id="search" placeholder="Search Player..." onKeyDown={(e)=>setSearch(console.log(e.target.value))}/> */}

    </DivStyles>
  )
}

export default Header