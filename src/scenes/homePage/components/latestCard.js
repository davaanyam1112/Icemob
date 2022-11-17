import React from "react"

const cardData = ([
    {
        id: 1 , 
        img: "./assets/images/image18.jpg",
        price :"120,000",
        title:"SASH | “20Z0” 1LP"
       
    },
    {
        id: 2 , 
        img: "./assets/images/image10.jpg",
        price :"120,000",
        title:"SASH | “20Z0” 1LP"
    },
    {
        id: 3 , 
        img: "./assets/images/image12.jpg",
        price :"120,000",
        title:"SASH | “20Z0” 1LP"
    },
    {
        id: 4 , 
        img: "./assets/images/image20.jpg",
        price :"120,000",
        title:"SASH | “20Z0” 1LP"
    }
])
const LatestCard = () =>{
    return(
        <div className="latest-card">
            <h2 className="title">#СҮҮЛД НЭМЭГДСЭН</h2>
            <div className="Card" >
              
              {
                  cardData.map((item) =>{
                      return(
                          <div key={item.id} className = "card-details">
                          <img src={item.img} alt = "zurag" className="img" />
                          <h4 style={{margin:20 , color: "red" }}>{item.price}</h4>
                          <h3 style={{marginLeft:20}}>{item.title}</h3>
                          </div>
                        
                      )
                     
                  })
              }
          </div>
        </div>
    )
}
export default LatestCard;