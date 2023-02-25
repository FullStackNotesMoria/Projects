import { useState } from "react"
import {FaCartPlus} from "react-icons/fa"
import Button2 from "./Button2"


const AddProduct = () => {
    const [button2, setButton2] = useState(true)
  return (
    <div>
        <div onClick={(e)=> setButton2(!button2)}>
            {button2 ? <Button2/> : null}
        </div>
        {button2 ? (
            <form>
            <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label className="form-label">Product Price</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label className="form-label">Product Quantity</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div>
                <label>Product Image</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    </div>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-success "> <FaCartPlus size='22px' className="m-2"/> Add To Cart</button>
            </div>
        </form>
        ) : null}
        
    </div>
  )
}

export default AddProduct