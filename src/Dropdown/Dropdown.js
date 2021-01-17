import React, { useState, useMemo } from "react";
import "../../css/Dropdown.scss";

const Option = ({ option, handleClickItem, width }) => (
  <div
    className="option"
    style={{ width }}
    onClick={(e) => handleClickItem(option.key)}
  >
    {`${option.text}`}
  </div>
);

const Tag = ({ option, handleClickItem }) => (
  <div className="tag">
    {`${option.text}`}
    <div className="cancelBtn" onClick={(e) => handleClickItem(option.key)}>
      &times;
    </div>
  </div>
);

export default function Dropdown({ options, value, onChange, style }) {
  const width = style?.width ?? 400;
  const [selected, setSelected] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [flag, setFlag] = useState(false);
  const isShow = useMemo(() => keyword || flag, [keyword, flag]);
  const filteredOptions = useMemo(
    () =>
      options.filter(
        (option) =>
          option.text.indexOf(keyword) >= 0 &&
          !selected.some((key) => key === option.key)
      ),
    [keyword, options, selected]
  );

  const handleKeywordChange = (e) => {
    const str = e.target.value;
    if (str.length <= 10) setKeyword(str);
  };

  return (
    <div
      style={{
        ...style,
        display: "inline-block",
        width: `${width + 10}px`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          minHeight: "50px",
          borderRadius: "4px",
          border: "1px solid grey",
          padding: "0 30px 0 10px",
          userSelect: "none",
        }}
        onClick={() => {
          document.querySelector("input").focus();
        }}
      >
        {value.map((key) => (
          <Tag
            key={key}
            option={options.find((option) => option.key === key)}
            handleClickItem={(key) => {
              setSelected((selected) =>
                selected.filter((selectedKey) => selectedKey !== key)
              );
              setKeyword("");
              return onChange(
                selected.filter((selectedKey) => selectedKey !== key)
              );
            }}
          />
        ))}
        <input
          type="text"
          style={{
            fontSize: "25px",
            minWidth: "18px",
            width: `${keyword.length * 18}px`,
          }}
          value={keyword}
          onChange={handleKeywordChange}
          autoFocus
        />
        <span
          style={{
            position: "absolute",
            fontSize: "40px",
            left: width - 20,
            cursor: "pointer",
          }}
          onClick={() => setFlag((flag) => !flag)}
        >
          &#9662;
        </span>
      </div>
      <div
        className="optionGroup"
        style={{ height: filteredOptions.length > 5 ? "246px" : "" }}
      >
        {isShow &&
          filteredOptions.map((option) => (
            <Option
              key={option.key}
              option={option}
              handleClickItem={(value) => {
                document.querySelector("input").focus();
                setSelected((selected) => [...selected, value]);
                setKeyword("");
                setFlag(false);
                return onChange([...selected, value]);
              }}
              width={width}
            />
          ))}
      </div>
    </div>
  );
}
