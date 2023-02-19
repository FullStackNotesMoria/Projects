import Card from "../Card/Card"
import styled from "styled-components";


const DivStyles = styled.div` 
  width:100%;
  padding:30px 80px;
  margin:0 auto;
  border-radius:20px;
`;

const Main = ({data}) => {
  // console.log(data);
  return (
    <DivStyles >
      <div className="row">
        {
          data.map((item)=>{
            const {name,img,statistics}=item
            return(
              <Card key={name} name={name} img={img} statistics={statistics}/>
              )
            })
        }
      </div>
    </DivStyles>
  )
}

export default Main