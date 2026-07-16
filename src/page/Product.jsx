import { forwardRef } from "react";
import ProductImg from "../components/ProductImg";
import SlideInfo from "../components/SideInfo";
import Pdetails from "../data/Pdetails";
import Description from "../components/Description";
import cfepacket from '../assets/coffee-packet.png';
import chpbox from '../assets/chipsbox.png';

// Destructure the lifted activeIndex and setActiveIndex props here
const Product = forwardRef(({ Storypage, activeIndex, setActiveIndex }, ref) => {
  const activeProduct = Pdetails[activeIndex];
  const productImages = [cfepacket, chpbox];

  return (
    <section 
      ref={ref} 
      className="transition-colors duration-500 ease-in-out min-h-screen py-8"
      style={{ background: activeProduct.bg }}
    >
      {/* Dynamic Slide Toggle */}
      <div className="h-20 flex items-center justify-center mb-6">
        <div 
          className="flex rounded-full p-1 transition-colors duration-500"
          style={{ backgroundColor: activeIndex === 0 ? "#2c1a0e" : "#b01a10" }}
        >
          {Pdetails.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)} // Updates parent state, changing both pages
                className="px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isActive ? "#fff" : "transparent",
                  color: isActive 
                    ? (activeIndex === 0 ? "#2c1a0e" : "#b01a10") 
                    : "#fff"
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Content Display */}
      <div className="flex justify-between px-10 max-w-7xl mx-auto items-center">
        <div className="w-1/3 transition-all duration-500">
          <SlideInfo product={activeProduct} />
        </div>
        
        <div className="w-1/2 flex flex-col justify-between space-y-6">
          <div className="max-w-xl w-full text-balance">
            <Description 
              header={activeProduct.tagline}
              des={activeProduct.description}
              btn={Storypage}
              theam={activeIndex === 0 ? "dark" : "red"} 
            /> 
          </div>

          <div className="flex justify-center transition-all duration-500 transform hover:scale-105">
            <ProductImg image={productImages[activeIndex]} alt={activeProduct.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Product;