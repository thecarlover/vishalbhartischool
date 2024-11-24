import { useState } from "react";

const NewsSection = () => {
  const newsData = [
    {
      date: "01st Oct 2024",
      title: "Annual Science Exhibition",
      description:
        "VISHAL BHARTI SENIOR SECONDARY SCHOOL, PITHAMPURA hosted its Annual Science Exhibition, showcasing innovative projects by students.",
      image: "https://via.placeholder.com/400x300.png?text=Science+Exhibition", // Demo image
    },
    {
      date: "17th Sep 2024",
      title: "Zonal Debate Championship",
      description:
        "The Zonal Debate Championship was held with students discussing various global issues, promoting public speaking skills.",
      image: "https://via.placeholder.com/400x300.png?text=Debate+Championship", // Demo image
    },
    {
      date: "20th Aug 2024",
      title: "Inter-School Math Quiz",
      description:
        "Students participated in an exciting Math Quiz competition between schools, testing their analytical and problem-solving abilities.",
      image: "https://via.placeholder.com/400x300.png?text=Math+Quiz", // Demo image
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-8">News and Events</h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md"
          >
            &#9664;
          </button>

          {/* News Cards */}
          <div className="w-full flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {newsData.map((news, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full lg:w-1/3 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600">{news.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md"
          >
            &#9654;
          </button>
        </div>
        <button className="mt-8 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full shadow-md">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
