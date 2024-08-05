import Link from 'next/link';
import React from 'react';

type Button = {
  id: string;
  label: string;
  t: string;
};

type ButtonGridProps = {
  buttons: Button[];
};

const ButtonGrid: React.FC<ButtonGridProps> = ({ buttons }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {buttons.map((button, index) => (
        <Link href={`#${button.id}`} key={index} className="">
          <div className="block p-4 bg-black text-white text-center text-xl font-bold uppercase cursor-pointer hover:bg-pink-600">
            <p className="">{button.label}</p>
            <p className="text-xs font-normal">{button.t}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ButtonGrid;