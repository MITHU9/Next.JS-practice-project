import RecipeDetailsItem from "@/components/recipe-details";
async function fetchRecipeDetails(id) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function RecipeDetails({ params }) {
  const id = params.details;
  const singleData = await fetchRecipeDetails(id);

  return <RecipeDetailsItem singleData={singleData} />;
}
