import ProductCard from "../components/ProductCard"


const Main = ({data}) => {
  return (
    <div>
        {data.map((item)=>{
          return (<ProductCard key={item.id} {...item}/>)
      })}
     
    </div>
  )
}

export default Main