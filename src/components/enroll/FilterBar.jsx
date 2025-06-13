import React from "react";
import Filter from "@/components/enroll/Filter";
import {
  categoryOptions,
  gradeOptions,
  departmentOptions,
  majorOptions,
} from "@/constants/filterOptions";

const FilterBar = ({ filters, onChange }) => {
  const updateFilter = (key, value) => {
    onChange(key, value);
  };

  return (
    <div className="flex w-[814px] h-[70px] items-center justify-center px-4 gap-2 bg-white rounded-lg shadow-md">
      <Filter
        kind="category"
        value={filters.category}
        setValue={(v) => updateFilter("category", v)}
        options={categoryOptions}
      />
      <Filter
        kind="grade"
        value={filters.grade}
        setValue={(v) => updateFilter("grade", v)}
        options={gradeOptions}
      />
      <Filter
        kind="department"
        value={filters.department}
        setValue={(v) => updateFilter("department", v)}
        options={departmentOptions}
      />
      <Filter
        kind="major"
        value={filters.major}
        setValue={(v) => updateFilter("major", v)}
        options={majorOptions}
      />
    </div>
  );
};

export default FilterBar;
