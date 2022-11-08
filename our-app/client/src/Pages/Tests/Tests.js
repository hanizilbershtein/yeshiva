// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tests = () => {
  // const [click, setClick] = useState(false);
  // console.log(click);
  const navigate = useNavigate();

  const clickEvent = () => {
    navigate("../מבחנים/עריכת שאלות");
  };

  const clickTest =() =>{
    navigate("../מבחנים/עריכת מבחן");
 
   }
  return (
    <div>
      <button onClick={clickTest}>עריכת מבחן</button>

      <button onClick={clickEvent}>עריכת שאלות</button>
    </div>
  );
};

export default Tests;
