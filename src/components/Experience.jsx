import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Experiences = () => {
  const experiences = [
    {
      title: "CREATIVE WRITING COMPETITIONS",
      description:
        "The art of writing and storytelling inspires students to express and organize their thoughts.",
      image:
        "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202023-03-20%20at%2008.21.13%20(18).jpeg",
    },
    {
      title: "ARTS, CRAFTS AND SCULPTING CLUBS",
      description:
        "Creative clubs engage students in artistic pursuits like painting, sculpture, and crafts.",
      image:
        "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/31fd881b-32f5-4a3c-b953-1b6b002cf881.jpg",
    },
    {
      title: "Udyaan Utsav II",
      description: "At RashtraPati Bhavan",
      image:
        "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/b3bb26cc-5808-4ed7-b165-f57016544231%20(2).jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [experiences.length]);

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-6">
          Experiences
        </h2>
        <div className="relative w-full overflow-hidden">
          {/* Slider */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="min-w-full flex flex-col lg:flex-row items-center gap-8"
                initial={{ opacity: 0, y: 100 }}  // Start below the screen with opacity 0
                whileInView={{ opacity: 1, y: 0 }} // Animate to normal position with opacity 1
                transition={{ duration: 0.7 }}  // Animation duration
                viewport={{ once: true }} // Trigger the animation only once when in view
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full lg:w-1/2 max-h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="flex-1 text-center lg:text-left px-6">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
