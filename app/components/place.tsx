'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type PlaceProps = {
  image: string;
  name: string;
  t: string;
  shortDescription: string[];
  description: string[];
  url: string;
};

const Place: React.FC<PlaceProps> = ({ image, name, t, shortDescription, description, url }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="relative mb-4">
      <h2 className="font-bold text-xl my-4">
        {name} <span className="text-sm font-normal">{t}</span>
      </h2>

      <div className="flex flex-col md:flex-row md:items-start">
        <div className="w-full md:w-1/2 md:pr-4">
          <Image
            src={image}
            alt={name}
            className="rounded-lg object-cover"
            layout="intrinsic"
            width={700}
            height={475}
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-4">
          <div
            className={`transition-opacity duration-500 ease-in-out overflow-hidden ${isExpanded ? 'opacity-100' : 'opacity-0'} my-4`}
            style={{ maxHeight: isExpanded ? '2000px' : '0px' }}
          >
            {description.map((line, index) => (
              <p key={index} className="mb-4">
                {line}
              </p>
            ))}
          </div>
          <div
            className={`transition-opacity duration-500 ease-in-out overflow-hidden ${!isExpanded ? 'opacity-100' : 'opacity-0'} my-4`}
            style={{ maxHeight: !isExpanded ? '500px' : '0px' }}
          >
            {shortDescription.map((line, index) => (
              <p key={index} className="mb-4">
                {line}
              </p>
            ))}
          </div>

          <div className="flex flex-row gap-2">
            <button
              onClick={handleToggle}
              className="rounded-md md:max-w-[300px] mb-4 p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
            >
              {isExpanded ? 'Hide Info' : 'More Info'}
            </button>

            <a
              className="rounded-md md:max-w-[300px] mb-4 p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
              href={url}
            >
              Show on map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
