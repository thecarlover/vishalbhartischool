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
      setIsVisible(true); // Load the slider when it comes into view
    }
  }, [inView]);

  // Automatically slide every 5 seconds
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, images.length]);

  return (
    <div ref={ref} className="bg-[#F5F5DC] py-10 px-4 md:px-8 lg:px-12">
      {isVisible && (
        <>
          {/* Container Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-purple-800">Photo Gallery</h2>
            <p className="text-lg text-gray-600 mt-2">
              Explore our best memories through this slideshow
            </p>
          </div>

          {/* Slider Section */}
          <div className="relative bg-purple-900 overflow-hidden rounded-lg shadow-lg">
            {/* Images Section */}
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full h-[500px] flex-shrink-0 relative"
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoSlider;
