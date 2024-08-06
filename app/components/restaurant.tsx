import React from 'react';
import Image from 'next/image';

type RestaurantProps = {
  image: string;
  name: string;
  t: string;
  restaurantUrl: string;
  description: string[];
  url: string;
};

const Restaurant: React.FC<RestaurantProps> = ({ image, name, t, restaurantUrl, description, url }) => {
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
          <div className="overflow-hidden mb-4">
            {description.map((line, index) => (
              <p key={index} className="mb-4">
                {line}
              </p>
            ))}
          </div>

          <div className="flex flex-row gap-2">
            <a
              className="rounded-md md:max-w-[300px] mb-4 p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
              href={restaurantUrl}
            >
              Website
            </a>

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

export default Restaurant;