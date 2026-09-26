import { forwardRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import BlogCard from "../components/BlogCard";
import ArticleModal from "../components/ArticleModal";
import Blogdetails from "../data/Blogdetails";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = ["All", "Brewing Guide", "Behind the Craft", "Recipes & Pairing", "Sustainability"];

const Blog = forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredBlogs =
    selectedCategory === "All"
      ? Blogdetails
      : Blogdetails.filter((b) => b.category === selectedCategory);

  return (
    <section
      id="blog"
      ref={ref}
      className="min-h-screen bg-coffee-bg px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="eyebrow text-brand-red">
            Brewing Insights & Stories
          </p>
          <h2 className="mt-2 heading-serif font-extrabold tracking-wide text-3xl sm:text-4xl md:text-5xl text-espresso-900">
            Aroma Journal & Recipes
          </h2>
          <p className="mt-3 text-sm text-espresso-800/70 max-w-lg mx-auto">
            Discover brewing guides, origin stories, pairing inspirations, and sustainable culinary insights from our master roasters.
          </p>
          <div className="divider-bar mx-auto mt-4 rounded-full" />

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-espresso-800 text-white shadow-md scale-105"
                    : "bg-black/5 text-espresso-800/70 hover:bg-black/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Swipeable cards */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="!pb-16"
          >
            {filteredBlogs.map((blog) => (
              <SwiperSlide key={blog.id} className="flex justify-center h-auto">
                <BlogCard blog={blog} onRead={(article) => setActiveArticle(article)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </section>
  );
});

export default Blog;