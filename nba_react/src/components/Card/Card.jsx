import styled from "styled-components";
import { useState } from "react"
import {FaBasketballBall} from 'react-icons/fa';

const DivStyles = styled.div` 
  height:576px;
  width:350px;
  padding:0;
  text-align:center;
  // margin-right:0;
  margin:30px 0 60px 40px;
  border-radius:20px 20px 0 0;
  .card{
    width:350px;
    height:576px;
    img{
      width:348px;
      height:500px;
    }
    &:hover{
      padding:20px 20px 0px 20px;
    }
    &:hover img{
      width:308px;
      height:500px;
    }
    .card2{
      position:absolute;
      weight:348px;
      margin:auto;
    }
    .card-body{
      bottom:0;
      height:76px;
      h3{
        // height:76px;
      }
    }
  }
`;

const Card = ({name,img,statistics}) => {

  // console.log(statistics);
  const [activeDiv ,setActiveDiv]= useState()
  const info = ()=>{
  
  }

  const divToggle = ()=>{
    console.log("object");
  }
  return (
    <DivStyles className="col">
      <div className="card">
        <img onClick={info} src={img} className="card-img-top" alt={name}/>
        <div className="card2 ">
          <h4><FaBasketballBall size={22} color=" #d35400"/>{statistics[0]}</h4>
          <h4><FaBasketballBall size={22} color=" #d35400"/>{statistics[1]}</h4>
          <h4><FaBasketballBall size={22} color=" #d35400"/>{statistics[2]}</h4>
          <h4><FaBasketballBall size={22} color=" #d35400"/>{statistics[3]}</h4>
        </div>
        <div className="card-body">
          <h3>{name}</h3>
        </div>
      </div>
    </DivStyles>
  )
}

export default Card