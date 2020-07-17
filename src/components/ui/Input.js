import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.div`
  width: 300px;
  height: 50px;
  position: relative;
  margin-bottom:15px;
  overflow: hidden;

  & input {
    width: 100%;
    height: 100%;
    padding: 20px 0 0 3px;
    border: none;
    outline:none;
    font-size: 16px;
    color: #404246;
    /* background-color: #fff !important; */
    filter:none;
  }

  & input:focus + .lbl .content-name,
  input:not(:placeholder-shown) + .lbl .content-name {
    transform: translateY(-150%);
    color: #2a7dbde7;
    font-size: 14px;
  }
  & input:focus + .lbl::after,
  input:not(:placeholder-shown) + .lbl::after {
    transform: translateX(0%);
  }
  & label {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid black;
    pointer-events: none;

    

    & .content-name {
      position: absolute;
      left: 3px;
      bottom: 3px;
      color: #404246;
      transition: all 0.3s ease;
    }

  }
  & label::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      border-bottom: 4px solid #2a7dbde7;
      transform: translateX(-100%);
      transition: all 0.3s ease;
    }
`;

const Input = ({ type, name, text, onChange }) => {
  return (
    <InputStyled>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder=" "
        // autocomplete="off"
      ></input>
      <label htmlFor={name} className="lbl">
        <span className="content-name">{text}</span>
      </label>
    </InputStyled>
  );
};

export default Input;
