import React from 'react'
import Select from "react-select";
import Question from '../../components/Question/Question';
import {  useNavigate } from 'react-router-dom'



const NewEdit = ({categories}) => {

    const navigate = useNavigate();

  return (
    <div>
        <h2>:בחירת מבחן</h2>
      {categories.map((el) => (
        <Question
          label={el.label}
          select={el.select}
         
        />
      ))}
<button onClick={()=>{navigate("../מבחנים/עריכת מבחן/עריכה חדשה/הדפסת המבחן")}}>קבלת השאלות עפ"י בחירתכם:</button>

    </div>
  )
}

export default NewEdit