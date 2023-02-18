import Card from "../Card/Card"


const Main = ({data}) => {

  return (
    <div className="container-fluid">
      <h1 className="text-center">POPULAR TOUR PLACES</h1>
      <div className="row gap-3 text-center mesafe">
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