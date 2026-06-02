import { forwardRef } from "react";
import ProductImg from "../components/ProductImg";
import SlideInfo from "../components/SideInfo";
import Pdetails from "../data/Pdetails" 
import Description from "../components/Description";
import cfepacket from '../assets/coffee-packet.png'
import chpbox from '../assets/chipsbox.png'


const Product = forwardRef(({ Storypage }, ref) => {
  return (
    <section ref={ref} style={{ height: "100vh", background: "#d0e8ff" }}>
      <div className="h-20 flex items-center justify-around">
        Button
      </div>

      <div className="flex justify-between px-10">
        <div>
          <SlideInfo product={Pdetails[0]} />
        </div>
        
        <div>

            <Description 
            header={Pdetails[0].tagline}
            
            des={Pdetails[0].description}
            
            btn={Storypage}
            theam="dark" 
            /> 

          <ProductImg image={cfepacket} />

        </div>

      </div>
            <div className="flex justify-between px-10">
        <div>
          <SlideInfo product={Pdetails[1]} />
        </div>
        
        <div>

            <Description 
            header={Pdetails[1].tagline}
            
            des={Pdetails[1].description}
            
            btn={Storypage}
            theam="dark" 
            /> 

          <ProductImg image={chpbox} />

        </div>

      </div>
    </section>
  );
});

export default Product;