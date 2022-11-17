import React,{useState,useEffect} from "react";
import Header from "../../../pages/header";
import Carousel from "./components/carousel";
import Highlight from"./components/highlight"
import LatestCard from "./components/latestCard"
import Footer from "../../components/footer";

const HomePageScene = () =>{
    // const [loading , setLoading] = useState(false);
    // useEffect = (() =>{
    //     setLoading(true);
    //     setTimeout(()=>{
    //         setLoading(false)
    //     },1000)
    // })
    return(
        <div className="homePage">
           
        {/* { loading ?(  <div style={style}> <GridLoader loading = {loading} size = {15} color = {'#101010'}/></div>):( */}
            <>
             <Header/>
            <Carousel/>
            <Highlight/>
            <LatestCard/>
            <div className="youtube-video">
        
    
    <iframe src="https://www.youtube.com/embed/XC2CHVw6twM?autoplay=1&mute=1"
            width="100%" 
            height="320"
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
    />
            </div>
           <Footer/>          
            </>       
 
         </div>
    );
}
export default HomePageScene;