import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '../../../assets/assets';

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-5 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-15">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none flex-shrink-0">
          <Image src={assets.profile_user} alt="profile_user" className="w-full rounded-3xl" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="mb-10 max-w-2xl font-Ovo text-justify px-2 sm:px-5 md:px-0">
            Computer Systems graduate with practical experience in IT Support and Infrastructure. Skilled in troubleshooting network connectivity, maintaining hardware and peripherals, configuring network devices, and supporting enterprise
            applications. Experienced in providing technical support for hotel operations, including PMS, POS, printers, telephony systems, and digital signage. Focused on delivering reliable IT solutions and ensuring smooth day-to-day
            operations.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I Use</h4>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
