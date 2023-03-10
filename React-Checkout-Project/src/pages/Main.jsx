import axios from "axios"
import { useEffect, useState } from "react"
import AddProduct from "../components/AddProduct"
import Button from "../components/Button"
import CardTotal from "../components/CardTotal"
import ProductCard from "../components/ProductCard"


const Main = ({data, getData}) => {
  // console.log(data);
  const [button, setButton] = useState(false)

  return(
    <div className="container-fluid ">
      <span onClick={(e)=>setButton(!button)}>
        {button ? null : <Button/>}
      </span>
      <div className="d-flex justify-content-center ">
        {
          button ? (<AddProduct data={data} getData={getData} className="w-50 m-3"/>) : null
        }
        <div className="w-50 m-3">
          <div>
              {data.map((item)=>{
                return (<ProductCard key={item.id} {...item} getData={getData}/>)
              })}
          </div>
          <CardTotal data={data} getData={getData}/>
        </div>
      </div>
      
    </div>
  )
}

export default Main