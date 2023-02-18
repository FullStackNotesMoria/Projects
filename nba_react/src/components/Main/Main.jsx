import Card from "../Card/Card"
import styled from "styled-components";
import imgt from "./nbabg.jpg"

const DivStyles = styled.div` 
  // background-image:url(${imgt});
  // background-image:url("https://w0.peakpx.com/wallpaper/90/109/HD-wallpaper-nba-golden-logo-basketball-leagues-artwork-national-basketball-association-brown-metal-background-creative-nba-logo-brands-nba.jpg");
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