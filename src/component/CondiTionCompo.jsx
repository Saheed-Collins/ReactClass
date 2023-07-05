import React, { useState } from "react";

const CondiTionCompo = () => {
  const [show, setshow] = useState(false);

  function handleClick() {
    setshow(!show);
  }

  return (
    <div>
      <h1>helllo</h1>

      {show ? <p>this is a p tag</p> : null}

      <button
        style={{ backgroundColor: show ? "red" : "green" }}
        onClick={handleClick}
      >
        {show ? "unshow P tag" : "Show p tag"}
      </button>

      { show ?
       <div style={{ position: "absolute", right: "0px", top: "0px" }}>
        <div
          className="box"
          style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
        ></div>
      </div>
      : ''
      }
      <button onClick={handleClick}>Show Cart</button>
    </div>
  );
};

export default CondiTionCompo;
