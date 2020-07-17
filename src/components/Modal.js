import React, {useState } from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 300;

  & .background {
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
  }


`;

const Button = styled.button`
  opacity: ${(props) => props.test === "Dyżur" ? 1 : 0.5};
`;
const Button2 = styled.button`
  opacity: ${(props) => props.test === "Wolne" ? 1 : 0.5};
`;


const ModalForm = styled.div`
  width: 300px;
  height: 200px;
  z-index: 500;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid #666;
  box-shadow: -7px 9px 33px 0px rgba(0, 0, 0, 0.6);
  /* padding:5px; */
  .btn {
    padding: 5px 12px;
    border:0;
    border-radius:5px;
    background-color: lightgreen;
    cursor:pointer;

  }

  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #666;
    height: 2rem;
    padding-left: 10px;
    font-size: 14px;

    .close-modal {
      height: 2rem;
      width: 2rem;
      position: relative;
      opacity: 0.5;
      cursor: pointer;
      transition: 0.2s;

      &::before,
      ::after {
        content: ' ';
        position: absolute;
        top: 45%;
        width: 1.5rem;
        height: 0.15rem;
        background-color: #333;
        border-radius: 5px;
      }

      &::after {
        transform: rotate(45deg);
      }
      &::before {
        transform: rotate(-45deg);
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  & .body {
    display: flex;
    height: 40%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & .options {
      display: flex;
      justify-content: space-around;
      width: 90%;
    }
  }

  /* & button {
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    border: none;
    background-color: #999;
    opacity:0.5;
    transition:0.2s;
    &.chosen{
      opacity:1;
    }
  } */

  .save-btn {
    width: 100%;
    height: 3rem;
    background-color: lightgreen;
    opacity: 1;
    cursor:pointer;
    .spn{
      transition: all 0.2s;

    }
    
    :hover > .spn {
      transform: scale(1.2)
    }
  }
`;

const Modal = ({ onClose, onSave, date, choseType, chosen }) => {

  // const [requestedType, setrequestedType] = useState(chosen.requestType);

  console.log(chosen.requestType)

  return (
    <ModalDiv>
      <ModalForm>
        <div className="header">
          <div>Dodaj prośbe</div>
          <div className="close-modal" onClick={onClose}></div>
        </div>
        <div className="body">
          <div className="chosen"> Prośba na dzień: {date}</div>
          <p>{chosen.requestType}</p>
          <div className="options">
            <Button onClick={choseType} data-type="Dyżur" test={chosen.requestType} className="btn">
              CHCĘ DYŻUR
            </Button>
            <Button2 className="btn" onClick={choseType} data-type="Wolne" test={chosen.requestType}>
              CHCĘ WOLNE
            </Button2> 
          </div>
        </div>
        <div className="fotter">
          <button className="save-btn" onClick={onSave}>
            <div className="spn">ZAPISZ</div>
          </button>
        </div>
      </ModalForm>
      <div className="background" onMouseDown={onClose}></div>
    </ModalDiv>
  );
};

export default Modal;
