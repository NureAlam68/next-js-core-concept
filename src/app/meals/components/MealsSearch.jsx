"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealsSearch = () => {
//   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = {search};
    const urlQueryParams = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParams}`;
    router.push(url)
  }, [search]);

  return (
    <div className="text-center mt-8">
      <input
        className="border border-green-800 rounded-lg p-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search meals"
      />
    </div>
  );
};

export default MealsSearch;
