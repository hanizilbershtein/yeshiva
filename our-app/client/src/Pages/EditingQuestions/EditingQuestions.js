import React, { useState } from "react";
import Question from "../../components/Question/Question";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const EditingQuestions = ({ categories }) => {
  const [saveSelect, setSaveSelect] = useState([]);
  const [isSave,setIsSave] = useState(false)

  console.log(saveSelect);
  const navigate = useNavigate();

   const clickTest =() =>{
   navigate("../מבחנים/עריכת מבחן");

  }

  useEffect(() => {
    try {
      async function fatch() {
        const { data } = await axios.post("http://localhost:5000/questions/save", {
          saveSelect
        });

        
        }
      fatch();
      setIsSave(false);
    } catch (e) {}
  }, [isSave]);


  // const clickEvent = async () => {
  //     const appsApiUrl = `/questions/save`;
  //     const { data } = await axios.post(appsApiUrl, { saveSelect});
  // };@cluster0.vj1nb1w.mongodb.net/?retryWrites=true&w=majority

  return (
    <div>
       {/* <button onClick={clickTest}>עריכת מבחן</button>  */}

      <input
        type={"text"}
        placeholder="הקלד שאלה"
      />
      <p>סווג את השאלה</p>
      {categories.map((el) => (
        <Question
          label={el.label}
          select={el.select}
        //    onChange={(e) => {
        //      setSaveSelect([...saveSelect, e.value]);
        //   }
        // }
          //    saveSelect={el.saveSelect}
          //    setSaveSelect={setSaveSelect}
        />
      ))}
      <button
        onClick={(e) => {
          setSaveSelect([{
            שאלה:e.target.parentNode.children[0].value,
            מסכת:e.target.parentNode.children[2].children[2].children[2].children[0].children[0].innerText,
            סוג:e.target.parentNode.children[3].children[2].children[2].children[0].children[0].innerText,
           פרק: e.target.parentNode.children[4].children[2].children[2].children[0].children[0].innerText,
           דף: e.target.parentNode.children[5].children[2].children[2].children[0].children[0].innerText,
           הגדרה: e.target.parentNode.children[6].children[2].children[2].children[0].children[0].innerText,
          }]);
          setIsSave(true)
        }}
      >
        שמור
      </button>
    </div>
  );
};

export default EditingQuestions;
