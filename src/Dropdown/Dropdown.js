import React, { useState, useMemo, useRef } from "react";
import "../../css/Dropdown.scss";

const Option = ({ option, handleClickItem }) => (
  <div className="option" onClick={(e) => handleClickItem(option.key)}>
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

export default function Dropdown({
  options,
  value,
  onChange,
  style,
  multiple,
  placeholder,
}) {
  const width = style?.width ?? "400px";
  const inputRef = useRef();
  const [selected, setSelected] = useState(multiple ? [] : "");
  const [keyword, setKeyword] = useState("");
  const [flag, setFlag] = useState(false);
  const shouldShowPlaceholder = useMemo(
    () => (multiple ? !selected.length : !selected),
    [multiple, selected]
  );
  const isShow = useMemo(() => keyword || flag, [keyword, flag]);
  const filteredOptions = useMemo(
    () =>
      options.filter(
        (option) =>
          option.text.indexOf(keyword) >= 0 &&
          (multiple ? !selected.some((key) => key === option.key) : true)
      ),
    [keyword, options, selected]
  );

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div
      style={{
        ...style,
        display: "inline-block",
        position: "relative",
        width,
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
          padding: "0 0 0 10px",
          background: "white",
          userSelect: "none",
        }}
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        {multiple
          ? value.map?.((key) => (
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
            ))
          : !keyword.length && (
              <div style={{ fontSize: "25px" }}>
                {options.find((option) => option.key === value)?.text}
              </div>
            )}
        <input
          ref={inputRef}
          type="text"
          placeholder={shouldShowPlaceholder && placeholder}
          style={{
            fontSize: "25px",
            minWidth: `${placeholder.length * 25}px`,
            width: `${keyword.length * 25}px`,
          }}
          value={keyword}
          onChange={handleKeywordChange}
        />
        <div
          style={{
            fontSize: "40px",
            marginLeft: "auto",
            cursor: "pointer",
          }}
          onClick={() => setFlag((flag) => !flag)}
        >
          &#9662;
        </div>
      </div>
      {isShow && (
        <div
          className="optionGroup"
          style={{
            height: filteredOptions.length > 5 ? "246px" : "",
          }}
        >
          {filteredOptions.map((option) => (
            <Option
              key={option.key}
              option={option}
              handleClickItem={(key) => {
                setKeyword("");
                setFlag(false);
                if (multiple) {
                  inputRef.current.focus();
                  setSelected((selected) => [...selected, key]);
                  return onChange([...selected, key]);
                } else {
                  setSelected(key);
                  return onChange(key);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
