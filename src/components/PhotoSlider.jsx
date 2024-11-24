import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PhotoSlider = () => {
  const images = [
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202023-03-20%20at%2008.21.13%20(18).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/31fd881b-32f5-4a3c-b953-1b6b002cf881.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/b3bb26cc-5808-4ed7-b165-f57016544231%20(2).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, images.length]);

  return (
    <div
      ref={ref}
      className="bg-[#F5F5DC] py-6 px-4 md:py-10 md:px-8 lg:px-12 w-full"
    >
      {/* Hide Photo Gallery Section on Small Screens */}
      <div className="hidden sm:block">
        {isVisible && (
          <>
            {/* Container Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-800">
                Photo Gallery
              </h2>
              <p className="text-sm md:text-lg text-gray-600 mt-2">
                Explore our best memories through this slideshow
              </p>
            </div>

            {/* Slider Section */}
            <div className="relative bg-purple-900 overflow-hidden rounded-lg shadow-lg">
              {/* Images Section */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex-shrink-0 relative"
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 flex justify-center w-full space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-white"
                        : "bg-gray-400 opacity-75 hover:opacity-100"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoSlider;
