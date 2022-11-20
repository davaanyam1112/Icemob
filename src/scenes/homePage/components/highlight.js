import React from "react";
import Link from "next/link";
import data from "../../../../data/product.json"

const HighlightCard = () =>{
    return (
        <div className="card" >
              <h2 className="title">#ОНЦЛОХ</h2>
            <div className="Card" >     
                {
                    data.map((item) =>{
                        if(item.id <= 4){
                            return(
                                <div key={item.id} className = "card-details">
                                <Link href={`/product/${item.id}` }>
                                <img src={item.img} alt = "zurag" className="img" />
                                <h4 style={{margin:20 , color: "red" }}>{item.price}</h4>
                                <h3 style={{marginLeft:20}}>{item.title}</h3>
                                </Link>
                                </div>
                              
                            )
                        } 
                    })
                }
            </div>
            <h2 className="title">#СҮҮЛД НЭМЭГДСЭН</h2>
            <div className="Card" >     
                {
                    data.map((item) =>{
                        if(item.id > 4 && item.id <=8 ){
                            return(
                                <div key={item.id} className = "card-details">
                                <Link href={`/product/${item.id}` }>
                                <img src={item.img} alt = "zurag" className="img" />
                                <h4 style={{margin:20 , color: "red" }}>{item.price}</h4>
                                <h3 style={{marginLeft:20}}>{item.title}</h3>
                                </Link>
                                </div>
                              
                            )
                        } 
                    })
                }
            </div>
           
        </div>
    )
}
export default HighlightCard;
