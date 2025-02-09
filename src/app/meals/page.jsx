import MealsSearch from "./components/MealsSearch";

const Meals = async ({searchParams}) => {
    const query = await searchParams

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            const data = await res.json();
            // setMeals(data?.meals || []);
            return data.meals;
        } catch {
            return [];
        }
    }

    const meals = await fetchMeals();

  return (
    <div>
        <h1 className='text-center mt-10 font-bold text-3xl'>All meals here</h1>
        <MealsSearch></MealsSearch>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-10 lg:px-[150px] lg:mt-20'>
        {
            meals?.map(meal => <div className='border p-4' key={meal.idMeal}>
                <img src={meal.strMealThumb} alt="" />
                <p className='mt-5 font-bold'>{meal?.strMeal}</p>
                <p className='mt-4'>{meal?.strCategory}</p>
            </div>)
        }
      </div>
    </div>
  )
}

export default Meals
