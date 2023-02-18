import Card from "../Card/Card"
import './Main.scss'

const Main = ({data}) => {

  return (
    <div>
      <h1 className="text-center m-5 display-4 ">POPULAR TOUR PLACES</h1>
      <div className="row gap-3 text-center mesafe container-fluid " style={{width:"90%",margin:"20px 165px"}}>
          {data.map((item)=>{
            const {id, title, desc, image} = item
            return(
              <Card key={id} title={title} desc={desc} img={image} className="col"/>
              )
            })
          }
      </div>
    </div>
  )
}

export default Main