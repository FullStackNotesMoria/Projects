import AddProduct from "../components/AddProduct"
import CardTotal from "../components/CardTotal"
import ProductCard from "../components/ProductCard"


const Main = ({data}) => {
  return (
    <div className="container-fluid ">
      <div className="d-flex justify-content-center ">
        <AddProduct className="w-50 m-3"/>
        <div className="w-50 m-3">
          <div>
              {data.map((item)=>{
                return (<ProductCard key={item.id} {...item}/>)
              })}
          </div>
          <CardTotal />
        </div>
      </div>
      
    </div>
  )
}

export default Main