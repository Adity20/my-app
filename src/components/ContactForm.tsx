import React from "react";
import { FaPhone } from "react-icons/fa";

const ContactFormCard = () => {
  return (
    <div className="relative bg-white p-4 rounded-lg border border-gray-200 shadow-md">
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        style={{
          backgroundImage:
            "linear-gradient(335.33deg, #FFFFFF 2.31%, #f0c09f 116.03%)",
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-black">Try now</h2>
        <h4 className="text-1xl  mb-5 text-black">Get a call from Toingg</h4>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
        <label htmlFor="phone-number" className="block mb-1 text-black">
          Country Code and Mobile Number
        </label>
        <div className="flex">
          <select
            id="country-code"
            name="country-code"
            className="px-3 w-20 py-2 border text-black border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-500"
          >
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (India)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+86">+86 (China)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+33">+33 (France)</option>
            <option value="+39">+39 (Italy)</option>
            <option value="+7">+7 (Russia)</option>
            <option value="+34">+34 (Spain)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+27">+27 (South Africa)</option>
            <option value="+82">+82 (South Korea)</option>
            <option value="+46">+46 (Sweden)</option>
            <option value="+31">+31 (Netherlands)</option>
            <option value="+47">+47 (Norway)</option>
            <option value="+64">+64 (New Zealand)</option>
            <option value="+65">+65 (Singapore)</option>
            <option value="+971">+971 (United Arab Emirates)</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+20">+20 (Egypt)</option>
            <option value="+351">+351 (Portugal)</option>
            <option value="+48">+48 (Poland)</option>
            <option value="+30">+30 (Greece)</option>
            <option value="+60">+60 (Malaysia)</option>
            <option value="+62">+62 (Indonesia)</option>
            <option value="+66">+66 (Thailand)</option>
            <option value="+90">+90 (Turkey)</option>
            <option value="+380">+380 (Ukraine)</option>
            <option value="+52">+52 (Mexico)</option>
            <option value="+54">+54 (Argentina)</option>
            <option value="+56">+56 (Chile)</option>
            <option value="+57">+57 (Colombia)</option>
            <option value="+58">+58 (Venezuela)</option>
            <option value="+593">+593 (Ecuador)</option>
            <option value="+595">+595 (Paraguay)</option>
            <option value="+598">+598 (Uruguay)</option>
            <option value="+51">+51 (Peru)</option>
            <option value="+63">+63 (Philippines)</option>
            <option value="+94">+94 (Sri Lanka)</option>
            <option value="+880">+880 (Bangladesh)</option>
            <option value="+977">+977 (Nepal)</option>
            <option value="+975">+975 (Bhutan)</option>
            <option value="+961">+961 (Lebanon)</option>
            <option value="+962">+962 (Jordan)</option>
            <option value="+973">+973 (Bahrain)</option>
            <option value="+974">+974 (Qatar)</option>
            <option value="+968">+968 (Oman)</option>
            <option value="+965">+965 (Kuwait)</option>
            <option value="+966">+966 (Saudi Arabia)</option>
            <option value="+84">+84 (Vietnam)</option>
          </select>
          <input
            type="tel"
            id="phone-number"
            name="phone-number"
            className="w-full text-black px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-indigo-500"
            placeholder="Your mobile number"
          />
        </div>
      </div>
          <div className="mb-4">
            <label htmlFor="language" className="block mb-1 text-black">
              Language
            </label>
            <select
              id="language"
              name="language"
              className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
          <div className="text-center">
        <button
          type="submit"
          className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-600 focus:outline-none"
        >
          <FaPhone className="text-white" />
        </button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormCard;
