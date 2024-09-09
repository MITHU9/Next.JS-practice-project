import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  //console.log(recipeList);

  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Recipes</h2>

        <Link href={"/"}>Go Home</Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe, index) => (
                <Link href={`/recipe-list/${recipe.id}`}>
                  <Card key={index}>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.05] transition-all">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>

                      <div className="px-6 py-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {recipe.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2 justify-between">
                          <span className="text-lg text-gray-600 font-semibold">
                            Rating:
                            {recipe.rating}
                          </span>

                          <div>
                            <span className="text-lg text-gray-600 font-bold">
                              {recipe.cuisine}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
