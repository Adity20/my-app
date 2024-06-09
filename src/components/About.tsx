import React from "react";
import ContactFormCard from "./ContactForm";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-10 w-full h-[100%] font-medium font-roboto bg-white text-gray-100 min-h-screen"
      >
        <div className="WRAPPER flex flex-wrap gap-5 justify-between items-center">
          <div className="INTRO text-4xl leading-snug w-full lg:w-1/2 mb-8 px-3">
            <h3 className="text-gray-400 px-2">
              Build AI Calling Agent that can do
            </h3>
            <div className="animation mt-4 flex overflow-hidden h-14">
              <div>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Lead Generation
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Sales Call
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Recruitment
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  B2B Data Collection
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Fund Raising
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Political Campaigning
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Appointment Booking
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Interview Scheduling
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Market Surveys
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Upselling & Cross-selling
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Payment Reminders
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Customer Feedback Collection
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Brand Promotion
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  Resolve Customer Complaints
                </span>
                <span className="animate-text bg-white text-black block p-1 px-3 mb-11">
                  EVERYTHING
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 font-semibold w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-1/2 h-16 rounded text-base shadow-xl">
                <span className="text-white">Build your own voice agent</span>{" "}
                <span className="text-black">&apos;Coming soon&apos;</span>
              </button>
              <button className="bg-white text-black px-4 py-2 font-semibold w-full sm:w-auto rounded text-sm border-2">
                Hear it in action
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-sm">
            <ContactFormCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
