import { forwardRef } from "react";
import ProductImg from "../components/ProductImg";
import SlideInfo from "../components/SideInfo";
import Pdetails from "../data/Pdetails";
import Description from "../components/Description";

const Product = forwardRef(({ Storypage }, ref) => {
  // Always display only the Coffee product on the site
  const coffeeProduct = Pdetails.find((p) => p.id === "coffee") || Pdetails[0];

  return (
    <section
      id="product"
      ref={ref}
      className="flex min-h-screen flex-col items-center justify-center px-6 py-20 transition-colors duration-700 sm:px-10 lg:px-16"
      style={{ backgroundColor: coffeeProduct.bg }}
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header & Subtitle */}
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C44A3A]">
            Pure Ceylon Specialty Roast
          </p>
          <h2 className="mt-2 font-serif text-3xl font-extrabold text-[#1A1008] sm:text-4xl md:text-5xl">
            Our Signature Coffee
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C44A3A]" />
        </div>

        {/* Product Content Display Grid */}
        <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-14">
          {/* Left: Interactive Specs & Stats Card */}
          <div className="fade-slide-in flex w-full justify-center lg:w-[38%]">
            <SlideInfo product={coffeeProduct} />
          </div>

          {/* Right: Headline, Description & Dynamic Product Mockup */}
          <div className="fade-slide-in flex w-full flex-col items-center gap-8 lg:w-[58%] lg:items-start">
            <div className="w-full text-left">
              <Description
                header={coffeeProduct.tagline}
                des={coffeeProduct.description}
                btn={Storypage}
                btnText="Discover The Craft Story"
                theam="dark"
                label={coffeeProduct.category}
                packSizes={coffeeProduct.packSizes}
              />
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <ProductImg
                image={coffeeProduct.productImage}
                alt={coffeeProduct.imageAlt}
                badge="Highland Estate • Single Origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Product;