import React, { lazy } from "react"
import { useMemo } from "react"
import Header from "../../../pages/header"
import Footer from "../../components/footer"
import {GoogleMap , useLoadScript , Marker} from "@react-google-maps/api"
export const ContactScene = () =>{
    const {isLoaded} = useLoadScript({googleMapsApiKey : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})
    if( !isLoaded) return(
        <div>Loading</div>
    )
    return(
        <div>
         <Header/>
        <GoogleMap zoom={10} center = {{lat:44 , lng:-80}} mapContainerClassName = "map-container">
             <Marker position={{lat : 44 , lng:-80}}/>
        </GoogleMap>
        <Footer/>
       </div>
    )
}