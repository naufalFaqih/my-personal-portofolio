import React from 'react';
import { serviceData, assets } from '../../../assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Specialize In</h4>
      <h2 className="text-center text-5xl font-Ovo">My Expertise</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Technical skills and practical experience in IT support, network infrastructure, and enterprise technology operations.</p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, slug }, index) => (
          <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <Image src={icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 text-justify">{description}</p>
            <Link href={`/services/${slug}`} className="flex w-max items-center gap-2 text-sm mt-5 hover:underline">
              Read more <Image src={assets.right_arrow} className="w-4" alt="right-arrow" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
