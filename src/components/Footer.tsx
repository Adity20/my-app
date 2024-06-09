// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="bg-orange-50 py-12 mx-auto">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <div className="text-center mb-6">
//           <h2 className="text-4xl text-black font-semibold mb-2">TOINGG</h2>
//           <p className="text-lg text-gray-600">
//   We are here to grow your business <span className="text-red-600">❤</span>
// </p>

//         </div>
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           <a href="#" className="text-gray-700 hover:text-gray-800">Terms and conditions</a>
//           <a href="#" className="text-gray-700 hover:text-gray-800">Privacy policy</a>
//           <a href="#" className="text-gray-700 hover:text-gray-800">Contact</a>
//           <a href="#" className="text-gray-700 hover:text-gray-800">API docs</a>
//           <a href="#" className="text-gray-700 hover:text-gray-800">Refund Policy</a>
//         </div>
//         <div className="flex justify-between items-center mb-6">
//           <p className="text-gray-600 pl-[160px]">Copyright © 2024 Toingg, All rights reserved</p>
//           <div className="flex gap-4 pr-[250px]">
//             <a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebook /></a>
//             <a href="#" className="text-gray-600 hover:text-gray-800"><FaTwitter /></a>
//             <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram /></a>
//             <a href="#" className="text-gray-600 hover:text-gray-800"><FaLinkedin /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-orange-50 py-12 mx-auto">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl text-black font-semibold mb-2">TOINGG</h2>
          <p className="text-lg text-gray-600">
            We are here to grow your business <span className="text-red-600">❤</span>
          </p>
        </div>
        
        {/* For mobile screens */}
        <div className="sm:hidden mb-8">
          <ul className="text-center">
            <li><a href="#" className="text-gray-700 hover:text-gray-800 block">Terms and conditions</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-800 block">Privacy policy</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-800 block">Contact</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-800 block">API docs</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-800 block">Refund Policy</a></li>
          </ul>
        </div>
        {/* For larger screens */}
        <div className="hidden sm:block">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#" className="text-gray-700 hover:text-gray-800">Terms and conditions</a>
            <a href="#" className="text-gray-700 hover:text-gray-800">Privacy policy</a>
            <a href="#" className="text-gray-700 hover:text-gray-800">Contact</a>
            <a href="#" className="text-gray-700 hover:text-gray-800">API docs</a>
            <a href="#" className="text-gray-700 hover:text-gray-800">Refund Policy</a>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 sm:pl-[160px]">Copyright © 2024 Toingg, All rights reserved</p>
          <div className="flex gap-4 sm:pr-[250px]">
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebook /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><FaLinkedin /></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
