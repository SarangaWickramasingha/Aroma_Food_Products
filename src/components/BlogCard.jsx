const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-[60px] overflow-hidden shadow-sm max-w-[410px] w-full pb-16">
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[230px] object-cover rounded-[58px]"
      />

      {/* Content */}
      <div className="px-12 pt-8">
        {/* Date & author */}
        <p className="text-[#AAA] text-[15px] tracking-[1px] uppercase">
          {blog.date} | By {blog.author} |
        </p>

        {/* Title */}
        <h3 className="text-[#121212] text-[19px] font-semibold leading-[30px] mt-4">
          {blog.title}
        </h3>

        <hr className="border-gray-200 my-5" />

        {/* Excerpt */}
        <p className="text-[#AAA] text-[17px] leading-[28px]">
          {blog.excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;