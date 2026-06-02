import {Slides} from "../data/Slides";
import { useEffect, useState} from "react";
import Navbar from '../components/Navbar';
import ProductImg from "../components/ProductImg";
import Description from "../components/Description";



function Home({nextpage,Storypage,Blogpage,Contactpage}){
    
    const [currentslide, setCurrentslide] = useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentslide(currentslide=> currentslide==Slides.length-1? 0:currentslide+1);
        },3000);
        return ()=> clearInterval(interval);
    },[])

    return(
    <>
    <div>
        <div style={{ backgroundImage :`url(${Slides[currentslide].bg})`}}
        className="relative w-full h-screen bg-center bg-cover">
        
        <Navbar scrollToProduct={nextpage} Storypage={Storypage} Blogpage={Blogpage} Contactpage={Contactpage}/>


        <div className="flex justify-between mx-28.75 mt-40">
            
            <Description 
            header={Slides[currentslide].headline}
            des={Slides[currentslide].subtext}
            btn={nextpage}
            theam="white" 
            />
            <ProductImg image={Slides[currentslide].productImage}/>

        </div>


        </div>
        
    </div>
    </>
    );
}

export  default Home
