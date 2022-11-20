import React  from "react";
import data from "../../data/product.json"
export const getStaticPaths = async() =>{
    const paths = data.map(item =>{
        return{
            params:{id:item.id.toString()}
        }
    })
    return{
        paths ,
        fallback:false
    }
  
}

const Product = (data) => {   
    console.log("dataa",data);
    
  return (
    <>
      <h1></h1>
    </>
  );
};
export default Product;
