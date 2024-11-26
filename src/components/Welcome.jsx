
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Welcome = () => {
 
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.6,    // Trigger when 20% of the component is visible
  });

  // Animation variants for Framer Motion
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-gray-50 text-gray-800 text-center p-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      <h1 className="text-3xl font-bold text-purple-800 mb-4">
        Unique Approach to Learning
      </h1>
      <p className="text-lg leading-relaxed max-w-4xl mx-auto">
        At Vishal Bharti Senior Secondary School, we believe that every student
        has the potential to excel academically and personally.
        <br />
        <br />
        That’s why we’ve developed a unique approach to learning that focuses
        on each student’s individual needs and learning style.
      </p>
      <p className="text-lg mt-6 max-w-4xl mx-auto">
        Our teachers are dedicated to fostering a supportive and inclusive
        learning environment, where students are encouraged to explore new
        ideas and take risks. We offer a wide range of academic and
        extracurricular programmes that enable our students to build a strong
        foundation for success.
      </p>
      <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
        Know more
      </button>
    </motion.div>
  );
};

export default Welcome;
