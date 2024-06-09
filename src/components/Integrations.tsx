import React from "react";
import Image from "next/image";

// Import images statically
import img1 from "../../public/img/img1.png";
import img2 from "../../public/img/img2.png";
import img3 from "../../public/img/img3.png";
import img4 from "../../public/img/img4.png";
import img5 from "../../public/img/img5.png";

const NewPage = () => {
  const icons = [img1, img2, img3, img4, img5];

  return (
    <div className="min-h-screen bg-white text-gray-600 font-roboto p-5">
      {/* Heading */}
      <div className="text-center my-8">
        <h1 className="text-xl">Automate your Agent with 5000+ integrations like</h1>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center gap-6 my-8 flex-wrap">
        {icons.map((icon, index) => (
          <div key={index} className="w-20 h-20 relative">
            <Image src={icon} alt={`icon-${index}`} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="flex justify-center my-25">
        <div className="w-full max-w-6xl">
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              src = "https://www.youtube.com/embed/La3wQlntgw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
