import styled from "styled-components";

const DivStyles = styled.div` 
  height:576px;
  margin-bottom:60px;
  border-radius:20px 20px 0 0;
  .card{
    object-fit:cover;
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
      height:480px;
    }
    .card-body{
      bottom:0;
      height:76px;
      h3{
        height:76px;
      }
    }
  }
`;

const Card = ({name,img,statics}) => {
  return (
    <DivStyles className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h3>{name}</h3>
        </div>
      </div>
    </DivStyles>
  )
}

export default Card