// import React from 'react';
// import { FaPhone, FaFunnelDollar, FaBalanceScale, FaClipboardCheck } from 'react-icons/fa'; // Make sure to install react-icons

// const SafetyAndSecurity = () => {
//   return (
//     <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-10">
//       <div className="w-full md:w-1/2">
//         <div className="flex items-center mb-4">
//           <div className="bg-orange-500 text-white p-4 rounded-full">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10 2a2 2 0 00-2 2v1a2 2 0 01-2 2H4a2 2 0 100 4h2a2 2 0 012 2v1a2 2 0 104 0v-1a2 2 0 012-2h2a2 2 0 100-4h-2a2 2 0 01-2-2V4a2 2 0 00-2-2zm0 2a.5.5 0 00-.5.5v1c0 .276-.224.5-.5.5H4a.5.5 0 000 1h2a.5.5 0 00.5-.5v-1A.5.5 0 007 4h2a.5.5 0 00.5-.5V4zm3.5 6a.5.5 0 00-.5.5v1c0 .276-.224.5-.5.5H4a.5.5 0 000 1h8a.5.5 0 00.5-.5v-1a.5.5 0 000-1h2a.5.5 0 00.5-.5v-1A.5.5 0 0013.5 8h-1a.5.5 0 00-.5.5v1z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <h2 className="text-4xl font-bold ml-4 text-black">Unwavering Safety & Security</h2>
//         </div>
//         <p className="text-lg mt-4 text-gray-700">
//           With robust internal audits and stringent data governance, we champion the ethical use of AI, ensuring technology serves humanity's best interests. Our commitment sets the foundation for Advanced General Intelligence (AGI) with integrity.
//         </p>
//       </div>
//       <div className="w-full md:w-1/2 flex flex-col justify-center items-start mt-10 md:mt-0 space-y-6">
//         <div className="flex items-center">
//           <div className="bg-orange-500 text-white p-4 rounded-full">
//             <FaPhone className="h-6 w-6" />
//           </div>
//           <span className="text-xl ml-4 text-black">Call Monitoring</span>
//         </div>
//         <div className="flex items-center">
//           <div className="bg-orange-500 text-white p-4 rounded-full">
//             <FaFunnelDollar className="h-6 w-6" />
//           </div>
//           <span className="text-xl ml-4 text-black">Prompt Injection</span>
//         </div>
//         <div className="flex items-center">
//           <div className="bg-orange-500 text-white p-4 rounded-full">
//             <FaBalanceScale className="h-6 w-6" />
//           </div>
//           <span className="text-xl ml-4 text-black">Rate Limits</span>
//         </div>
//         <div className="flex items-center">
//           <div className="bg-orange-500 text-white p-4 rounded-full">
//             <FaClipboardCheck className="h-6 w-6" />
//           </div>
//           <span className="text-xl ml-4 text-black">Internal Hard Audits</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SafetyAndSecurity;
import React from 'react';
import { FaPhone, FaFunnelDollar, FaBalanceScale, FaClipboardCheck } from 'react-icons/fa'; // Make sure to install react-icons
import Image from 'next/image'; // Import the Image component from the appropriate library
import img from '../../public/img/img41.png'; // Import the image statically

const SafetyAndSecurity = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-20 md:p-60"> {/* Reduced padding for better view */}
        <div className="w-full md:w-1/3">
          <div className="flex items-start mb-4">
            <div className=" text-white p-3 pr-4 rounded-full items-center" style={{alignSelf:'center'}} >
              <Image src= {img}alt="Icon" width={600} height={80} /> {/* Use the Image component with the correct attributes */}
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">The highest standard of trust and security&apos;s</h2>
              <p className="mt-4 text-gray-700 text-sm">
                With robust internal audits and stringent data governance, we champion the ethical use of AI, ensuring technology serves &apos; humanity &apos;best interests. Our commitment sets the foundation for Advanced General Intelligence (AGI) with integrity.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex flex-col justify-center items-start mt-10 md:mt-0 space-y-6">
          <div className="flex items-center justify-end">
            <div className="bg-orange-500 text-white p-4 rounded-full">
              <FaPhone className="h-6 w-6" />
            </div>
            <span className="text-xl ml-4 text-black">Call Monitoring</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="bg-orange-500 text-white p-4 rounded-full">
              <FaFunnelDollar className="h-6 w-6" />
            </div>
            <span className="text-xl ml-4 text-black">Prompt Injection</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="bg-orange-500 text-white p-4 rounded-full">
              <FaBalanceScale className="h-6 w-6" />
            </div>
            <span className="text-xl ml-4 text-black">Rate Limits</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="bg-orange-500 text-white p-4 rounded-full">
              <FaClipboardCheck className="h-6 w-6" />
            </div>
            <span className="text-xl ml-4 text-black">Internal Hard Audits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyAndSecurity;
