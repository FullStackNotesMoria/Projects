import Card from "../Card/Card"


const Main = ({data}) => {

  return (
    <div>
      <h1 className="text-center">POPULAR TOUR PLACES</h1>
      {
        data.map((item)=>{
          const {id, title, desc, image} = item
          return(
            <Card key={id} title={title} desc={desc} img={image} />
          )
        })
      }
    </div>
  )
}

export default Main