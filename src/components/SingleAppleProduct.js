import React ,{useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'



function SingleAppleProduct() {
    let [product,setProduct]=useState([])
    const {productName}=useParams()
    
    useEffect(()=>{
      const Sproduct = [
        {
          product_id: 1,
          product_url:
            "https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_se__barrz3dlvxea_small_2x.jpg",
          product_name: "   \t   \t iPhone SE",
          monthly_plan: "From $9.54/mo. or $229 with trade-in.",
          description: "   \t    \t Lots to love. Less to spend.",
        },

        {
          product_id: 2,
          product_url:
            "https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11__bsnxu2gpf98i_small_2x.jpg",
          product_name: "   \t     \t iPhone 11",
          monthly_plan: "From $18.70/mo. or $449 with trade-in.",
          description: "   \t    \t Lots to love. Less to spend.",
        },
      ];
      const singleProduct = Sproduct.filter(
        (product) =>
          product.product_name.trim().toLowerCase() ===
          productName.trim().toLowerCase()
      );
      if (singleProduct.length > 0) {
        setProduct(singleProduct);
      }
    },[productName])
    
     

     
          
    
    if(product.length){
        return (
          <div className="text-center container ">
            <div className="title-wraper text-center het ">
              {product.product_name}
            </div>

            {product?.map((product, index) => {
              let productDiv = (
                <div className="row h-100" key={index}>
                  <div
                    className={`col-12 col-md my-auto order-${
                      index % 2 === 0 ? "2" : "1"
                    }`}
                  >
                    <div className="description-wraper">
                      {product.description}
                      <br />
                      {product.monthly_plan}
                    </div>
                   
                  </div>
                  <div
                    className={`col-12 col-md my-auto order-${
                      index % 2 === 0 ? "1" : "2"
                    }`}
                  >
                    <div>
                      {" "}
                      <img src={product.product_url} />{" "}
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        );
    }
    else{
        return (
            <div>Data not found</div>
        )
    }
 
}

export default SingleAppleProduct