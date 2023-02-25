import { useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductCard = ({ id, name, image, price, dampingRate, amount }) => {
    const [count, setCount] = useState(1);
    return (
      <div>
        <div className="container">
          <div className="img">
            <img src={image} alt="" style={{ width: "200px" }} />
          </div>
          <div className="items">
            <h1>{name}</h1>
            <p>
              <span className="text-warning fs-1">
                ${price * dampingRate} 
              </span>
  
              <span className="text-decoration-line-through fs-3">{price}</span>
            </p>
          </div>
        
          <div className="button">
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              {""} <AiOutlinePlus />
              {""}
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(count>1?count-1:count=0)}>
                <AiOutlineMinus />
              </button>
          </div>
          <div className="remove">
              <button type="button" className="btn btn-danger">
                <AiFillDelete />
                Remove
              </button>
            </div>
            <div className="productTotal">
              <p>
                Product Total:$<span>{price * dampingRate}</span>
              </p>
            </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;