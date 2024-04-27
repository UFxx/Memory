import React, { useState, useContext } from "react";
import { Theme } from "../../../App";
import AttentionIcon from "../../../assets/attention-icon.png";

function Attention() {
  const [isOpen, setOpen] = useState(false);

  const theme = useContext(Theme);

  function changeOpen() {
    setOpen(!isOpen);
  }

  return (
    <>
      <div className="attention">
        <img src={AttentionIcon} alt="attention icon" onClick={changeOpen} />
        <div
          className={`attention-content__${
            isOpen ? "visible" : "hidden"
          } attention-content__${theme ? "dark" : "light"}`}
        >
          <h2>Внимание!</h2>
          <p>
            Этот график принимает только числовые значения (в том числе и в
            названии столбцов)
          </p>
        </div>
      </div>
    </>
  );
}

export default Attention;
