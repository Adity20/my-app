
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { StaticImageData } from 'next/image';

// // Sample icons (replace with your actual icons)
// import icon5 from '../../public/img/key.png';
// import icon2 from '../../public/img/hand.png';
// import icon6 from '../../public/img/way.png';
// import icon1 from '../../public/img/light.png';
// import icon4 from '../../public/img/path.png';
// import icon3 from '../../public/img/brain.png';

// interface CardProps {
//   icon: StaticImageData;
//   heading: string;
//   subheading: string;
// }

// const cardsData: CardProps[] = [
//   { icon: icon1, heading: 'Ultra-Fast Response', subheading: 'Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.' },
//   { icon: icon2, heading: 'Smart Interruption Management', subheading: 'Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations' },
//   { icon: icon3, heading: 'Advanced Memory Recall', subheading: 'Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.' },
//   { icon: icon4, heading: 'Dynamic Conversational Flows', subheading: 'Navigate through complex conversations with ease, thanks to our AIs ability to understand and adapt to various conversational pathways.' },
//   { icon: icon5, heading: 'Custom AI Solutions', subheading: 'Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.' },
//   { icon: icon6, heading: 'Scalability at Your Fingertips', subheading: 'From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.' },
// ];

// const CardsGridPage: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleSwipeRight = () => {
//     if (currentIndex < cardsData.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 font-roboto p-5">
//       <h1 className="text-4xl font-semibold mb-16 text-center mt-8">Program phone agents to automate any task</h1>
//       <div className="max-w-7xl mx-auto">
//         {/* Display cards for larger screens */}
//         <div className="hidden md:flex justify-center">
//           <div className="grid grid-cols-3 gap-6">
//             {cardsData.map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-base p-5 flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
//               >
//                 <Image src={card.icon} alt={`Icon ${index + 1}`} width={50} height={50} />
//                 <h2 className="text-1xl font-semibold mt-4">{card.heading}</h2>
//                 <h3 className="text-center mt-2">{card.subheading}</h3>
//               </div>
//             ))}
//             <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
//           <div className="w-full border-t border-orange-500"></div>
//           {/* <div className="w-full border-t border-gray-300"></div> */}
//         </div>
//         <div className="absolute inset-0 flex justify-evenly pointer-events-none">
//           <div className="h-full border-l border-orange-500"></div>
//           <div className="h-full border-l border-orange-500"></div>
//         </div>
//       </div>
//           </div>
//         </div>
//         {/* Display button and card for smaller screens */}
//         <div className="md:hidden">
//           <div className="bg-white rounded-base p-5 flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
//             <Image src={cardsData[currentIndex].icon} alt={`Icon ${currentIndex + 1}`} width={50} height={50} />
//             <h2 className="text-1xl font-semibold mt-4">{cardsData[currentIndex].heading}</h2>
//             <h3 className="text-center mt-2">{cardsData[currentIndex].subheading}</h3>
//           </div>
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={handleSwipeRight}
//               className={`py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600`}
//               disabled={currentIndex === cardsData.length - 1}
//             >
//               Swipe Right
//             </button>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default CardsGridPage;
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Sample icons (replace with your actual icons)
import icon5 from '../../public/img/key.png';
import icon2 from '../../public/img/hand.png';
import icon6 from '../../public/img/way.png';
import icon1 from '../../public/img/light.png';
import icon4 from '../../public/img/path.png';
import icon3 from '../../public/img/brain.png';

interface CardProps {
  icon: StaticImageData;
  heading: string;
  subheading: string;
}

const cardsData: CardProps[] = [
  { icon: icon1, heading: 'Ultra-Fast Response', subheading: 'Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.' },
  { icon: icon2, heading: 'Smart Interruption Management', subheading: 'Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations' },
  { icon: icon3, heading: 'Advanced Memory Recall', subheading: 'Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.' },
  { icon: icon4, heading: 'Dynamic Conversational Flows', subheading: 'Navigate through complex conversations with ease, thanks to our AIs ability to understand and adapt to various conversational pathways.' },
  { icon: icon5, heading: 'Custom AI Solutions', subheading: 'Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.' },
  { icon: icon6, heading: 'Scalability at Your Fingertips', subheading: 'From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.' },
];

const CardsGridPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleSwipe = (direction: string) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (direction === 'right' && currentIndex < cardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleSwipe('right');
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handleSwipe('left');
    }
  };

  return (
    <div className="min-h-screen bg-white   text-gray-900 font-roboto p-5">
      <h1 className="text-4xl font-semibold mb-16 text-center mt-8">Program phone agents to automate any task</h1>
      <div className="max-w-7xl mx-auto">
        {/* Display cards for larger screens */}
        <div className="hidden md:flex justify-center relative">
          <div className="grid grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-base p-5 flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <Image src={card.icon} alt={`Icon ${index + 1}`} width={50} height={50} />
                <h2 className="text-1xl font-semibold mt-4">{card.heading}</h2>
                <h3 className="text-center mt-2">{card.subheading}</h3>
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
              <div className="w-full border-t border-orange-500"></div>
            </div>
            <div className="absolute inset-0 flex justify-evenly pointer-events-none">
              <div className="h-full border-l border-orange-500"></div>
              <div className="h-full border-l border-orange-500"></div>
            </div>
          </div>
        </div>
        {/* Display swipeable cards for smaller screens */}
        <div className="md:hidden relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div className="bg-white rounded-base p-5 flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <Image src={cardsData[currentIndex].icon} alt={`Icon ${currentIndex + 1}`} width={50} height={50} />
            <h2 className="text-1xl font-semibold mt-4">{cardsData[currentIndex].heading}</h2>
            <h3 className="text-center mt-2">{cardsData[currentIndex].subheading}</h3>
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
  );
};

export default CardsGridPage;
