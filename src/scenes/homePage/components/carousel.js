import React from "react"
import 'antd/dist/antd.css'
import { Carousel ,Row ,Col} from 'antd';
const CarouselScene = () =>{
   
    const CarouselData = ([
        {
            id: 1 , 
            img: "assets/images/image1.png"
        },
        {
            id :2 , 
            img :"./assets/images/image2.jpg"
        },
        {
            id :3, 
            img:"./assets/images/image4.jpg"
        }
    ])
    const CarouselData2 = ([
        {
            id: 1 , 
            img: "./assets/images/image8.jpg"
        },
        {
            id :2 , 
            img :"./assets/images/image9.jpg"
        },
        {
            id :3, 
            img:"./assets/images/image10.jpg"
        },
        {
            id: 4 ,
            img : "./assets/images/image11.jpg"
        },
        {
            id: 5 ,
            img : "./assets/images/image12.jpg"
        }
    ])
    const CarouselData3 = ([
        {
            id: 1 , 
            img: "./assets/images/image13.jpg"
        },
        {
            id :2 , 
            img :"./assets/images/image14.jpg"
        },
        {
            id :3, 
            img:"./assets/images/image15.jpg"
        },
        {
            id :4, 
            img:"./assets/images/image16.jpg"
        },
        {
            id :5, 
            img:"./assets/images/image17.jpg"
        }
    ])
    return(
        <Row className="Carousel">
            <Col span={16}>
            <div >
            <Carousel autoplay autoplaySpeed={3000}  >
                    {CarouselData.map((item) =>{
                        return(
                            <div key = {item.id}> 
                                 <img src={item.img} alt ="carousel" style={{width : "100%", height:650 }}/>
                           </div>
                          
                        )
                        
                    })}
                
            </Carousel>
            </div>  
        </Col>
        <Col span={8}>
            <div>
            <Carousel autoplay autoplaySpeed={9000} >
                    {CarouselData2.map((item) =>{
                        return(
                            <div key = {item.id}> 
                                 <img src={item.img} alt ="carousel" style={{width : "100%",height:325 }}/>
                           </div>
                          
                        )
                        
                    })}
                
            </Carousel>
            </div>  
            <div>
            <Carousel autoplay autoplaySpeed={7500} >
                    {CarouselData3.map((item) =>{
                        return(
                            <div key = {item.id}> 
                                 <img src={item.img} alt ="carousel" style={{width : "100%" ,height:325 }}/>
                           </div>
                          
                        )
                        
                    })}
                
            </Carousel>
            </div>  
        </Col>
        </Row>
    )
}
export default CarouselScene;