import styled from "styled-components";

const PStyles = styled.div` 
  overflow: hidden;
  position: relative;
  &:hover p{
    transform: translateY(0%);
  }
  img{
    &:hover{
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
  p{
    width:454px;
    margin-left:16px;
    font-size : 1.2rem;
    background-color: rgba(0,0,0,0.8);
    position : absolute;
    bottom:0;
    left:0;
    transform: translateY(120%);
    transition: transform 0.7s ease-in-out;
    max-height: 75%;
    text-align: justify;
    overflow: auto;
  }
`;


  
const Card = ({title,desc,img}) => {
  // const kay = {
  //   color:"white",
  //   position:"absolute",

  // };

  return (
    <div className="card text-bg-dark" style={{width: '32rem'}}>
        <div className="card-header">{title}</div>
        <PStyles className="card-body">
          <img src={img} alt="img" style={{width:"100%", height:"360px"}}/>
          <p>{desc}</p>
        </PStyles>
      </div>
  )
}

export default Card