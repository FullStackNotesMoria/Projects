import Card from "../Card/Card"
import styled from "styled-components";
import imgt from "./nbabg.jpg"

const DivStyles = styled.div` 
  background-image:url(${imgt});
  width:90%;
  padding:60px;
  margin:auto;
  border-radius:20px;
  

`;

const Main = ({data}) => {
  // console.log(data);
  return (
    <DivStyles >
      <div className="row">
        {
          data.map((item)=>{
            const {name,img,statics}=item
            return(
              <Card key={name} name={name} img={img} statics={statics}/>
              )
            })
        }
      </div>
    </DivStyles>
  )
}

export default Main