const Filter = ({ kind, value, setValue, options = [], disabled = false }) => {
  return (
    <div className="flex flex-col flex-1">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-2"
        disabled={disabled} // 💡 비활성화 처리
      >
        <option value="" disabled hidden>
          {(() => {
            switch (kind) {
              case "department":
                return "학부│학과";
              case "major":
                return "전공";
              case "category":
                return "이수구분";
              case "grade":
                return "학년";
              default:
                return "선택";
            }
          })()}
        </option>
        {options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
