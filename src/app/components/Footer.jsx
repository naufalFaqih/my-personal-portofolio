import Image from 'next/image';
import React from 'react';
import { assets } from '../../../assets/assets';

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_white : assets.logo_black} alt="logo" className="w-35 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="logo" className="w-6" />
          naufalfaqih460@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        {/* copyright message */}
        <p>&copy; {new Date().getFullYear()} Naufal Faqih. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
