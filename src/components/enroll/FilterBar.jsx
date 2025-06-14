import Filter from "@/components/enroll/Filter";
import {
  categoryOptions,
  gradeOptions,
  departmentOptions,
  majorOptions,
} from "@/constants/filterOptions";
const FilterBar = ({
  category,
  grade,
  department,
  major,
  setCategory,
  setGrade,
  setDepartment,
  setMajor,
  getFilteredMajorOptions,
  isMajorDisabled,
}) => {
  return (
    <div className="flex w-[814px] h-[70px] items-center justify-center px-4 gap-2 bg-white rounded-lg shadow-md">
      <Filter
        kind="department"
        value={department}
        setValue={setDepartment}
        options={departmentOptions}
      />
      <Filter
        kind="major"
        value={major}
        setValue={setMajor}
        options={getFilteredMajorOptions()}
        disabled={isMajorDisabled}
      />
      <Filter
        kind="category"
        value={category}
        setValue={setCategory}
        options={categoryOptions}
      />
      <Filter
        kind="grade"
        value={grade}
        setValue={setGrade}
        options={gradeOptions}
      />
    </div>
  );
};

export default FilterBar;
