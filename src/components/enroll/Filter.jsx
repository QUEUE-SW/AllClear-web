import React from "react";
import { useState } from "react";

const Filter = ({ filter }) => {
  const [view, setView] = useState(false);

  const items = [
    {
      id: 1,
      item: "전체",
    },
    {
      id: 2,
      item: "교양",
    },
    {
      id: 3,
      item: "전공",
    },
  ];
  return (
    <li
      onClick={() => {
        setView(!view);
      }}
      className="w-[225px] border border-black"
    >
      <div>{filter}</div>
      {view ? "⌃" : "⌄"}
      {/* selectList */}
      <ul>
        {view &&
          items.map((e) => (
            <li key={e.id} className="border-t">
              {e.item}
            </li>
          ))}
      </ul>
    </li>
  );
};

export default Filter;
