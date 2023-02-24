
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';




const ProductList = () => {


 const [allproducts, setAllProducts] = useState([]);
 const [menProduct, setMenProduct] = useState([{}]);
 const [womenProduct, setWomenProduct] =useState([{}])

 useEffect(() => {
  
    async function fetchProducts(){
      
        const response = await fetch('https://fakestoreapi.com/products')
        const prodResponse = await response.json();

        setAllProducts(prodResponse);
    }
    
  fetchProducts();

 }, [])


 // console.log(allproducts);
  const filetredProducts =  allproducts.filter((wholeProduct) => wholeProduct.category === "men's clothing" || wholeProduct.category === "women's clothing");
    
  //
  //console.log(filetredProducts);   
 
 
  return (
    <div className='container'>
      <div className='productlist'>
        {filetredProducts.map((product) => (
           <div className='product' key={product.id}>
             <h3>{product?.title}</h3>
             <div>
                <img src={product?.image}/>
             </div>
             <div>
                {product?.description}
             </div>
             <div>{
                product.category === "men's clothing"

                (<div className='button-men'>
                     <button style={{ color:"pink" , width: 600 }}>
                        {product.category}
                     </button>
                </div>)  
                
             }
             </div>
             <div>

             {
                product.category === "women's clothing"
                (<div>
                    <button >
                       {product.category}
                    </button>
               </div>)  
             }
             </div>
            
           </div> 
          
        ))}
      </div>
    </div>
  )
  
}


export default ProductList