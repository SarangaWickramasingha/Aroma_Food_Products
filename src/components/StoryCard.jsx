function StoryCard({ image, title, subtitle, description, rotation}) {
  return (
    <div className="bg-[#fffbee] rounded-[2.5rem] p-3 max-w-[320px] shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
      style={{ 
        transform: `rotate(${rotation}deg)` 
      }}
    >

    {/* Image Container with Title Overlay */}
      <div className="relative w-full rounded-[1.8rem] overflow-hidden group shadow-inner">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {/* Dark subtle vignette overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Title Text Overlaid directly on the image bottom */}
        <div className="absolute bottom-4 left-0 right-0 px-4 text-white">
          <h3 className="text-lg font-bold leading-tight font-serif">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs opacity-90 font-medium tracking-wide mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Description Area */}
      <div className="mt-5 px-2 text-[#3a2312]">
        <p className="text-xs leading-relaxed tracking-normal font-normal text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

export default StoryCard;