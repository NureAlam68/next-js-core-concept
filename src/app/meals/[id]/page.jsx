const fetchSingleMeal = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        // setMeals(data?.meals || []);
        return data.meals;
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).id
 
  // fetch data
  const [singleMeal] = await fetchSingleMeal(id);
 
  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions
  }
}

const SingleMeals = async ({ params }) => {
    const meals = await fetchSingleMeal(params.id);

    if (!meals || meals.length === 0) {
        return <div className="text-center text-red-500 text-lg mt-10">❌ Meal not found!</div>;
    }

    const meal = meals[0];

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white dark:bg-gray-900 shadow-xl rounded-lg">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
                {meal.strMeal}
            </h1>

            {/* Image Section */}
            <div className="flex justify-center">
                <img
                    src={meal.strMealThumb} 
                    alt={meal.strMeal} 
                    width={600} 
                    height={400} 
                    className="rounded-lg shadow-md"
                />
            </div>

            {/* Category & Origin */}
            <div className="flex justify-between items-center mt-5 text-lg font-medium text-gray-700 dark:text-gray-300">
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 px-4 py-1 rounded-lg">
                    {meal.strCategory}
                </span>
                <span className="bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 px-4 py-1 rounded-lg">
                    {meal.strArea}
                </span>
            </div>

            {/* Ingredients */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ingredients</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
                    {Array.from({ length: 20 }, (_, i) => i + 1)
                        .map(i => {
                            const ingredient = meal[`strIngredient${i}`];
                            const measure = meal[`strMeasure${i}`];
                            return ingredient && ingredient.trim() ? (
                                <li key={i} className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md shadow-sm text-center">
                                    {measure} {ingredient}
                                </li>
                            ) : null;
                        })}
                </ul>
            </div>

            {/* Instructions */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Instructions</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{meal.strInstructions}</p>
            </div>

            {/* YouTube Video Link */}
            {meal.strYoutube && (
                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Watch on YouTube</h2>
                    <a 
                        href={meal.strYoutube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
                    >
                        Click Here to Watch 🍽️
                    </a>
                </div>
            )}
        </div>
    );
};

export default SingleMeals;
