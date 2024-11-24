const Welcome = () => {
    return (
      <div className="bg-gray-50 text-gray-800 text-center p-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">Unique Approach to Learning</h1>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
        At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally.
          <br />
          <br />
          That’s why we’ve developed a unique approach to learning that focuses on each student’s individual needs and learning style. 
        </p>
        <p className="text-lg mt-6 max-w-4xl mx-auto">
        Our teachers are dedicated to fostering a supportive and inclusive learning environment, where students are encouraged to explore new ideas and take risks. We offer a wide range of academic and extracurricular programmes that enable our students to build a strong foundation for success.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
          Know more
        </button>
      </div>
    );
  };
  
  export default Welcome;
  