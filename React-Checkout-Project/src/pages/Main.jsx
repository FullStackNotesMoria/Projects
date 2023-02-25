import CardTotal from "../components/CardTotal"
import ProductCard from "../components/ProductCard"


const Main = ({data}) => {
  return (
    <>
      <div>
          {data.map((item)=>{
            return (<ProductCard key={item.id} {...item}/>)
          })}
      </div>
      <CardTotal />
    </>
  )
}

export default Main