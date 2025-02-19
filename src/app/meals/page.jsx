import Link from "next/link";
import MealsSearch from "./components/MealsSearch";
import Image from "next/image";

export const metadata = {
  title: 'All meals',
  description: "All meals here",
};

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
                <Image src={meal?.strMealThumb} width={641} height={641} alt="" />
                <p className='mt-5 font-bold'>{meal?.strMeal}</p>
                <p className='mt-4 mb-2'>{meal?.strCategory}</p>
                <Link className="px-2 py-1 bg-green-600 text-white rounded-sm" href={`/meals/${meal.idMeal}`}>Details</Link>
            </div>)
        }
      </div>
    </div>
  )
}

export default Meals
