import React from "react"
import {ShoppingCartOutlined} from "@ant-design/icons"
const cardData = ([
    {
        id: 1 , 
        img: "./assets/images/heregsel.jpg",
        price :"25000₮",
        title:"FELLAZ• BRUSH"
       
    },
    {
        id: 2 , 
        img: "./assets/images/heregsel.jpg",
        price :"25000₮",
        title:"FELLAZ• BRUSH"
    }
])
export const Tab2 = () =>{
    return(
        <div className="tab2-card">
        {cardData.map((item)=>{
            return(
                <div className="pro-details">
                    <div>
                    <img src={item.img} alt = "zurag" className="product-img"/>
                    </div>
                <div className="product-desc">
                    <h3 style={{paddingLeft:20, paddingTop:25}}>{item.title}</h3>
                    <div>
                    <ShoppingCartOutlined />
                    <p style={{paddingLeft:20}} >{item.price}</p>
                    
                    </div>
                    
                </div>
               
             
                </div>
            )
        })}
        </div>
    )
}