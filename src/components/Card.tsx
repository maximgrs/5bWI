import React from "react";

type Props = {
  name: string;
  description: string;
  age?: number;
  imageUrl: string;
};

export default function Card({ name, description, age, imageUrl }: Props) {
  return (
    <div className="mb-5 border border-black">
      <div className="h-64 md:h-80 xl:h-96">
        <img className="w-full h-full object-cover" src={imageUrl} alt="" />
      </div>
      <h1 className="font-bold text-md md:text-xl mb-2 text-white">
        {name}, {age}
      </h1>
      <p className="text-white">{description}</p>
    </div>
  );
}
