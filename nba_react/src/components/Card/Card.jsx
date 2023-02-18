import styled from "styled-components";
import { useState } from "react"

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
    .card-body{
      bottom:0;
      height:76px;
      h3{
        // height:76px;
      }
    }
  }
`;

const Card = ({name,img,statics}) => {
  const info = ()=>{
    
  }
  return (
    <DivStyles className="col">
      <div className="card">
        <img onClick={info} src={img} className="card-img-top object-fit-cover" alt={name}/>
        <div className="card-body">
          <h3>{name}</h3>
        </div>
      </div>
    </DivStyles>
  )
}

export default Card