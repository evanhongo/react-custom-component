import React, { useState, useMemo, useRef } from "react";
import styled from "styled-components";

const StyledOption = styled.div`
  background: white;
  opacity: 0.7;
  padding-left: 10px;
  font-size: 20px;
  font-family: "Microsoft JhengHei";
  font-weight: bold;
  line-height: 50px;
  cursor: pointer;
  &:hover {
    background: pink;
  }
`
const Option = ({ option, handleClickItem }) => (
  <StyledOption onClick={(e) => handleClickItem(option.key)}>
    {`${option.text}`}
  </StyledOption>
);

const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgb(242, 242, 242);
  height: 40px;
  border-radius: 10px;
  margin: 5px;
  padding: 0 0.5em;
  font-size: 20px;
  font-family: "Microsoft JhengHei";
  font-weight: bold;
  color: rgb(130, 130, 130);
  &:hover {
    color: black;
  }
`

const StyledCancelBtn = styled.div`
  font-size: 25px;
  margin-left: 5px;
  color: rgb(130, 130, 130);
  cursor: pointer;
  &:hover {
    color: black;
  }
`
const Tag = ({ option, handleClickItem }) => (
  <StyledTag >
    {`${option.text}`}
    <StyledCancelBtn onClick={(e) => handleClickItem(option.key)}>
      &times;
    </StyledCancelBtn>
  </StyledTag>
);

const StyledOptionGroup = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
  overflow-y: auto;
  z-index: 100;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgb(242, 242, 242);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: pink;
  }
`
const StyledInput = styled.input`
  background-color: transparent;
  color: rgb(79, 79, 79);
  border: none;
  outline: none;
  ::placeholder {
    color: rgba(130, 130, 130, 0.5);
  }
`

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
    () => (multiple ? !selected.length && !value?.length : !selected && !value),
    [value, multiple, selected]
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
        display: "inline-block",
        position: "relative",
        width,
        ...style,
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
        <StyledInput
          ref={inputRef}
          type="text"
          placeholder={shouldShowPlaceholder ? placeholder : ""}
          style={{
            fontSize: "25px",
            minWidth: `${placeholder?.length * 25}px`,
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
        <StyledOptionGroup
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
        </StyledOptionGroup>
      )}
    </div>
  );
}
