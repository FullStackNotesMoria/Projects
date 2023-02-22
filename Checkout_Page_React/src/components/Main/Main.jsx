import Card from "../Card/Card"


const Main = ({data}) => {
  
  // data.map((x)=>console.log(x.UrunID))
  return (
    <div>
      {
        data.map((x,i)=>{
          return(
            x.Stok > 0 ?
            <Card key={i} data={x}/> : null)
        })
      }
    </div>
  )
}

export default Main