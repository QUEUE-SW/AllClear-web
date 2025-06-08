import React from "react";
import Filter from "@/components/enroll/Filter";

const FilterBar = ({ setFilter }) => {
  return (
    <div className="flex w-[814px] h-[70px] items-center justify-center px-4 gap-2 bg-white rounded-2xl shadow-md">
      <Filter kind="department" setFilter={setFilter} />
      <Filter kind="major" setFilter={setFilter} />
      <Filter kind="category" setFilter={setFilter} />
      <Filter kind="grade" setFilter={setFilter} />
      <Filter kind="code" setFilter={setFilter} />
    </div>
  );
};

export default FilterBar;
