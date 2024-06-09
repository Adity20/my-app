// import React, { useState } from "react";
// import Image from "next/image";
// import { FaAngleRight } from "react-icons/fa"; // Import the right arrow icon

// // Import images statically
// import img1 from "../../public/img/gpt.png";
// import img2 from "../../public/img/img2.png";

// // import editor from "../../public/img/img.png";
// import dart from "../../public/img/img9.png";
// import javascriptIcon from "../../public/img/img11.png";
// import pythonIcon from "../../public/img/img12.png";
// import phpIcon from "../../public/img/img10.png";
// import ruby from "../../public/img/img6.png";
// import swift from "../../public/img/img8.png";

// const OverlappingCardsPage = () => {
//   const [showSecondCard, setShowSecondCard] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('');

//   const handleSwipe = () => {
//     setShowSecondCard(true);
//   };
//   const handleLanguageChange = (language: string) => {
//     setSelectedLanguage(language);
//     setShowDropdown(false);
//     // You can add further logic here, such as changing the editor language
//   };

//   const exploreButtonStyles = {
//     background: "linear-gradient(92.29deg, #fc9850 1.92%, #ad4c06 96.57%)",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//     marginBottom: "1rem",
//     padding: "0.75rem 1.5rem",
//     borderRadius: "0.5rem",
//     fontSize: "0.75rem",
//   };
//   const cardStyles = {
//     backgroundColor: "rgb(255, 246, 232)",
//     top: "calc(0px - 5vh)",
//     transform: "scale(0.983985) translateZ(0px)",
//     height: "500px",
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 font-roboto p-5 flex flex-col items-center">
//       {/* Page Heading */}
//       <div className="w-full text-center mt-60">
//         <h1
//           className="text-7xl font-extrabold bg-clip-text text-transparent"
//           style={{
//             backgroundImage: "linear-gradient(to right, #ffa362, #ffe5d2)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Easy ways to Toinggg
//         </h1>
//       </div>

//       <div className="relative w-full max-w-5xl mt-16">
//         {/* First Card */}
//         <div
//           className="relative bg-white shadow-xl rounded-xl p-5 flex mb-10 z-10"
//           style={cardStyles}
//         >
//           <div className="w-1/2 pr-4 mb">
//             <h1 className="text-4xl font-bold mb-2">Explore TOINGG in</h1>
//             <h1 className="text-4xl font-bold text-orange-500 mb-8">
//               GPT store
//             </h1>
//             <li className="mb-2">
//               Interactive Communication: Engage in single or batch calls using
//               TOINGG GPT.
//             </li>
//             <li className="mb-2">
//               Advanced Features: Leverage GPT for real-time sentiment analysis
//               during calls.
//             </li>
//             <li className="mb-2">
//               Data Export: Conveniently export call logs to CSV.
//             </li>
//             <li className="mb-2">
//               Enhanced Usability: Tailored for users familiar with CSV
//               functionalities.
//             </li>
//             <button style={exploreButtonStyles} className="mb-4">
//               {" "}
//               <a
//                 href="https://chatgpt.com/g/g-MzBcmDH7g-phone-call-with-toingg"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white"
//               >
//                 Explore More
//               </a>
//             </button>
//             <button
//               onClick={handleSwipe}
//               className="flex items-center mt-4 text-gray-500 hover:text-gray-700"
//             >
//               Swipe Right <FaAngleRight className="ml-2" />
//             </button>
//           </div>
//           <div className="w-1/2 relative h-64">
//             <Image
//               src={img1}
//               alt="Image 1"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Second Card */}
//         {showSecondCard && (
//   <div
//     className="relative bg-black shadow-xl rounded-xl p-5 flex mt-[6rem] z-20"
//     style={cardStyles}
//   >
//     <div className="w-1/2 pr-4 pl-[50px] text-black text-center mt-[100px] relative">
//       <h2 className="text-4xl font-semibold mb-4">
//         Build your own voice agents
//       </h2>
//       <h3 className="text-3xl font-semibold mb-2">
//         in just a few lines of code
//       </h3>
//     </div>
//     <div className="w-1/2 relative h-64">
//       {/* Add your icon images here */}
//       {/* Example: <Image src={iconImage} alt="Icon" layout="fill" /> */}
//     </div>
//     <div className="w-1/2 pr-4 text-white">
//       <div className="relative mt-4">
//         {/* Container for dropdown and editor */}
//         <div className="relative">
//           {/* Dropdown for language selection */}
//           <div className="absolute top-0 left-[-35px] flex">
//             <div className="relative">
//               <Image
//                 src={javascriptIcon}
//                 alt="JavaScript"
//                 className="w-8 h-8 cursor-pointer"
//                 onClick={() => setShowDropdown(!showDropdown)}
//               />
//               {/* Dropdown menu */}
//               {showDropdown && (
//                 <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-lg overflow-hidden">
//                   <div className="px-2 py-1">
//                     <Image
//                       src={pythonIcon}
//                       alt="Python"
//                       className="w-8 h-8 cursor-pointer"
//                       onClick={() => handleLanguageChange("python")}
//                     />
//                   </div>
//                   <div className="px-2 py-1">
//                     <Image
//                       src={ruby}
//                       alt="Ruby"
//                       className="w-8 h-8 cursor-pointer"
//                       onClick={() => handleLanguageChange("ruby")}
//                     />
//                   </div>
//                   <div className="px-2 py-1">
//                     <Image
//                       src={swift}
//                       alt="Swift"
//                       className="w-8 h-8 cursor-pointer"
//                       onClick={() => handleLanguageChange("swift")}
//                     />
//                   </div>
//                   <div className="px-2 py-1">
//                     <Image
//                       src={dart}
//                       alt="Dart"
//                       className="w-8 h-8 cursor-pointer"
//                       onClick={() => handleLanguageChange("dart")}
//                     />
//                   </div>
//                   <div className="px-2 py-1">
//                     <Image
//                       src={phpIcon}
//                       alt="PHP"
//                       className="w-8 h-8 cursor-pointer"
//                       onClick={() => handleLanguageChange("php")}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           {/* Your text editor component here */}
//           <textarea
//             className="w-full h-64 bg-gray-900 border rounded-lg resize-none p-3 text-white"
//             placeholder="Enter your code here..."
//           >
//             {/* Pre-written code */}
//             const greeting = 'Hello, world!'; console.log(greeting);
//           </textarea>
//         </div>
//       </div>
//     </div>
//   </div>
// )}


//       </div>
//     </div>
//   );
// };
// export default OverlappingCardsPage;
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa"; // Import the right arrow icon

// Import images statically
import img1 from "../../public/img/gpt.png";
import img2 from "../../public/img/img2.png";

import dart from "../../public/img/img9.png";
import javascriptIcon from "../../public/img/img11.png";
import pythonIcon from "../../public/img/img12.png";
import phpIcon from "../../public/img/img10.png";
import ruby from "../../public/img/img6.png";
import swift from "../../public/img/img8.png";

const OverlappingCardsPage = () => {
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleSwipe = () => {
    setShowSecondCard(true);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
    // You can add further logic here, such as changing the editor language
  };

  const exploreButtonStyles = {
    background: "linear-gradient(92.29deg, #fc9850 1.92%, #ad4c06 96.57%)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginBottom: "1rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontSize: "0.75rem",
  };

  const cardStyles = {
    backgroundColor: "rgb(255, 246, 232)",
    top: "calc(0px - 5vh)",
    transform: "scale(0.983985) translateZ(0px)",
    height: "auto",
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-roboto p-5 flex flex-col items-center">
      {/* Page Heading */}
      <div className="w-full text-center mt-32 md:mt-60">
        <h1
          className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #ffa362, #ffe5d2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Easy ways to Toinggg
        </h1>
      </div>

      <div className="relative w-full max-w-5xl mt-16">
        {/* First Card */}
        <div
          className="relative bg-white shadow-xl rounded-xl p-5 flex flex-col md:flex-row mb-10 z-10"
          style={cardStyles}
        >
          <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Explore TOINGG in</h1>
            <h1 className="text-2xl md:text-4xl font-bold text-orange-500 mb-8">
              GPT store
            </h1>
            <li className="mb-2">
              Interactive Communication: Engage in single or batch calls using TOINGG GPT.
            </li>
            <li className="mb-2">
              Advanced Features: Leverage GPT for real-time sentiment analysis during calls.
            </li>
            <li className="mb-2">
              Data Export: Conveniently export call logs to CSV.
            </li>
            <li className="mb-2">
              Enhanced Usability: Tailored for users familiar with CSV functionalities.
            </li>
            <button style={exploreButtonStyles} className="mb-4">
              <a
                href="https://chatgpt.com/g/g-MzBcmDH7g-phone-call-with-toingg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Explore More
              </a>
            </button>
            <button
              onClick={handleSwipe}
              className="flex items-center mt-4 text-gray-500 hover:text-gray-700"
            >
              Swipe Right <FaAngleRight className="ml-2" />
            </button>
          </div>
          <div className="w-full md:w-1/2 relative h-64">
            <Image
              src={img1}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Second Card */}
        {showSecondCard && (
  <div
    className="relative bg-black shadow-xl rounded-xl p-5 flex flex-col md:flex-row mt-16 z-20"
    style={cardStyles}
  >
    <div className="w-full md:w-1/2 text-white order-1 md:order-3 mt-4 md:mt-0">
      <div className="relative mt-4">
        {/* Container for dropdown and editor */}
        <div className="relative">
          {/* Your text editor component here */}
          <textarea
            className="w-full h-64 bg-gray-900 border rounded-lg resize-none p-3 text-white"
            placeholder="Enter your code here..."
            defaultValue={`const greeting = 'Hello, world!'; console.log(greeting);`}
          />
          {/* Dropdown for language selection */}
          <div className="absolute top-0 left-[-35px] flex">
            <div className="relative">
              <Image
                src={javascriptIcon}
                alt="JavaScript"
                className="w-8 h-8 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {/* Dropdown menu */}
              {showDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="px-2 py-1">
                    <Image
                      src={pythonIcon}
                      alt="Python"
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => handleLanguageChange("python")}
                    />
                  </div>
                  <div className="px-2 py-1">
                    <Image
                      src={ruby}
                      alt="Ruby"
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => handleLanguageChange("ruby")}
                    />
                  </div>
                  <div className="px-2 py-1">
                    <Image
                      src={swift}
                      alt="Swift"
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => handleLanguageChange("swift")}
                    />
                  </div>
                  <div className="px-2 py-1">
                    <Image
                      src={dart}
                      alt="Dart"
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => handleLanguageChange("dart")}
                    />
                  </div>
                  <div className="px-2 py-1">
                    <Image
                      src={phpIcon}
                      alt="PHP"
                      className="w-8 h-8 cursor-pointer"
                      onClick={() => handleLanguageChange("php")}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 pr-4 pl-[30px] text-black text-center mt-4 md:mt-[100px] relative order-3 md:order-1">
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">
        Build your own voice agents
      </h2>
      <h3 className="text-xl md:text-3xl font-semibold mb-2">
        in just a few lines of code
      </h3>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default OverlappingCardsPage;
