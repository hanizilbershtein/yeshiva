import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";

const ConductingTest = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button>מבחן ייחודי</button>
      <button>יצירת כל המבחנים</button>

      <button>שיחזור מבחן</button>
      <button
        onClick={() => {
          navigate("../מבחנים/עריכת מבחן/עריכה חדשה");
        }}
      >
        עריכה חדשה
      </button>
    </div>
  );
};

export default ConductingTest;
