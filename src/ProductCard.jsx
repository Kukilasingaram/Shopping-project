import {useState} from "react";



function ProductCard({productImage,productName,incart,setIncart}){
    const [show, setShow] =useState(true)
    const handleAdd = ()=>{
      setShow(!show)
      setIncart(incart + 1)
    }
    const handleRemove = ()=>{
      setShow(!show)
      setIncart(incart - 1)
    }
    
  
    return(
      <div className="card-component">
        <img src={productImage}alt="no data"/>
        <h5><span class="badge bg-secondary">sale</span></h5>

        
        

        <h2>{productName}</h2>
        <h3>$500.00</h3>
        {show === true ?
        <button onClick={handleAdd}>Add to cart</button>:
        <button onClick={handleRemove}>Remove from cart</button>
  }
  
      </div>
    )
  }
  
  export default ProductCard