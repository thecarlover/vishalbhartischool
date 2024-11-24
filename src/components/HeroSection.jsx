

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black">
      {/* Background Video/Image */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="jj.mp4" type="video/mp4" /> {/* Replace with your video file */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white text-center drop-shadow-lg">
          Welcome to Vishal Bharti School
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
