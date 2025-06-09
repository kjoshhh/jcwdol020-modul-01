import Navbar from "../../components/Navbar"
import Button from "../../components/Button"
import ContactCard from "../../components/ContactCard";

import React from "react";

export default function AboutPage() {
  return (
    
    <div className="relativefont-sans">
      {/* Header */}
      <Navbar/>
        <div
            className="relative h-[450px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/AboutBanner.jpg')" }}
            >
        </div>

        <div className="bg-black text-white" >

            {/* Hero Section */}
            <div className="justice-center w-[800px] px-8 py-48 text-left mx-auto">
                <h3 className="text-[28px] text-gray-400">a little about me</h3>
                <h1 className="text-[52px] font-bold mt-4">
                Growing Designer, Exploring Creativity
                </h1>
                <p className="text-[28px] mt-6 mx-auto text-white">
                Heyo! I'm Kevin Joshua, but you can also call me Kaje, Josh, or Kevin!
                I'm currently a UI/UX designer with a background in research and a
                degree in architecture. I’m a huge nerd who loves learning new things,
                exploring everything about modern art, and diving into music. My
                ultimate goal is to become a product designer, combining my passion
                for creativity and problem-solving to craft meaningful user
                experiences.
                </p>

            </div>

            {/* Education */}
            <div className="justice-center w-[800px] mx-auto px-8 py-12 mb-40">
                <h2 className="text-[28px] text-gray-400 mb-4">Education</h2>
                <h3 className="text-[52px] font-semibold">Learning, Growing, and Experimenting</h3>
                <div className="mt-4">
                <p className="text-[40px] font-medium">Purwadhika Digital Technology School</p>
                <p className="text-[28px] text-gray-400">Job Connector – UI/UX Design · 2022–2023</p>
                </div>
                <div className="mt-4">
                <p className="text-[40px] font-medium">Universitas Tarumanagara</p>
                <p className="text-[28px] text-gray-400">Architecture, S.Ars · 2017–2021</p>
                </div>
            </div>

             {/* Experience */}
            <div className="justice-center w-[800px] mx-auto px-8 py-12 mb-24">
                <h2 className="text-[28px] text-gray-400 mb-4">Working Experiences</h2>
                <h3 className="text-[52px] font-semibold">Designing Experiences, One Pixel at a Time</h3>

                {/* Experience List */}
                <div className="mt-6 space-y-8">
                <div className="mb-32">
                    <h4 className="text-[40px] font-semibold">Astra Credit Companies as UI/UX Designer</h4>
                    <p className="text-[28px] text-gray-400">October 2024 – Present</p>
                    <ul className="text-[28px] list-disc ml-5 mt-2 text-[#B3B3B3]">
                    <li>Designing Phone Updation dashboard with the objective to improve database efficiency, <span className="text-white font-bold">helping reduce the average attempt rate to 58%.</span></li>
                    <li>Improving user experience and streamline workflow by redesigning Leads Management System into one integrated dashboard.</li>
                    <li>Designed a consent engine to store customer consents and manage terms, conditions, and updates within a single dashboard.</li>
                    <li>Collaborated with and supported the IT team in product development, SIT, and UAT.</li>
                    </ul>
                </div>

                <div className="mb-32">
                    <h4 className="text-[40px] font-semibold">Astra Credit Companies as UX Researcher</h4>
                    <p className="text-[28px] text-gray-400">June 2023 – October 2024</p>
                    <ul className="text-[28px] list-disc ml-5 mt-2 text-[#B3B3B3]">
                    <li>Audited the ACC ONE homepage and collaborated on the Phase 1 revamp, <span className="text-white font-bold">improving UAT score to 69.9 </span> (The final phase achieved 79.37 (Excellent) after my role transition).</li>
                    <li>Improved visitor-to-PDP <span className="text-white font-bold">conversion rates for Setir Kanan Website from 16.47% to 17.38% </span> through testing and <span className="text-white font-bold"> targeted optimizations on filter and search feature.</span></li>
                    <li>Other work that I did as a Researcher:</li>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Identified product pain points via interviews and provided SUS-backed recommendations.</li>
                            <li>Designed and analyzed surveys for quantitative insights and performed competitive benchmarking.</li>
                            <li>Delivered research insights and solutions through wireframes to guide product improvements.</li>
                            <li>Collaborated with a vendor to design market research questions.</li>
                        </ul>
                    </ul>
                </div>

                <div className="mb-32">
                    <h4 className="text-[40px] font-semibold">Kelas Pintar as UI/UX Designer</h4>
                    <p className="text-[28px] text-gray-400">March 2023 – June 2023</p>
                    <ul className="text-[28px] list-disc ml-5 mt-2 text-[#B3B3B3]">
                        <li>Design a user interface that <span className="text-white font-bold">seamlessly integrates team collaboration </span> and project management, ensuring efficiency, clarity, and streamlined workflows.</li>
                        <li>Designed an alternative account deactivation following UI/UX design principles.</li>
                     </ul>
                </div>

                <div className="mb-32">
                    <h4 className="text-[40px] font-semibold">PT. Mega Finance as UI/UX Design Intern</h4>
                    <p className="text-[28px] text-gray-400">December 2022 – February 2022</p>
                    <ul className="text-[28px] list-disc ml-5 mt-2 text-[#B3B3B3]">
                    <li>Redesigned the Mega Finance Employee Portal.</li>
                    <li>Initiate research by doing questionnaire and UX Audit to gather all the required data before proceed to the redesign.</li>
                    </ul>
                </div>
                </div>
            </div>

            {/* Contact Section */}
            <ContactCard />
              
        </div>
    </div>
  );
}
