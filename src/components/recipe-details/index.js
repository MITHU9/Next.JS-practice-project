import Link from "next/link";
import React from "react";

export default function RecipeDetailsItem({ singleData }) {
  return (
    <div className="m-8">
      <p className="text-xl font-bold">
        <Link href={"/recipe-list"}>Go to recipe List</Link>
      </p>
      <div className="flex items-center justify-center gap-6 p-16">
        <div>
          <img
            className="w-[400px] rounded-3xl object-cover"
            src={singleData.image}
            alt={singleData.name}
          />
          <h1 className="text-2xl font-bold text-gray-700 py-2">
            {singleData.name}
          </h1>
          <p className="text-xl font-semibold text-gray-600">
            {singleData.cuisine}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-700 ">Ingredients</h2>
          <ul className="text-md list-disc pl-6 py-3 font-semibold text-gray-600">
            {singleData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="text-xl font-semibold text-yellow-600">
            Rating:{singleData.rating}
          </p>
        </div>
      </div>
    </div>
  );
}
