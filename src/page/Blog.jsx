import { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import BlogCard from "../components/BlogCard";
import Blogdetails from "../data/Blogdetails";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Blog = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen bg-coffee-bg py-[96px] px-[71.609px]"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[3px] uppercase text-[#121212]">
          Publish what you think
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mt-3">
          LATEST BLOGS
        </h2>
        <div className="w-24 h-[2px] bg-red-500 mx-auto mt-4" />
      </div>

      {/* Swipeable cards */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        loop={Blogdetails.length > 3}
        className="max-w-7xl mx-auto !pb-14"
      >
        {Blogdetails.map((blog) => (
          <SwiperSlide key={blog.id} className="flex justify-center">
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default Blog;