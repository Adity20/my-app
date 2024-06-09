
import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Sample icons (replace with your actual icons)
import icon1 from '../../public/img/fine.png';
import icon2 from '../../public/img/tools.png';
import icon3 from '../../public/img/sound.png';

interface CardProps {
  icon: StaticImageData;
  heading: string;
  subheading: string;
}

const cardsData: CardProps[] = [
  { icon: icon1, heading: 'Fine tuning', subheading: 'Elevate Your Agent Interactions With Our Fine-tuning Technique, Not only LLM wights but Prompts and parameters too.' },
  { icon: icon2, heading: 'Custom tools', subheading: 'Enhanced Agent Capabilities: Instantly access customer history, integrate databases, and connect to APIs during calls. Simplify tasks like scheduling and data handling, all while leveraging past call insights for smarter interactions.' },
  { icon: icon3, heading: 'Dedicated infrastructure', subheading: 'Experience unmatched scalability and reliability with our dedicated Kubernetes clusters, designed for high availability to support up to 10,000 concurrent calls. Enjoy exclusive server access, bypassing standard rate limits, complemented by our 24/7 expert support.' },
];

const ThreeCardsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: string) => {
    if (direction === 'right' && currentIndex < cardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-roboto p-5">
      <h1 className="text-4xl font-semibold mb-16 text-center mt-8">Elevate Your Calls With AI Precision And Enterprise Power</h1>
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Card Container */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="hidden md:flex text-center justify-center space-x-4">
            {/* Cards for larger screens */}
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 border border-gray-200 shadow-md transition duration-300 ease-in-out transform hover:bg-orange-100"
                style={{ maxWidth: '300px' }}
              >
                <div className="flex justify-center items-center">
                  <Image src={card.icon} alt={`Icon ${index + 1}`} width={48} height={48} />
                </div>
                <h2 className="text-2xl font-bold mt-4">{card.heading}</h2>
                <p className="text-lg mt-2">{card.subheading}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden w-full relative">
            {/* Cards for smaller screens */}
            <div className="flex justify-center">
              <div
                className="bg-white rounded-lg p-5 border border-gray-200 shadow-md transition duration-300 ease-in-out transform hover:bg-orange-100"
                style={{ maxWidth: '300px' }}
              >
                <div className="flex justify-center items-center">
                  <Image src={cardsData[currentIndex].icon} alt={`Icon ${currentIndex + 1}`} width={48} height={48} />
                </div>
                <h2 className="text-2xl font-bold mt-4">{cardsData[currentIndex].heading}</h2>
                <p className="text-lg mt-2">{cardsData[currentIndex].subheading}</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleSwipe('left')}
                className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
                disabled={currentIndex === 0}
              >
                &lt;
              </button>
              <button
                onClick={() => handleSwipe('right')}
                className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
                disabled={currentIndex === cardsData.length - 1}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardsPage;
