import styled from "styled-components";

const DivStyles = styled.div` 
  object-fit:cover;
  // weight:400px;
  // height:80vh;
  // overflow:hidden;
  margin-bottom:60px;
  // background-repeat:no-repeat;
  border-radius:20px 20px 0 0;
  .card{
    width:350px;
    img{
      width:348px;
      height:500px;
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