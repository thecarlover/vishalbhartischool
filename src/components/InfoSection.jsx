

const InfoSection = () => {
  const boxes = [
    {
      title: "The School",
      image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656", // Replace with actual image URLs
    },
    {
      title: "Curriculum",
      description:
        "Our curriculum harmonizes traditional education, experiential learning, and STEM, aligning seamlessly with the principles of the National Education Policy.",
      image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.18%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:759", // Replace with actual image URLs
    },
    {
      title: "Admission",
      image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/e8c22d59-d752-4874-b627-9caddadc36fc.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:653", // Replace with actual image URLs
    },
    {
      title: "Management",
      image: "https://www.itrobes.com/wp-content/uploads/2024/08/school-management-system-modules.jpg", // Replace with actual image URLs
    },
    {
      title: "Leadership and Faculty",
      image: "https://www.thoughtco.com/thmb/vF1Pelbl6p0YE2sgFRwtz4yqw6Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-498101581-58ac9ab63df78c345b7355d9.jpg", // Replace with actual image URLs
    },
    {
      title: "Infrastructure",
      image: "https://media.themirrority.com/uploads/data/featured_image/education-infrastructure.jpg", // Replace with actual image URLs
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 px-6 py-9">
      {boxes.map((box, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={box.image}
            alt={box.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-lg font-semibold">{box.title}</h3>
              {box.description && (
                <p className="text-sm mt-2">{box.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
